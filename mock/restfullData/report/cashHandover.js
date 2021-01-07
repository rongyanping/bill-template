const responseWrapper = require('../../utils/responseWrapper');

const list = {
  cashHandoverList: [
    {
      bookAmount5: 0,
      bookAmount3: 0,
      diffTime: '23时43分04秒',
      bookAmount4: 0,
      bookAmount1: 0,
      totalDiffAmount: 0,
      totalActualAmount: 7121.8,
      totalCount: 115,
      cashCount: 23,
      cashBoxAmount: 1000,
      serverCreateTime: '2019-05-24 21:03:20',
      actualAmount5: 0,
      actualAmount4: 0,
      actualAmount3: 330,
      amount5: 0,
      amount4: 0,
      actualAmount1: 3487.8,
      amount3: 330,
      actualAmount0: 1312,
      amount1: 3487.8,
      amount0: 1312,
      bookAmount0: 0,
      startTime: '2019-05-23 21:01:21',
      id: '228622287603035136',
      totalBookAmount: 0,
      commercialName: '绿盒子(亮马桥店)',
      diffAmount5: 0,
      amount: 992,
      handoverUserName: '王会军',
      bookAmount: 0,
      actualAmount: 1992,
      diffAmount: 0,
      diffAmount0: 0,
      diffAmount1: 0,
      diffAmount4: 0,
      diffAmount3: 0,
      totalAmount: 6121.8,
      cashCount5: 0,
      cashCount4: 0,
      creditNum: 0,
      endTime: '2019-05-24 20:44:25',
      cashCount3: 1,
      creditAmount: 0,
      shop_identy: 810005004,
      cashCount1: 65,
      cashCount0: 26,
    },
  ],
  payModeList: [
    {
      payModeId: -6,
      payModeName: '支付宝',
    },
  ],
};

const getCashHandoverArchiveTime = '2019-11-06';

const router = {
  list: {
    method: 'POST',
    path: '/mind/bui/report/cashHandover/list',
    container: responseWrapper(list),
  },
  getCashHandoverArchiveTime: {
    method: 'POST',
    path: '/mind/bui/report/cashHandover/getCashHandoverArchiveTime',
    container: responseWrapper(getCashHandoverArchiveTime),
  },
};

module.exports = router;
