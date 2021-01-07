const responseWrapper = require('../../utils/responseWrapper');

const queryList = {
  items: [
    {
      importReportAmount: 0,
      importReportCount: 0,
      source: 16,
      sourceName: '饿了么',
      thirdReportAmount: 0,
      thirdReportCount: 0,
      totalAmount: 0,
      totalCount: 0,
    },
    {
      importReportAmount: 0,
      importReportCount: 0,
      source: 18,
      sourceName: '美团',
      thirdReportAmount: 0,
      thirdReportCount: 0,
      totalAmount: 0,
      totalCount: 0,
    },
  ],
  total: {
    importReportAmount: 0,
    importReportCount: 0,
    sourceName: '实收汇总',
    thirdReportAmount: 0,
    thirdReportCount: 0,
    totalAmount: 0,
    totalCount: 0,
  },
};

const router = {
  queryList: {
    method: 'POST',
    path: '/mind/bui/report/thirdDifferences/getData',
    container: responseWrapper(queryList),
  },
};

module.exports = router;
