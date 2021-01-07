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
        id: 583164,
        erpModeId: -20,
        name: '匿名卡支付',
        aliasName: null,
        faceValue: null,
        paymentModeType: 2,
        isChange: 2,
        isDiscount: 2,
        isSettlement: 2,
        sort: null,
        brandIdenty: null,
        isInvoice: 2,
        isRefund: 2,
        isCure: 1,
        enabledFlag: 2,
        statusFlag: null,
        serverCreateTime: null,
        serverUpdateTime: '2016-12-05 11:36:28',
        creatorName: null,
        creatorId: null,
        updatorName: null,
        updatorId: null,
        templetPaymentModeList: null,
        checked: null,
      },
    ],
    userdata: null,
    resMsg: null,
    status: true,
  },
};
const dataInfo = {
  success: true,
  code: '200',
  message: 'success',
  data: {
    id: 564100,
    erpModeId: -5,
    name: '微信',
    aliasName: '微信',
    faceValue: null,
    paymentModeType: 1,
    isChange: 2,
    isDiscount: 1,
    isSettlement: 2,
    sort: 1,
    brandIdenty: 3268,
    isInvoice: 1,
    isRefund: 1,
    isCure: 1,
    enabledFlag: 1,
    statusFlag: 1,
    serverCreateTime: '2016-04-06 17:08:56',
    serverUpdateTime: '2016-10-24 14:26:00',
    creatorName: 'admin',
    creatorId: 99999999,
    updatorName: 'admin',
    updatorId: 99999999,
  },
};
const dataTemplateInfo = {
  success: true,
  code: '200',
  message: 'success',
  data: [
    {
      serverCreateTime: '2015-09-24 23:14:20',
      serverUpdateTime: '2015-09-24 23:14:20',
      creatorId: 99999999,
      creatorName: 'admin',
      updatorId: null,
      updatorName: null,
      statusFlag: 1,
      id: 1400,
      brandIdenty: 3268,
      shopNum: null,
      templetType: 3,
      templetCode: 'MRMB',
      saleModelName: '默认模板',
      defaultFlag: 1,
      paymentIds: null,
      shopIds: null,
      checked: null,
      paymentModeId: 564100,
    },
  ],
};

const DataIsUsed = {
  success: true,
  code: '200',
  message: 'success',
  data: [
    {
      serverCreateTime: null,
      serverUpdateTime: null,
      creatorId: null,
      creatorName: null,
      updatorId: null,
      updatorName: null,
      statusFlag: null,
      id: 22235,
      brandIdenty: 3268,
      shopNum: null,
      templetType: 3,
      templetCode: '001',
      saleModelName: '记混',
      defaultFlag: null,
      paymentIds: null,
      shopIds: null,
    },
    {
      serverCreateTime: null,
      serverUpdateTime: null,
      creatorId: null,
      creatorName: null,
      updatorId: null,
      updatorName: null,
      statusFlag: null,
      id: 23070,
      brandIdenty: 3268,
      shopNum: null,
      templetType: 3,
      templetCode: '002',
      saleModelName: '默认模板2',
      defaultFlag: null,
      paymentIds: null,
      shopIds: null,
    },
  ],
};
/**
 *
 GET /bui/payment/management/checkIsUsed
 停用前检查支付方式是否在应用在支付范本中
 GET /bui/payment/management/checkPaymentModeName
 检查支付名称是否重复
 GET /bui/payment/management/getInfo
 读取支付方式信息
 GET /bui/payment/management/getTemplateInfo
 根据支付方式Id取支付范本信息
 GET /bui/payment/management/query
 加载支付方式列表数据
 POST /bui/payment/management/saveOrUpdatePaymentMode
 保存新增或修改的数据
 POST /bui/payment/management/updateEnableFlag
 启用，停用支付方式
 */
const router = {
  checkIsUsed: {
    method: 'GET',
    path: '/mind/bui/payment/management/checkIsUsed',
    container: DataIsUsed,
  },
  checkPaymentModeName: {
    method: 'GET',
    path: '/mind/bui/payment/management/checkPaymentModeName',
    container: getOperationData(),
  },
  getInfo: {
    method: 'GET',
    path: '/mind/bui/payment/management/getInfo',
    container: dataInfo,
  },
  getTemplateInfo: {
    method: 'GET',
    path: '/mind/bui/payment/management/getTemplateInfo',
    container: dataTemplateInfo,
  },
  query: {
    method: 'GET',
    path: '/mind/bui/payment/management/query',
    container: queryData,
  },
  saveOrUpdatePaymentMode: {
    method: 'POST',
    path: '/mind/bui/payment/management/saveOrUpdatePaymentMode',
    container: getOperationData(),
  },
  updateEnableFlag: {
    method: 'POST',
    path: '/mind/bui/payment/management/updateEnableFlag',
    container: getOperationData(),
  },
};
module.exports = router;
