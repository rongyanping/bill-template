import React from 'react';
import { formatCellStyle } from '../../common/utils';
import './style.less';

export default function TextCell({
  pageSize = 80,
  type = 4, // 1文字类型 5分隔符 6空白行
  data = null, // 渲染内容
  param = '-', // 分隔符类型
  style = { align: 1, fontSize: 1, fontWeight: 1 },
}) {
  // 样式转换 只对文字类型生效
  const { fontSize, fontWeight, align } = formatCellStyle(style);
  let boxStyle;
  // 渲染内容
  let renderContent = null;
  switch (type) {
    case 1:
      boxStyle = {
        fontSize,
        fontWeight,
        textAlign: align,
      };
      renderContent = data;
      break;
    case 5:
      boxStyle = {
        overflow: 'hidden',
        fontSize: '12px',
        fontFamily: 'Microsoft YaHei',
        whiteSpace: 'nowrap',
      };
      const newPageSize = pageSize === 80 ? 48 : pageSize === 76 ? 42 : 32;
      // 中间部分显示文字 文字要始终居中
      const textLen = data ? data.replace(/[\u0391-\uFFE5]/g, 'aa').length : 0;
      const diff = newPageSize === 48 ? 8 : newPageSize === 42 ? 7 : 6;
      const allLen = newPageSize - textLen + diff;
      const newData = [];
      for (let i = 0; i < allLen; i++) {
        if (i === Math.floor((newPageSize - textLen + diff) / 2) && data) {
          newData.push(data);
        } else {
          newData.push(param);
        }
      }
      renderContent = newData.join('');
      // console.log('len===', renderContent.replace(/[\u0391-\uFFE5]/g, 'aa').length);
      break;
    case 6:
      boxStyle = {
        height: '20px',
      };
      renderContent = null;
      break;
    default:
      return false;
  }
  // console.log('text====937--', data);
  return (
    <div className="text-box" style={boxStyle}>
      {renderContent ? renderContent.replace(/\s/g, String.fromCharCode(8194)) : null}
    </div>
  );
}
