const data = {
  success: true,
  code: '200',
  message: 'success',
  data: {
    uptoken:
      'gHckET3ezRBakrmBQVQRb8SLVHbQYlna1MnLQelM:ID6gBtCoHLy5pRolUJYEzUbdgQI=:eyJzY29wZSI6ImtyeS10ZXN0LTIiLCJkZWFkbGluZSI6MTUxOTcxNDMzMX0=',
    bucketName: 'kry-test-2',
    qiniuDomain: 'http://kry-test-2.qiniudn.com',
  },
};
const router = {
  getSessionInfo: {
    method: 'GET',
    path: '/mind/bui/qiniu/uptokenStr',
    container: data,
  },
};
module.exports = router;
