import React, { useState, useEffect } from 'react';
import Row from '../row';
import { getPlaceholderKeyStr } from '../../common/utils';
import './style.less';

export default function List({
  data = {},
  renderDatas = {}, // dishTemplate: 	菜品模板数据的json
  index,
  blockIndex,
  isEdit,
  onCellResize,
  onDoubleClick,
  moveCell,
  pageSize,
  blockActive,
}) {
  // 子节点
  const [childNodes, setChildNodes] = useState(null);
  // 递归渲染列表结构
  function getChildNodes(row, mock) {
    function recursionChild(item, mockObj) {
      // console.log('childRows=======' + item.data, item);
      if (item.type === 2 && item.childRows && item.childRows.length) {
        const tempKey = getPlaceholderKeyStr(item.data);
        return (mockObj[tempKey] && mockObj[tempKey].length ? mockObj[tempKey].map(mock => <div className="bill-template-list-row">{item.childRows.map(child => recursionChild(child, mock))}</div>) : null)
      }
      if (item.type === 1 && item.cells && item.cells.length) {
        return (
          <Row
            blockActive={false}
            data={{ ...item, row_id: `${blockIndex}-${index}` }}
            index={0}
            blockIndex={blockIndex}
            isEdit={isEdit}
            onCellResize={onCellResize}
            onDoubleClick={onDoubleClick}
            moveCell={moveCell}
            pageSize={pageSize}
            renderDatas={{ demoObject: mockObj }}
            className=""
          />
        )
      }
    }
    return recursionChild(row, mock);
  }

  // 获取多列的宽度占比

  // 设置整个结构内的cell的宽度，一列的为100%，多列的按调整后的比例赋值

  useEffect(() => {
    const list = getChildNodes(data, renderDatas);
    setChildNodes(list);
  }, [data])
  return (
    <div className="bill-template-list">
      {childNodes}
    </div>);
}
