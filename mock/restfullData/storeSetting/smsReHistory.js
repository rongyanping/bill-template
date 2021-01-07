const { getOperationData, responseWrapper } = require('../../utils');

const queryData = {
  page: {
    page: 1,
    total: 20,
    records: 100,
    totalRows: 0,
    startRow: 0,
    totalPage: 1,
    dataList: [],
    subRows: 0,
    brandId: 11476,
  },
  smsRecharge: {
    smsid: '10012588',
    commercialid: null,
    rechargetime: null,
    rechargecount: 100,
    surpluscount: 0,
    creatdatetime: null,
    rechargestatus: null,
    memo: null,
    status: null,
    rechargeivrcount: 100,
    surplusivrcount: 100,
    modifydatetime: null,
  },
};

queryData.records = 100;

const router = {
  listData: {
    method: 'POST',
    path: '/mind/bui/store/smsReHistory/listData',
    container: responseWrapper(queryData),
  },
};
module.exports = router;
