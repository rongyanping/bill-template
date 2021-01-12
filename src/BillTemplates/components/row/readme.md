### 票据模板基础单元--row

#### API

属性 | 说明 | 类型| 是否必需 | 默认值
----|-----|------|------|------
| activeRowId | 当前选择的rowId | string| 是 | '' |
| data | 当前row数据源 | object| 是 | {} |
| index | 当前row排序号 | number| 是 |  |
| onClick | 当前row点击回调 | ({ row_id, index }) => void| 是 |  |
| isEdit | 当前处于编辑状态 | boolean | 是 |  |
| onCellResize | row内cell宽度调整后回调 | boolean | 是 |  |