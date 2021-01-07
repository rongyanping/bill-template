const { getOperationData, responseWrapper } = require('../../utils');

const listTemplateReport = [
  {
    templateName: '明星商品分析',
    reportType: 0,
    description: '统计各门店下的明星商品，合并到品牌下的最终top5商品',
    templateImageUrl: '0',
    biReportUrl: '',
  },
  {
    templateName: '支付方式分析',
    reportType: 2,
    description: '统计品牌下各支付方式收款数据及占比',
    templateImageUrl: '2',
    biReportUrl: 'http://quick.bi.xxx',
  },
  {
    templateName: '订单类型分析',
    reportType: 1,
    description: '统计品牌下各个订单类型的销售趋势，适时把握销售趋势',
    templateImageUrl: '1',
    biReportUrl: 'http://quick.bi.xxx',
  },
  {
    templateName: '滞销商品分析',
    reportType: 0,
    description: '分析品牌下时段内滞销商品的数据情况',
    templateImageUrl: '0',
    biReportUrl: '',
  },
  {
    templateName: '实收金额分析',
    reportType: 2,
    description: '反映品牌下实收金额变化趋势，支持门店筛选',
    templateImageUrl: '2',
    biReportUrl: '',
  },
  {
    templateName: '外卖销售分析',
    reportType: 3,
    description: '统计品牌下各渠道外卖销售数据占比和变化趋势',
    templateImageUrl: '3',
    biReportUrl: '',
  },
];

const listSelfBuildReport = {
  purchasedBiTool: 0,
  biSelfBuildReportList: [
    {
      reportName: '自定义报表',
      id: 12312321312,
      description: '订单报表1',
      reportType: 0,
      biReportUrl: 'http://quick.bi.xxx',
      pageId: 'qw9a-sd9s-d86s-da8s-7d8s-a7gh',
    },
    {
      reportName: '自定义报表',
      id: 12312321312,
      description: '订单报表2',
      reportType: 1,
      biReportUrl: 'http://quick.bi.xxx',
      pageId: 'qw9a-sd9s-d86s-da8s-7d8s-a7gh',
    },
    {
      reportName: '自定义报表',
      id: 12312321312,
      description: '订单报表3',
      reportType: 2,
      biReportUrl: 'http://quick.bi.xxx',
      pageId: 'qw9a-sd9s-d86s-da8s-7d8s-a7gh',
    },
    {
      reportName: '自定义报表',
      id: 12312321312,
      description: '订单报表4',
      reportType: 3,
      biReportUrl: 'http://quick.bi.xxx',
      pageId: 'qw9a-sd9s-d86s-da8s-7d8s-a7gh',
    },
  ],
};

const router = {
  listTemplateReport: {
    method: 'POST',
    path: '/mind/bui/industry/customReport/listTemplateReport',
    container: responseWrapper(listTemplateReport),
  },
  listSelfBuildReport: {
    method: 'POST',
    path: '/mind/bui/industry/customReport/listSelfBuildReport',
    container: responseWrapper(listSelfBuildReport),
  },
  saveSelfBuildReport: {
    method: 'POST',
    path: '/mind/bui/industry/customReport/saveSelfBuildReport',
    container: getOperationData(),
  },
  deleteSelfBuildReport: {
    method: 'POST',
    path: '/mind/bui/industry/customReport/deleteSelfBuildReport',
    container: getOperationData(),
  },
};

module.exports = router;
