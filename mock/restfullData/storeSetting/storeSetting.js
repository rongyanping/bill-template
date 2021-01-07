const { getOperationData, responseWrapper } = require('../../utils');

const businessHours = [
  {
    id: 18715,
    startTime: '01:02',
    endTime: '20:02',
    daysOfWeek: [1, 2, 3, 4],
  },
  {
    id: 18716,
    startTime: '21:00',
    endTime: '22:01',
    daysOfWeek: [5, 6, 7],
  },
  {
    id: 18717,
    startTime: '21:00',
    endTime: '22:00',
    daysOfWeek: [3],
  },
];

const buffetData = {
  success: true,
  code: 200,
  message: 'success',
  data: {
    hasTable: 1,
    depositValue: 4,
    depositSwitch: 2,
    depositType: 2,
    dinnerTimeSwitch: 1,
    dinnerTime: 70,
    otFeeSwitch: 1,
    otFeeTime: 33,
    otFeeAmount: 1.21,
  },
};

const thirdOrderData = {
  switchData: [
    {
      name: '百度糯米预订订单',
      checked: true,
      disabled: false,
    },
    {
      name: '百度地图排队订单',
      checked: true,
      disabled: false,
    },
    {
      name: '呼叫中心外卖订单',
      checked: true,
      disabled: false,
    },
    {
      name: '百度地图排队订单',
      checked: true,
      disabled: false,
    },
    {
      name: '百度糯米点菜订单',
      checked: true,
      disabled: false,
    },
    {
      name: '点评排队订单',
      checked: true,
      disabled: false,
    },
    {
      name: '百度外卖订单',
      checked: true,
      disabled: false,
    },
    {
      name: '饿了么订单',
      checked: true,
      disabled: false,
    },
    {
      name: '大众点评订单',
      checked: true,
      disabled: false,
    },
    {
      name: '自动结束第三方订单',
      checked: true,
      disabled: false,
    },
  ],
  waimai: 0,
  tuangoushanghui: 1,
  hulianwangcanting: true,
  elemeAuthStatus: {
    ext1: 1,
    status: 1,
    isShowElemeV1: 1,
  },
};

const callGateWayXinMeiDa = {
  resultUrl:
    'https://open-erp.meituan.com/storemap?developerId=100207&businessId=2&ePoiId=810001989&signKey=38nu751qcl1qe176&eName=onmind%E6%B5%8B%E8%AF%951%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91&callbackUrl=http%3A%2F%2Ftestpartner.shishike.com%2Fapi%2Fmeituan%2Fshop%2Fauth%2Fgrant%2Fcallback%2F',
};

const unbundlingMeituan = {
  resultUrl:
    'https://open-erp.meituan.com/storemap?developerId=100207&businessId=2&ePoiId=810001989&signKey=38nu751qcl1qe176&eName=onmind%E6%B5%8B%E8%AF%951%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91%E6%88%91&callbackUrl=http%3A%2F%2Ftestpartner.shishike.com%2Fapi%2Fmeituan%2Fshop%2Fauth%2Fgrant%2Fcallback%2F',
};

const router = {
  getBusinessHours: {
    method: 'GET',
    path: '/mind/commercial/config/businessHours',
    container: responseWrapper(businessHours),
  },
  setBusinessHours: {
    method: 'PUT',
    path: '/mind/commercial/config/businessHours',
    container: getOperationData(),
  },
  addBusinessHours: {
    method: 'POST',
    path: '/mind/commercial/config/businessHours',
    container: getOperationData(),
  },
  deleteBusinessHours: {
    method: 'DELETE',
    path: '/mind/commercial/config/businessHours',
    container: getOperationData(),
  },
  getBuffetSettingConfig: {
    method: 'GET',
    path: '/mind/commercial/config/getBuffetSettingConfig',
    container: responseWrapper(buffetData),
  },
  getThirdOrder: {
    method: 'GET',
    path: '/mind/commercial/config/getThirdOrder',
    container: responseWrapper(thirdOrderData),
  },
  callGateWayXinMeiDa: {
    method: 'POST',
    path: '/mind/commercial/config/callGateWayXinMeiDa',
    container: responseWrapper(callGateWayXinMeiDa),
  },
  unbundlingMeituan: {
    method: 'POST',
    path: '/mind/commercial/config/unbundlingMeituan',
    container: responseWrapper(unbundlingMeituan),
  },
};

module.exports = router;
