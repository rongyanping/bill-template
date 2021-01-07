const { getOperationData } = require('../../utils');

const queryData = {
  success: true,
  code: '200',
  message: 'success',
  data: {
    page: 1,
    total: 2,
    records: 11,
    dataList: [
      {
        creatorId: 88888900769,
        updaterId: 88888900774,
        createTime: '2016-03-17 10:54:10',
        updateTime: '2016-06-01 14:39:36',
        isDelete: null,
        updaterName: 'admin',
        creatorName: 'my',
        id: 19,
        brandId: 3268,
        name: '默认范本',
        discountCode: 'MRMB',
        statusFlag: 1,
        enabledFlag: 1,
        isSelcted: 2,
        discountIds: null,
        commercialIds: null,
        isExistCommercial: 1,
      },
    ],
    userdata: null,
    resMsg: null,
    status: true,
  },
};

/**
 *
 POST /bui/discountManage/discountTemplate/delete
 删除折扣范本
 GET /bui/discountManage/discountTemplate/isNotExistName
 判断折扣范本名称是否重复
 GET /bui/discountManage/discountTemplate/isNotExistTemplateCode
 判断编码是否重复
 GET /bui/discountManage/discountTemplate/query
 查询折扣范本列表数据
 POST /bui/discountManage/discountTemplate/save
 新建折扣范本
 POST /bui/discountManage/discountTemplate/update
 更新折扣范本
 POST /bui/discountManage/discountTemplate/updateCommercial
 更新折扣范本关联的门店
 POST /bui/discountManage/discountTemplate/updateDiscount
 更新折扣范本关联的折扣
 */
const router = {
  delete: {
    method: 'POST',
    path: '/mind/bui/discountManage/discountTemplate/delete',
    container: getOperationData(),
  },
  isNotExistName: {
    method: 'GET',
    path: '/mind/bui/discountManage/discountTemplate/isNotExistName',
    container: getOperationData(),
  },
  isNotExistTemplateCode: {
    method: 'GET',
    path: '/mind/bui/discountManage/discountTemplate/isNotExistTemplateCode',
    container: getOperationData(),
  },
  query: {
    method: 'GET',
    path: '/mind/bui/discountManage/discountTemplate/query',
    container: queryData,
  },
  save: {
    method: 'POST',
    path: '/mind/bui/discountManage/discountTemplate/save',
    container: getOperationData(),
  },
  update: {
    method: 'POST',
    path: '/mind/bui/discountManage/discountTemplate/update',
    container: getOperationData(),
  },
  updateCommercial: {
    method: 'POST',
    path: '/mind/bui/discountManage/discountTemplate/updateCommercial',
    container: getOperationData(),
  },
  updateDiscount: {
    method: 'POST',
    path: '/mind/bui/discountManage/discountTemplate/updateDiscount',
    container: getOperationData(),
  },
};
module.exports = router;
