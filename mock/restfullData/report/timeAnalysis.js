const responseWrapper = require('../../utils/responseWrapper');

const getList = {
  total: {
    timeRange: '合计',
    orderCount: 9527,
    totalAmount: 500,
    avgTime: 15000,
    avgPrice: 121212,
  },
  items: [
    {
      timeRange: '00:15~12:15',
      orderCount: 9527,
      totalAmount: 500,
      avgTime: 1512312312,
      avgPrice: 121231232,
    },
    {
      timeRange: '12:15~18:15',
      orderCount: 9527,
      totalAmount: 5100,
      avgTime: 1125,
      avgPrice: 1122,
    },
    {
      timeRange: '20:15~22:15',
      orderCount: 9527,
      totalAmount: 500,
      avgTime: 12225,
      avgPrice: 1245454.21,
    },
  ],
};
const router = {
  getList: {
    method: 'POST',
    path: '/mind/bui/report/timeAnalysis/list',
    container: responseWrapper(getList),
  },
};

module.exports = router;
