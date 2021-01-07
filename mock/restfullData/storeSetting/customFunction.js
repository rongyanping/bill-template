const { getOperationData, responseWrapper } = require('../../utils');

const queryData = {
  tagControl: 1,
  imageControl: 3,
  classControl: 2,
  tasteInputControl: 2,
  vipPriceDisplayControl: 2,
  onlinePayment: 2,
};

const router = {
  query: {
    method: 'GET',
    path: '/mind/bui/store/selfService/customFunction/query',
    container: responseWrapper(queryData),
  },
  save: {
    method: 'POST',
    path: '/mind/bui/store/selfService/customFunction/save',
    container: getOperationData(),
  },
};

module.exports = router;
