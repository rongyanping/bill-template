const { getOperationData, responseWrapper } = require('../../utils');

const getTaxRelationInfo = [
  {
    id: 1,
    taxCode: '1560000000',
    taxName: '增值税',
    country: '中国大陆',
    area: '全部',
  },
  {
    id: 2,
    taxCode: '7020000000',
    taxName: 'GST',
    country: 'Singapore',
    area: '全部',
  },
  {
    id: 3,
    taxCode: '1240000000',
    taxName: 'GST',
    country: 'Canada',
    area: '全部',
  },
  {
    id: 4,
    taxCode: '1240000001',
    taxName: 'PST',
    country: 'Canada',
    area: 'British Columbia',
  },
  {
    id: 5,
    taxCode: '1240000002',
    taxName: 'RST',
    country: 'Canada',
    area: 'Manitoba',
  },
  {
    id: 6,
    taxCode: '1240000003',
    taxName: 'QST',
    country: 'Canada',
    area: 'Quebec',
  },
  {
    id: 7,
    taxCode: '1240000004',
    taxName: 'HST',
    country: 'Canada',
    area: '全部',
  },
];

const getTaxRateInfo = [
  {
    id: 1,
    taxTypeId: 7,
    name: '',
    desc: 'Meals, Alcoholic Beverages, Non-Alcoholic Beverages',
    area: 'New Brunswick',
    rate: 15,
  },
  {
    id: 2,
    taxTypeId: 7,
    name: '',
    desc: 'Meals, Alcoholic Beverages, Non-Alcoholic Beverages',
    area: 'Newfoundland and Labrador',
    rate: 15,
  },
  {
    id: 3,
    taxTypeId: 7,
    name: '',
    desc: 'Meals, Alcoholic Beverages, Non-Alcoholic Beverages',
    area: 'Nova Scotia',
    rate: 15,
  },
  {
    id: 4,
    taxTypeId: 7,
    name: '',
    desc: 'Meals, Alcoholic Beverages, Non-Alcoholic Beverages',
    area: 'Ontario',
    rate: 13,
  },
  {
    id: 5,
    taxTypeId: 7,
    name: '',
    desc: 'Meals, Alcoholic Beverages, Non-Alcoholic Beverages',
    area: 'Prince Edward Island',
    rate: 15,
  },
];

const getTaxRateRelation = [
  {
    label: 'Canada',
    value: 'Canada',
    children: [
      {
        label: '全部',
        value: '全部',
        children: [
          {
            label: 'GST',
            value: '3',
          },
          {
            label: 'HST',
            value: '7',
          },
        ],
      },
      {
        label: 'British Columbia',
        value: 'British Columbia',
        children: [
          {
            label: 'PST',
            value: '4',
          },
        ],
      },
      {
        label: 'Manitoba',
        value: 'Manitoba',
        children: [
          {
            label: 'RST',
            value: '5',
          },
        ],
      },
      {
        label: 'Quebec',
        value: 'Quebec',
        children: [
          {
            label: 'QST',
            value: '6',
          },
        ],
      },
    ],
  },
  {
    label: 'Singapore',
    value: 'Singapore',
    children: [
      {
        label: '全部',
        value: '全部',
        children: [
          {
            label: 'GST',
            value: '2',
          },
        ],
      },
    ],
  },
  {
    label: '中国大陆',
    value: '中国大陆',
    children: [
      {
        label: '全部',
        value: '全部',
        children: [
          {
            label: '增值税',
            value: '1',
          },
        ],
      },
    ],
  },
];

const router = {
  getTaxRelationInfo: {
    method: 'POST',
    path: '/mind/bui/setting/taxationManage/getTaxRelationInfo',
    container: responseWrapper(getTaxRelationInfo),
  },
  getTaxRateInfo: {
    method: 'POST',
    path: '/mind/bui/setting/taxationManage/getTaxRateInfo',
    container: responseWrapper(getTaxRateInfo),
  },
  getTaxRateRelation: {
    method: 'POST',
    path: '/mind/bui/setting/taxationManage/getTaxRateRelation',
    container: responseWrapper(getTaxRateRelation),
  },
  addTaxRelationInfo: {
    method: 'POST',
    path: '/mind/bui/setting/taxationManage/addTaxRelationInfo',
    container: getOperationData(),
  },
  deleteTaxRelationInfo: {
    method: 'POST',
    path: '/mind/bui/setting/taxationManage/deleteTaxRelationInfo',
    container: getOperationData(),
  },
};
module.exports = router;
