const { responseWrapper } = require('../../utils');

const queryList = [
  {
    category: '类别',
    icon: 'icon.png',
    id: 1,
    items: [
      {
        category: '类别',
        icon: 'icon.png',
        id: 2,
        level: 2,
        memo: '',
        name: '营业收入',
        parentId: 1,
        permissionCode: 'mind:baobiao:yingyebaobiao:zhekouyouhui',
        sortNumber: 2,
        url: 'url',
      },
    ],
    level: 1,
    memo: '可以查看每日收入',
    name: '营业收入',
    parentId: -1,
    permissionCode: 'mind:baobiao:yingyebaobiao:zhekouyouhui',
    sortNumber: 1,
    url: 'url',
  },
];

const router = {
  queryList: {
    method: 'POST',
    path: '/mind/bui/industry/pageNavigation/queryList',
    container: responseWrapper(queryList),
  },
};

module.exports = router;
