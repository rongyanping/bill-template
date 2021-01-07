const { getOperationData } = require('../../utils');

const queryData = {
  success: true,
  code: '200',
  message: 'success',
  data: {
    page: 1,
    total: 1,
    records: 3,
    dataList: [
      {
        sceneCode: 2,
        sceneName: '销售支付',
        brandIdenty: 11476,
        shopIdenty: 810015597,
        shopName: '方方门店①',
        erpModeIds: [
          {
            id: null,
            brandModeId: null,
            shopIdenty: null,
            brandIdenty: null,
            erpModeId: -3,
            name: '现金',
            aliasName: null,
            faceValue: null,
            actualValue: null,
            paymentModeType: null,
            isChange: null,
            isDiscount: null,
            isInvoice: null,
            isRefund: null,
            isSettlement: 2,
            isCure: null,
            sort: null,
            enabledFlag: null,
            statusFlag: null,
            serverCreateTime: null,
            serverUpdateTime: null,
            creatorId: null,
            creatorName: null,
            updatorId: null,
            updatorName: null,
          },
        ],
      },
    ],
    userdata: null,
    resMsg: null,
    status: true,
  },
};

const editData = {
  success: true,
  code: '200',
  message: 'success',
  data: [
    {
      id: null,
      brandModeId: 618548,
      shopIdenty: 810015597,
      brandIdenty: 11476,
      erpModeId: -3,
      name: '现金',
      aliasName: '现金',
      faceValue: null,
      actualValue: null,
      paymentModeType: 2,
      isChange: 1,
      isDiscount: 1,
      isInvoice: 1,
      isRefund: 1,
      isSettlement: 2,
      isCure: 1,
      sort: 6,
      enabledFlag: 1,
      statusFlag: 1,
      serverCreateTime: '2016-11-29 13:55:28',
      serverUpdateTime: '2016-11-29 13:55:28',
      creatorId: 99999999,
      creatorName: 'admin',
      updatorId: 99999999,
      updatorName: 'admin',
    },
  ],
};

const selectData = {
  success: true,
  code: '200',
  message: 'success',
  data: [
    -10041,
    -15,
    -7,
    -6,
    -5,
    -4,
    -3,
    -2,
    -1,
    618559,
    618560,
    618561,
    784669,
    784746,
    784747,
    785822,
    785857,
    785868,
    785891,
    786226,
    786235,
    786366,
    786368,
    786369,
    786371,
    786541,
    786855,
  ],
};

const sceneCodes = {
  success: true,
  code: '200',
  message: 'success',
  data: [
    {
      backValue: 1,
      viewValue: '储值充值',
      dictTypeCode: 'sceneCode',
      dictTypeName: '支付场景',
    },
    {
      backValue: 2,
      viewValue: '销售支付',
      dictTypeCode: 'sceneCode',
      dictTypeName: '支付场景',
    },
  ],
};

const router = {
  getPaymentSceneList: {
    method: 'GET',
    path: '/mind/payment/scene/getList',
    container: queryData,
  },
  deletePaymentSceneItem: {
    method: 'POST',
    path: '/mind/payment/scene/delete',
    container: getOperationData(),
  },
  editPaymentSceneItem: {
    method: 'POST',
    path: '/mind/payment/scene/getPaymentModeShopByShop',
    container: editData,
  },
  getSelectPaymentSceneItem: {
    method: 'POST',
    path: '/mind/payment/scene/getPaymentModeIdByScene',
    container: selectData,
  },
  getSceneCodes: {
    method: 'POST',
    path: '/mind/payment/scene/getSceneCodes',
    container: sceneCodes,
  },
  updatePaymentSceneItem: {
    method: 'POST',
    path: '/mind/payment/scene/update',
    container: getOperationData(),
  },
  addPaymentSceneItem: {
    method: 'POST',
    path: '/mind/payment/scene/batchSave',
    container: getOperationData(),
  },
};

module.exports = router;
