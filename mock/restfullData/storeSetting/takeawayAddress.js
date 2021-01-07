const { getOperationData, responseWrapper } = require('../../utils');

const listInfo = {
  page: 1,
  total: 1,
  records: 2,
  dataList: [
    {
      id: '1001532',
      label: 'test222',
      synFlag: null,
      commercialId: 810015597,
      createDateTime: '2018-02-27 13:30:16',
      modifyDateTime: '2018-02-27 13:30:16',
      parentId: 0,
    },
    {
      id: '1001530',
      label: 'hello',
      synFlag: null,
      commercialId: 810015597,
      createDateTime: '2018-02-26 16:22:09',
      modifyDateTime: '2018-02-26 16:24:28',
      parentId: 0,
    },
  ],
  userdata: null,
  resMsg: null,
  status: true,
};

const router = {
  query: {
    method: 'POST',
    path: '/mind/bui/takeaway/address/query',
    container: responseWrapper(listInfo),
  },
  add: {
    method: 'POST',
    path: '/mind/bui/takeaway/address/add',
    container: getOperationData(),
  },
  delete: {
    method: 'POST',
    path: '/mind/bui/takeaway/address/delete',
    container: getOperationData(),
  },
};
module.exports = router;
