const responseWrapper = require('../../utils/responseWrapper');
const data = {
  canLoginBrand: true,
  session_brand_name: 'mind公司-103810',
  grantBrands: [
    {
      brand: {
        id: 103810,
        name: 'mind公司-103810',
        address: '',
        version: 5,
        latlong: ',',
        canLogin: true,
        permission: null,
      },
      shops: [
        {
          id: 810021214,
          name: '小李-01-810021214',
          address: '北京市东城区天坛',
          version: 5,
          latlong: '121.592834,38.904624',
          canLogin: true,
          permission: null,
        },
      ],
    },
  ],
  openScm: true,
  session_brand_deliverys: {},
  session_user_name: '李正式',
  'org.apache.shiro.subject.support.DefaultSubjectContext_AUTHENTICATED_SESSION_KEY': true,
  sessionCommercials:
    '[{"address":"北京市东城区天坛","canLogin":true,"id":810021214,"latlong":"121.592834,38.904624","name":"小李-01-810021214","version":5},{"address":"北京市东城区天坛","canLogin":true,"id":850021215,"latlong":"121.592834,38.904624","name":"小李-02-850021215","version":5}]',
  session_brand_has_delivery: false,
  'org.apache.shiro.web.session.HttpServletSession.HOST_SESSION_KEY':
    '10.10.3.25',
  'org.apache.shiro.subject.support.DefaultSubjectContext_PRINCIPALS_SESSION_KEY': {
    primaryPrincipal: 'kry_liyy',
    realmNames: ['com.calm.b.auth.CasRealm_0'],
    empty: false,
  },
  session_sys_default_user_id: -1,
  session_role_name: '',
  session_brand_id: 103810,
  session_group_id: 102263,
  session_group_name: 'Mind集团体验区-102263',
  cbk_: '0d7a4b2e7f537296050df93f78f0527c',
  defaultPassword: false,
  session_delivery_login: false,
  isCurLoginDelivery: false,
  session_sys_default_user_name: 'system',
  support_V5: true,
  session_commercial_name: '品牌',
  session_account: 'kry_liyy',
  currentVersion: 5,
  sessionBrand:
    '{"address":"","canLogin":true,"id":103810,"latlong":",","name":"mind公司-103810","permission":"","version":5}',
  'sso:deb7535f1a3646a584ca067cc04e5c4d:updateTime': '1560218234038',
  loginSessioinId: 'deb7535f1a3646a584ca067cc04e5c4d',
  session_user_id: -2465,
  isLoginAsBrand: true,
  session_role_code: '',
  grantShops: [
    {
      id: 810021214,
      name: '小李-01-810021214',
      address: '北京市东城区天坛',
      version: 5,
      latlong: '121.592834,38.904624',
      canLogin: true,
      permission: null,
    },
  ],
  session_is_login_group: false,
  orgTagStores: [
    {
      orgId: '103810',
      orgName: '邦记牛杂',
      tags: [
        {
          stores: [
            {
              id: 850018069,
              name: '体验区测试品牌06mind-tcl',
            },
          ],
          tagId: '8',
          tagName: '大成都',
        },
      ],
    },
  ],
  userPermissionCodeObject: ['mind:baobiao:yingyebaobiao:zhekouyouhui'],
  'org.springframework.web.servlet.i18n.SessionLocaleResolver.LOCALE': 'zh_CN',
  tradeChildSource: [
    {
      backValue: 0,
      viewValue: '4435',
      dictTypeCode: 'tradeChildSource',
      dictTypeName: '订单子来源',
    },
    {
      backValue: 1,
      viewValue: 'Android收银终端',
      dictTypeCode: 'tradeChildSource',
      dictTypeName: '订单子来源',
    },
  ],
  deliveryParty: [
    {
      name: '内用',
      value: 1,
    },
    {
      name: '外送',
      value: 2,
    },
    {
      name: '自提',
      value: 3,
    },
    {
      name: '外带',
      value: 4,
    },
  ],
};

const router = {
  getSessionInfo: {
    method: 'GET',
    path: '/mind/bui/sessionInfo/getSessionInfo',
    container: responseWrapper(data),
  },
};
module.exports = router;
