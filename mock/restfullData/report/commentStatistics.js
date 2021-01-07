const responseWrapper = require('../../utils/responseWrapper');

const queryList = {
  '1': 1024,
  '83': 2048,
  '80': 3072,
  '82': 4096,
};

const queryDetails = {
  currentPage: 1,
  pageSize: 10,
  totalRows: 100,
  totalPage: 10,
  items: [
    {
      id: 115880349543999490,
      commentId: 7,
      commenter: '评论用户1',
      commentTime: '2017-02-10 17:10:14',
      content: '这是评论内容11',
      appendContent: '这是追评内容11',
      commentReplyList: [
        {
          content:
            'js了克己复礼肯德基法律开始觉得浪费空间受到了开发建设力度开发经理说的克己复礼速度快急疯了似的减肥',
          replyTime: '2017-02-10 17:10:14',
        },
      ],
      markType: 1,
      relateId: 7533014,
      score: 1.2,
      commercialName: '门店名称',
      tasteScore: 1.1,
      environmentScore: 1.2,
      serviceScore: 1.3,
      deliveryScore: 1.4,
      dishScore: 1.5,
      orderScore: 1.6,
      picUrlList: [
        {
          uid: 1,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: 2,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    },
    {
      id: 115880349543999491,
      commentId: 8,
      commenter: '评论用户',
      commentTime: '2017-02-10 17:10:14',
      content: '这是评论内容11',
      appendContent: '这是追评内容11',
      commentReplyList: [
        {
          content: '你卡京东卡就会时刻记得哈时间的哈',
          replyTime: '2017-02-10 17:10:14',
        },
        {
          content: '你卡京东卡就会时刻记得哈时间的哈',
          replyTime: '2017-02-10 17:10:14',
        },
      ],
      markType: 0,
      relateId: 7533014,
      score: 2.2,
      commercialName: '门店名称2',
      tasteScore: 2.1,
      environmentScore: 2.2,
      serviceScore: 2.3,
      deliveryScore: 2.4,
      dishScore: 2.5,
      orderScore: 2.6,
      picUrlList: [
        {
          uid: 3,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: 4,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    },
    {
      id: 115380349543999390,
      commentId: 6,
      commenter: '评论用户1',
      commentTime: '2017-02-10 17:10:14',
      content: '这是评论内容11',
      appendContent: '这是追评内容11',
      commentReplyList: [
        {
          content:
            'js了克己复礼肯德基法律开始觉得浪费空间受到了开发建设力度开发经理说的克己复礼速度快急疯了似的减肥',
          replyTime: '2017-02-10 17:10:14',
        },
      ],
      markType: 1,
      relateId: 7533014,
      score: 1.2,
      commercialName: '门店名称',
      tasteScore: 1.1,
      environmentScore: 1.2,
      serviceScore: 1.3,
      deliveryScore: 1.4,
      dishScore: 1.5,
      orderScore: 1.6,
      picUrlList: [
        {
          uid: 1,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: 2,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    },
    {
      id: 115880349543999391,
      commentId: 2,
      commenter: '评论用户',
      commentTime: '2017-02-10 17:10:14',
      content: '这是评论内容11',
      appendContent: '这是追评内容11',
      commentReplyList: [
        {
          content: '你卡京东卡就会时刻记得哈时间的哈',
          replyTime: '2017-02-10 17:10:14',
        },
        {
          content: '你卡京东卡就会时刻记得哈时间的哈',
          replyTime: '2017-02-10 17:10:14',
        },
      ],
      markType: 0,
      relateId: 7533014,
      score: 2.2,
      commercialName: '门店名称2',
      tasteScore: 2.1,
      environmentScore: 2.2,
      serviceScore: 2.3,
      deliveryScore: 2.4,
      dishScore: 2.5,
      orderScore: 2.6,
      picUrlList: [
        {
          uid: 3,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: 4,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    },
    {
      id: 115880349543999491,
      commentId: 9,
      commenter: '评论用户1',
      commentTime: '2017-02-10 17:10:14',
      content: '这是评论内容11',
      appendContent: '这是追评内容11',
      commentReplyList: [
        {
          content:
            'js了克己复礼肯德基法律开始觉得浪费空间受到了开发建设力度开发经理说的克己复礼速度快急疯了似的减肥',
          replyTime: '2017-02-10 17:10:14',
        },
      ],
      markType: 1,
      relateId: 7533014,
      score: 1.2,
      commercialName: '门店名称',
      tasteScore: 1.1,
      environmentScore: 1.2,
      serviceScore: 1.3,
      deliveryScore: 1.4,
      dishScore: 1.5,
      orderScore: 1.6,
      picUrlList: [
        {
          uid: 1,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: 2,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    },
    {
      id: 115880349543999493,
      commentId: 2,
      commenter: '评论用户',
      commentTime: '2017-02-10 17:10:14',
      content: '这是评论内容11',
      appendContent: '这是追评内容11',
      commentReplyList: [
        {
          content: '你卡京东卡就会时刻记得哈时间的哈',
          replyTime: '2017-02-10 17:10:14',
        },
        {
          content: '你卡京东卡就会时刻记得哈时间的哈',
          replyTime: '2017-02-10 17:10:14',
        },
      ],
      markType: 0,
      relateId: 7533014,
      score: 2.2,
      commercialName: '门店名称2',
      tasteScore: 2.1,
      environmentScore: 2.2,
      serviceScore: 2.3,
      deliveryScore: 2.4,
      dishScore: 2.5,
      orderScore: 2.6,
      picUrlList: [
        {
          uid: 3,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: 4,
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    },
  ],
};

const router = {
  queryList: {
    method: 'POST',
    path: '/mind/bui/report/commentStatistics/queryList',
    container: responseWrapper(queryList),
  },
  queryDetails: {
    method: 'POST',
    path: '/mind/bui/report/commentStatistics/queryDetails',
    container: responseWrapper(queryDetails),
  },
};

module.exports = router;
