const responseWrapper = require('../../utils/responseWrapper');

const businessIncome = {
  items: [
    {
      title: '2020-01-01',
      totalAmount: 100,
      hereAmount: 40,
      takeawayAmount: 50,
      otherAmount: 10,
    },
    {
      title: '2020-01-02',
      totalAmount: 90,
      hereAmount: 50,
      takeawayAmount: 30,
      otherAmount: 10,
    },
    {
      title: '2020-01-03',
      totalAmount: 130,
      hereAmount: 10,
      takeawayAmount: 80,
      otherAmount: 40,
    },
    {
      title: '2020-01-04',
      totalAmount: 110,
      hereAmount: 40,
      takeawayAmount: 10,
      otherAmount: 60,
    },
    {
      title: '2020-01-05',
      totalAmount: 160,
      hereAmount: 50,
      takeawayAmount: 10,
      otherAmount: 100,
    },
  ],
  total: {
    totalAmount: 30,
    hereAmount: 10,
    takeawayAmount: 10,
    otherAmount: 10,
  },
};

const saleSurvey = {
  items: [
    {
      title: '2020-01-01',
      totalAmount: 40,
      totalCount: 40,
      skuAmount: 10,
      extraAmount: 100,
      otherAmount: 110,
      depositAmount: 110,
      tradeInvoiceAmount: 55,
    },
    {
      title: '2020-01-02',
      totalAmount: 40,
      totalCount: 420,
      skuAmount: 130,
      extraAmount: 140,
      otherAmount: 110,
      depositAmount: 100,
      tradeInvoiceAmount: 550,
    },
    {
      title: '2020-01-03',
      totalAmount: 400,
      totalCount: 410,
      skuAmount: 110,
      extraAmount: 110,
      otherAmount: 120,
      depositAmount: 310,
      tradeInvoiceAmount: 155,
    },
    {
      title: '2020-01-04',
      totalAmount: 40,
      totalCount: 40,
      skuAmount: 10,
      extraAmount: 10,
      otherAmount: 10,
      depositAmount: 10,
      tradeInvoiceAmount: 55,
    },
  ],
  total: {
    totalAmount: 40,
    totalCount: 40,
    skuAmount: 10,
    extraAmount: 10,
    otherAmount: 10,
    depositAmount: 10,
    tradeInvoiceAmount: 55,
  },
};

const incomeRank = [
  {
    brandName: 'x2123xx',
    amount: 530,
    saleAmount: 230,
    receivablesAmount: 3,
  },
  {
    brandName: 'xx12223x',
    amount: 530,
    saleAmount: 930,
    receivablesAmount: 130,
  },
  {
    brandName: '123',
    amount: 30,
    saleAmount: 30,
    receivablesAmount: 30,
  },
  {
    brandName: '123123',
    amount: 230,
    saleAmount: 10,
    receivablesAmount: 230,
  },
  {
    brandName: '12121',
    amount: 130,
    saleAmount: 131,
    receivablesAmount: 131,
  },
];

const customerSurvey = {
  items: [
    {
      title: '2020-01-01',
      totalCount: 130,
      hereCount: 110,
      takeawayCount: 110,
      perCustomerPriceBefore: 210,
      perCustomerPriceAfter: 110,
    },
    {
      title: '2020-01-02',
      totalCount: 30,
      hereCount: 10,
      takeawayCount: 10,
      perCustomerPriceBefore: 100,
      perCustomerPriceAfter: 10,
    },
    {
      title: '2020-01-03',
      totalCount: 530,
      hereCount: 510,
      takeawayCount: 510,
      perCustomerPriceBefore: 610,
      perCustomerPriceAfter: 510,
    },
    {
      title: '2020-01-04',
      totalCount: 230,
      hereCount: 210,
      takeawayCount: 210,
      perCustomerPriceBefore: 210,
      perCustomerPriceAfter: 310,
    },
  ],
  total: {
    totalCount: 30,
    hereCount: 10,
    takeawayCount: 10,
    perCustomerPriceBefore: 10,
    perCustomerPriceAfter: 10,
  },
};

const router = {
  businessIncome: {
    method: 'POST',
    path: '/mind/bui/report/groupOverview/businessIncome',
    container: responseWrapper(businessIncome),
  },
  saleSurvey: {
    method: 'POST',
    path: '/mind/bui/report/groupOverview/saleSurvey',
    container: responseWrapper(saleSurvey),
  },
  incomeRank: {
    method: 'POST',
    path: '/mind/bui/report/groupOverview/incomeRank',
    container: responseWrapper(incomeRank),
  },
  customerSurvey: {
    method: 'POST',
    path: '/mind/bui/report/groupOverview/customerSurvey',
    container: responseWrapper(customerSurvey),
  },
};

module.exports = router;
