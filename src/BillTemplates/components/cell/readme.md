### 票据模板基础单元--cell

#### API

属性 | 说明 | 类型| 是否必需 | 默认值
----|-----|------|------|------
| width | 单元格占当前行百分比 | number| 是 | 100 |
| parentWidth | 单元格父级宽度 | number| 是 |  |
| data | 单元格数据源 | object| 否 |  |
| resizeable | 宽度是否可调整 | boolean| 否 | false |
| onResize | 宽度调整后触发 | () => void| 否 |  |
| axis | 调整方向 | 'x' 'y' 'both' 'none'| 否 | 'none' |
| canDrag | 是否可拖拽 | boolean| 否 | false |
| rowIndex | 当前row序号 | number| 是 |  |
| rowId | 当前row id | string| 是 |  |
| cellIndex | 当前cell序号 | number| 是 |  |
| brother | 当前row内几个cell | number| 是 |  |