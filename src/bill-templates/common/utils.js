/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import { union, deepClone } from 'lodash';

/**
 * 字体转换 1*1:12px  2*2:24px
 * @param fontSize 字体 1：小号；2：倍高；3：倍宽；4：大号；目前仅支持1,4
 */
export function formatCellStyle({
  align = 1,
  fontSize = 1,
  fontWeight = 1,
} = {}) {
  let style = {};
  switch (align) {
    case 1:
      style.align = 'left';
      break;
    case 2:
      style.align = 'center';
      break;
    case 3:
      style.align = 'right';
      break;
    default:
      style.align = 'left';
  }
  switch (fontWeight) {
    case 1:
      style.fontWeight = 'normal';
      break;
    case 2:
      style.fontWeight = 'bold';
      break;
    default:
      style.fontWeight = 'normal';
  }
  switch (fontSize) {
    case 1:
      style.fontSize = '12px';
      break;
    case 4:
      style.fontSize = '24px';
      break;
    default:
      style.fontSize = '12px';
  }
  return style;
}
/**
 * 校验是否是占位符{store} 并返回占位符对应的具体内容;占位符样式："data": "{orderNo}" ; "data": "{dinnerType}/{dinnerNumber}"; "data": "{storeName}门店的{device.deviceId}#机器"
 * @param field 占位符
 * @param demoObject 所有占位符对应数据的集合
 */
export function getPlaceholderValue(field = '', demoObject) {
  const regStr = /([{}])/g;
  const regReplace = /(?:\{([\w.]+)\})/g;
  let val = '';
  let str = '';
  val = field && field.replace(regReplace, match => {
    let temp = match.replace(regStr, '');
    // 占位符中含有. 这样的数据格式
    let paramArr;
    if (temp.indexOf('.') > -1 && temp.split('.').length) {
      paramArr = temp.split('.');
      paramArr.forEach(tempEl => {
        demoObject.hasOwnProperty(tempEl)
          ? (demoObject = demoObject[tempEl])
          : null;
      });
      str = demoObject;
    } else if (temp && demoObject && demoObject.hasOwnProperty(temp)) {
      str = demoObject[temp];
    }
    // 是纯文本 不是占位符
    if (!regStr.test(field)) str = field;
    return str;
  });
  return val;
}
/**
 * 校验是否是占位符{store} 并返回占位符对应的文本内容;占位符样式："data": "{orderNo}" ; "
 * @param field 占位符
 */
export function getPlaceholderKeyStr(field) {
  const regStr = /([{}])/g;
  const regReplace = /(?:\{([\w.]+)\})/g;
  let str = '';
  str = field.replace(regReplace, match => {
    return match.replace(regStr, '');
  });
  return str;
}

/**
 * 返回占位符对应的具体内容;占位符样式："data": "{orderNo}" ; "data": "{device.deviceId}"
 * @param field 占位符
 * @param demoObject 所有占位符对应数据的集合
 */
export function getPlaceholderValueObj(field, demoObject) {
  const regStr = /([{}])/g;
  let obj = null;
  let temp = field.replace(regStr, '');
  // 占位符中含有. 这样的数据格式
  let paramArr;
  if (temp.indexOf('.') > -1 && temp.split('.').length) {
    paramArr = temp.split('.');
    paramArr.forEach(tempEl => {
      demoObject.hasOwnProperty(tempEl)
        ? (demoObject = demoObject[tempEl])
        : null;
    });
    obj = demoObject;
  } else if (temp && demoObject && demoObject.hasOwnProperty(temp)) {
    obj = demoObject[temp];
  }
  return obj;
}

/**
 * 根据别名获取菜品列表内正在展示的字段（别名）
 * @param {*} block 菜品列表所在的list
 */
export function getShowKeys(block = []) {
  let res = [];
  function loop(arr) {
    arr.forEach((item) => {
      if (item.type === 2 && item.childRows && item.childRows.length) {
        return loop(item.childRows);
      }
      if (item.type === 1 && item.cells && item.cells.length) {
        item.cells.forEach(cell => res.push(cell.cellAlias));
      }
    })
  }
  loop(block);
  res = union(res).filter(r => !!r);
  return res;
}


/**
 * 移除商品列表内为null的节点
 * @param {*} dishModel 商品列表
 */
function removeNullNode(dishModel = []) {
  let res = [];
  const tempDishModal = deepClone(dishModel);
  function loop(arr) { // 获取新的商品list节点
    arr = arr.filter(item => item);
    arr.forEach((item) => {
      if (item.type == 2 && item.childRows && item.childRows.length) {
        item.childRows = item.childRows.filter(item => item);
        loop(item.childRows);
      }
      if (item.type == 1 && item.cells && item.cells.length) {
        item.cells = item.cells.filter(item => item);
        loop(item.cells);
      }
    });
  }
  loop(tempDishModal); // 获取到了新结构
  res = tempDishModal;
  return res;
}

/**
 * 根据别名获取菜品列表展示内容
 * @param {*} isRemove 是否是移除
 * @param {*} dishModel 全量菜品列表数据模型
 * @param {*} key 当前需要展示的别名字段数组
 * @param {*} oldDishList 之前正在展示的商品列表数据
 * @param {*} id 当前修改的字段对应的id
 */
export function getDishList(isRemove, dishModel = [], key, oldDishList = [], id) {
  let res = [];
  const tempDishModal = deepClone(dishModel);
  const tempOldDishList = deepClone(oldDishList);
  function loopForRemove(arr) { // 移除节点
    arr.forEach((item, index) => {
      if (item.type == 2 && item.childRows && item.childRows.length) {
        loopForRemove(item.childRows);
      }
      if (item.type == 1 && item.cells && item.cells.length) {
        const temp = item.cells.filter(cell => key === cell.cellAlias);
        item.cells = item.cells.filter(cell => !cell.cellAlias || key != cell.cellAlias);
        if (!item.cells.length) {
          arr[index] = null;
        } else {
          if (temp.length) {
            // 兄弟节点宽度调整
            const newNodeWidth = Number(temp[0].percent);
            item.cells.forEach(cell => Math.floor(cell.percent = Number(cell.percent) / (100 - newNodeWidth) * 100))
          }
        }
      }
    });
  }
  function loopForAdd(tmaplates, old) { // 增加节点
    tmaplates.forEach((item, index) => {
      if (item.type == 2 && item.childRows && item.childRows.length) {
        loopForAdd(item.childRows, old[index] ? old[index].childRows : old[index - 1].childRows); // 仅适用于当前商品list：2020-01-07
      }
      if (item.type == 1 && item.cells && item.cells.length) {
        const temp = item.cells.filter(cell => key === cell.cellAlias);
        if (temp.length) {
          if (item.cells.length === 1) { // 新增行
            item.cells[0].id = id;
            old.splice(index, 0, item);
          } else { // 新增列
            // 兄弟节点宽度调整
            const newNodeWidth = Number(temp[0].percent);
            old[index].cells.forEach((cell, index) => cell.percent = Number(cell.percent) * (100 - newNodeWidth) / 100);
            old[index].cells.push({ ...temp[0], id });
          }
        }
      }
    });
  }
  if (isRemove) { // 移除
    loopForRemove(tempDishModal);
    res = removeNullNode(tempDishModal);
  } else { // 新增
    loopForAdd(tempDishModal, tempOldDishList);
    res = tempOldDishList;
  }
  console.log("🚀 ~ file: utils.js ~ line 217 ~ getDishList ~ res", res)
  return res;
}

/**
 * 校验当前row内是否包含当前组件
 * @param {*} componentId 组件id
 * @param {*} row 当前校验row
 * @returns boolean
 */
export function hasComponentInList(componentId, row = {}) {
  let res = false;
  function loop(id, list = {}) { // 递归校验组件id
    if (list.childRows && list.childRows.length) {
      list.childRows.forEach(item => loop(id, item));
      return;
    }
    if (list.cells && list.cells.length) {
      list.cells.forEach(item => res = res || (item.id == id));
    }
  }
  loop(componentId, row);
  return res;
}

/**
 * 校验当前block内文本型cell的字号|对齐|加粗属性,返回数组长度为1，则block内属性一致，数组长度大于1，则当前block内字体属性不一致
 * @param {*} block 
 * @param {*} propName 
 * @returns string[] 当前block内当前属性所有值（去重）
 */
export function checkProps(rows = [], propName) {
  let res = [];
  function loop(arr) {
    arr.forEach(row => {
      if (row.childRows && row.childRows.length) {
        loop(row.childRows);
      }
      if (row.cells && row.cells.length) {
        row.cells.forEach(item => {
          if (item.type == 1 && item.style) {
            res.push(Number(item.style[propName]));
          }
        });
      }
    });
  }
  loop(rows);
  return union(res);
}