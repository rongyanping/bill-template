const responseWrapper = require('../../utils/responseWrapper');

const getList = {
  items: [
    {
      details: [
        {
          saleAmount: 100,
          saleCount: 100,
          shopName: '门店1',
        },
        {
          saleAmount: 100,
          saleCount: 100,
          shopName: '门店2',
        },
        {
          saleAmount: 100,
          saleCount: 100,
          shopName: '门店3',
        },
        {
          saleAmount: 140,
          saleCount: 140,
          shopName: '门店4',
        },
      ],
      title: '2019-08-01',
      total: {
        saleAmount: 440,
        saleCount: 440,
      },
      previousYears: {
        saleAmount: 440,
        saleCount: 440,
      },
      previousQuarter: {
        saleAmount: 440,
        saleCount: 440,
      },
    },
    {
      details: [
        {
          saleAmount: 10,
          saleCount: 10,
          shopName: '门店1',
        },
        {
          saleAmount: 10,
          saleCount: 10,
          shopName: '门店2',
        },
        {
          saleAmount: 10,
          saleCount: 10,
          shopName: '门店3',
        },
        {
          saleAmount: 14,
          saleCount: 14,
          shopName: '门店4',
        },
      ],
      title: '2019-08-02',
      total: {
        saleAmount: 44,
        saleCount: 44,
      },
      previousYears: {
        saleAmount: 44,
        saleCount: 44,
      },
      previousQuarter: {
        saleAmount: 44,
        saleCount: 44,
      },
    },
    {
      details: [
        {
          saleAmount: 101,
          saleCount: 101,
          shopName: '门店1',
        },
        {
          saleAmount: 101,
          saleCount: 101,
          shopName: '门店2',
        },
        {
          saleAmount: 101,
          saleCount: 101,
          shopName: '门店3',
        },
        {
          saleAmount: 141,
          saleCount: 141,
          shopName: '门店4',
        },
      ],
      title: '2019-08-03',
      total: {
        saleAmount: 444,
        saleCount: 444,
      },
      previousYears: {
        saleAmount: 444,
        saleCount: 444,
      },
      previousQuarter: {
        saleAmount: 444,
        saleCount: 444,
      },
    },
  ],
};

const getDishBrandTypes = [
  {
    id: '254848',
    name: '珍珠',
    children: [
      {
        id: `254848_18155`,
        name: '珍珠-re是',
      },
      {
        id: `254848_21855`,
        name: '珍珠-re是',
      },
    ],
  },
  {
    id: `565659`,
    name: '布丁',
    children: [
      {
        id: `565659_18455`,
        name: '布丁-re是',
      },
      {
        id: `565659_21455`,
        name: '布丁-re是',
      },
    ],
  },
];

const router = {
  getList: {
    method: 'POST',
    path: '/mind/bui/industry/categorySales/getList',
    container: responseWrapper(getList),
  },
  getDishBrandTypes: {
    method: 'POST',
    path: '/mind/bui/industry/categorySales/getDishBrandTypes',
    container: responseWrapper(getDishBrandTypes),
  },
};

module.exports = router;
