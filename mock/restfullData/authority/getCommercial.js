const responseWrapper = require('../../utils/responseWrapper');

const data = [
  {
    address: '新中大厦',
    id: 800000095,
    latlong: '39.936402,116.468216',
    name: ' 重庆冷锅鱼1"',
    permission: '',
    portalVersion: 0,
    version: 4,
  },
  {
    address: '知春路',
    id: 800000098,
    latlong: '39.936402,116.468216',
    name: '重庆冷锅鱼2',
    permission: '',
    portalVersion: 0,
    version: 4,
  },
];

const router = {
  getCommercial: {
    method: 'GET',
    path: '/mind/buigetCommercial',
    container: responseWrapper(data),
  },
};

module.exports = router;
