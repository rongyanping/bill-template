const { getOperationData, responseWrapper } = require('../../utils');

const depositInfo = {
  depositSwitch: 1,
  depositType: 2,
  depositValue: 0,
  brandIdenty: 11476,
  shopIds: ['800000098', '810002316', '810005934'],
};

const router = {
  getBrandDeposit: {
    method: 'POST',
    path: '/mind/bui/brand/deposit/getBrandDeposit',
    container: responseWrapper(depositInfo),
  },
  saveBrandDeposit: {
    method: 'POST',
    path: '/mind/bui/brand/deposit/saveBrandDeposit',
    container: getOperationData(),
  },
};
module.exports = router;
