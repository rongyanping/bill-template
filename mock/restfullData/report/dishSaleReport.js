const dishBrandTypeData = {
  success: true,
  code: '200',
  message: 'success',
  data: [
    {
      serverCreateTime: null,
      serverUpdateTime: null,
      creatorId: null,
      creatorName: null,
      updatorId: null,
      updatorName: null,
      statusFlag: null,
      id: 1225,
      parentId: 1224,
      typeCode: null,
      name: '炒菜1',
      aliasName: null,
      sort: null,
      dishTypeDesc: null,
      isOrder: null,
      uuid: null,
      brandIdenty: null,
      isCure: null,
      enabledFlag: null,
    },
  ],
};

const router = {
  getDishBrandType: {
    method: 'GET',
    path: '/mind/bui/report/dishSaleReport/getDishBrandType',
    container: dishBrandTypeData,
  },
};

module.exports = router;
