const { getOperationData, responseWrapper } = require('../../utils');

const queryData = {
  page: 1,
  total: 1,
  records: 1,
  dataList: [
    {
      id: 3298,
      name: '打印内容测试',
      content: '打印内容测试',
      createdatetime: '2017-09-07 17:42:17',
      modifydatetime: '2017-09-07 17:42:17',
      status: 0,
      commercialid: 810015598,
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
    path: '/mind/bui/store/printer/content/query',
    container: responseWrapper(queryData),
  },
  save: {
    method: 'POST',
    path: '/mind/bui/store/printer/content/save',
    container: getOperationData(),
  },
  update: {
    method: 'POST',
    path: '/mind/bui/store/printer/content/update',
    container: getOperationData(),
  },
  delete: {
    method: 'POST',
    path: '/mind/bui/store/printer/content/delete',
    container: getOperationData(),
  },
};

module.exports = router;
