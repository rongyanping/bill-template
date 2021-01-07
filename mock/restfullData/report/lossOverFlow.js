const responseWrapper = require('../../utils/responseWrapper');

const getTotal = {
  shopName: null,
  bizDate: null,
  tradeNo: null,
  tradeId: null,
  shopId: null,
  exemptAmount: 0,
  roundAmount: -1.19,
  depositAmount: 0,
  payOverflowAmount: 101,
  groupOnOverflowAmount: 0,
  cashOverflowAmount: 0,
  paymentOverFlowAmount: null,
  columnList: null,
  totalAmount: 99.81,
};

const getLossOverFlowList = {
  currentPage: 1,
  pageSize: 20,
  totalRows: 1,
  startRow: 0,
  totalPage: 1,
  items: [
    {
      shopName: 'mind-陈某“’%~··`-850018586    ‘',
      bizDate: null,
      tradeNo: null,
      tradeId: null,
      shopId: 850018586,
      exemptAmount: 0,
      roundAmount: -1.19,
      depositAmount: 0,
      payOverflowAmount: 101,
      groupOnOverflowAmount: 0,
      cashOverflowAmount: 0,
      paymentOverFlowAmount: [13, 83, 5],
      columnList: null,
      totalAmount: 99.81,
    },
  ],
  subRows: null,
  brandId: 101575,
  username: null,
  startDate: '2019-06-25',
  endDate: '2019-06-25',
  startTime: null,
  endTime: null,
  shopIds: '810017875,850018391,850018437,850021915,850018586',
  queryType: '1',
  isBrand: null,
  columns: ['15抵扣8元我说呢是啥的啊啊ha(自)', '抵扣100实收为0(自)', '11(自)'],
  groupBy: 'detail.shopId,detail.payModeId',
  tradeIds: null,
  isPage: null,
  timeRanges: null,
};

const getLossOverFlowDetail = {
  currentPage: 1,
  pageSize: 20,
  totalRows: 5,
  startRow: 0,
  totalPage: 1,
  items: [
    {
      shopName: 'mind-陈某“’%~··`-850018586    ‘',
      bizDate: '2019-06-25',
      tradeNo: '101190625110351382000111',
      tradeId: '240066832118120448',
      shopId: null,
      exemptAmount: 0,
      roundAmount: -0.36,
      depositAmount: 0,
      payOverflowAmount: 13,
      groupOnOverflowAmount: 0,
      cashOverflowAmount: 0,
      paymentOverFlowAmount: [13, 0, 0],
      columnList: null,
      totalAmount: 12.64,
    },
    {
      shopName: 'mind-陈某“’%~··`-850018586    ‘',
      bizDate: '2019-06-25',
      tradeNo: '101190625100227451000111',
      tradeId: '240051378322513920',
      shopId: null,
      exemptAmount: 0,
      roundAmount: -0.41,
      depositAmount: 0,
      payOverflowAmount: 0,
      groupOnOverflowAmount: 0,
      cashOverflowAmount: 0,
      paymentOverFlowAmount: [0, 0, 0],
      columnList: null,
      totalAmount: -0.41,
    },
    {
      shopName: 'mind-陈某“’%~··`-850018586    ‘',
      bizDate: '2019-06-25',
      tradeNo: '101190625095921410000111',
      tradeId: '240050597825454080',
      shopId: null,
      exemptAmount: 0,
      roundAmount: 0.3,
      depositAmount: 0,
      payOverflowAmount: 0,
      groupOnOverflowAmount: 0,
      cashOverflowAmount: 0,
      paymentOverFlowAmount: [0, 0, 0],
      columnList: null,
      totalAmount: 0.3,
    },
    {
      shopName: 'mind-陈某“’%~··`-850018586    ‘',
      bizDate: '2019-06-25',
      tradeNo: '101190625110437620000111',
      tradeId: '240067023999139840',
      shopId: null,
      exemptAmount: 0,
      roundAmount: -0.36,
      depositAmount: 0,
      payOverflowAmount: 83,
      groupOnOverflowAmount: 0,
      cashOverflowAmount: 0,
      paymentOverFlowAmount: [0, 83, 0],
      columnList: null,
      totalAmount: 82.64,
    },
    {
      shopName: 'mind-陈某“’%~··`-850018586    ‘',
      bizDate: '2019-06-25',
      tradeNo: '101190625110414727000111',
      tradeId: '240066927882469376',
      shopId: null,
      exemptAmount: 0,
      roundAmount: -0.36,
      depositAmount: 0,
      payOverflowAmount: 5,
      groupOnOverflowAmount: 0,
      cashOverflowAmount: 0,
      paymentOverFlowAmount: [0, 0, 5],
      columnList: null,
      totalAmount: 4.64,
    },
  ],
  subRows: null,
  brandId: 101575,
  username: null,
  startDate: '2019-06-25',
  endDate: '2019-06-25',
  startTime: null,
  endTime: null,
  shopIds: '850018586',
  queryType: '1',
  isBrand: null,
  columns: ['15抵扣8元我说呢是啥的啊啊ha(自)', '抵扣100实收为0(自)', '11(自)'],
  groupBy: 'detail.tradeId,detail.payModeId',
  tradeIds: [
    '240066832118120448',
    '240051378322513920',
    '240050597825454080',
    '240067023999139840',
    '240066927882469376',
  ],
  isPage: null,
  timeRanges: null,
};

const router = {
  getTotal: {
    method: 'POST',
    path: '/mind/bui/report/lossOverFlow/getTotal',
    container: responseWrapper(getTotal),
  },
  getLossOverFlowList: {
    method: 'POST',
    path: '/mind/bui/report/lossOverFlow/getLossOverFlowList',
    container: responseWrapper(getLossOverFlowList),
  },
  getLossOverFlowDetail: {
    method: 'POST',
    path: '/mind/bui/report/lossOverFlow/getLossOverFlowDetail',
    container: responseWrapper(getLossOverFlowDetail),
  },
};

module.exports = router;