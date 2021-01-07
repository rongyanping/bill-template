const { getOperationData, responseWrapper } = require('../../utils');

const queryData = {
  page: 1,
  total: 1,
  records: 2,
  dataList: [
    {
      creatorId: null,
      updaterId: null,
      createTime: null,
      updateTime: '2017-08-24 10:58:34',
      isDelete: null,
      updaterName: null,
      creatorName: null,
      id: 84888,
      deviceName: '打印服务',
      printerDeviceType: '1',
      printerKind: null,
      connectionType: null,
      address: '192.168.1.150',
      brandId: null,
      commercialId: null,
      uuid: null,
      deviceUuid: '93dbb0fe6e4f40c3800f4e888effce64',
      dataVersion: null,
      deviceIdenty: null,
    },
    {
      creatorId: null,
      updaterId: null,
      createTime: null,
      updateTime: '2017-08-28 14:19:35',
      isDelete: null,
      updaterName: 'ag',
      creatorName: null,
      id: 87264,
      deviceName: '一体机打印机18159',
      printerDeviceType: '2',
      printerKind: null,
      connectionType: null,
      address: '192.168.18.204',
      brandId: null,
      commercialId: null,
      uuid: null,
      deviceUuid: '9c0ce535-4e50-44a3-8eba-2551027ae596',
      dataVersion: null,
      deviceIdenty: null,
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
    path: '/mind/bui/store/printer/management/query',
    container: responseWrapper(queryData),
  },
  save: {
    method: 'POST',
    path: '/mind/bui/store/printer/management/save',
    container: getOperationData(),
  },
  update: {
    method: 'POST',
    path: '/mind/bui/store/printer/management/update',
    container: getOperationData(),
  },
  delete: {
    method: 'POST',
    path: '/mind/bui/store/printer/management/delete',
    container: {
      success: true,
      code: '401',
      message: 'Session has been invalidated!',
      data: { ssoServerUrl: 'http://testsso.shishike.com/cas' },
    },
  },
};

module.exports = router;
