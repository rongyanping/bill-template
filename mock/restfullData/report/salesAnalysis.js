const responseWrapper = require('../../utils/responseWrapper');

const queryList = {
  currentSaleTrend: [
    {
      name: '招牌虾肉蒸饺6只',
      sales: '16.00',
      selectRate: '0.67',
      increaseSelectRate: '-0.55',
    },
  ],
  previousSaleTrend: [
    {
      name: '招牌虾肉蒸饺6只',
      sales: '16.00',
      selectRate: '1.50',
      increaseSelectRate: '',
    },
  ],
  items: [
    {
      dishBrandId: 138947,
      dishName: '招牌虾肉蒸饺6只',
      middleClassId: 5973,
      middleClassName: '蒸饺',
      largeClassId: 5968,
      largeClassName: '销售菜品',
      currentAveragePrice: '16.00',
      currentSelectRate: '0.67',
      previousSelectRate: '1.50',
      previousAveragePrice: '16.00',
      currentQty: 2,
      currentAmount: 32,
      previousQty: 5,
      previousAmount: 80,
      increaseQty: -3,
      increaseAmount: -48,
      increaseQtyRate: '-60.00',
      increaseAmountRate: '-60.00',
      increaseSelectRate: '-0.55',
    },
  ],
};

const router = {
  queryList: {
    method: 'POST',
    path: '/mind/bui/report/salesAnalysis/queryList',
    container: responseWrapper(queryList),
  },
};

module.exports = router;
