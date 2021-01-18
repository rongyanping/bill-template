import React, { useRef, useEffect, useState } from 'react';
import { cloneDeep } from 'lodash';
import { getPlaceholderValue } from '../../common/utils';
import Cell from '../cell';
import * as CellComponents from '../index';
import { queryImgUrl } from '../../service';
import './style.less';

export default function Row({
  blockActive,
  data = {},
  index,
  blockIndex,
  isEdit = true,
  onCellResize,
  renderDatas = {}, // 模板详情数据
  moveCell,
  pageSize,
  className = "",
  onUpload,
  onCancelUpload,
  onDoubleClick,
  onCellDragBtnClick,
  activeCellIndex,
}) {
  const ref = useRef();
  const ref_cell_box_flex = useRef();

  // children
  const [childrenNode, setChildren] = useState(null);
  // row宽度
  const [rowWidth, setRowWidth] = useState(318);
  // cell宽度占比
  const [cellWidth, setCellWidth] = useState([]);



  // 调整cell宽度
  const handleResize = () => {
    const cellWidthTemp = [];
    ref_cell_box_flex.current.childNodes.forEach(i =>
      cellWidthTemp.push(
        Math.floor(((i.clientWidth || i.offsetWidth) / rowWidth) * 100)
      )
    );
    setCellWidth(cellWidthTemp);
    onCellResize && onCellResize(cellWidthTemp, blockIndex, index);
  };
  // 获取需渲染children
  const getChildren = rowWidthNew => {
    const result =
      data.cells && data.cells.length
        ? data.cells.map((item, number) => {
          const { type: newType, id, param, style } = item;
          const type = Number(newType);
          // console.log('type-==========' + item.data, type, item);
          let CellItem;
          // 组件类型
          if (type === 2 || type === 3 || type === 4) {
            CellItem = CellComponents.UploadCell;
          } else {
            CellItem = CellComponents.TextCell;
          }
          let demoObjectTemp = cloneDeep(renderDatas.demoObject);
          let allComponentList = []; // 所有的组件数据
          let allObjectList = renderDatas.objectList || []; // 所有的图片、二维码数据
          renderDatas.modulesList &&
            renderDatas.modulesList.length &&
            renderDatas.modulesList.forEach(listEl => {
              allComponentList.push(...listEl.componentList);
            });
          const regStr = /([{}])/g;
          // data占位符处理 图片和二维码的占位符不处理
          let newData = item.data;
          newData =
            (type === 2 || type === 3 || type === 4)
              ? item.data
              : getPlaceholderValue(newData, demoObjectTemp);
          // title占位符处理
          let newTitle = item.title;
          newTitle = getPlaceholderValue(newTitle, demoObjectTemp);
          // param占位符处理
          let newParam = item.param;
          newParam = getPlaceholderValue(newParam, demoObjectTemp);
          // 文字类型: 需要拼接上label
          if (type === 1) {
            newData = (item.name || newTitle) + newData;
          }

          // 从componentsData中获取对应cell的相关数据：buttonLabel, readOnly
          let buttonLabel = '';
          let readOnly = 'false';
          if (type === 2 || type === 4) {
            allComponentList.forEach(el => {
              if (el.id == id && el.componentProperty) {
                const newComponentProperty = JSON.parse(el.componentProperty);
                // console.log('buttonlabel937===' + item.title, newComponentProperty);
                buttonLabel = newComponentProperty.buttonLabel
                  ? newComponentProperty.buttonLabel
                  : null;
                readOnly = newComponentProperty.readOnly || 'false';
              }
            });
          }
          // 图片、二维码 读取componentsData中objectList字段的内容; 上传logo的data占位符：'{shopLogo}'
          if (type === 2 || type === 3 || type === 4) {
            if (item.data === '{shopLogo}') {
              newData = item.data;
            } else {
              const dataTemp = item.data && item.data.replace(regStr, '');
              const paramTemp = item.param && item.param.replace(regStr, '');
              // newData = regStr.test(newData) ? '' : newData;
              // newParam = regStr.test(newParam) ? '' : newData;
              let flagData = false;
              let flagParam = false;
              allObjectList && allObjectList.forEach((el) => {
                if (el.placeholder === dataTemp) {
                  flagData = true;
                  newData = el.objectValue;
                }
                if (el.placeholder === item.param.replace(regStr, '')) {
                  newParam = el.customText;
                  flagParam = true;
                }
              });
              newData = flagData ? newData : renderDatas.demoObject[dataTemp];
              newParam = flagParam ? newParam : renderDatas.demoObject[paramTemp];
            }
          }
          // cell是否可见；目前默认只有0
          let newVisible = item.visible;
          if (newVisible && newVisible.replace(regStr, '')) {
            // 为0时的规则：data存在时可见
            if (item.visible.substring(item.visible.length - 1) === '0') {
              const temp = item.visible.substring(0, item.visible.length - 1);
              if (demoObjectTemp[temp.replace(regStr, '')] || ((type === 2 || type == 3 || type == 4) && !newData)) {
                newVisible = true;
              } else {
                newVisible = false;
              }
            }
          } else { // visible不存在 || 占位符不存在 默认展示
            newVisible = true;
          }
          // console.log('visible===='+item.visible, newVisible);
          // 调整宽度按钮
          const axis = number < data.cells.length ? 'x' : 'none';
          // 是否可拖拽
          const canDrag = isEdit && data.cells.length > 1 && type === 1;
          // console.log('temp===937' + item.title, newData, newVisible);
          return (
            <Cell
              key={`${data.row_id}-${item.id}-${number}`}
              parentWidth={rowWidthNew}
              resizeable={blockActive && type === 1 && data.cells.length > 1 && !!onCellResize}
              axis={axis}
              onResize={handleResize}
              width={cellWidth[number]}
              canDrag={canDrag}
              parentRef={ref}
              data={item}
              rowIndex={index}
              rowId={data.id}
              cellIndex={number}
              brother={data.cells.length}
              moveCell={moveCell}
              blockIndex={blockIndex}
              onCellDragBtnClick={onCellDragBtnClick}
              activeCellIndex={activeCellIndex}
            >
              {
                newVisible &&
                <CellItem
                  pageSize={pageSize}
                  type={type}
                  data={newData}
                  param={newParam}
                  style={style}
                  buttonLabel={buttonLabel}
                  readOnly={readOnly === 'false' ? false : true}
                  onUpload={onUpload}
                  onCancelUpload={onCancelUpload}
                  originData={item.data}
                />
              }
            </Cell>
          );
        })
        : null;
    setChildren(result);
  };

  // 获取cell宽度,注册拖动
  useEffect(() => {
    const tempCellWidth =
      data.cells && data.cells.length
        ? data.cells.map(item => item.percent || 100)
        : [];
    setCellWidth(tempCellWidth);
  }, [data]);

  // 渲染子节点
  useEffect(() => {
    const tempWidth = ref.current.clientWidth || ref.current.offsetWidth || 318;
    setRowWidth(tempWidth);
    getChildren(tempWidth);
  }, [data, blockActive, cellWidth]);

  // 列表内双击选中row
  const handleDobuleClick = () => {
    // 清空双击时选中的文字
    // window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    onDoubleClick && onDoubleClick();
  }

  return (
    <div
      ref={ref}
      key={data.row_id}
      className={`bill-templates-row ${blockActive ? 'bill-templates-row-active' : ''
        } ${className}`}
      onDoubleClick={handleDobuleClick}
    >
      <div className="bill-templates-cell-boxs-flex" ref={ref_cell_box_flex}>{childrenNode}</div>
    </div>
  );
}
