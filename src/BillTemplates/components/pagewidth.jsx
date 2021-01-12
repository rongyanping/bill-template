import React from 'react';
import Cell from './cell';
import Row from './row';
import '../style.less';
// 测试纸张宽度 80 76 58
export default function PageWidth({ width = 80 }) {
  // 80纸 字体 sm:1*1 md:2*2 分别对应字符：48,24--24,12
  const largePageZH = {
    sm: '大店地址这是个门店地址哇址哇这是个门店地址你好哈',
    md: '大迎欢迎欢迎欢迎欢迎欢临',
    md2: '这是个门店地址哇址哇你好',
  };
  const largePageEN = {
    sm: 'abababababababababababababababababababababababac',
    md: 'abababababababababababac'
  };
  // 76纸 42,21--21,10
  const mdPageZH = {
    sm: '中店地址这是个门店地址哇址哇址哇址哇中好测',
    md: '中是个门店地址哇址哇',
  };
  const mdPageEN = {
    sm: 'ababababababababababababababababababababab',
    md: 'ababababababababababa'
  };
  // 58纸 32,16--16,8
  const smPageZH = {
    sm: '小店地址这是个门店地址哇址哇址哇',
    md: '小是个门店地址哇',
  };
  const smPageEN = {
    sm: 'abababababababababababababababab',
    md: 'abababababababab'
  };
  let pageTextZH;
  let pageTextEN;
  switch (width) {
    case 42:
      pageTextZH = { ...mdPageZH };
      pageTextEN = { ...mdPageEN };
      break;
    case 32:
      pageTextZH = { ...smPageZH };
      pageTextEN = { ...smPageEN };
      break;
    default:
      pageTextZH = { ...largePageZH };
      pageTextEN = { ...largePageEN };
  }
  console.log('len---', String(pageTextEN.sm).length, String(pageTextEN.md).length, pageTextZH.sm.length, pageTextZH.md.length);

  return (
    <div style={{ width: '100%' }}>
      <h1>宽度计算</h1>
      <Row>
        <Cell>
          <div className="page-font font-sm">{pageTextZH.sm}我是超出部分</div>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <div className="page-font font-md">{pageTextZH.md}我是超出部分</div>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <div className="page-font font-sm">{pageTextEN.sm}OVERFLOW</div>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <div className="page-font font-md">{pageTextEN.md}OVERFLOW</div>
        </Cell>
      </Row>
    </div>
  );
}
