const { responseWrapper } = require('../../utils');

const queryList = {
  ServingEfficiencyVO: [
    {
      shopId: 34165,
      shopName: 'sdf',
      tradeCount: 76,
      tradeCountChainRatio: 78,
      servingTime: 18,
      servingTimeChainRatio: -78,
      servingAvgTime: 67,
      servingAvgTimeChainRatio: 67,
    },
  ],
};

const queryListDetail = {
  ServingEfficiencyVO: [
    {
      shopId: 34165,
      shopName: '3443',
      servingTime: 1,
      makingTime: '售货单',
      passingTime: '334',
    },
  ],
};

const queryDetail = {
  shopServingEfficiencyList: [
    {
      date: 34165,
      servingTime: 1,
      tradeCount: 111,
      servingAvgTime: '101190926133204574000222',
    },
  ],
};

const router = {
  queryList: {
    method: 'POST',
    path: '/mind/bui/industry/servingEfficiency/queryList',
    container: responseWrapper(queryList),
  },
  queryListDetail: {
    method: 'POST',
    path: '/mind/bui/industry/servingEfficiency/queryListDetail',
    container: responseWrapper(queryListDetail),
  },
  queryDetail: {
    method: 'POST',
    path: '/mind/bui/industry/servingEfficiency/queryDetail',
    container: responseWrapper(queryDetail),
  },
};

module.exports = router;
