const { getOperationData, responseWrapper } = require('../../utils');

const queryList = {
  pageNum: 1,
  pageSize: 5,
  startRow: 0,
  totalNum: 115,
  totalPage: 23,
  lastUpdateTime: null,
  list: null,
  shopIdList: [
    '810016433',
    '810029326',
    '810016429',
    '810029337',
    '810040782',
    '810040802',
    '810045569',
    '810045570',
    '810021390',
    '810029296',
  ],
  item: [
    {
      physicalCommercialName: '海底捞火锅外送(万丰桥店)',
      shopId: ['810016433', '810029326'],
      shopName:
        '海底捞mini火锅外送(万丰桥店)gld810016433,海底捞火锅外送(万丰桥店)gld810029326',
    },
    {
      physicalCommercialName: '海底捞火锅外送(万柳店)',
      shopId: ['810016429', '810029337'],
      shopName:
        '海底捞mini火锅外送(马家堡店)gld810016429,海底捞火锅外送(马家堡店)gld810029337',
    },
    {
      physicalCommercialName: '海底捞火锅外送(万达万福街)',
      shopId: ['810040782', '810040802'],
      shopName:
        '海底捞火锅外送(捞品城店)gld810040782,海底捞mini火锅外送(捞品城店)gld810040802',
    },
    {
      physicalCommercialName: '海底捞火锅外送(世博广场店)',
      shopId: ['810045569', '810045570'],
      shopName:
        '海底捞火锅外送(爱琴海店)gld810045569,海底捞mini火锅外送(爱琴海店)gld810045570',
    },
    {
      physicalCommercialName: '海底捞火锅外送(世贸广场店)',
      shopId: ['810021390', '810029296'],
      shopName:
        '海底捞mini火锅外送(泉城路店)gld810021390,海底捞火锅外送(泉城路店)gld810029296',
    },
  ],
};

const router = {
  queryList: {
    method: 'POST',
    path: '/mind/bui/setting/storeRelationship/queryList',
    container: responseWrapper(queryList),
  },
};
module.exports = router;
