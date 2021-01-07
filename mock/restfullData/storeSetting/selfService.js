const { getOperationData, responseWrapper } = require('../../utils');

const themeData = {
  template: 1,
  browseMode: 2,
  menuList: 3,
  backgroundImageUrl: null,
};

const router = {
  query: {
    method: 'GET',
    path: '/mind/bui/store/selfService/uisetting/query',
    container: responseWrapper(themeData),
  },
  save: {
    method: 'POST',
    path: '/mind/bui/store/selfService/uisetting/save',
    container: getOperationData(),
  },
};

module.exports = router;
