const responseWrapper = require('../../utils/responseWrapper');

const getExtraChargeList = {
  currentPage: 1,
  pageSize: 20,
  totalPage: 1,
  totalRows: 2,
  dataList: [
    {
      shopName: '绿盒子(亮马桥店)',
      extraCharges: {
        配送费: {
          shopId: 810005004,
          shopName: '绿盒子(亮马桥店)',
          tradeNo: null,
          bizDate: '2019-06-21',
          tradeId: null,
          privilegeCode: 'PSF',
          privilegeName: '配送费',
          privilegeAmount: 5,
        },
        餐盒费: {
          shopId: 810005004,
          shopName: '绿盒子(亮马桥店)',
          tradeNo: null,
          bizDate: '2019-06-21',
          tradeId: null,
          privilegeCode: 'CHF',
          privilegeName: '餐盒费',
          privilegeAmount: 2,
        },
      },
      totalAmount: 7,
      shopId: 810005004,
    },
    {
      shopName: '绿盒子(金地广场店)',
      extraCharges: {
        配送费: {
          shopId: 810006462,
          shopName: '绿盒子(金地广场店)',
          tradeNo: null,
          bizDate: '2019-06-21',
          tradeId: null,
          privilegeCode: 'PSF',
          privilegeName: '配送费',
          privilegeAmount: 11,
        },
        餐盒费: {
          shopId: 810006462,
          shopName: '绿盒子(金地广场店)',
          tradeNo: null,
          bizDate: '2019-06-21',
          tradeId: null,
          privilegeCode: 'CHF',
          privilegeName: '餐盒费',
          privilegeAmount: 28,
        },
      },
      totalAmount: 39,
      shopId: 810006462,
    },
    {
      shopName: '绿盒子（天通苑店）',
      extraCharges: {
        配送费: {
          shopId: 810189001,
          shopName: '绿盒子（天通苑店）',
          tradeNo: null,
          bizDate: '2019-06-21',
          tradeId: null,
          privilegeCode: 'PSF',
          privilegeName: '配送费',
          privilegeAmount: 47,
        },
        餐盒费: {
          shopId: 810189001,
          shopName: '绿盒子（天通苑店）',
          tradeNo: null,
          bizDate: '2019-06-21',
          tradeId: null,
          privilegeCode: 'CHF',
          privilegeName: '餐盒费',
          privilegeAmount: 24.5,
        },
      },
      totalAmount: 71.5,
      shopId: 810189001,
    },
  ],
  totalAmount: 117.5,
};

const getExtraChargeListDetail = {
  currentPage: 1,
  pageSize: 20,
  totalPage: 1,
  totalRows: 2,
  totalAmount: 39,
  items: [
    {
      tradeId: '238608123929567232',
      bizDate: '2019-06-21',
      tradeNo: '1001190621102329842033487',
      配送费: 5,
      餐盒费: 24,
      totalAmount: 29,
    },
    {
      tradeId: '238606552211339264',
      bizDate: '2019-06-21',
      tradeNo: '1001190621101715111031811',
      配送费: 6,
      餐盒费: 4,
      totalAmount: 10,
    },
  ],
  header: [
    {
      tradeId: '订单ID',
      bizDate: '日期',
      tradeNo: '订单号',
      配送费: '配送费',
      餐盒费: '餐盒费',
      totalAmount: '附加费合计',
    },
  ],
};

const router = {
  getExtraChargeList: {
    method: 'POST',
    path: '/mind/bui/report/extraFee/getExtraChargeList',
    container: responseWrapper(getExtraChargeList),
  },
  getExtraChargeListDetail: {
    method: 'POST',
    path: '/mind/bui/report/extraFee/getExtraChargeListDetail',
    container: responseWrapper(getExtraChargeListDetail),
  },
};

module.exports = router;
