// import createAPI from 'shared/utils/createAPI';
const url = '/print/printer/documentStyleTemplet';
const url2 = '/print/print-template';
const createAPI = {
  post: () => { },
  get: () => { },
}

// 上传自定义图片
const uploadImg = param => createAPI.post(`${url2}/getUploadImgKey`, param, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
// 删除图片
const delImg = param => createAPI.get(`${url2}/deleteImgKey`, param);
// 上传自定义二维码
const uploadCode = param => createAPI.post(`${url2}/getCode`, param, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
// 批量查询图片
const queryImgUrl = param => createAPI.post(`${url}/save`, param);
export {
  uploadImg,
  delImg,
  uploadCode,
  queryImgUrl,
};
