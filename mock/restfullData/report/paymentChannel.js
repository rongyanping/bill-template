const responseWrapper = require('../../utils/responseWrapper');

const getTotal = {
  feeTotalAmount: 1000000, // 手续费
  privilegeAmount: 1000000, // 优惠金额
  refundAmount: 1000000, // 退款金额
  refundCount: 1000000, // 退款笔数
  refundFeeAmount: 1000000, //退款手续费
  saleAmount: 1000000, // 收款金额
  saleCount: 1000000, // 收款笔数
  saleFeeAmount: 1000000, // 收款手续费
  shopSettlementAmount: 1000000, // 结算金额
  totalAmount: 1000000, // 总金额
  totalCount: 1000000, // 总条数
};

const getData = {
  currentPage: 1, // 当前页
  items: [
    {
      brandId: 1111, // 品牌
      channelFlag: 3, // 通道
      channelFlagName: '支付通', // 通道名称
      discountFee: 10, // 优惠金额
      payDate: '2019-09-09', // 交易日期
      payFee: 10, // 收款金额
      refundFee: 10, // 退款金额
      shopFactFee: 10, // 手续费
      shopId: 1111, // 商户id
      shopName: '商户名', // 商户名
      payPassageShopId: '通道商户号', // 通道商户号
      shopSettlementFee: 10, // 结算金额
      tradeCount: 11, // 交易笔数
      tradeFee: 10, // 交易金额
    },
  ],
  pageSize: 20, // 每页条数
  totalPage: 3, // 总页数
  totalRows: 58, // 总条数
};

const getDetailTotal = {
  total: {
    discountFee: 10,
    payFee: 10,
    refundFee: 10,
    shopFactFee: 10,
    shopSettlementFee: 10,
    tradeCount: 10,
    tradeFee: 0,
  },
  items: [
    {
      orginazitionCode: '支付机构',
      discountFee: 10,
      payFee: 10,
      refundFee: 10,
      shopFactFee: 10,
      shopSettlementFee: 10,
      tradeCount: 10,
      tradeFee: 0,
    },
  ],
};

const getDetailList = {
  currentPage: 1, // 当前页
  items: [
    {
      brandId: 1111, // 品牌
      channelFlag: 3, // 通道
      channelFlagName: '支付通', // 通道名称
      discountFee: 10, // 优惠金额
      tradeTime: '2019-09-09 00:00:00', // 交易时间
      bizDate: '2019-09-09', // 营业日
      tradeServerCreateTime: '2019-09-09 00:00:00', // 下单时间
      payFee: 10, // 收款金额
      refundFee: 10, // 退款金额
      shopFactFee: 10, // 手续费
      shopId: 1111, // 商户id
      tradeNo: 984654654, //订单号
      payTradeNo: 984654654, //支付订单号
      shopName: '商户名', // 商户名
      payPassageShopId: '通道商户号', // 通道商户号
      orginazitionCode: '支付机构', // 支付机构
      businessTypeName: '收银', // 业务来源
      bizType: 1, // 交易类型（1：支付；2：退款）
      shopSettlementFee: 10, // 结算金额
      tradeCount: 1, // 交易笔数
      tradeFee: 10, // 交易金额
    },
  ],
  pageSize: 20, // 每页条数
  totalPage: 3, // 总页数
  totalRows: 58, // 总条数
};

const getChannelFlag = [
  {
    backValue: 4,
    viewValue: '支付通',
  },
  {
    backValue: 3,
    viewValue: '支付宝',
  },
];

const router = {
  getTotal: {
    method: 'POST',
    path: '/mind/bui/report/paymentChannel/getTotal',
    container: responseWrapper(getTotal),
  },
  getData: {
    method: 'POST',
    path: '/mind/bui/report/paymentChannel/getData',
    container: responseWrapper(getData),
  },
  getDetailTotal: {
    method: 'POST',
    path: '/mind/bui/report/paymentChannel/getDetailTotal',
    container: responseWrapper(getDetailTotal),
  },
  getDetailList: {
    method: 'POST',
    path: '/mind/bui/report/paymentChannel/getDetailList',
    container: responseWrapper(getDetailList),
  },
  getChannelFlag: {
    method: 'POST',
    path: '/mind/bui/report/paymentChannel/getChannelFlag',
    container: responseWrapper(getChannelFlag),
  },
};

module.exports = router;
