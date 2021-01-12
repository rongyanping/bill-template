import React, { useRef, useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ResizableBox } from 'react-resizable';
import { Icon } from 'antd';
// import IconRowDrag from '../../../assets/svgs/row_drag.svg';
// import IconCellDrag from '../../../assets/svgs/cell_drag.svg';
import Row from '../row';
import ListRow from '../lsit-row';
import { ItemType } from '../../common/constant';
import { getListCells } from '../../common/utils';
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
  console.log("🚀 ~ file: index.jsx ~ line 24 ~ activeBlock", block, activeBlock)
  const ref = useRef();
  const moveBtn = useRef();
  const ref_out_top = useRef();
  const ref_out_bottom = useRef();
  const ref_cell_box = useRef();
  const ref_cell_box_flex = useRef();
  const [listCells, setListCells] = useState([]);

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
      const tempTextCell = block.rows[block.rowIndex] && block.rows[block.rowIndex].cells && block.rows[block.rowIndex].cells.filter(i => i.type === 1) || [];
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

  // 无表头列表在选中时判断当前有几列
  const getCellsLength = list => {
    const listCellTemp = getListCells(list);
    setListCells(listCellTemp);
  }

  useEffect(() => {
    drop(ref);
    preview(ref);
    dropIn(ref_cell_box);
    dropOutTop(ref_out_top);
    dropOutBottom(ref_out_bottom);
    activeBlockKey === block.key && activeBlockKey === block.key && (block.rows[block.rowIndex] && (block.rows[block.rowIndex].cells && block.rows[block.rowIndex].cells.length > 1) || activeBlock.isListBlock)
      ? drag(moveBtn)
      : drag(ref);
    if (activeBlockKey === block.key && activeBlock.isListBlock && activeBlock.hasHeader === false) { // 选中当前行&&当前行时无表头列表时计算
      getCellsLength(block.rows);
    }
  }, [block, activeBlockKey])

  // 处理block点击
  const handleBlockClick = () => {
    if (activeBlockKey !== block.key && isEdit) { // 仅非选中row切在编辑状态下可点击
      let isListBlock = false; // 是否为列表block
      block.rows.forEach(row => isListBlock = isListBlock || row.type === 2);
      onClick({ blockKey: block.key, blockIndex, rowIndex: block.rowIndex, isListBlock, connection: block.connection, hasHeader: block.hasHeader });
    }
  };

  // 处理列表行双击（仅商品list可双击）
  const handleDoubleClick = () => {
    console.log('双击666', listCells);
  }

  // 列表调整大小开始
  const handleResizeStart = (e, data) => {
    console.log("🚀 ~ file: index.jsx ~ line 168 ~ handleResizeStart ~ e, data", e, data)

  }
  // 列表调整大小结束
  const handleResizeStop = () => {
    const cellWidthTemp = [];
    const rowWidth = ref.current.clientWidth || ref.current.offsetWidth || 318;
    ref_cell_box_flex.current.childNodes.forEach((i, num) =>
      cellWidthTemp.push(
        {
          percent: Math.floor(((i.clientWidth || i.offsetWidth) / rowWidth) * 100),
          cellAlias: listCells[num].cellAlias,
        }
      )
    );
    onCellResize && onCellResize(cellWidthTemp, blockIndex, 0, true);
  }

  const handleResize = (e, data) => {

  }

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
        { // 列表的列拖拽与宽度调整
          activeBlockKey === block.key && activeBlock.isListBlock &&
          <div className="bill-templates-no-header-list-drag-container" ref={ref_cell_box_flex}>
            {listCells.map((item, cellIndex) => (
              <ResizableBox
                key={item.cellAlias}
                width={Number(item.percent) * (ref.current.clientWidth || ref.current.offsetWidth) / 100}
                axis="x"
                onResizeStart={handleResizeStart}
                onResizeStop={handleResizeStop}
                onResize={handleResize}
                resizeHandles={cellIndex < listCells.length - 1 ? ['e'] : []}
                minConstraints={[60]}
              >
                <div className={`bill-templates-no-header-list-drag-item ${cellIndex < listCells.length - 1 ? 'bill-templates-block-border-right-1-solid' : ''}`}>
                  <div ref={drag} className="bill-templates-no-header-cell-drag-btn" >
                    {/* <IconCellDrag width="100%" height={8} style={{ verticalAlign: 'text-top' }} /> */}
                    <Icon type="drag" style={{ color: 'red' }} />
                  </div>
                </div>
              </ResizableBox>
            ))}
          </div>
        }
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
                  onCellResize={activeBlock.hasHeader ? false : onCellResize} // 表头不支持宽度调整
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
                  onDoubleClick={handleDoubleClick}
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
            activeBlockKey === block.key && (block.rows[block.rowIndex] && (block.rows[block.rowIndex].cells && block.rows[block.rowIndex].cells.length > 1) || activeBlock.isListBlock)
              ? 'move'
              : 'unset',
        }}
      >
        {activeBlockKey === block.key && (block.rows[block.rowIndex] && (block.rows[block.rowIndex].cells && block.rows[block.rowIndex].cells.length > 1) || activeBlock.isListBlock) ? (
          // <IconRowDrag />
          <span><Icon type="drag" /></span>
        ) : null}
      </div>
    </div>);
}