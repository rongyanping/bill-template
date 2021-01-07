const { getOperationData, responseWrapper } = require('../../utils');

const queryData = {
  qiniuPath: 'http://7i7ie3.com2.z0.glb.qiniucdn.com',
  logo: [
    {
      id: 689,
      brandIdenty: 6868,
      shopIdenty: 6868,
      multiFileUrl:
        'http://7i7ie3.com2.z0.glb.qiniucdn.com/o_1bvmhhpcu7456no1mt31dmdlho7.jpg',
      sort: 1000,
      fileType: 1,
      carouselInterval: 0,
      groupFlag: 3,
      statusFlag: 1,
      creatorName: 'admin',
      creatorId: 88888926639,
      updatorName: '李正式',
      updatorId: 88888961178,
      serverCreateTime: '2016-07-07 16:12:15',
      serverUpdateTime: '2017-11-24 16:15:56',
      enableFlag: 1,
    },
  ],
};

const router = {
  query: {
    method: 'POST',
    path: '/mind/bui/logo/selectLogo',
    container: responseWrapper(queryData),
  },

  /** url=o_1bo1o6obb8891nnq1e3u1ptq1n4h7.png */
  save: {
    method: 'POST',
    path: '/mind/bui/logo/saveOrUpdateLogo',
    container: responseWrapper(queryData),
  },
  clearLogo: {
    method: 'POST',
    path: '/mind/bui/logo/clearLogo',
    container: getOperationData(),
  },
};
module.exports = router;
