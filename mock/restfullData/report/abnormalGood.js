const responseWrapper = require('../../utils/responseWrapper');

const getList = {
  totalQuantity: 200,
  totalAmount: 2000,
  item: [
    {
      relatedTradeCount: 50,
      skuName: '商品1',
      skuOriginName: '商品21',
      dishCode: 'NJJ456546541',
      type: '默认1',
      invalidQuantity: 50,
      invalidAmount: 500,
      uuid: 9527,
    },
    {
      relatedTradeCount: 50,
      skuName: '商品2',
      skuOriginName: '商品22',
      dishCode: 'NJJ456546542',
      type: '默认2',
      invalidQuantity: 50,
      invalidAmount: 500,
      uuid: 9520,
    },
    {
      relatedTradeCount: 50,
      skuName: '商品3',
      skuOriginName: '商品23',
      dishCode: 'NJJ456546543',
      type: '默认3',
      invalidQuantity: 100,
      invalidAmount: 1000,
      uuid: 9529,
    },
  ],
};

const getDetailList = {
  totalQuantity: 200,
  totalAmount: 2000,
  item: [
    {
      invalidTime: '2019-12-31 00:01:23',
      invalidQuantity: 50,
      invalidAmount: 500,
      invalidReason: '理由',
      tradeNo: '98798798456546541',
      tradeType: '订单类型',
      tradeTime: '2019-12-31 00:01:23',
      tableNo: '01',
      tradeId: '54646546666',
      operator: '9527',
    },
    {
      invalidTime: '2019-12-31 00:01:23',
      invalidQuantity: 50,
      invalidAmount: 500,
      invalidReason: '理由2',
      tradeNo: '98798798456546541',
      tradeType: '订单类型2',
      tradeTime: '2019-12-31 00:01:23',
      tableNo: '061',
      tradeId: '54646546666',
      operator: '955527',
    },
    {
      invalidTime: '2019-12-30 00:01:23',
      invalidQuantity: 50,
      invalidAmount: 500,
      invalidReason: '理由3',
      tradeNo: '987987456546541',
      tradeType: '订单类型1',
      tradeTime: '2019-12-30 00:01:23',
      tableNo: '051',
      tradeId: '54646546666',
      operator: '95257',
    },
  ],
  reasonChart: [
    {
      reasonContent: '看了九分裤世纪东方',
      reasonCnt: 5465,
      reasonId: 546,
      reasonRate: 0.5,
    },
    {
      reasonContent: '手机端发挥空间阿萨德',
      reasonCnt: 5465,
      reasonId: 546,
      reasonRate: 0.5,
    },
  ],
};
const router = {
  getList: {
    method: 'POST',
    path: '/mind/bui/report/abnormalGood/list',
    container: responseWrapper(getList),
  },
  getDetailList: {
    method: 'POST',
    path: '/mind/bui/report/abnormalGood/detailList',
    container: responseWrapper(getDetailList),
  },
};

module.exports = router;
