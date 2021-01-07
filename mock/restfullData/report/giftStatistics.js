const responseWrapper = require('../../utils/responseWrapper');

const complimentary = {
  quantity: 9595,
  amount: 99879.0,
};

const queryList = {
  currentPage: 1,
  pageSize: 20,
  totalPage: 10,
  totalRows: 181,
  items: [
    {
      dishTypeName: '包装包',
      dishTypeCode: 'MST020',
      skuUuid: '1a4ef0a249934cfdbe260a25ce930de6',
      dishCode: 'SKU1553',
      dishName: '原味方包',
      unit: '个',
      quantity: 23,
      dishAmount: 115,
      dishId: '151749768568587264',
    },
  ],
};

const queryDetail = {
  currentPage: 1,
  pageSize: 20,
  totalPage: 10,
  totalRows: 181,
  items: [
    {
      dishTypeName: '包装包',
      dishTypeCode: 'MST020',
      skuUuid: '1a4ef0a249934cfdbe260a25ce930de6',
      dishCode: 'SKU1553',
      dishName: '原味方包',
      unit: '个',
      quantity: 1,
      dishAmount: 5,
      dishId: '151749768568587264',
      shopId: 810199478,
      shopName: 'HJMY万科店',
      tradeId: '259432771701409792',
      tradeNo: '101190817205628738111111',
      optName: '万科店收银',
      reason: null,
      optTime: '2019-08-17 21:33:12',
      tableName: null,
      areaName: null,
    },
  ],
};

const router = {
  complimentary: {
    method: 'POST',
    path: '/mind/bui/report/giftStatistics/complimentary',
    container: responseWrapper(complimentary),
  },
  queryList: {
    method: 'POST',
    path: '/mind/bui/report/giftStatistics/complimentary/queryList',
    container: responseWrapper(queryList),
  },
  queryDetail: {
    method: 'POST',
    path: '/mind/bui/report/giftStatistics/complimentary/queryDetail',
    container: responseWrapper(queryDetail),
  },
};

module.exports = router;
