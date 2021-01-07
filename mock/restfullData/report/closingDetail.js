const responseWrapper = require('../../utils/responseWrapper');

const getData = {
  pkId: '5e0d9ece96d8220001c7426b',
  closeBillId: '306445963431364608',
  brandId: 32301,
  shopId: 810108803,
  userId: null,
  createTime: '2020-01-02 15:42:06',
  excuteTime: 313,
  baseData: {
    //基础数据
    bizDate: '2019-12-25',
    brandId: 32301,
    shopId: 810108803,
    shopName: '体验区测试品牌06mind2号',
    startTime: '2019-12-25 15:00:57',
    endTime: '2019-12-25 15:06:51',
    operateName: 'DQ',
    operateAccount: '18188888882',
  },
  paymentData: {
    //支付明细
    paymentItemData: [
      {
        erpModeId: '-15',
        erpModeName: '会员实体卡支付',
        saleAmount: 7.33,
        marketingAmount: 0.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 0.0,
        totalAmount: 7.33,
      },
      {
        erpModeId: '202',
        erpModeName: '鸿星尔克外卖',
        saleAmount: 33.05,
        marketingAmount: 0.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 0.0,
        totalAmount: 33.05,
      },
      {
        erpModeId: '-1',
        erpModeName: '储值卡',
        saleAmount: 9.0,
        marketingAmount: 0.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 0.0,
        totalAmount: 9.0,
      },
      {
        erpModeId: '203',
        erpModeName: 'wangcai外卖',
        saleAmount: 59.06,
        marketingAmount: 0.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 0.0,
        totalAmount: 59.06,
      },
      {
        erpModeId: '-3',
        erpModeName: '现金',
        saleAmount: 64.33,
        marketingAmount: 2000.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 0.0,
        totalAmount: 2064.33,
      },
      {
        erpModeId: '-4',
        erpModeName: '银行卡',
        saleAmount: 4.48,
        marketingAmount: 0.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 36.09,
        totalAmount: 40.57,
      },
      {
        erpModeId: '181',
        erpModeName: '美团外卖',
        saleAmount: 21.62,
        marketingAmount: 0.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 0.0,
        totalAmount: 21.62,
      },
      {
        erpModeId: '75975358460996608',
        erpModeName: '面额20实收10(自)',
        saleAmount: 12.0,
        marketingAmount: 0.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 0.0,
        totalAmount: 12.0,
      },
      {
        erpModeId: '-20',
        erpModeName: '匿名卡支付',
        saleAmount: 108.0,
        marketingAmount: 0.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 0.0,
        totalAmount: 108.0,
      },
      {
        erpModeId: '161',
        erpModeName: '饿了么',
        saleAmount: 14.89,
        marketingAmount: 0.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 0.0,
        totalAmount: 14.89,
      },
      {
        erpModeId: '41',
        erpModeName: '饿了么星选',
        saleAmount: 3.01,
        marketingAmount: 0.0,
        creditAmount: 0.0,
        bookingAmount: 0.0,
        accountSubjectAmount: 0.0,
        totalAmount: 3.01,
      },
    ],
    expectedTotalAmount: 2372.86,
  },
  saleCollectionData: {
    //销售收款数据
    innerData: {
      //店内
      tradeCountData: {
        sellCount: 8,
        refundCount: 0,
        totalCount: 8,
      }, //订单笔数
      businessIncomeData: {
        noOrderCashAmount: 336.77,
        skuSaleAmount: 33.76,
        extraChargeAmount: 41.27,
        consumptionTaxAmount: 1.44,
        depositPayAmount: 0.0,
        shopPrivilegeAmount: 35.2,
        orderDeliveryOutAmount: 8.77,
        profitLossAmount: 40.57,
        serviceChargeAmount: 0.0,
        subsidiesAmount: 34.17,
        businessIncomeAmount: 444.01,
      }, //营业收入
      businessSaleData: {
        businessIncomeAmount: 0.0,
        storeConsumeAmount: 124.33,
        consumeStoreMoney: 116.99,
        consumeStoreSendMoney: 7.34,
        bookingDeductionAmount: 0.0,
        creditAmount: 0.0,
        saleCollectionAmount: 319.68,
      }, //销售收款
      payModeData: [
        {
          sourceChild: 1,
          payModeId: '-20',
          payModeName: '匿名卡支付',
          shopActualAmount: 108.0,
        },
        {
          sourceChild: 1,
          payModeId: '-15',
          payModeName: '会员实体卡支付',
          shopActualAmount: 7.33,
        },
        {
          sourceChild: 1,
          payModeId: '-4',
          payModeName: '银行卡',
          shopActualAmount: 4.48,
        },
        {
          sourceChild: 1,
          payModeId: '-3',
          payModeName: '现金',
          shopActualAmount: 19.49,
        },
        {
          sourceChild: 1,
          payModeId: '-1',
          payModeName: '储值卡',
          shopActualAmount: 9.0,
        },
        {
          sourceChild: 41,
          payModeId: '41',
          payModeName: '饿了么星选',
          shopActualAmount: 3.01,
        },
        {
          sourceChild: 161,
          payModeId: '161',
          payModeName: '饿了么',
          shopActualAmount: 14.89,
        },
        {
          sourceChild: 181,
          payModeId: '181',
          payModeName: '美团外卖',
          shopActualAmount: 21.62,
        },
        {
          sourceChild: 202,
          payModeId: '202',
          payModeName: '鸿星尔克外卖',
          shopActualAmount: 33.05,
        },
        {
          sourceChild: 203,
          payModeId: '203',
          payModeName: 'wangcai外卖',
          shopActualAmount: 59.06,
        },
        {
          sourceChild: 1,
          payModeId: '75975358460996608',
          payModeName: '面额20实收10(自)',
          shopActualAmount: 12.0,
        },
      ], //支付方式收入
      businessIncomeDetailData: {
        skuSaleData: {
          //商品总额
          bigTypeData: [
            {
              id: '66167839303675904',
              parentId: null,
              bigTypeName: '菜系',
              midTypeName: null,
              quantity: 2.0,
              amount: 23.76,
              propertyAmount: 0.0,
              actualAmount: 23.76,
            },
            {
              id: '37690986377274368',
              parentId: null,
              bigTypeName: '默认',
              midTypeName: null,
              quantity: 1.0,
              amount: 10.0,
              propertyAmount: 0.0,
              actualAmount: 10.0,
            },
          ],
          midTypeData: [
            {
              id: '38278463378950144',
              parentId: '37690986377274368',
              bigTypeName: null,
              midTypeName: '商品',
              quantity: 1.0,
              amount: 10.0,
              propertyAmount: 0.0,
              actualAmount: 10.0,
            },
            {
              id: '66167839370784768',
              parentId: '66167839303675904',
              bigTypeName: null,
              midTypeName: '中餐',
              quantity: 2.0,
              amount: 23.76,
              propertyAmount: 0.0,
              actualAmount: 23.76,
            },
          ],
        },
        extraChargeData: [
          {
            commonCombinedFlag: null,
            name: '配送费',
            amount: 26.27,
          },
          {
            commonCombinedFlag: null,
            name: '餐盒费',
            amount: 15.0,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: 41.27,
          },
        ], //附加费
        consumptionTaxData: [
          {
            commonCombinedFlag: null,
            name: 'SST',
            amount: 1.44,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: 1.44,
          },
        ], //消费税
        privilegeData: {
          shopPrivilegeData: [
            {
              commonCombinedFlag: null,
              privilegePhase: '订单优惠',
              privilegeType: 1,
              privilegeTypeName: '店内商户优惠',
              privilegeName: '整单打折8.0折',
              privilegeAmount: 9.6,
            },
            {
              commonCombinedFlag: null,
              privilegePhase: '支付优惠',
              privilegeType: -1,
              privilegeTypeName: '商户收款优惠',
              privilegeName: '面额20实收10(自)',
              privilegeAmount: 8.0,
            },
            {
              commonCombinedFlag: '合计',
              privilegePhase: '合计',
              privilegeType: null,
              privilegeTypeName: '合计',
              privilegeName: null,
              privilegeAmount: 17.6,
            },
          ],
        }, //商户优惠
        depositData: [], //收押金
        thirdFeeData: [
          {
            commonCombinedFlag: null,
            name: '订单配送支出',
            amount: 8.77,
          },
          {
            commonCombinedFlag: null,
            name: '服务费',
            amount: 40.57,
          },
          {
            commonCombinedFlag: null,
            name: '补贴',
            amount: 34.17,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: 83.51,
          },
        ], //第三方费用
        profitLossData: [
          {
            commonCombinedFlag: null,
            name: '四舍五入',
            amount: 0.07,
          },
          {
            commonCombinedFlag: null,
            name: '抹零金额',
            amount: 18.58,
          },
          {
            commonCombinedFlag: null,
            name: '支付溢收',
            amount: 2.34,
          },
          {
            commonCombinedFlag: null,
            name: '押金溢收',
            amount: 0.0,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: -16.17,
          },
        ], //损益金额
      }, //营业收入明细数据
    },
    thirdData: {
      //第三方
      tradeCountData: {
        sellCount: 3,
        refundCount: 0,
        totalCount: 3,
      },
      businessIncomeData: {
        noOrderCashAmount: 336.77,
        skuSaleAmount: 33.76,
        extraChargeAmount: 41.27,
        consumptionTaxAmount: 1.44,
        depositPayAmount: 0.0,
        shopPrivilegeAmount: 35.2,
        orderDeliveryOutAmount: 8.77,
        profitLossAmount: 40.57,
        serviceChargeAmount: 0.0,
        subsidiesAmount: 34.17,
        businessIncomeAmount: 444.01,
      },
      businessSaleData: {
        businessIncomeAmount: 0.0,
        storeConsumeAmount: 124.33,
        consumeStoreMoney: 116.99,
        consumeStoreSendMoney: 7.34,
        bookingDeductionAmount: 0.0,
        creditAmount: 0.0,
        saleCollectionAmount: 319.68,
      },
      payModeData: [
        {
          sourceChild: 1,
          payModeId: '-20',
          payModeName: '匿名卡支付',
          shopActualAmount: 108.0,
        },
        {
          sourceChild: 1,
          payModeId: '-15',
          payModeName: '会员实体卡支付',
          shopActualAmount: 7.33,
        },
        {
          sourceChild: 1,
          payModeId: '-4',
          payModeName: '银行卡',
          shopActualAmount: 4.48,
        },
        {
          sourceChild: 1,
          payModeId: '-3',
          payModeName: '现金',
          shopActualAmount: 19.49,
        },
        {
          sourceChild: 1,
          payModeId: '-1',
          payModeName: '储值卡',
          shopActualAmount: 9.0,
        },
        {
          sourceChild: 41,
          payModeId: '41',
          payModeName: '饿了么星选',
          shopActualAmount: 3.01,
        },
        {
          sourceChild: 161,
          payModeId: '161',
          payModeName: '饿了么',
          shopActualAmount: 14.89,
        },
        {
          sourceChild: 181,
          payModeId: '181',
          payModeName: '美团外卖',
          shopActualAmount: 21.62,
        },
        {
          sourceChild: 202,
          payModeId: '202',
          payModeName: '鸿星尔克外卖',
          shopActualAmount: 33.05,
        },
        {
          sourceChild: 203,
          payModeId: '203',
          payModeName: 'wangcai外卖',
          shopActualAmount: 59.06,
        },
        {
          sourceChild: 1,
          payModeId: '75975358460996608',
          payModeName: '面额20实收10(自)',
          shopActualAmount: 12.0,
        },
      ],
      businessIncomeDetailData: {
        skuSaleData: {
          bigTypeData: [
            {
              id: '66167839303675904',
              parentId: null,
              bigTypeName: '菜系',
              midTypeName: null,
              quantity: 2.0,
              amount: 23.76,
              propertyAmount: 0.0,
              actualAmount: 23.76,
            },
            {
              id: '37690986377274368',
              parentId: null,
              bigTypeName: '默认',
              midTypeName: null,
              quantity: 1.0,
              amount: 10.0,
              propertyAmount: 0.0,
              actualAmount: 10.0,
            },
          ],
          midTypeData: [
            {
              id: '38278463378950144',
              parentId: '37690986377274368',
              bigTypeName: null,
              midTypeName: '商品',
              quantity: 1.0,
              amount: 10.0,
              propertyAmount: 0.0,
              actualAmount: 10.0,
            },
            {
              id: '66167839370784768',
              parentId: '66167839303675904',
              bigTypeName: null,
              midTypeName: '中餐',
              quantity: 2.0,
              amount: 23.76,
              propertyAmount: 0.0,
              actualAmount: 23.76,
            },
          ],
        },
        extraChargeData: [
          {
            commonCombinedFlag: null,
            name: '配送费',
            amount: 26.27,
          },
          {
            commonCombinedFlag: null,
            name: '餐盒费',
            amount: 15.0,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: 41.27,
          },
        ],
        consumptionTaxData: [
          {
            commonCombinedFlag: null,
            name: 'SST',
            amount: 1.44,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: 1.44,
          },
        ],
        privilegeData: {
          shopPrivilegeData: [
            {
              commonCombinedFlag: null,
              privilegePhase: '订单优惠',
              privilegeType: 1,
              privilegeTypeName: '店内商户优惠',
              privilegeName: '整单打折8.0折',
              privilegeAmount: 9.6,
            },
            {
              commonCombinedFlag: null,
              privilegePhase: '支付优惠',
              privilegeType: -1,
              privilegeTypeName: '商户收款优惠',
              privilegeName: '面额20实收10(自)',
              privilegeAmount: 8.0,
            },
            {
              commonCombinedFlag: '合计',
              privilegePhase: '合计',
              privilegeType: null,
              privilegeTypeName: '合计',
              privilegeName: null,
              privilegeAmount: 17.6,
            },
          ],
        },
        depositData: [],
        thirdFeeData: [
          {
            commonCombinedFlag: null,
            name: '订单配送支出',
            amount: 8.77,
          },
          {
            commonCombinedFlag: null,
            name: '服务费',
            amount: 40.57,
          },
          {
            commonCombinedFlag: null,
            name: '补贴',
            amount: 34.17,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: 83.51,
          },
        ],
        profitLossData: [
          {
            commonCombinedFlag: null,
            name: '四舍五入',
            amount: 0.07,
          },
          {
            commonCombinedFlag: null,
            name: '抹零金额',
            amount: 18.58,
          },
          {
            commonCombinedFlag: null,
            name: '支付溢收',
            amount: 2.34,
          },
          {
            commonCombinedFlag: null,
            name: '押金溢收',
            amount: 0.0,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: -16.17,
          },
        ],
      },
    },
    totalData: {
      //合计
      tradeCountData: {
        sellCount: 11,
        refundCount: 0,
        totalCount: 11,
      },
      businessIncomeData: {
        noOrderCashAmount: 336.77,
        skuSaleAmount: 346.76,
        extraChargeAmount: 41.27,
        consumptionTaxAmount: 1.44,
        depositPayAmount: 0.0,
        shopPrivilegeAmount: 35.2,
        orderDeliveryOutAmount: 8.77,
        profitLossAmount: 40.57,
        serviceChargeAmount: 0.0,
        subsidiesAmount: 34.17,
        businessIncomeAmount: 757.01,
      },
      businessSaleData: {
        businessIncomeAmount: 0.0,
        storeConsumeAmount: 124.33,
        consumeStoreMoney: 116.99,
        consumeStoreSendMoney: 7.34,
        bookingDeductionAmount: 0.0,
        creditAmount: 0.0,
        saleCollectionAmount: 632.68,
      },
      payModeData: [
        {
          sourceChild: 1,
          payModeId: '-20',
          payModeName: '匿名卡支付',
          shopActualAmount: 108.0,
        },
        {
          sourceChild: 1,
          payModeId: '-15',
          payModeName: '会员实体卡支付',
          shopActualAmount: 7.33,
        },
        {
          sourceChild: 1,
          payModeId: '-4',
          payModeName: '银行卡',
          shopActualAmount: 4.48,
        },
        {
          sourceChild: 1,
          payModeId: '-3',
          payModeName: '现金',
          shopActualAmount: 19.49,
        },
        {
          sourceChild: 1,
          payModeId: '-1',
          payModeName: '储值卡',
          shopActualAmount: 9.0,
        },
        {
          sourceChild: 41,
          payModeId: '41',
          payModeName: '饿了么星选',
          shopActualAmount: 3.01,
        },
        {
          sourceChild: 161,
          payModeId: '161',
          payModeName: '饿了么',
          shopActualAmount: 14.89,
        },
        {
          sourceChild: 181,
          payModeId: '181',
          payModeName: '美团外卖',
          shopActualAmount: 21.62,
        },
        {
          sourceChild: 202,
          payModeId: '202',
          payModeName: '鸿星尔克外卖',
          shopActualAmount: 33.05,
        },
        {
          sourceChild: 203,
          payModeId: '203',
          payModeName: 'wangcai外卖',
          shopActualAmount: 59.06,
        },
        {
          sourceChild: 1,
          payModeId: '75975358460996608',
          payModeName: '面额20实收10(自)',
          shopActualAmount: 12.0,
        },
      ],
      businessIncomeDetailData: {
        skuSaleData: {
          bigTypeData: [
            {
              id: '66167839303675904',
              parentId: null,
              bigTypeName: '菜系',
              midTypeName: null,
              quantity: 6.0,
              amount: 146.76,
              propertyAmount: 0.0,
              actualAmount: 146.76,
            },
            {
              id: '37690986377274368',
              parentId: null,
              bigTypeName: '默认',
              midTypeName: null,
              quantity: 14.0,
              amount: 200.0,
              propertyAmount: 0.0,
              actualAmount: 200.0,
            },
          ],
          midTypeData: [
            {
              id: '38278463378950144',
              parentId: '37690986377274368',
              bigTypeName: null,
              midTypeName: '商品',
              quantity: 14.0,
              amount: 200.0,
              propertyAmount: 0.0,
              actualAmount: 200.0,
            },
            {
              id: '66167839370784768',
              parentId: '66167839303675904',
              bigTypeName: null,
              midTypeName: '中餐',
              quantity: 6.0,
              amount: 146.76,
              propertyAmount: 0.0,
              actualAmount: 146.76,
            },
          ],
        },
        extraChargeData: [
          {
            commonCombinedFlag: null,
            name: '配送费',
            amount: 26.27,
          },
          {
            commonCombinedFlag: null,
            name: '餐盒费',
            amount: 15.0,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: 41.27,
          },
        ],
        consumptionTaxData: [
          {
            commonCombinedFlag: null,
            name: 'SST',
            amount: 1.44,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: 1.44,
          },
        ],
        privilegeData: {
          shopPrivilegeData: [
            {
              commonCombinedFlag: null,
              privilegePhase: '订单优惠',
              privilegeType: 1,
              privilegeTypeName: '店内商户优惠',
              privilegeName: '整单打折8.0折',
              privilegeAmount: 9.6,
            },
            {
              commonCombinedFlag: null,
              privilegePhase: '支付优惠',
              privilegeType: -1,
              privilegeTypeName: '商户收款优惠',
              privilegeName: '面额20实收10(自)',
              privilegeAmount: 8.0,
            },
            {
              commonCombinedFlag: '合计',
              privilegePhase: '合计',
              privilegeType: null,
              privilegeTypeName: '合计',
              privilegeName: null,
              privilegeAmount: 17.6,
            },
          ],
        },
        depositData: [],
        thirdFeeData: [
          {
            commonCombinedFlag: null,
            name: '订单配送支出',
            amount: 8.77,
          },
          {
            commonCombinedFlag: null,
            name: '服务费',
            amount: 40.57,
          },
          {
            commonCombinedFlag: null,
            name: '补贴',
            amount: 34.17,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: 83.51,
          },
        ],
        profitLossData: [
          {
            commonCombinedFlag: null,
            name: '四舍五入',
            amount: 0.07,
          },
          {
            commonCombinedFlag: null,
            name: '抹零金额',
            amount: 18.58,
          },
          {
            commonCombinedFlag: null,
            name: '支付溢收',
            amount: 2.34,
          },
          {
            commonCombinedFlag: null,
            name: '押金溢收',
            amount: 0.0,
          },
          {
            commonCombinedFlag: '合计',
            name: '合计',
            amount: -16.17,
          },
        ],
      },
    },
  },
  handoverData: [
    {
      info: {
        deviceId: 12313,
        deviceType: '支付方式名称',
        handTime: 12,
        duration: 12,
        operator: 12,
        cashBoxAmount: 12,
        collectionAmount: 18,
        handoverAmount: 18,
        diffAmount: 18,
      },
      payModes: [
        {
          payModeId: 12313,
          payModeName: '支付方式名称',
          cashBoxAmount: 12,
          totalCount: 526,
          saleAmount: 12,
          bizActivityAmount: 12,
          creditAmount: 12,
          bookingAmount: 18,
          balanceAmount: 18,
          handoverAmount: 18,
          subTotalAmount: 18,
        },
      ],
      subtotal: {
        payModeId: 12313,
        payModeName: '总计',
        totalCount: 526,
        cashBoxAmount: 12,
        saleAmount: 12,
        bizActivityAmount: 12,
        creditAmount: 12,
        bookingAmount: 18,
        balanceAmount: 18,
        handoverAmount: 18,
        subTotalAmount: 18,
      },
    },
  ],
};

const router = {
  getData: {
    method: 'POST',
    path: '/mind/bui/report/closingDetail/query',
    container: responseWrapper(getData),
  },
};

module.exports = router;
