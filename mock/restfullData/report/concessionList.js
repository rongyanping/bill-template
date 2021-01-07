const responseWrapper = require('../../utils/responseWrapper');

const getConcessionList = {
  currentPage: 1,
  pageSize: 20,
  totalPage: 10,
  totalRows: 181,
  privilegeTatal: {
    amountTotal: -19583.47,
    typeTotalList: [
      {
        privilegeType: 4,
        privilegeTypeName: '优惠活动或者优惠券',
        totalAmount: -893.8,
        amountRate: 4.57,
        discountDetails: [
          {
            privilegeName: '储值专享12寸老板娘',
            privilegeAmount: -384,
            amountRate: 1.96,
          },
        ],
      },
      {
        privilegeType: 7,
        privilegeTypeName: '平台优惠',
        totalAmount: -1608.21,
        amountRate: 8.21,
        discountDetails: [
          {
            privilegeName: '平台优惠',
            privilegeAmount: -1608.21,
            amountRate: 8.21,
          },
        ],
      },
      {
        privilegeType: 8,
        privilegeTypeName: '商户优惠',
        totalAmount: -16923.46,
        amountRate: 86.42,
        discountDetails: [
          {
            privilegeName: '商户优惠',
            privilegeAmount: -16923.46,
            amountRate: 86.42,
          },
        ],
      },
      {
        privilegeType: 11,
        privilegeTypeName: '会员特价',
        totalAmount: -158,
        amountRate: 0.81,
        discountDetails: [
          {
            privilegeName: '会员特价',
            privilegeAmount: -158,
            amountRate: 0.81,
          },
        ],
      },
    ],
  },
  title: [
    {
      privilegeType: 4,
      dataIdx: 'PROMO',
      label: '优惠活动或者优惠券',
      children: [
        {
          dataIdx: 'PROMO-0',
          label: '储值专享12寸老板娘',
        },
      ],
    },
  ],
  list: [
    {
      SHOP_DISCOUNT: -3090.73,
      'PROMO-7': -38,
      'PROMO-6': -29,
      'PROMO-9': 0,
      'PROMO-8': -117,
      'PROMO-3': -39,
      VIP_PRICE: -128,
      shopName: '酷公社（金融中心店）',
      'PROMO-2': -64,
      'PROMO-5': -49,
      'PROMO-4': -48,
      FLATFORM_DISCOUNT: -280.11,
      'PROMO-1': -79,
      'PROMO-0': -384,
      shopId: 810049348,
      privilegeTotal: -4345.84,
    },
  ],
};

const getConcessionDetail = {
  currentPage: 1,
  pageSize: 20,
  totalPage: 10,
  totalRows: 181,
  privilegeTatal: {
    amountTotal: -1755.41,
    typeTotalList: [
      {
        privilegeType: 4,
        privilegeTypeName: '优惠活动或者优惠券',
        totalAmount: -122,
        amountRate: 6.95,
        discountDetails: [
          {
            privilegeName: '储值专享9寸苏丹王',
            privilegeAmount: -64,
            amountRate: 3.65,
          },
        ],
      },
    ],
  },
  title: [
    {
      privilegeType: 4,
      dataIdx: 'PROMO',
      label: '优惠活动或者优惠券',
      children: [
        {
          dataIdx: 'PROMO-0',
          label: '储值专享9寸苏丹王',
        },
      ],
    },
  ],
  list: [
    {
      bizDate: '2019-07-22',
      shopName: '酷公社（金融中心店）',
      dayPrivilege: -1755.41,
      childrens: [
        {
          SHOP_DISCOUNT: -12,
          orderAmount: -12,
          tradeNo: '801190722193515039229712',
          bizDate: '2019-07-22',
          VIP_PRICE: 0,
          'PROMO-2': 0,
          id: '249981001011694592',
          FLATFORM_DISCOUNT: 0,
          'PROMO-1': 0,
          'PROMO-0': 0,
        },
      ],
    },
  ],
};

const router = {
  getConcessionList: {
    method: 'POST',
    path: '/mind/bui/report/concessionList/getConcessionList',
    container: responseWrapper(getConcessionList),
  },
  getConcessionDetail: {
    method: 'POST',
    path: '/mind/bui/report/concessionList/getConcessionDetail',
    container: responseWrapper(getConcessionDetail),
  },
};

module.exports = router;
