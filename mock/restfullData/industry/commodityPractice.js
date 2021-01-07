const responseWrapper = require('../../utils/responseWrapper');

const getList = {
  totalAmount: 95959,
  totalCount: 5656,
  item: [
    {
      practiceType: '珍珠',
      list: [
        {
          practiceName: '珍珠-re',
          shopList: [
            {
              shopName: '合计',
              practicePrice: 53396,
              count: 95539,
              practiceTotal: 24,
            },
          ],
        },
        {
          practiceName: '珍珠-re是',
          shopList: [
            {
              shopName: '合计',
              practicePrice: 53396,
              count: 95539,
              practiceTotal: 24,
            },
            {
              shopName: '门店1',
              practicePrice: 53396,
              count: 95539,
              practiceTotal: 24,
            },
          ],
        },
      ],
    },
    {
      practiceType: '布丁',
      list: [
        {
          practiceName: '布丁-re',
          shopList: [
            {
              shopName: '合计',
              practicePrice: 53396,
              count: 95539,
              practiceTotal: 24,
            },
            {
              shopName: '门店1',
              practicePrice: 53396,
              count: 95539,
              practiceTotal: 24,
            },
          ],
        },
        {
          practiceName: '珍珠-re是',
          shopList: [
            {
              shopName: '合计',
              practicePrice: 53396,
              count: 95539,
              practiceTotal: 24,
            },
            {
              shopName: '门店1',
              practicePrice: 53396,
              count: 95539,
              practiceTotal: 24,
            },
          ],
        },
      ],
    },
  ],
};

const getPractice = [
  {
    key: '254848',
    name: '珍珠',
    children: [
      {
        key: `254848_18155`,
        name: '珍珠-re是',
      },
      {
        key: `254848_21855`,
        name: '珍珠-re是',
      },
    ],
  },
  {
    key: `565659`,
    name: '布丁',
    children: [
      {
        key: `565659_18455`,
        name: '布丁-re是',
      },
      {
        key: `565659_21455`,
        name: '布丁-re是',
      },
    ],
  },
];

const router = {
  getList: {
    method: 'POST',
    path: '/mind/bui/industry/commodityPractice/getList',
    container: responseWrapper(getList),
  },
  getPractice: {
    method: 'POST',
    path: '/mind/bui/industry/commodityPractice/getPractice',
    container: responseWrapper(getPractice),
  },
};

module.exports = router;
