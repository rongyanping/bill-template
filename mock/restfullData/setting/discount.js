const { getOperationData } = require('../../utils');

const queryData = {
  success: true,
  code: '200',
  message: 'success',
  data: {
    page: 1,
    total: 2,
    records: 14,
    dataList: [
      {
        creatorId: 88888900769,
        updaterId: 88888913630,
        createTime: '2016-03-17 11:30:58',
        updateTime: '2017-05-18 12:34:20',
        isDelete: null,
        updaterName: 'admin',
        creatorName: 'my',
        id: 56,
        brandId: 3268,
        name: '单商品折让',
        nameTwo: '单商品折让',
        type: 4,
        content: 500.0,
        unit: '元',
        statusFlag: 1,
        enabledFlag: 1,
        isSelcted: 2,
        templateIds: null,
      },
    ],
    userdata: null,
    resMsg: null,
    status: true,
  },
};

/**
 *
 POST /bui/discountManage/discount/initLock
 停用初始化数据
 GET /bui/discountManage/discount/isNotExistName
 判断名称是否重复
 POST /bui/discountManage/discount/lock
 停用折扣
 GET /bui/discountManage/discount/query
 查询折扣列表数据
 POST /bui/discountManage/discount/save
 新建折扣
 POST /bui/discountManage/discount/unlock
 启用折扣
 POST /bui/discountManage/discount/update
 更新折扣
 */
const router = {
  initLock: {
    method: 'POST',
    path: '/mind/bui/discountManage/discount/initLock',
    container: getOperationData(),
  },
  isNotExistName: {
    method: 'GET',
    path: '/mind/bui/discountManage/discount/isNotExistName',
    container: queryData,
  },
  lock: {
    method: 'POST',
    path: '/mind/bui/discountManage/discount/lock',
    container: getOperationData(),
  },
  query: {
    method: 'GET',
    path: '/mind/bui/discountManage/discount/query',
    container: queryData,
  },
  save: {
    method: 'POST',
    path: '/mind/bui/discountManage/discount/save',
    container: getOperationData(),
  },
  unlock: {
    method: 'POST',
    path: '/mind/bui/discountManage/discount/unlock',
    container: getOperationData(),
  },
  update: {
    method: 'POST',
    path: '/mind/bui/discountManage/discount/update',
    container: getOperationData(),
  },
};
module.exports = router;
