const { getOperationData, responseWrapper } = require('../../utils');

const queryData = {
  page: 1,
  total: 10,
  records: 100,
  dataList: [
    {
      id: 15153,
      commercialId: null,
      memoContent: '少盐',
      aliasMemoContent: null,
      memo: null,
      status: null,
      synFlag: null,
      createDateTime: '2017-08-03 10:55:30',
      modifyDateTime: '2017-08-03 10:55:30',
    },
  ],
  userdata: null,
  resMsg: null,
  status: true,
};

queryData.records = 100;

const router = {
  query: {
    method: 'GET',
    path: '/mind/bui/store/memo/query',
    container: responseWrapper(queryData),
  },
  save: {
    method: 'POST',
    path: '/mind/bui/store/memo/save',
    container: getOperationData(),
  },
  update: {
    method: 'POST',
    path: '/mind/bui/store/memo/update',
    container: getOperationData(),
  },
  delete: {
    method: 'POST',
    path: '/mind/bui/store/memo/delete',
    container: getOperationData(),
  },
};
module.exports = router;
