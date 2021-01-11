import React, { useRef, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import IconRowDrag from '../../../assets/svgs/row_drag.svg';
import Row from '../row';
import ListRow from '../lsit-row';
import { ItemType } from '../../common/constant';
import './style.less';

export default function Block({
  block = {},
  blockIndex,
  onClick,
  activeBlockKey,
  isEdit,
  onCellResize,
  moveBlock,
  moveCell,
  pageSize,
  renderDatas,
  activeBlock,
  onUpload,
  onCancelUpload,
}) {
  const ref = useRef();
  const moveBtn = useRef();
  const ref_out_top = useRef();
  const ref_out_bottom = useRef();
  const ref_cell_box = useRef();

  // 可放置（全部）
  const [{ dropClassName, isOver, dragToTop }, drop] = useDrop({
    accept: ItemType.row,
    collect: monitor => {
      const { blockIndex: dragIndex } = monitor.getItem() || {};
      if (dragIndex === blockIndex) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName: ' bill-templates-row-move-preview-inner',
        dragToTop: dragIndex > blockIndex,
      };
    },
  });
  // 可放置（内部）
  const [{ canDropInner }, dropIn] = useDrop({
    accept: ItemType.row,
    canDrop: item => {
      // 可放置内部条件：1.内部仅有一个纯文本cell
      const tempTextCell = block.rows[block.rowIndex].cells && block.rows[block.rowIndex].cells.filter(i => i.type === 1) || [];
      return !!(
        item.is_text &&
        tempTextCell.length === 1 &&
        (item.canTwoCell || item.isCell)
      );
    },
    collect: monitor => {
      const { blockIndex: dragIndex } = monitor.getItem() || {};
      if (dragIndex === blockIndex) {
        return {};
      }
      return {
        canDropInner: monitor.canDrop(),
      };
    },
    drop: item => {
      console.log('183内部', item);
      const { isCell, rowIndex, blockIndex: dragBlock, index: cellIndex } = item;
      if (isCell) {
        // 两列中的一列拖入
        moveCell(cellIndex, rowIndex, dragBlock, 1, block.rowIndex, blockIndex);
      } else {
        // 一行拖入
        moveCell(0, rowIndex, dragBlock, 1, block.rowIndex, blockIndex);
      }
    },
  });

  // 可放置（外部上）
  const [, dropOutTop] = useDrop({
    accept: ItemType.row,
    drop: item => {
      console.log('外部上', item);
      const { index, blockIndex: dragIndex, isCell, rowIndex } = item;
      if (isCell) {
        // 两列其中一列拖出来变行
        moveCell(index, dragIndex, rowIndex, 0, block.rowIndex, blockIndex, 'top');
      } else {
        moveBlock(dragIndex, blockIndex);
      }
    },
  });
  // 可放置（外部下）
  const [, dropOutBottom] = useDrop({
    accept: ItemType.row,
    drop: item => {
      console.log('外部下', item);
      const { index, blockIndex: dragIndex, isCell, rowIndex } = item;
      if (isCell) {
        // 两列其中一列拖出来变行
        moveCell(index, rowIndex, dragIndex, 0, block.rowIndex, blockIndex, 'bottom');
      } else {
        moveBlock(dragIndex, blockIndex);
      }
    },
  });

  // 可拖拽
  const [, drag, preview] = useDrag({
    item: {
      blockKey: block.key,
      type: ItemType.row,
      rowIndex: block.rowIndex,
      blockIndex,
      canTwoCell: !!(block.rows[block.rowIndex] && block.rows[block.rowIndex].cells && block.rows[block.rowIndex].cells.length === 1),
      is_text: block.rows[block.rowIndex] && block.rows[block.rowIndex].type === 1 && block.rows[block.rowIndex].cells &&
        block.rows[block.rowIndex].cells.length &&
        block.rows[block.rowIndex].cells[0].type === 1,
    },
    canDrag: isEdit,
    begin: () => { // 取消选中行
      onClick({});
    },
  });

  useEffect(() => {
    drop(ref);
    preview(ref);
    dropIn(ref_cell_box);
    dropOutTop(ref_out_top);
    dropOutBottom(ref_out_bottom);
    activeBlockKey === block.key && (block.rowIndex !== undefined && block.rows[block.rowIndex].cells && block.rows[block.rowIndex].cells.length > 1 || activeBlock.isListBlock)
      ? drag(moveBtn)
      : drag(ref);
  }, [block, activeBlockKey])

  // 处理block点击
  const handleBlockClick = () => {
    if (activeBlockKey !== block.key && isEdit) { // 仅非选中row切在编辑状态下可点击
      let isListBlock = false; // 是否为列表block
      block.rows.forEach(row => isListBlock = isListBlock || row.type === 2);
      onClick({ blockKey: block.key, blockIndex, rowIndex: block.rowIndex, isListBlock, connection: block.connection });
    }
  };
  return (
    <div
      className={`bill-templates-block ${activeBlockKey === block.key ? 'bill-templates-block-active' : ''
        }`}
      onClick={handleBlockClick}
      ref={ref}
    >
      <div
        ref={ref_out_top}
        className="drop-area-out"
        style={{ display: isOver && dragToTop ? 'block' : 'none' }}
      />
      <div
        ref={ref_cell_box}
        className={`bill-templates-cell-boxs${isOver && canDropInner ? dropClassName : ''
          }`}
      >
        {block.rows.map((item, index) => {
          let result = null;
          switch (item.type) {
            case 1:
              result = (
                <Row
                  blockActive={activeBlockKey === block.key}
                  data={{ ...item, row_id: `${blockIndex}-${index}` }}
                  index={index}
                  blockIndex={blockIndex}
                  isEdit={isEdit}
                  onCellResize={onCellResize}
                  onClick={onClick}
                  moveCell={moveCell}
                  pageSize={pageSize}
                  renderDatas={renderDatas}
                  onUpload={onUpload}
                  onCancelUpload={onCancelUpload}
                />
              );
              break;
            case 2:
              result = (
                <ListRow
                  blockActive={activeBlockKey === block.key}
                  data={{ ...item, row_id: `${blockIndex}-${index}` }}
                  index={index}
                  blockIndex={blockIndex}
                  isEdit={isEdit}
                  onCellResize={onCellResize}
                  onClick={onClick}
                  moveCell={moveCell}
                  pageSize={pageSize}
                  renderDatas={renderDatas.demoObject || {}}
                />
              );
            default:
          }
          return result;
        })}
      </div>
      <div
        ref={ref_out_bottom}
        className="drop-area-out"
        style={{ display: isOver && !dragToTop ? 'block' : 'none' }}
      />
      <div
        ref={moveBtn}
        className="bill-templates-row-move-btn"
        style={{
          cursor:
            activeBlockKey === block.key && block.rows[block.rowIndex] && (block.rows[block.rowIndex].cells && block.rows[block.rowIndex].cells.length > 1 || activeBlock.isListBlock)
              ? 'move'
              : 'unset',
        }}
      >
        {activeBlockKey === block.key && (block.rows[block.rowIndex] && block.rows[block.rowIndex].cells && block.rows[block.rowIndex].cells.length > 1 || activeBlock.isListBlock) ? (
          <IconRowDrag />
        ) : null}
      </div>
    </div>);
}