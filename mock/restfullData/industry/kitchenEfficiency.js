const { responseWrapper } = require('../../utils');

const queryList = {
  tradeSummary: {
    avgTime: 27,
    count: 12,
    totalTime: 234,
  },
  dishSummary: {
    avgTime: 2.2,
    count: 123,
    totalTime: 234,
  },
  dishMakeSummary: {
    avgTime: 1.4,
    count: 123,
    totalTime: 134,
  },
  dishPassSummary: {
    avgTime: 0.8,
    count: 123,
    totalTime: 100,
  },
  dishDetails: [
    {
      name: 'string',
      avgTime: 1.8,
      count: 8,
      totalTime: 0.95,
      waitTime: 1.21,
      matchTime: 0.31,
      makeTime: 0.72,
      passTime: 0.89,
    },
  ],
  makeWindowDetails: [
    {
      name: 'string',
      avgTime: 1.33,
      count: 6,
      totalTime: 0.71,
      waitTime: 0.3,
      matchTime: 0.03,
      makeTime: 0,
      proportion: 1.65,
    },
  ],
  passWindowDetails: [
    {
      name: 'string',
      avgTime: 0.8,
      count: 123,
      totalTime: 100,
    },
  ],
};

const router = {
  queryList: {
    method: 'POST',
    path: '/mind/bui/industry/kitchenEfficiency/queryList',
    container: responseWrapper(queryList),
  },
};

module.exports = router;
