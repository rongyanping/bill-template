const responseWrapper = require('../../utils/responseWrapper');

const queryData = {
  items: [
    {
      brandId: 2312,
      shopId: 810005004,
      shopName: '门店名称1',
      bizDate: '合计',
      dataType: '总收款',
      payMethodId: null,
      payMethodName: null,
      paymentCount: 8,
      incomeCount: 9,
      refundCount: 9,
      receiptsAmount: 800.0,
      shopActualAmount: 8.0,
      storedAndCardAmount: 8.0,
      clearAmount: 8.0,
      bookingAmount: 9.0,
      balanceAmount: 9.0,
      isSumItem: false,
    },
  ],
  total: {
    brandId: 2312,
    shopId: null,
    shopName: null,
    bizDate: '合计',
    dataType: null,
    payMethodId: null,
    payMethodName: null,
    paymentCount: 3,
    incomeCount: 2,
    refundCount: 1,
    receiptsAmount: 300.0,
    shopActualAmount: 1.0,
    storedAndCardAmount: 1.0,
    clearAmount: 2.0,
    bookingAmount: 1.0,
    balanceAmount: 1.0,
    isSumItem: true,
  },
};

const queryDateList = [
  {
    brandId: 2312,
    shopId: 810005004,
    shopName: '门店名称1',
    bizDate: '2019-04-26',
    dataType: '总收款',
    payMethodId: null,
    payMethodName: null,
    paymentCount: 9,
    incomeCount: 9,
    refundCount: 9,
    receiptsAmount: 700.0,
    shopActualAmount: 9.0,
    storedAndCardAmount: 9.0,
    clearAmount: 900,
    bookingAmount: 9.0,
    balanceAmount: 9.0,
    isSumItem: false,
  },
];

const queryDateDetail = [
  {
    brandId: 2312,
    shopId: 810005004,
    shopName: '门店名称1',
    bizDate: '2019-04-26',
    dataType: '店内收款',
    payMethodId: null,
    payMethodName: null,
    paymentCount: 6,
    incomeCount: 6,
    refundCount: 6,
    receiptsAmount: 600.0,
    shopActualAmount: 6.0,
    storedAndCardAmount: 6.0,
    clearAmount: 6.0,
    bookingAmount: 6.0,
    balanceAmount: 6.0,
    isSumItem: false,
  },
];

const queryPaymentDetail = [
  {
    brandId: 2312,
    shopId: 810005004,
    shopName: '门店名称1',
    bizDate: '2019-04-26',
    dataType: '店内收款',
    payMethodId: -3,
    payMethodName: '现金',
    paymentCount: 3,
    incomeCount: 2,
    refundCount: 1,
    receiptsAmount: 300.0,
    shopActualAmount: 1.0,
    storedAndCardAmount: 1.0,
    clearAmount: 2.0,
    bookingAmount: 1.0,
    balanceAmount: 1.0,
    isSumItem: false,
  },
  {
    brandId: 2312,
    shopId: 810005004,
    shopName: '门店名称1',
    bizDate: '2019-04-26',
    dataType: '店内收款',
    payMethodId: -5,
    payMethodName: '微信',
    paymentCount: 3,
    incomeCount: 2,
    refundCount: 1,
    receiptsAmount: 300.0,
    shopActualAmount: 1.0,
    storedAndCardAmount: 1.0,
    clearAmount: 2.0,
    bookingAmount: 1.0,
    balanceAmount: 1.0,
    isSumItem: false,
  },
];

const getSaleData = {
  items: [
    {
      brandId: 2312,
      shopId: 810005004,
      shopName: '绿盒子(亮马桥店)',
      bizDate: '合计',
      shopActualAmount: 100.0,
      shopIncomeAmount: 300.0,
      tradeAmount: 200.0,
      privilegeAmount: 180.0,
      roundingAmount: 20.0,
      exemptAmount: 0.01,
      promotionAmount: 1.0,
      refundDepositAmount: 0.0,
      overflowAmount: 0.01,
      serviceSubsidyAmount: 0.0,
      platformPrivilegeAmount: 0.0,
      platformPromotionAmount: 0.0,
    },
  ],
  total: {
    brandId: 2312,
    shopId: null,
    shopName: '合计',
    bizDate: '合计',
    shopActualAmount: 100.0,
    shopIncomeAmount: 300.0,
    tradeAmount: 200.0,
    privilegeAmount: 180.0,
    roundingAmount: 20.0,
    exemptAmount: 0.01,
    promotionAmount: 1.0,
    refundDepositAmount: 0.0,
    overflowAmount: 0.01,
    serviceSubsidyAmount: 0.0,
    platformPrivilegeAmount: 0.0,
    platformPromotionAmount: 0.0,
  },
};

const getSaleDateList = [
  {
    brandId: 2312,
    shopId: 810005004,
    shopName: '绿盒子(亮马桥店)',
    bizDate: '2019-05-17',
    shopActualAmount: 100.0,
    shopIncomeAmount: 300.0,
    tradeAmount: 200.0,
    privilegeAmount: 180.0,
    roundingAmount: 20.0,
    exemptAmount: 0.01,
    promotionAmount: 1.0,
    refundDepositAmount: 0.0,
    overflowAmount: 0.01,
    serviceSubsidyAmount: 0.0,
    platformPrivilegeAmount: 0.0,
    platformPromotionAmount: 0.0,
  },
  {
    brandId: 2312,
    shopId: 810005004,
    shopName: '绿盒子(亮马桥店)',
    bizDate: '2019-05-18',
    shopActualAmount: 100.0,
    shopIncomeAmount: 300.0,
    tradeAmount: 200.0,
    privilegeAmount: 180.0,
    roundingAmount: 20.0,
    exemptAmount: 0.01,
    promotionAmount: 1.0,
    refundDepositAmount: 0.0,
    overflowAmount: 0.01,
    serviceSubsidyAmount: 0.0,
    platformPrivilegeAmount: 0.0,
    platformPromotionAmount: 0.0,
  },
];

const getSaleDateDetail = {
  items: [
    {
      brandId: 2312,
      shopId: 810005004,
      bizDate: '2019-04-29',
      payMethodId: '-3',
      payMethodName: '现金',
      amount: 300.0,
      paymentCount: 1,
      isSumItem: false,
      dataType: 1,
    },
    {
      brandId: 2312,
      shopId: 810005004,
      bizDate: '2019-04-30',
      payMethodId: null,
      payMethodName: '小计：销售收款',
      netCollectionAmount: 100.0,
      amount: 300.0,
      paymentCount: 1,
      isSumItem: true,
      dataType: 1,
    },
  ],
  total: {
    brandId: 2312,
    shopId: null,
    bizDate: '2019-04-30',
    payMethodId: null,
    payMethodName: '合计',
    netCollectionAmount: 100.0,
    amount: 300.0,
    paymentCount: 1,
    isSumItem: true,
    dataType: null,
  },
};

const getSalePaymentDetail = {
  currentPage: 1,
  pageSize: 20,
  totalPage: 10,
  totalRows: 181,
  items: [
    {
      brandId: 2312,
      shopId: 810005004,
      bizDate: '2019-04-29',
      payMethodId: '-3',
      payMethodName: '现金',
      paymentTime: '2019-04-26 15:23:12',
      amount: 300.0,
      realStoredAmount: 200.0,
      storedSendAmount: 100.0,
      tradeNo: '123',
    },
  ],
};

const router = {
  queryData: {
    method: 'POST',
    path: '/mind/bui/report/newCollection/total/shopList',
    container: responseWrapper(queryData),
  },
  queryDateList: {
    method: 'POST',
    path: '/mind/bui/report/newCollection/total/dateList',
    container: responseWrapper(queryDateList),
  },
  queryDateDetail: {
    method: 'POST',
    path: '/mind/bui/report/newCollection/total/dateDetail',
    container: responseWrapper(queryDateDetail),
  },
  queryPaymentDetail: {
    method: 'POST',
    path: '/mind/bui/report/newCollection/total/paymentDetail',
    container: responseWrapper(queryPaymentDetail),
  },
  getSaleData: {
    method: 'POST',
    path: '/mind/bui/report/newCollection/saleAmount/shopList',
    container: responseWrapper(getSaleData),
  },
  getSaleDateList: {
    method: 'POST',
    path: '/mind/bui/report/newCollection/saleAmount/dateList',
    container: responseWrapper(getSaleDateList),
  },
  getSaleDateDetail: {
    method: 'POST',
    path: '/mind/bui/report/newCollection/saleAmount/dateDetail',
    container: responseWrapper(getSaleDateDetail),
  },
  getSalePaymentDetail: {
    method: 'POST',
    path: '/mind/bui/report/newCollection/saleAmount/paymentDetail',
    container: responseWrapper(getSalePaymentDetail),
  },
};

module.exports = router;
