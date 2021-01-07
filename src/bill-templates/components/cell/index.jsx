import React, { useEffect, useState, useRef } from 'react';
import { ResizableBox } from 'react-resizable';
import { useDrag, useDrop } from 'react-dnd';
import { ItemType } from '../../common/constant';
import IconCellDrag from 'assets/svgs/cell_drag.svg';
import 'react-resizable/css/styles.css';
import './style.less';

export default function Cell({
  children,
  width = 100,
  parentWidth,
  data = {},
  resizeable = false,
  onResize,
  axis = 'none',
  canDrag = false,
  blockIndex,
  rowIndex,
  rowId,
  cellIndex,
  brother,
  moveCell,
}) {
  const ref = useRef();
  // 可调节宽度
  const [resizeWidth, setWidth] = useState(null);
  // cell活动状态
  const [resizeActive, setActive] = useState(false);
  // 可放置
  const [dropProps = {}, drop] = useDrop({
    accept: ItemType.row,
    canDrop: item => {
      return item.blockIndex === blockIndex && item.is_text && item.isCell;
    },
    collect: monitor => {
      const { cellId: dragCellId, index: dragCellIndex, rowId: dragRowId, blockIndex: dragBlockIndex,rowIndex: dragRowIndex, isCell } = monitor.getItem() || {};
      if (isCell && dragBlockIndex === blockIndex) { // 拖动的为同行cell时
        console.log("cell====dragCellIndex,cellIndex", dragCellIndex, cellIndex)
        if (dragCellIndex === cellIndex) {
          return {};
        }
        return {
            isOver: monitor.isOver(),
            dropClassName:
            dragCellIndex < cellIndex
                ? ' bill-templates-cell-move-preview-right'
                : ' bill-templates-cell-move-preview-left',
          };
        }
      },
      drop: item => {
        const { index: dragCellIndex, blockIndex: dragBlockIndex, rowIndex: dragRowIndex } = item;
        console.log('183 cell li', item)
        moveCell(dragCellIndex, dragRowIndex, dragBlockIndex, cellIndex, rowIndex, blockIndex);
    },
  });
  // 可拖拽
  const [, drag, preview] = useDrag({
    item: { cellId: data.id, type: ItemType.row, blockIndex, rowIndex, rowId, index: cellIndex, isCell: true, is_text: data.type === 1 },
    canDrag,
  });
  drop(ref);
  preview(ref);
  // 宽度变化时
  useEffect(() => {
    const tempWidth = (parentWidth * width) / 100;
    setWidth(tempWidth || 60);
  }, [width, parentWidth]);

  // 宽度调整开始
  const onResizeStart = () => {
    setActive(true);
  };

  // 宽度调整结束
  const onResizeStop = () => {
    setActive(false);
    onResize && onResize();
  };

  return resizeable ? (
    <ResizableBox
      width={resizeWidth}
      axis={axis}
      onResizeStart={onResizeStart}
      onResizeStop={onResizeStop}
      resizeHandles={axis === 'x' ? ['e'] : []}
      minConstraints={[60]}
    >
      <div
        className={`bill-templates-cell bill-templates-cell-resize
          ${resizeActive ? ' bill-templates-cell-resize-active' : ''}
          ${dropProps.isOver ? dropProps.dropClassName : ''}
        `}
        ref={ref}
      >
        {children}
        {canDrag && data.type === 1 && <div ref={drag} className="bill-templates-cell-drag-btn" >
          <IconCellDrag width="100%" height={8} style={{ verticalAlign: 'text-top' }} /></div>}
      </div>
    </ResizableBox>
  ) : (
    <div
      ref={ref}
      className="bill-templates-cell"
      style={{ width: `${width}%` }}
    >
      {children}
    </div>
  );
}
