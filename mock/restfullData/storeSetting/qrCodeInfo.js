const { getOperationData, responseWrapper } = require('../../utils');

const queryData = {
  page: 1,
  total: 1,
  records: 5,
  dataList: [
    {
      id: 3970,
      name: '前台0',
      type: 3,
      image: null,
      content: '前台二维码',
      createdatetime: '2017-08-03 17:25:52',
      modifydatetime: '2017-08-03 17:25:52',
      status: 0,
      commercialid: 810015597,
    },
    {
      id: 3971,
      name: '前台1',
      type: 3,
      image: null,
      content: '前台二维码',
      createdatetime: '2017-08-03 17:25:52',
      modifydatetime: '2017-08-03 17:25:52',
      status: 0,
      commercialid: 810015597,
    },
    {
      id: 3972,
      name: '前台2',
      type: 3,
      image: null,
      content: '前台二维码',
      createdatetime: '2017-08-03 17:25:52',
      modifydatetime: '2017-08-03 17:25:52',
      status: 0,
      commercialid: 810015597,
    },
    {
      id: 3973,
      name: '前台3',
      type: 3,
      image: null,
      content: '前台二维码',
      createdatetime: '2017-08-03 17:25:52',
      modifydatetime: '2017-08-03 17:25:52',
      status: 0,
      commercialid: 810015597,
    },
    {
      id: 3974,
      name: '前台4',
      type: 3,
      image: null,
      content:
        '前台二维码前台二维码前台二维码前台二维码前台二维码前台二维码前台二维码前台二维码....前台二维码前台二维码前台二维码前台二维码..',
      createdatetime: '2017-08-03 17:25:52',
      modifydatetime: '2017-08-03 17:25:52',
      status: 0,
      commercialid: 810015597,
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
    path: '/mind/bui/store/qrcodeinfo/query',
    container: responseWrapper(queryData),
  },
  save: {
    method: 'POST',
    path: '/mind/bui/store/qrcodeinfo/save',
    container: getOperationData(),
  },
  update: {
    method: 'POST',
    path: '/mind/bui/store/qrcodeinfo/update',
    container: getOperationData(),
  },
  delete: {
    method: 'POST',
    path: '/mind/bui/store/qrcodeinfo/delete',
    container: {
      success: true,
      code: '401',
      message: 'Session has been invalidated!',
      data: { ssoServerUrl: 'http://testsso.shishike.com/cas' },
    },
  },
};
module.exports = router;
