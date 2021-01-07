const responseWrapper = require('../../utils/responseWrapper');

const getSalesVolume = {
  sumDataMap: {
    map_1: {
      key: '内用总额',
      value: 10000,
    },
    map_2: {
      key: '外卖总额',
      value: 20000,
    },
    map_3: {
      key: '自提总额',
      value: 10000,
    },
    map_4: {
      key: '外送总额',
      value: 20000,
    },
  },
  totalAmount: 60000,
  detailList: [
    {
      shopName: '门店0',
      shopId: 200001,
      brandId: 10001,
      customerAvgPrice: 88,
      tradeCount: 66,
      peopleCount: null,
      saleAmountSum: 25000,
      sumDataMap: {
        map_1: 3000,
        map_2: 5000,
        map_3: 5000,
        map_4: 12000,
      },
    },
    {
      shopName: '门店1',
      shopId: 200002,
      brandId: 10002,
      customerAvgPrice: 89,
      tradeCount: 66,
      peopleCount: null,
      saleAmountSum: 26000,
      sumDataMap: {
        map_1: 3000,
        map_2: 10000,
        map_3: 5000,
        map_4: 8000,
      },
    },
    {
      shopName: '门店2',
      shopId: 200003,
      brandId: 10003,
      customerAvgPrice: 90,
      tradeCount: 66,
      peopleCount: 444,
      saleAmountSum: 9000,
      sumDataMap: {
        map_1: 4000,
        map_2: 5000,
      },
    },
  ],
};
const getPayMethod = {
  data: [
    {
      payMethodId: 111,
      payMethodName: '微信',
      amount: 4000,
      percent: 40,
    },
    {
      payMethodId: 112,
      payMethodName: '支付宝',
      amount: 3000,
      percent: 30,
    },
    {
      payMethodId: 113,
      payMethodName: '现金',
      amount: 1000,
      percent: 10,
    },
    {
      payMethodId: 114,
      payMethodName: '银行卡',
      amount: 1000,
      percent: 10,
    },
    {
      payMethodId: 115,
      payMethodName: '其他',
      amount: 1000,
      percent: 10,
    },
  ],
  detail: [
    {
      payMethodId: 111,
      payMethodName: '微信',
      amount: 4000,
      percent: 40,
    },
    {
      payMethodId: 112,
      payMethodName: '支付宝',
      amount: 3000,
      percent: 30,
    },
    {
      payMethodId: 113,
      payMethodName: '现金',
      amount: 1000,
      percent: 10,
    },
    {
      payMethodId: 114,
      payMethodName: '银行卡',
      amount: 1000,
      percent: 10,
    },
    {
      payMethodId: 115,
      payMethodName: '其他',
      amount: 1000,
      percent: 10,
    },
    {
      payMethodId: 201,
      payMethodName: '合计',
      amount: 10000,
      percent: 100,
    },
  ],
};
const getTradeSource = {
  data: [
    {
      sourceChild: 11,
      sourceChildName: '美团外卖',
      amount: 4000,
      percent: 40,
      tradeCount: 400,
    },
    {
      sourceChild: 12,
      sourceChildName: '饿了么',
      amount: 3000,
      percent: 30,
      tradeCount: 300,
    },
    {
      sourceChild: 13,
      sourceChildName: '微信公众号',
      amount: 1000,
      percent: 10,
      tradeCount: 100,
    },
    {
      sourceChild: 14,
      sourceChildName: 'app',
      amount: 1000,
      percent: 10,
      tradeCount: 100,
    },
    {
      sourceChild: 15,
      sourceChildName: '其他',
      amount: 1000,
      percent: 10,
      tradeCount: 100,
    },
  ],
  detail: [
    {
      sourceChild: 11,
      sourceChildName: '美团外卖',
      amount: 4000,
      percent: 40,
      tradeCount: 400,
    },
    {
      sourceChild: 12,
      sourceChildName: '饿了么',
      amount: 3000,
      percent: 40,
      tradeCount: 300,
    },
    {
      sourceChild: 13,
      sourceChildName: '微信公众号',
      amount: 1000,
      percent: 40,
      tradeCount: 100,
    },
    {
      sourceChild: 14,
      sourceChildName: 'app',
      amount: 1000,
      percent: 40,
      tradeCount: 100,
    },
    {
      sourceChild: 15,
      sourceChildName: '其他',
      amount: 1000,
      percent: 40,
      tradeCount: 100,
    },
    {
      sourceChild: 101,
      sourceChildName: '合计',
      amount: 10000,
      percent: 40,
      tradeCount: 1000,
    },
  ],
};
const getTimeSales = {
  sumDataMap: {
    time_1: {
      key: '早上总额',
      value: 1000,
    },
    time_2: {
      key: '中午总额',
      value: 2000,
    },
    time_3: {
      key: '晚上总额',
      value: 1000,
    },
  },
  totalAmount: 4000,
  detailList: [
    {
      shopName: '门店0',
      shopId: 200001,
      brandId: 10001,
      customerAvgPrice: 88,
      tradeCount: 66,
      peopleCount: 77,
      saleAmountSum: 1600,
      sumDataMap: {
        time_1: 500,
        time_2: 500,
        time_3: 600,
      },
    },
    {
      shopName: '门店1',
      shopId: 200002,
      brandId: 10002,
      customerAvgPrice: 89,
      tradeCount: 66,
      peopleCount: 88,
      saleAmountSum: 1800,
      sumDataMap: {
        time_1: 400,
        time_2: 1000,
        time_3: 400,
      },
    },
    {
      shopName: '门店2',
      shopId: 200003,
      brandId: 10003,
      customerAvgPrice: 90,
      tradeCount: 66,
      peopleCount: 77,
      saleAmountSum: 600,
      sumDataMap: {
        time_1: 100,
        time_2: 500,
      },
    },
  ],
};
const getPeriod = [
  {
    startHours: 5,
    endHours: 10,
  },
  {
    startHours: 10,
    endHours: 16,
  },
  {
    startHours: 16,
    endHours: 5,
  },
];

const router = {
  getSalesVolume: {
    method: 'POST',
    path: '/mind/bui/report/collectivize/saleAmount/query',
    container: responseWrapper(getSalesVolume),
  },
  getPayMethod: {
    method: 'POST',
    path: '/mind/bui/report/collectivize/payMethod/query',
    container: responseWrapper(getPayMethod),
  },
  getTradeSource: {
    method: 'POST',
    path: '/mind/bui/report/collectivize/tradeSource/query',
    container: responseWrapper(getTradeSource),
  },
  getTimeSales: {
    method: 'POST',
    path: '/mind/bui/report/collectivize/periodAmount/query',
    container: responseWrapper(getTimeSales),
  },
  getPeriod: {
    method: 'POST',
    path: '/mind/bui/report/collectivize/periodAmount/periodTimeById',
    container: responseWrapper(getPeriod),
  },
};

module.exports = router;
