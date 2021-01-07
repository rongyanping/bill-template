const { getOperationData, responseWrapper } = require('../../utils');

const queryData = {
  scheduledTime: true,
  limitBookingNumber: 0,
  limitBookingUnit: '1',
  preOrder: true,
  keepTimeStr: '00:00',
  dinnerTime: true,
  limitServiceTime: '00:00',
  sourceList: [
    {
      backValue: '1',
      viewValue: '代订',
    },
    {
      backValue: '2',
      viewValue: '到店',
    },
    {
      backValue: '3',
      viewValue: '大众点评',
    },
    {
      backValue: '4',
      viewValue: '美团',
    },
    {
      backValue: '5',
      viewValue: '订餐小秘书',
    },
  ],
  sourceChecked: ['1', '2'],
  bookingTable: [
    {
      name: '桌台1',
      checkedList: ['1', '2'],
      list: [
        {
          id: '1',
          tableNum: '101235',
          tableName: '桌台1',
          tablePersonCount: '1',
          canBooking: '1',
        },
        {
          id: '2',
          tableNum: '101236',
          tableName: '桌台2',
          tablePersonCount: '4',
          canBooking: '1',
        },
        {
          id: '3',
          tableNum: '101237',
          tableName: '桌台3',
          tablePersonCount: '8',
          canBooking: '1',
        },
      ],
    },
    {
      name: '桌台2',
      checkedList: ['1'],
      list: [
        {
          id: '1',
          tableNum: '101235',
          tableName: '桌台1',
          tablePersonCount: '1',
          canBooking: '1',
        },
        {
          id: '2',
          tableNum: '101236',
          tableName: '桌台2',
          tablePersonCount: '4',
          canBooking: '1',
        },
      ],
    },
  ],
};

const router = {
  get: {
    method: 'GET',
    path: '/mind/bui/bookingConfig/get',
    container: responseWrapper(queryData),
  },
  save: {
    method: 'POST',
    path: '/mind/bui/bookingConfig/save',
    container: responseWrapper(),
  },
};

module.exports = router;
