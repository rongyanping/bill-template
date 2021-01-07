const responseWrapper = require('../../utils/responseWrapper');

const queryData = {
  //营业收入
  bizIncome: {
    amount: 7373.96,
    count: 203,
    description: '营业收入',
    rate: -38.49,
  },
  storeIncome: {
    amount: 0,
    count: 0,
    description: '储值收款',
    rate: 0,
  },
  amountAccount: {
    amount: -38,
    count: 1,
    description: '挂帐金额',
    rate: -50.67,
  },
  privileges: {
    amount: -848.34,
    count: 54,
    description: '优惠金额',
    rate: -48.42,
  },
  refunds: {
    amount: -38,
    count: 1,
    description: '退款金额',
    rate: -50.67,
  },
  storeUsed: 0,
  storeCustUsed: 0,
  storePrivilegeUsed: 0,
  chargeUp: 0,
  chargeUpCount: 0,
  name: '绿盒子',
  searchDate: '2019-07-26',
  dayOfWeek: '星期五',
};

const getSaleInfo = {
  //销售概况
  totalAmount: 8910.5,
  totalCount: 203,
  items: [
    {
      tradeCount: 1,
      amount: 100,
      title: '16:00 ~ 18:00',
    },
  ],
};

const saleRank = [
  //门店销售排行
  {
    amount: 100,
    shopName: 'XX44X门店',
    sort: 5,
  },
];

const getPaymentAmount = {
  //渠道收款统计
  totalAmount: 100,
  items: [
    {
      percent: 1.2,
      amount: -200,
      title: '第三方订单',
    },
  ],
};

const paymentRank = [
  //门店收款排行统计
  {
    amount: 100,
    shopName: 'XX44X门店',
  },
];

const getSourceChildList = [
  //订单来源分组统计
  {
    amount: 100,
    sourceChild: 181,
    sourceChildName: 'XX454545X来源',
    quantity: 12,
  },
];

const getPaymentModeList = [
  //支付方式分组统计
  {
    amount: 100,
    payModeId: -3,
    payModeName: 'sdf现金',
    quantity: 12,
  },
];

const customerAnalyze = {
  //顾客概况分析
  eatingCount: 10000,
  hereCount: 4000,
  takeawayCount: 4000,
  otherCount: 2000,
  perCustomerPrice: 80,
  customerCountOfPeriod: [
    {
      periodName: '00:00 ~ 02:00',
      hereCount: 1,
      takeawayCount: 2,
      otherCount: 3,
      perCustomerPrice: 55.2,
    },
  ],
  customerCountOfShop: [
    {
      shopName: '顾dddfsd客',
      quantity: 5948,
      shopId: 87987983,
    },
  ],
};

const dishAnalyze = {
  //商品销售排行分析
  hots: [
    {
      skuName: '书亦烧仙草大杯',
      amount: '34427.00',
      quantity: 3285.0,
    },
    {
      skuName: '书亦烧仙草中杯',
      amount: '13830.00',
      quantity: 1455.0,
    },
  ],
  cools: [
    {
      skuName: '书亦君在这里！12345678901有问',
      amount: '0.00',
      quantity: 1.0,
    },
    {
      skuName: '关于不能调整甜度的饮品 看这里哦~',
      amount: '0.00',
      quantity: 1.0,
    },
  ],
  midTypeDishes: [
    {
      skuName: '外部商品',
      amount: '66884.94',
      quantity: 7102.0,
    },
    {
      skuName: '热销排行榜.',
      amount: '71949.00',
      quantity: 6671.0,
    },
  ],
};
const router = {
  queryData: {
    method: 'POST',
    path: '/mind/bui/report/overviewBusiness/queryList',
    container: responseWrapper(queryData),
  },
  getSaleInfo: {
    method: 'POST',
    path: '/mind/bui/report/overviewBusiness/getSaleInfo',
    container: responseWrapper(getSaleInfo),
  },
  saleRank: {
    method: 'POST',
    path: '/mind/bui/report/overviewBusiness/saleRank',
    container: responseWrapper(saleRank),
  },
  getPaymentAmount: {
    method: 'POST',
    path: '/mind/bui/report/overviewBusiness/getPaymentAmount',
    container: responseWrapper(getPaymentAmount),
  },
  paymentRank: {
    method: 'POST',
    path: '/mind/bui/report/overviewBusiness/paymentRank',
    container: responseWrapper(paymentRank),
  },
  getSourceChildList: {
    method: 'POST',
    path: '/mind/bui/report/overviewBusiness/getSourceChildList',
    container: responseWrapper(getSourceChildList),
  },
  getPaymentModeList: {
    method: 'POST',
    path: '/mind/bui/report/overviewBusiness/getPaymentModeList',
    container: responseWrapper(getPaymentModeList),
  },
  customerAnalyze: {
    method: 'POST',
    path: '/mind/bui/report/overviewBusiness/customerAnalyze',
    container: responseWrapper(customerAnalyze),
  },
  dishAnalyze: {
    method: 'POST',
    path: '/mind/bui/report/overviewBusiness/dishAnalyze',
    container: responseWrapper(dishAnalyze),
  },
};

module.exports = router;
