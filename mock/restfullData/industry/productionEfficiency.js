const { responseWrapper } = require('../../utils');

const queryList = {
  // 堂口商品个数统计, 柱状图
  tongKouGoodsCount: [
    {
      name: '堂口1',
      value: '10',
    },
    {
      name: '堂口2',
      value: '20',
    },
  ],
  // 堂口平均出品时长, 柱状图
  tongKouMakeTime: [
    {
      name: '堂口1',
      value: 10.1,
    },
  ],
  // 出品效率,
  makeEfficiencies: [
    {
      id: 123,
      name: '商品名称',
      goodsCount: 10, //商品数量
      goodsCountChainRatio: 10, //商品数量环比
      waitTime: 10.1, //等待时长
      waitTimeChainRatio: -20, //等待时长环比
      garnishTime: 11.1, // 配菜时长
      garnishTimeChainRatio: 11, //配菜时长环比
      makeTime: '1.1', //制作时长
      makeTimeChainRatio: -11, // 制作时长环比
      avgMakeTime: '20.3', // 平均制作时长
      avgMakeTimeChainRatio: 15, //平均制作时长环比
    },
    {
      id: 12333,
      name: '堂口名称',
      goodsCount: 199, //商品数量
      goodsCountChainRatio: 10, //商品数量环比
      waitTime: 10.1, //等待时长
      waitTimeChainRatio: -20, //等待时长环比
      garnishTime: 11.1, // 配菜时长
      garnishTimeChainRatio: 11, //配菜时长环比
      makeTime: '1.1', //制作时长
      makeTimeChainRatio: -11, // 制作时长环比
      avgMakeTime: '120.3', // 平均制作时长
      avgMakeTimeChainRatio: 15, //平均制作时长环比
    },
  ],
};

const queryDataDetail = {
  currentPage: 1,
  pageSize: 20,
  totalRows: 94,
  startRow: 0,
  totalPage: 5,
  items: [
    {
      orderNo: '234234234', // 订单号
      tongKouName: '堂口', //堂口名称
      goodsName: '商品', //商品名称
      goodsCount: 1, // 商品数量
      waitTime: 1.1, // 等待时长
      garnishTime: 1.1, //配菜时长
      makeTime: 1.1, //制作时长
      makeCount: 2, //做菜数量
    },
  ],
};

const queryDetail = {
  currentPage: 1,
  pageSize: 20,
  totalRows: 94,
  startRow: 0,
  totalPage: 5,
  items: [
    {
      id: 123, //一个唯一标识符
      name: '堂口名称/商品名称',
      count: 1, //数量
      waitTime: 1.1, //等待时长
      garnishTime: 1.1, //配菜时长
      makeTime: 2.2, //制作时长
      avgMakeTime: 0.8, // 平均出品时长
    },
  ],
};

const getTypeList = {
  bigTypes: [
    {
      id: 111,
      name: '大类',
      midTypes: [
        {
          id: 222,
          name: '中类',
          dishes: [
            {
              uuid: '58060e6776da4ab28287888d99f27867',
              name: 'string',
              type: 7,
              midTypeId: 222,
              midTypeName: '中类',
              bigTypeId: 111,
              bigTypeName: '大类',
            },
          ],
        },
      ],
    },
    {
      id: 11111,
      name: '大类1',
      midTypes: [
        {
          id: 222222,
          name: '中类2',
          dishes: [
            {
              uuid: '578e6776da4ab28287888d99f27867',
              name: 'string3',
              type: 7,
              midTypeId: 222222,
              midTypeName: '中类2',
              bigTypeId: 11111,
              bigTypeName: '大类1',
            },
          ],
        },
      ],
    },
  ],
  windows: [
    {
      id: 666,
      name: '菜口1',
    },
  ],
};
const router = {
  queryList: {
    method: 'POST',
    path: '/mind/bui/industry/productionEfficiency/queryList',
    container: responseWrapper(queryList),
  },
  queryDataDetail: {
    method: 'POST',
    path: '/mind/bui/industry/productionEfficiency/queryDataDetail',
    container: responseWrapper(queryDataDetail),
  },
  queryDetail: {
    method: 'POST',
    path: '/mind/bui/industry/productionEfficiency/queryDetail',
    container: responseWrapper(queryDetail),
  },
  getTypeList: {
    method: 'POST',
    path: '/mind/bui/industry/productionEfficiency/getTypeList',
    container: responseWrapper(getTypeList),
  },
};

module.exports = router;
