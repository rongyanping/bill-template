const responseWrapper = require('../../utils/responseWrapper');

const data = {
  loginSessionId: 'f96af6f72d064358b09d2dd0ccf5738f',
  user: {
    id: 88888913630,
    account: 'admin',
    name: 'admin',
    brandId: 3268,
    brandName: '重庆冷锅鱼',
    brandAddress: '',
    brandVersion: 6,
    shopId: -1,
    shopName: '品牌',
    shopAddress: '',
    shopVersion: 6,
    enabled: 0,
    roleName: 'admin',
    brandEnabled: 0,
    defaultPassword: false,
  },
  brand: {
    id: 3268,
    name: '重庆冷锅鱼',
    address: '',
    version: 6,
    permission: {
      menus: [],
      permissionCode: [],
      openScm: true,
    },
  },
  grantShops: [],
  permissionCollection: {
    menus: [],
    permissionCode: [],
    openScm: true,
  },
  currentShopId: -1,
  currentShopName: '品牌',
  openScm: true,
  currentVersion: 6,
  canLoginBrand: true,
  loginBrand: true,
};

const router = {
  authority: {
    method: 'POST',
    path: '/mind/bui/authority',
    container: responseWrapper(data),
  },
};
module.exports = router;
