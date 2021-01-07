const responseWrapper = require('../../utils/responseWrapper');

const getData = {
  currentPage: 1, // 当前页
  items: [
    {
      serverUpdateTime: '2020-01-06 11:08:53',
      tradeNo: '101200106104403623000001',
      depositPay: 12,
      depositReturn: -4,
      depositMore: 8,
      userName: null,
      reason: null,
    },
  ],
  total: {
    totalDepositMore: 0,
    totalDepositRefund: 0,
    totalTrade: 0,
    totalDepositPay: 0,
  },
  pageSize: 20, // 每页条数
  totalPage: 3, // 总页数
  totalRows: 58, // 总条数
};

const router = {
  getData: {
    method: 'POST',
    path: '/mind/bui/report/depositReport/getList',
    container: responseWrapper(getData),
  },
};

module.exports = router;
