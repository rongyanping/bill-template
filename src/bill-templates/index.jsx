import React, { useRef, useState, useEffect } from 'react';
import { Affix, Button, Switch, Input, message, Icon } from 'antd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, createDndContext } from 'react-dnd';
import { findIndex, deepClone } from 'lodash';
import { largePageWidth, mdPageWidth, smPageWidth } from './common/constant';
import { getDishList, getShowKeys, hasComponentInList, checkProps } from './common/utils';
import Block from './components/block';
import './style.less';
import IconDel from 'assets/svgs/delete_bill.svg';
import mockComponentsData from '../../../mock/components.json';
// import mockComponentsData from '../../../mock/bill/invalid.json';

import { uploadImg, delImg, uploadCode } from './service';
// TODO: 左侧默认选中组件没有对列表组件判断
const regStr = /([{}])/g;
export default function BillTemplates({
  componentsData = mockComponentsData,
  pageSize = 80,
  isEdit = true,
  onSubmit,
  onCancel,
}) {

  /**
   * 菜品列表相关
   */
  const [dishTemplate, setDishTemplate] = useState([]); // 完整菜品表格数据模型
  const [showkeys, setShowKeys] = useState([]); // 已选菜品列表展示中的字段
  /**
   * 右侧模块
   */
  const [fontActive, setFontActive] = useState(null);
  const [alignActive, setAlignActive] = useState(null);
  const [activeFontWeight, setActiveFontWeight] = useState(1);
  const [activeSeparator, setActiveSeparator] = useState(false);
  const [activeLabel, setActiveLabel] = useState(null);
  const [isShowLabelEdit, setIsShowLabelEdit] = useState(true);
  const [isShowStyleEdit, setIsShowStyleEdit] = useState(true);
  const [blankLineNum, setBlankLineNum] = useState(0);
  // 改变样式
  const moduleItemClick = (type, number, checked) => {
    if (!Object.keys(activeBlock).length) return;
    let newNumber = number;
    switch (type) {
      case 'fontSize':
        setFontActive(newNumber);
        break;
      case 'fontWeight':
        newNumber = checked ? 2 : 1;
        setActiveFontWeight(newNumber);
        break;
      case 'align':
        setAlignActive(newNumber);
        break;
    }
    const tempMainData = deepClone(mainData);
    const { blockIndex, rowIndex } = activeBlock;
    function loop(arr) {
      arr.forEach(row => {
        if (row.childRows && row.childRows.length) {
          loop(row.childRows);
        }
        if (row.cells && row.cells.length) {
          row.cells.forEach(item => {
            if (item.style) {
              item.style = {
                ...item.style,
                [type]: newNumber,
              };
            }
          });
        }
      });
    }
    loop(tempMainData[blockIndex].rows)
    setMainData(tempMainData);
  };
  // 插入分隔符 当前选中的下方插入
  const handleChangeSiwtch = (checked) => {
    if (!Object.keys(activeBlock).length) return;
    const tempMainData = deepClone(mainData);
    const { blockIndex } = activeBlock;
    // 当前block中是否已经存在了分隔符
    let separatorIndex = -1; // 分隔符所在的位置
    let blankCount = 0; // 有几个空白行
    let len = tempMainData[blockIndex].rows.length;
    tempMainData[blockIndex].rows && tempMainData[blockIndex].rows.length && tempMainData[blockIndex].rows.forEach((item, index) => {
      if (item.cells && item.cells.length) {
        item.cells.forEach((el) => {
          if (el.type == 5) separatorIndex = index;
          if (el.type == 6) blankCount++;
        });
      }
    });
    checked && separatorIndex < 0
      ? tempMainData[blockIndex].rows.splice(blankCount > 0 ? len - blankCount : len, 0, {
        type: 1,
        data: "",
        visible: "",
        cells: [
          {
            id: `separator_${new Date().getTime()}`,
            name: "",
            title: "",
            dat: "",
            param: "-",
            type: 5,
            percent: 100,
            style: {
              align: 1,
              fontSize: 1,
              fontWeight: 1
            }
          }
        ]
      })
      : tempMainData[blockIndex].rows.splice(separatorIndex, 1);
    setMainData(tempMainData);
    setActiveSeparator(checked);
  };
  // 修改自定义文案
  const handleChangeLabel = e => {
    if (!Object.keys(activeBlock).length) return;
    if (e.target.value.replace(/[\u0391-\uFFE5]/g, 'aa').length > 20) return;
    const tempMainData = deepClone(mainData);
    const renderDatasTemp = deepClone(renderDatas);
    const { blockIndex, rowIndex } = activeBlock;
    // 修改name || 修改二维码、图片的自定义文案 || 自定义文案
    if (tempMainData[blockIndex].rows[rowIndex].cells) {
      const { type, param, data, title } = tempMainData[blockIndex].rows[rowIndex].cells[0];
      // 二维码、图片：修改rednerDatas中的objectList；同时修改要保存的objects里面的内容
      if (type == 2 || type == 3 || type == 4) {
        renderDatasTemp.objectList &&
          renderDatasTemp.objectList.length &&
          renderDatasTemp.objectList.forEach((objEl) => {
            if (objEl.placeholder === param.replace(regStr, '')) {
              objEl.customText = e.target.value;
            }
          });
        setRenderDatas(renderDatasTemp);
      } else if (type == 1) {
        // 自定义文案data title为空&data为纯文本--直接改json中的data
        if (!title && !regStr.test(data)) {
          tempMainData[blockIndex].rows[rowIndex].cells[0].data = e.target.value;
        } else if (regStr.test(data)) {
          tempMainData[blockIndex].rows[rowIndex].cells[0].name = e.target.value;
        }
        setMainData(tempMainData);
      }
    }
    setActiveLabel(e.target.value);
  };
  // 插入空白行 当前选中的下方插入（分隔符之后）
  const handleBlankLine = (type) => {
    const blockLineNumTemp = type === 'add' ? blankLineNum + 1 : blankLineNum - 1;
    if (!Object.keys(activeBlock).length || (blockLineNumTemp < 0)) return;
    if (blockLineNumTemp > 9) {
      message.warn('最多插入9行空白行');
      return;
    }
    const tempMainData = deepClone(mainData);
    const { blockIndex } = activeBlock;
    const rowsTemp = tempMainData[blockIndex] && tempMainData[blockIndex].rows;
    let separatorIndex = -1; // 分隔符的位置
    // 是否存在分隔符
    if (rowsTemp && rowsTemp.length) {
      rowsTemp.forEach((el, index) => {
        if (el.cells && el.cells.length) {
          el.cells.forEach((el2, index2) => {
            if (el2.type == 5) {
              separatorIndex = index;
            }
          });
        }
      })
    }
    // 存在分隔符 在分隔符下方插入/删除空行
    if (separatorIndex > -1) {
      type === 'add'
        ? tempMainData[blockIndex].rows.splice(separatorIndex + 1, 0, {
          type: 1,
          data: "",
          visible: "",
          cells: [
            {
              id: `blank_line_${new Date().getTime()}`,
              name: "",
              title: "",
              dat: "",
              param: "",
              type: 6,
              percent: 100,
              style: {
                align: 1,
                fontSize: 1,
                fontWeight: 1
              }
            }
          ]
        }
        )
        : tempMainData[blockIndex].rows.splice(separatorIndex + 1, 1);
    } else {
      // 无分隔符 直接在末尾插入/删除
      type === 'add'
        ? tempMainData[blockIndex].rows.push({
          type: 1,
          data: "",
          visible: "",
          cells: [
            {
              id: `blank_line_${new Date().getTime()}`,
              name: "",
              title: "",
              dat: "",
              param: "",
              type: 6,
              percent: 100,
              style: {
                align: 1,
                fontSize: 1,
                fontWeight: 1
              }
            }
          ]
        }
        )
        : tempMainData[blockIndex].rows.pop();
    }
    setBlankLineNum(blockLineNumTemp);
    setMainData(tempMainData);
  };
  /**
   * 中间模块
   */
  const RNDContext = createDndContext(HTML5Backend);
  const manager = useRef(RNDContext);
  // 当前选中行
  const [activeBlock, setActiveBlock] = useState({});
  // 点击选中行
  const handleBlockClick = (block, allBlock) => {
    setActiveBlock(block);
    if (Object.keys(block).length && (mainData.length || allBlock.length)) {
      const tempMainData = mainData && mainData.length > 0 ? deepClone(mainData) : deepClone(allBlock);
      const tempRows = tempMainData[block.blockIndex] && tempMainData[block.blockIndex].rows ? tempMainData[block.blockIndex].rows : null;
      if (!tempRows) return;
      let separatorFlag = false;
      // 隐藏整个样式编辑: rows里面只有一个分隔符
      if (tempRows.length === 1 && tempRows[0].cells.length === 1 && tempRows[0].cells[0].type == 5) setIsShowStyleEdit(false);
      // 选中行为list
      if (block.isListBlock) {
        // setIsShowStyleEdit(false);
        const showKeys = getShowKeys(mainData[block.blockIndex] && mainData[block.blockIndex].rows);
        setShowKeys(showKeys);
      }

      // 是否存在分隔符、空白行
      let blankLineNum = 0;
      tempRows.forEach((rowEl) => {
        if (rowEl.cells && rowEl.cells.length === 1) {
          if (rowEl.cells[0].type == 5) {
            separatorFlag = true;
          }
          if (rowEl.cells[0].type == 6) {
            blankLineNum++;
          }
        }
      })
      setActiveSeparator(separatorFlag);
      setBlankLineNum(blankLineNum);
      if (block.isListBlock) { // 列表block
        // setIsShowStyleEdit(false);
        // 一行多列或列表内字体大小
        const fontSize = checkProps(mainData[block.blockIndex].rows, 'fontSize');
        // 一行多列或列表内字体居中
        const align = checkProps(mainData[block.blockIndex].rows, 'align');
        // 一行多列或列表内字体加粗
        const fontWeight = checkProps(mainData[block.blockIndex].rows, 'fontWeight');
        setAlignActive(align.length === 1 ? align[0] : 0);
        setFontActive(fontSize.length === 1 ? fontSize[0] : 0);
        setActiveFontWeight(fontWeight.length === 1 ? fontWeight[0] : 1);
        setIsShowLabelEdit(false);
        const showKeys = getShowKeys(mainData[block.blockIndex] && mainData[block.blockIndex].rows);
        setShowKeys(showKeys);
      } else { // 普通block
        // 一个row中多个cell
        if (
          tempRows[block.rowIndex].cells &&
          tempRows[block.rowIndex].cells.length > 1
        ) {
          // 一行多列或列表内字体大小
          const fontSize = checkProps(mainData[block.blockIndex].rows, 'fontSize');
          // 一行多列或列表内字体居中
          const align = checkProps(mainData[block.blockIndex].rows, 'align');
          // 一行多列或列表内字体加粗
          const fontWeight = checkProps(mainData[block.blockIndex].rows, 'fontWeight');
          setAlignActive(align.length === 1 ? align[0] : 0);
          setFontActive(fontSize.length === 1 ? fontSize[0] : 0);
          setActiveFontWeight(fontWeight.length === 1 ? fontWeight[0] : 1);
          setIsShowLabelEdit(false);
        } else if (
          tempRows[block.rowIndex].cells &&
          tempRows[block.rowIndex].cells.length === 1
        ) {
          tempRows[block.rowIndex].cells.forEach(el => {
            const { type, title, name, style, param } = el;
            // 隐藏编辑文字: title为占位符; type==1 & title不存在; 上传logo
            setIsShowLabelEdit(!(title && regStr.test(title)));
            // 文案编辑：图片、二维码---自定义文案取renderDatas中objectList字段；自定义文案--title为空&data为纯文本；普通文本name||title
            if (type === 2 || type === 3 || type === 4) {
              const renderDatasTemp = deepClone(renderDatas);
              let textTemp = '';
              renderDatasTemp.objectList &&
                renderDatasTemp.objectList.length &&
                renderDatasTemp.objectList.forEach((el2) => {
                  if (el2.placeholder === param.replace(regStr, '')) {
                    textTemp = el2.customText;
                  }
                });
              setActiveLabel(textTemp);
              if (type === 4 && el.data === '{shopLogo}') {
                setIsShowLabelEdit(false);
              } else {
                setIsShowLabelEdit(!(title && regStr.test(title)));
              }
            } else if (type === 1) {
              const newLabel = (!title && !regStr.test(el.data)) ? el.data : (name || title);
              // 隐藏编辑文字：data含有占位符 && title不存在
              if (regStr.test(el.data)) {
                setIsShowLabelEdit(Boolean(title) ? true : false);
                Boolean(title) ? setActiveLabel(newLabel) : null;
              } else {
                setIsShowLabelEdit(true);
                setActiveLabel(newLabel);
              }
            }
            // console.log('text======', regStr.test(el.data), Boolean(title), type);
            // 样式：分隔符、空白行-样式置为空；其余取json中数据
            if (type === 5 || type === 6) {
              setFontActive(0);
              setAlignActive(0);
              setActiveFontWeight(1);
            } else {
              setFontActive(el.style.fontSize ? el.style.fontSize : 1);
              setActiveFontWeight(
                el.style.fontWeight === 2 ? el.style.fontWeight : 1
              );
              setAlignActive(el.style.align ? el.style.align : 1);
            }
            // 隐藏整个样式编辑：分隔符
            setIsShowStyleEdit(!(el.type === 5));
          });
        }
      }
    }
  };
  // 上传图片
  const handleUpload = (options, originData) => {
    console.log('options=====', options, activeBlock);
    const { file } = options;
    const isLt1M = file.size / 1024 / 1024 < 1;
    const isJPG = file.type === 'image/jpeg';
    const isJPEG = file.type === 'image/jpeg';
    // 1M jpg
    if (!(isJPG || isJPEG)) {
      message.warn('只能上传JPG、JPEG格式的图片');
      return;
    } else if (!isLt1M) {
      message.warn('图片超过1M,不允许上传');
      return;
    }
    let reader;
    if (file) {
      reader = new FileReader();
      reader.onload = function (event) {
        const base64 = event.target.result;
        let tempObj = {};
        // setImgUrl(base64);
        if (type == 4) {
          let placeholder = '';
          let customText = '';
          let paramTemp = '';
          const { blockIndex, rowIndex } = activeBlock;
          const renderDatasTemp = deepClone(renderDatas);
          if (tempMainData[blockIndex].rows[rowIndex].cells && tempMainData[blockIndex].rows[rowIndex].cells.length) {
            tempMainData[blockIndex].rows[rowIndex].cells.forEach((el) => {
              if ((el.type == 2 || el.type == 3 || el.type == 4) && el.data === originData) {
                placeholder = tempMainData[blockIndex].rows[rowIndex].cells[0].data;
                paramTemp = tempMainData[blockIndex].rows[rowIndex].cells[0].param;
              }
            });
          }
          renderDatasTemp.objectList.forEach((el) => {
            if (el.placeholder === paramTemp) {
              customText = el.customText;
            }
          });
          const params = {
            code: base64,
            placeholder,
          };
          uploadImg(params)
            .then(data => {
              console.log('res00000---', data);
              if (data.code === 0) {
                tempObj = {
                  id: data.body.id,
                  objectKey: data.body.key, // 上传图片返回的key
                  objectValue: data.body.url, // 上传图片对应的oss地址
                  placeholder: data.body.placeholder, // 图片在模板中的占位符
                  customText, // 自定义文案
                }
              }
            })
            .cathch(e => {
              message.error(e);
            });
        } else {
          const params = {
            codeFile: base64,
          };
          uploadCode(params)
            .then(data => {
              console.log('res111111---', data);
              if (data.code === 0) {
                tempObj = {
                  id: data.body.id,
                  objectKey: data.body.key, // 上传图片返回的key
                  objectValue: data.body.url, // 上传图片对应的oss地址
                  placeholder: data.body.placeholder, // 图片在模板中的占位符
                  customText, // 自定义文案
                }
              }
            })
            .cathch(e => {
              message.error(e);
            });
        }
        let indexTemp = -1; // 是否已经存在改图片的信息
        renderDatasTemp.objectList.forEach((el, index) => {
          if (el.placeholder === originData) {
            indexTemp = index;
          }
        });
        indexTemp > -1 ? renderDatasTemp.objectList[indexTemp] = tempObj : renderDatasTemp.objectList.push(tempObj);
        setRenderDatas(renderDatasTemp);
      };
    }
    reader.readAsDataURL(file);
  };
  // 删除上传的图片
  const handleDeleteUpload = (originData) => {
    const renderDatasTemp = deepClone(renderDatas);
    let imgKey = '';
    let indexTemp = -1;
    renderDatasTemp.objectList.forEach((el, index) => {
      if (el.placeholder === originData) {
        imgKey = el.objectKey;
        indexTemp = index;
      }
    });
    const params = { key: imgKey };
    delImg(params)
      .then(data => {
        if (data.code === 0) {
          message.success('删除成功');
          indexTemp > -1 ? renderDatasTemp.objectList.splice(indexTemp, -1) : '';
        }
      })
      .catch(e => {
        message.error(e);
      });
  };

  /**
   * 获取当前行类型
   * @param {*} row 当前row数据
   * @returns 'normal' / 'separator' / 'blank' 
   */
  function getRowType(row = {}) {
    let res = 'normal';
    if (row.type == 1 && row.cells && row.cells.length === 1) {

      if (row.cells[0].type == 5) {
        res = 'separator';
      } else if (row.cells[0].type == 6) {
        res = 'blank';
      }
    }
    return res;
  }

  // dataSource内部维护; 
  const [mainData, setMainData] = useState([]);
  const [renderDatas, setRenderDatas] = useState([]); // 组件的渲染数据renderDatas
  const [isReset, setIsReset] = useState(false); // 是否重置
  useEffect(() => {
    /**
     * 将获取的rows拆分为多个block，拆分逻辑见下链接内 争议问题结论 4分割符与空白行均为row?
     * https://yuque.antfin.com/docs/share/86aefa9d-5256-467c-92d7-e57ec98e6c03?# 《票据模板系分》
     **/
    let blockLength = 0; // chunk数量
    let beforeRowType = null; // 前一row类型：'normal','blank', 'separator'  注：除空白行和分隔符外的row均为normal
    let beforeRowConnection = ''; // 前一row中connection值
    const blocks = []; // 区分好的block集合
    const rowsTemp = componentsData.content && componentsData.content.rows ? componentsData.content.rows : null;
    rowsTemp && rowsTemp.forEach((row, index) => {
      const rowTypeNow = row ? getRowType(row) : 'normal'; // row内是否是分隔符 ? 'separator' : row内是否是空白行 ? 'blank' : 'normal'
      if (index === 0) { // 第一个row不管内容是什么，都塞到第一个block里
        blocks[blockLength] = { key: new Date().getTime() + blockLength, rows: [] };
        blocks[blockLength].rows.push(row);
        if (row.connection) {
          blocks[blockLength]['connection'] = row.connection;
        }
        beforeRowType = rowTypeNow;
        beforeRowConnection = row.connection || '';
      } else {
        /**
        * 新增chunk的逻辑
        * 1. 前一row类型为separator且当前不为blank，新增chunk
        * 2. 前一row类型为normal类型且当前row不为separator和blank
        * 3. 前一个row类型是blank且当前row是normal 新增
        * 4. 前一个row中的connection 和当前row中的connection不同 新增 
        * 注：1，2，3的判断都是基于前一个row中的connection与当前connection不同 或 connection不存在
        */
        if (beforeRowConnection && row.connection && beforeRowConnection === row.connection) {
          blocks[blockLength].rows.push(row);
          beforeRowConnection = row.connection;
        } else {
          // connection 不存在或前后不相同
          if (
            (beforeRowType === 'separator' && rowTypeNow !== 'blank') ||
            (beforeRowType === 'normal' && rowTypeNow !== 'separator' && rowTypeNow !== 'blank' && (beforeRowConnection !== row.connection || !beforeRowConnection || !row.connection)) ||
            (beforeRowType === 'blank' && rowTypeNow === 'normal')
          ) {
            blockLength += 1;
            blocks[blockLength] = { key: new Date().getTime() + blockLength, rows: [] };
            blocks[blockLength].rows.push(row);
            beforeRowType = rowTypeNow;
            beforeRowConnection = row.connection;
            if (row.connection) {
              blocks[blockLength]['connection'] = row.connection;
            }
          } else {
            blocks[blockLength].rows.push(row);
            beforeRowType = rowTypeNow;
          }
        }
      }
      if (rowTypeNow === 'normal' && !row.connection) { // 普通业务row位置
        blocks[blockLength].rowIndex = blocks[blockLength].rows.length - 1;
      } else if (rowTypeNow === 'normal' && !row.connection) { // 判断列表内是否有表头
        const headerRow = blocks[blockLength].rows.filter(i => row.type == 1 && row.cells && row.cells.length && row.cells[0].type == 1);
        blocks[blockLength].hasHeader(!!(headerRow && headerRow.length));
      }
    });
    setMainData(blocks);
    setRenderDatas(componentsData);
    console.log('bolck0000--------------', componentsData);
    setDishTemplate(componentsData.dishTemplate);
    setTimeout(() => {
      // 默认选中第一个
      if (blocks && isEdit) {
        const block = deepClone(blocks[0]);
        let isListBlock = false; // 是否为列表block
        const blockIndex = 0;
        block && block.rows && block.rows.forEach(row => isListBlock = isListBlock || row.type == 2);
        block && handleBlockClick({ blockKey: block.key, blockIndex, rowIndex: block.rowIndex, isListBlock, connection: block.connection }, blocks);
      }
      // 默认选中的组件
      const componentActiveTemp = [];
      isEdit && componentsData && componentsData.modulesList && componentsData.modulesList.forEach((el) => {
        if (el.componentList && el.componentList.length) {
          el.componentList.forEach((el2) => {
            rowsTemp && rowsTemp.forEach((rowItem) => {
              if (rowItem.type == 1) { // 普通row
                if (rowItem.cells && rowItem.cells.length) {
                  rowItem.cells.forEach((cellItem) => {
                    if (el2.id == cellItem.id) {
                      componentActiveTemp.push(el2.id);
                    }
                  });
                }
              } else if (rowItem.type == 2) { // 列表类型row，判断选中条件：包含ID即为选中
                const hasComponent = hasComponentInList(el2.id, rowItem);
                if (hasComponent) componentActiveTemp.push(el2.id);
              }
            });
          });
        }
      });
      console.log("🚀 ~ file: index.jsx ~ line 573 ~ rowsTemp&&rowsTemp.forEach ~ componentActiveTemp", componentActiveTemp)
      setComponentActive(componentActiveTemp);
    }, 50);
  }, [componentsData, isReset]);

  // cell调整宽度
  const handleCellResize = (cellWidth, blockIndex, rowIndex) => {
    const tempDataSource = deepClone(mainData);
    tempDataSource[blockIndex].rows[rowIndex].cells.forEach(
      (i, num) => (i.percent = cellWidth[num])
    );
    setMainData(tempDataSource);
  };
  // 移动行
  const moveBlock = (dragRow, dropRow) => {
    const tempData = deepClone(mainData);
    const tempRow = tempData[dragRow];
    if (dragRow > dropRow) {
      // 向前
      tempData.splice(dropRow, 0, tempRow);
      tempData.splice(dragRow + 1, 1);
    } else {
      // 向后
      tempData.splice(dropRow + 1, 0, tempRow);
      tempData.splice(dragRow, 1);
    }
    setActiveBlock({});
    setMainData(tempData);
  };
  // 删除行
  const handleRemoveRow = () => {
    if (Object.keys(activeBlock).length) {
      // 已选中
      const tempDataSource = deepClone(mainData);
      tempDataSource.splice(activeBlock.blockIndex, 1);
      // setActiveBlock({});
      // 删除已选中的组件状态
      const componentActiveTemp = deepClone(componentActive);
      const tempRows = tempDataSource[activeBlock.blockIndex] && tempDataSource[activeBlock.blockIndex].rows ? tempDataSource[activeBlock.blockIndex].rows : null;
      if (tempRows && tempRows[activeBlock.rowIndex].cells && tempRows[activeBlock.rowIndex].cells.length) {
        tempRows[activeBlock.rowIndex].cells.forEach((el) => {
          if (componentActiveTemp.indexOf(el.id) > -1) {
            componentActiveTemp.splice(findIndex(componentActiveTemp, el.id), 1);
          }
        })
      }
      // 默认选中的行
      if (tempDataSource && isEdit) {
        const block = deepClone(tempDataSource[0]);
        let isListBlock = false; // 是否为列表block
        const blockIndex = 0;
        block && block.rows.forEach(row => isListBlock = isListBlock || row.type == 2);
        block && handleBlockClick({ blockKey: block.key, blockIndex, rowIndex: block.rowIndex, isListBlock }, tempDataSource);
      }
      setComponentActive(componentActiveTemp);
      setMainData(tempDataSource);
    }
  };
  /**
   * 移动列
   * @param {*} dragCell
   * @param {*} dragRow
   * @param {*} dropCell
   * @param {*} dropRow
   * @param {*} needAddRow 'top' 'bottom'
   */
  const moveCell = (dragCell, dragRow, dragBlock, dropCell, dropRow, dropBlock, needAddRow) => {
    console.log("00refmoveCell ~ dragCell, dragRow, dragBlock, dropCell, dropRow, dropBlock, needAddRow", dragCell, dragRow, dragBlock, dropCell, dropRow, dropBlock, needAddRow)
    const tempData = deepClone(mainData);
    const tempBlock = tempData[dragBlock];
    const tempRow = tempBlock.rows[dragRow];
    const tempCells = tempRow.cells;
    const tempCell = tempCells[dragCell];
    if (needAddRow) {
      // 从两列其中一列拖出新增一行
      tempCell.percent = 100;
      const tempRow = {
        type: 1,
        data: '',
        visible: '',
        cells: [tempCell],
      };
      const tempBlock = {
        key: new Date().getTime(),
        rowIndex: 0,
        rows: [tempRow],
      };
      tempCells.splice(dragCell, 1);
      if (needAddRow === 'top') {
        // 目标行上方新增行
        tempData.splice(dropBlock, 0, tempBlock);
      } else {
        // 目标行下方新增行
        tempData.splice(dropBlock + 1, 0, tempBlock);
      }
      // 原行剩余列宽度调整
      tempCells[0].percent = 100;
    } else {
      // 正常操作
      if (dragBlock === dropBlock) {
        // 同行分前后
        if (dragCell > dropCell) {
          // 向前
          tempCells.splice(dropCell, 0, tempCell);
          tempCells.splice(dragCell + 1, 1);
        } else {
          // 向后
          tempCells.splice(dropCell + 1, 0, tempCell);
          tempCells.splice(dragCell, 1);
        }
      } else {
        // 不同行直接插目标行内的cell后面，
        // 宽度调整
        tempCell.percent = 50;
        tempData[dropBlock].rows[dropRow].cells[0].percent = 50;
        tempData[dropBlock].rows[dropRow].cells.splice(1, 0, tempCell);
        if (tempData[dragBlock].rows[dragRow].cells.length === 1) {
          // 拖拽行只有一列，移除拖拽行
          tempData.splice(dragBlock, 1);
        } else {
          // 拖拽行两列，移除拖拽列
          tempData[dragBlock].rows[dragRow].cells.splice(dragCell, 1);
          tempData[dragBlock].rows[dragRow].cells[0].percent = 100;
        }
      }
    }
    setActiveBlock({});
    setMainData(tempData);
  };
  /**
   * 左侧模块
   */
  const [componentActive, setComponentActive] = useState([]); // 所有选中的组件的id组成的数组
  // 选中左侧组件
  const moduleComponentClick = (item) => {
    const { type, width, id, label, placeholder, componentProperty: componentPropertyStr, valueStyle } = item;
    const componentProperty = componentPropertyStr && JSON.parse(componentPropertyStr);
    const mainDataTemp = deepClone(mainData);
    let componentActiveTemp = deepClone(componentActive);
    // 已经存在多少个当前要添加的组件了
    const limit = componentProperty.limit || 1;
    const notRemove = componentProperty.notRemove || false;
    let count = componentActive.indexOf(id) > -1 ? 1 : 0;
    mainDataTemp.forEach((el) => {
      if (el.rows && el.rows.length) {
        el.rows.forEach((el2) => {
          if (el2.cells && el2.cells.length) {
            el2.cells.forEach((el3) => {
              if (el3.id === id) {
                count++
              }
            });
          }
        });
      }
    });
    if (count > limit) { // 超限
      message.warn(`该组件最多选择${limit}个`);
      return;
    }
    if (notRemove && componentActiveTemp.includes(item.id)) { // 不可移除
      message.warn('该组件不可移除');
      return;
    }
    // rowType 2--列表 1或空--普通
    let temp = {};
    if ((componentProperty && componentProperty.rowType && componentProperty.rowType == 1) || (!componentProperty.rowType)) { // 普通行
      temp = {
        key: new Date().getTime(),
        rows: [
          {
            "type": 1,
            "data": "",
            "visible": "",
            "cells": [
              {
                "id": id,
                "name": "",
                "title": (componentProperty && componentProperty.titlePlaceholder) || label, // labe 若title为占位符怎么取--取titlePlaceholder
                "data": placeholder,
                "param": (componentProperty && componentProperty.param) || '', //  componentProperty中定义 param:图片下方文案、分隔符内容； titlePlaceholder：title为占位符时
                "type": Number(type),
                "percent": width || 100,
                "style": {
                  "align": (valueStyle && valueStyle.align) || 1,
                  "fontSize": (valueStyle && valueStyle.fontSize) || 1,
                  "fontWeight": (valueStyle && valueStyle.fontWeight) || 1,
                },
                "visible": (componentProperty && componentProperty.visiable),
              }
            ]
          },
        ],
        rowIndex: 0,
      }
      mainDataTemp.splice(activeBlock.blockIndex + 1, 0, temp);
      componentActiveTemp.push(item.id);
    } else if (componentProperty && componentProperty.rowType && componentProperty.rowType == 2) { // 列表
      if (componentProperty.json) { // 普通表格直接插入
        temp = {
          key: new Date().getTime(),
          rows: componentProperty.json,
          connection: componentProperty.connection,
        }
        mainDataTemp.push(temp);
        componentActiveTemp.push(item.id);
      } else if(activeBlock.connection === componentProperty.connection) { // 非普通表格判断是否属于当前表格
        let tempShowKeys = [];
        if (showkeys.includes(componentProperty.cellAlias)) { // 属性存在就删除
          tempShowKeys = showkeys.filter(i => i !== componentProperty.cellAlias);
          componentActiveTemp = componentActiveTemp.filter(i => i !== item.id);
          mainDataTemp[activeBlock.blockIndex].rows = getDishList(true, mainDataTemp[activeBlock.blockIndex].rows, componentProperty.cellAlias);
        } else { // 不存在就添加
          tempShowKeys = [...showkeys, componentProperty.cellAlias];
          componentActiveTemp.push(item.id);
          mainDataTemp[activeBlock.blockIndex].rows = getDishList(false, dishTemplate, componentProperty.cellAlias, mainDataTemp[activeBlock.blockIndex].rows, item.id);
        }
        setShowKeys(tempShowKeys);
      } else {
        message.warn('当前选中项不支持此属性');
      }
    }
    setMainData(mainDataTemp);
    setComponentActive(componentActiveTemp);
  };

  /**
   * 计算不同纸张对应的宽度
   */
  // const pageSize = 80; // 80, 76, 58
  let newWidth = largePageWidth;
  switch (pageSize) {
    case 76:
      newWidth = mdPageWidth;
      break;
    case 58:
      newWidth = smPageWidth;
      break;
    default:
      newWidth = largePageWidth;
  }
  const mainStyle = {
    width: `${newWidth + 17}px`, // 预留出滚动条的宽度
    flex: 'none',
  };
  /**
   * 底部 保存 取消 恢复默认配置
   */
  // 保存
  const handleSave = () => {
    const newContentJson = [];
    const mainDataTemp = deepClone(mainData);
    const renderDatasTemp = deepClone(renderDatas);
    mainDataTemp.forEach((el) => {
      newContentJson.push(...el.rows)
    });
    renderDatasTemp.content && renderDatasTemp.content.rows ? renderDatasTemp.content.rows = newContentJson : '';
    renderDatasTemp.content = renderDatasTemp.content ? JSON.parse(renderDatasTemp.content) : undefined;
    onSubmit && onSubmit(renderDatasTemp);
  };
  // 恢复默认配置
  const handleReset = () => {
    setIsReset(!isReset);
  }
  // 取消
  const handleCancel = () => {
    onCancel && onCancel();
  };
  // console.log('containerRef====', containerRef);
  return isEdit ? (
    <div className="bill-templates-component">
      <div className="bill-templates-container">
        {/* 左侧部分开始 */}
        <div style={{ position: 'relative' }}>
          <div className="bill-templates-item bill-templates-tools">
            <div>
              <div className="bill-templates-item-title">选择票据显示内容</div>
            </div>
            {componentsData.modulesList && componentsData.modulesList.map(item => (
              <div className="module" key={item.id}>
                <div className="module-title">{item.name}</div>
                <div className="module-items">
                  {item.componentList && item.componentList.length
                    ? item.componentList.map(el => (
                      <div
                        key={el.id}
                        className={componentActive.indexOf(el.id) > -1 ? "module-item module-item-active" : "module-item"}
                        onClick={moduleComponentClick.bind(this, el)}
                        title={el.label}
                      >
                        {el.label}
                      </div>
                    ))
                    : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 左侧部分结束 */}
        {/* 中间部分开始 */}
        <div style={{ position: 'relative' }}>
          <div
            className="bill-templates-item bill-templates-main"
            style={mainStyle}
          >
            <div className="bill-templates-item-title bill-templates-item-title2">
              <span>编辑</span>
              <span className="delete-btn" onClick={handleRemoveRow}>
                <IconDel />
              </span>
            </div>
            <div className="bill-templates-edit-body page-font">
              <DndProvider manager={manager.current.dragDropManager}>
                {mainData.map((block, num) =>
                  <Block
                    key={block.key}
                    block={block}
                    blockIndex={num}
                    onClick={handleBlockClick}
                    activeBlockKey={activeBlock.blockKey}
                    isEdit={true}
                    onCellResize={handleCellResize}
                    moveBlock={moveBlock}
                    moveCell={moveCell}
                    pageSize={pageSize}
                    renderDatas={renderDatas}
                    activeBlock={activeBlock}
                    onUpload={handleUpload}
                    onCancelUpload={handleDeleteUpload}
                  />
                )}
              </DndProvider>
            </div>
          </div>
        </div>

        {/* 中间部分结束 */}
        {/* 右侧部分开始 */}
        <div style={{ position: 'relative' }}>
          <div className="bill-templates-item bill-templates-style">
            <div className="bill-templates-item-title">样式编辑</div>
            {isShowStyleEdit ? (
              <div className="bill-templates-style-items">
                {isShowLabelEdit && (
                  <div className="bill-templates-style-item">
                    <div className="bill-templates-style-item-label">
                      编辑文字
                  </div>
                    <div className="bill-templates-style-item-value">
                      <Input
                        placeholder="请输入"
                        className="bill-templates-style-item-value-input"
                        value={activeLabel}
                        onChange={handleChangeLabel}
                      />
                    </div>
                  </div>
                )}
                <div className="bill-templates-style-item">
                  <div className="bill-templates-style-item-label">字号</div>
                  <div className="bill-templates-style-item-value">
                    <div
                      className={
                        fontActive === 4
                          ? 'module-item margin-right-10 margin-bottom-0 module-item-active'
                          : 'module-item margin-right-10 margin-bottom-0'
                      }
                      style={{ marginBottom: 0 }}
                      onClick={moduleItemClick.bind(this, 'fontSize', 4)}
                    >
                      大
                  </div>
                    <div
                      className={
                        fontActive === 1
                          ? 'module-item margin-right-10 margin-bottom-0 module-item-active'
                          : 'module-item margin-right-10 margin-bottom-0'
                      }
                      style={{ marginBottom: 0 }}
                      onClick={moduleItemClick.bind(this, 'fontSize', 1)}
                    >
                      小
                  </div>
                    {/* <div
                  className="module-item margin-right-10 margin-bottom-0"
                  style={{ marginBottom: 0 }}
                  onClick={moduleItemClick}
                >
                  倍高
                </div>
                <div
                  className="module-item margin-right-0 margin-bottom-0"
                  style={{ marginBottom: 0 }}
                  onClick={moduleItemClick}
                >
                  倍宽
                </div> */}
                  </div>
                </div>
                <div className="bill-templates-style-item">
                  <div className="bill-templates-style-item-label">对齐方式</div>
                  <div className="bill-templates-style-item-value">
                    <div
                      className={
                        alignActive === 1
                          ? 'module-item margin-right-10 margin-bottom-0 module-item-active'
                          : 'module-item margin-right-10 margin-bottom-0'
                      }
                      style={{ marginBottom: 0 }}
                      onClick={moduleItemClick.bind(this, 'align', 1)}
                    >
                      居左
                  </div>
                    <div
                      className={
                        alignActive === 2
                          ? 'module-item margin-right-10 margin-bottom-0 module-item-active'
                          : 'module-item margin-right-10 margin-bottom-0'
                      }
                      style={{ marginBottom: 0 }}
                      onClick={moduleItemClick.bind(this, 'align', 2)}
                    >
                      居中
                  </div>
                    <div
                      className={
                        alignActive === 3
                          ? 'module-item margin-right-0 margin-bottom-0 module-item-active'
                          : 'module-item margin-right-0 margin-bottom-0'
                      }
                      style={{ marginBottom: 0 }}
                      onClick={moduleItemClick.bind(this, 'align', 3)}
                    >
                      居右
                  </div>
                  </div>
                </div>
                <div className="bill-templates-style-item">
                  <div className="bill-templates-style-item-label">分割线</div>
                  <div className="bill-templates-style-item-value">
                    <Switch
                      checked={activeSeparator}
                      onChange={handleChangeSiwtch}
                    />
                  </div>
                </div>
                <div className="bill-templates-style-item">
                  <div className="bill-templates-style-item-label">
                    字体是否加粗
                </div>
                  <div className="bill-templates-style-item-value">
                    <Switch
                      checked={activeFontWeight != 1}
                      onChange={moduleItemClick.bind(this, 'fontWeight', 1)}
                    />
                  </div>
                </div>
                <div className="bill-templates-style-item">
                  <div className="bill-templates-style-item-label">插入空行</div>
                  <div className="bill-templates-style-item-value">
                    <Icon type="minus-circle" className="bill-templates-style-item-value-icon" onClick={handleBlankLine.bind(this, 'minus')} />
                    <span>{blankLineNum}</span>
                    <Icon type="plus-circle" className="bill-templates-style-item-value-icon" onClick={handleBlankLine.bind(this, 'add')} />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* 右侧部分结束 */}
      </div>
      <Affix offsetBottom={0} style={{ width: '100%', textAlign: 'right', height: 64, lineHeight: '64px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Button className="margin-right-10" onClick={handleReset}>恢复默认</Button>
        <Button className="margin-right-10" onClick={handleCancel}>取消</Button>
        <Button type="primary" onClick={handleSave}>保存</Button>
      </Affix>
    </div >
  )
    : (
      <div
        className="bill-templates-item bill-templates-main bill-templates-main-view"
        style={mainStyle}
      >
        <div className="bill-templates-edit-body">
          <DndProvider DndProvider backend={HTML5Backend}>
            {mainData.map((block, num) =>
              <Block
                key={block.key}
                block={block}
                blockIndex={num}
                onClick={handleBlockClick}
                activeBlockKey={activeBlock.blockKey}
                isEdit={false}
                onCellResize={handleCellResize}
                moveBlock={moveBlock}
                moveCell={moveCell}
                componentsData={renderDatas}
                pageSize={pageSize}
                renderDatas={renderDatas}
                activeBlock={activeBlock}
              />
            )}
          </DndProvider>
        </div>
      </div>
    );
}
