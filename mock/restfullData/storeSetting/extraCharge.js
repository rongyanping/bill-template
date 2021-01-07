const { getOperationData, responseWrapper } = require('../../utils');

const queryData = {
  page: 1,
  total: 5,
  records: 50,
  dataList: [
    {
      serverCreateTime: '2016-11-29 14:07:30',
      serverUpdateTime: '2017-06-06 10:40:46',
      creatorId: -1,
      creatorName: 'system',
      updatorId: -1,
      updatorName: 'system',
      statusFlag: 1,
      id: 41146,
      name: '配送费(允许打折)',
      code: 'PSF',
      calcWay: 3,
      content: '5.00',
      minConsume: null,
      shopIdenty: 810015597,
      brandIdenty: 11476,
      deleteFlag: 2,
      orderFlag: 1,
      enableFlag: 1,
      discountFlag: 1,
      flag: false,
      isFuzzy: null,
    },
    {
      serverCreateTime: '2016-11-29 14:07:30',
      serverUpdateTime: '2016-11-29 14:07:30',
      creatorId: -1,
      creatorName: 'system',
      updatorId: -1,
      updatorName: 'system',
      statusFlag: 1,
      id: 41145,
      name: '餐盒费',
      code: 'CHF',
      calcWay: 3,
      content: '0.00',
      minConsume: null,
      shopIdenty: 810015597,
      brandIdenty: 11476,
      deleteFlag: 2,
      orderFlag: 1,
      enableFlag: 1,
      discountFlag: 2,
      flag: true,
      isFuzzy: null,
    },
    {
      serverCreateTime: '2016-11-30 23:32:22',
      serverUpdateTime: '2017-06-06 10:41:02',
      creatorId: 88888970745,
      creatorName: 'admin',
      updatorId: 88888970745,
      updatorName: 'admin',
      statusFlag: 1,
      id: 41159,
      name: '油碟费（允许打折）',
      code: '090',
      calcWay: 2,
      content: '5.00',
      minConsume: null,
      shopIdenty: 810015597,
      brandIdenty: 11476,
      deleteFlag: 1,
      orderFlag: 1,
      enableFlag: 1,
      discountFlag: 1,
      flag: false,
      isFuzzy: null,
    },
    {
      serverCreateTime: '2016-12-05 16:46:17',
      serverUpdateTime: '2017-06-06 10:41:14',
      creatorId: 88888961178,
      creatorName: '李正式',
      updatorId: 88888961178,
      updatorName: '李正式',
      statusFlag: 1,
      id: 41177,
      name: '大鸡腿（不打折）',
      code: 'KFC',
      calcWay: 2,
      content: '2.00',
      minConsume: null,
      shopIdenty: 810015597,
      brandIdenty: 11476,
      deleteFlag: 1,
      orderFlag: 1,
      enableFlag: 1,
      discountFlag: 2,
      flag: false,
      isFuzzy: null,
    },
    {
      serverCreateTime: '2017-06-19 15:19:08',
      serverUpdateTime: '2017-07-12 16:23:13',
      creatorId: 88888970745,
      creatorName: 'admin',
      updatorId: 88888970745,
      updatorName: 'admin',
      statusFlag: 1,
      id: 42051,
      name: '自助餐超时费',
      code: 'ZFCCSF',
      calcWay: 1,
      content: '10.00',
      minConsume: null,
      shopIdenty: 810015597,
      brandIdenty: 11476,
      deleteFlag: 1,
      orderFlag: 1,
      enableFlag: 1,
      discountFlag: 1,
      flag: false,
      isFuzzy: null,
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
    path: '/mind/bui/store/extraCharge/query',
    container: responseWrapper(queryData),
  },
  save: {
    method: 'POST',
    path: '/mind/bui/store/extraCharge/save',
    container: getOperationData(),
  },
  update: {
    method: 'POST',
    path: '/mind/bui/store/extraCharge/update',
    container: getOperationData(),
  },
  delete: {
    method: 'POST',
    path: '/mind/bui/store/extraCharge/delete',
    container: getOperationData(),
  },
  isNotExistName: {
    method: 'POST',
    path: '/mind/bui/store/extraCharge/isNotExistName',
    container: getOperationData(),
  },
  isNotExistCode: {
    method: 'POST',
    path: '/mind/bui/store/extraCharge/isNotExistCode',
    container: getOperationData(),
  },
};
module.exports = router;