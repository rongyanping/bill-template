const responseWrapper = require('../../utils/responseWrapper');

const getTableList = {
  list: [
    {
      tableType: 4,
      tableTypeName: '4人桌',
      saleAmount: 358,
      discountAmount: -152,
      actualAmount: 206,
      refundAmount: 0,
      tableCount: 13,
      openTableCount: 12,
      openTableRate: '92.31%',
      tableAvg: 17.17,
      diningCount: 48,
      perAmount: 4.29,
      turnoverRate: '0.00%',
      billAmount: 0,
      tableStatus: null,
      areaStatus: null,
    },
  ],
  msg: '',
};

const getTableDetail = {
  total: {
    tableId: null,
    areaName: null,
    tableName: null,
    tableTypeName: null,
    saleAmount: 358,
    discountAmount: -152,
    actualAmount: 206,
    refundAmount: 0,
    orderCount: 12,
    orderAvg: 17.17,
    diningCount: 48,
    perAmount: 4.29,
    billAmount: 0,
    tableStatus: null,
    areaStatus: null,
  },
  detail: [
    {
      tableId: '108255561195213824',
      areaName: '大厅区',
      tableName: '桌台001',
      tableTypeName: '4人桌',
      saleAmount: 29,
      discountAmount: 0,
      actualAmount: 29,
      refundAmount: 0,
      orderCount: 1,
      orderAvg: 29,
      diningCount: 4,
      perAmount: 7.25,
      billAmount: 0,
      tableStatus: 0,
      areaStatus: 0,
    },
    {
      tableId: '108255561228768256',
      areaName: '大厅区',
      tableName: '桌台003',
      tableTypeName: '4人桌',
      saleAmount: 204,
      discountAmount: -102,
      actualAmount: 102,
      refundAmount: 0,
      orderCount: 6,
      orderAvg: 17,
      diningCount: 24,
      perAmount: 4.25,
      billAmount: 0,
      tableStatus: 0,
      areaStatus: 0,
    },
    {
      tableId: '108255561258128384',
      areaName: '大厅区',
      tableName: '桌台005',
      tableTypeName: '4人桌',
      saleAmount: 25,
      discountAmount: 0,
      actualAmount: 25,
      refundAmount: 0,
      orderCount: 1,
      orderAvg: 25,
      diningCount: 4,
      perAmount: 6.25,
      billAmount: 0,
      tableStatus: 0,
      areaStatus: 0,
    },
    {
      tableId: '108255561283294208',
      areaName: '大厅区',
      tableName: '桌台007',
      tableTypeName: '4人桌',
      saleAmount: 100,
      discountAmount: -50,
      actualAmount: 50,
      refundAmount: 0,
      orderCount: 4,
      orderAvg: 12.5,
      diningCount: 16,
      perAmount: 3.13,
      billAmount: 0,
      tableStatus: 0,
      areaStatus: 0,
    },
  ],
};

const getAreaData = [
  {
    creatorId: 99999999,
    updaterId: 99999999,
    createTime: '2018-06-26 17:28:57',
    updateTime: '2018-06-26 17:28:57',
    isDelete: 0,
    updaterName: null,
    creatorName: null,
    id: '108255561178436608',
    areaName: '大厅区',
    areaCode: '101',
    isSmoking: '1',
    floor: 1,
    memo: '系统生成',
    brandId: 32301,
    commercialId: 810165801,
    tableTypeId: null,
  },
];

const router = {
  getTableList: {
    method: 'POST',
    path: '/mind/bui/report/tableInformation/getTableList',
    container: responseWrapper(getTableList),
  },
  getTableDetail: {
    method: 'POST',
    path: '/mind/bui/report/tableInformation/getTableDetail',
    container: responseWrapper(getTableDetail),
  },
  getAreaData: {
    method: 'POST',
    path: '/mind/bui/report/tableInformation/getAreaData',
    container: responseWrapper(getAreaData),
  },
};

module.exports = router;
