const responseWrapper = require('../../utils/responseWrapper');

const getList = {
  totalAmount: 95959,
  totalCount: 5656,
  item: [
    {
      name: '珍珠',
      list: [
        {
          shopName: '合计',
          saleCount: 53396,
          saleAmount: 95539,
          saleAmountRate: 24,
        },
        {
          shopName: '门店1',
          saleCount: 53396,
          saleAmount: 95539,
          saleAmountRate: 24,
        },
      ],
    },
    {
      name: '布丁',
      list: [
        {
          shopName: '合计',
          saleCount: 53396,
          saleAmount: 95539,
          saleAmountRate: 24,
        },
        {
          shopName: '门店1',
          saleCount: 53396,
          saleAmount: 95539,
          saleAmountRate: 24,
        },
      ],
    },
  ],
};

const getIngredients = [
  {
    id: 254848,
    name: '珍珠',
  },
  {
    id: 565659,
    name: '布丁',
  },
  {
    id: 5656593,
    name: '布丁2',
  },
];

const router = {
  getList: {
    method: 'POST',
    path: '/mind/bui/industry/ingredientsSales/getList',
    container: responseWrapper(getList),
  },
  getIngredients: {
    method: 'POST',
    path: '/mind/bui/industry/ingredientsSales/getIngredients',
    container: responseWrapper(getIngredients),
  },
};

module.exports = router;
