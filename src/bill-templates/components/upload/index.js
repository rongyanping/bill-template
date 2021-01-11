import React, { useState, useEffect } from 'react';
import { Upload, Icon, message, Button } from 'antd';
import QRCode from 'qrcode.react';
import createHashHistory from 'history/createHashHistory';
import { formatCellStyle } from '../../common/utils';
import {
  qrCodeSize,
  barCodeSize,
  smBarCodeSize,
  customImgSize,
} from '../../common/constant';
import './style.less';
const history = createHashHistory();
export default function UploadCell({
  pageSize = 80, // 纸张类型80--48,76--42,58--32
  type = 4, // 2二维码,3条形码,4自动定义图片, 品牌logo
  param = '自定义文本', // 图片下方的文案
  data = null, // 图片地址
  style = { align: 1, fontSize: 4, fontWeight: 2 }, // 节点样式
  readOnly = false, // 是否显示上传按钮; 仅自定义图片、自定义二维码支持上传
  buttonLabel = '上传图片', // 按钮文字
  onUpload, // 上传
  onCancelUpload, // 删除上传的图片
  originData,
}) {
  // LG-9E02347F546B7271F8D07FCA54964DDC-zh_CN  http://facebook.github.io/react/
  // const [imgUrl, setImgUrl] = useState('https://p0.meituan.net/rmscashier/80866718a8c8321c72556ef19ac60b2582112.png');
  const [imgUrl, setImgUrl] = useState(data === '{shopLogo}' ? null : data);
  const [imgKey, setKey] = useState(null);
  const { align, fontSize, fontWeight } = formatCellStyle(style);
  // useEffect(() => { }, [imgUrl]);
  // 外层样式
  const boxStyle = {
    alignItems:
      align === 'left'
        ? 'flex-start'
        : align === 'right'
          ? 'flex-end'
          : 'center',
  };
  // 自定义文案
  const textStyle = {
    textAlign: align,
    fontSize,
    fontWeight,
  };
  // 上传props
  const props = {
    showUploadList: false,
    customRequest: options => {
      onUpload && onUpload(options, originData);
    }
  };
  // 删除图片
  const handleDelImg = () => {
    onCancelUpload && onCancelUpload(originData);
  };
  // 点击上传logo
  const handleClickUpload = () => {
    if (data === '{shopLogo}') {
      history.push({
        pathname: '/setting/brandLogo'
      })
    }
  };
  // 上传按钮
  const uploadButton = (
    <div className="upload-button" onClick={handleClickUpload}>
      <Button>
        <Icon type="upload" /> {buttonLabel || '上传图片'}
      </Button>
    </div>
  );
  // 图片宽度计算 pos上二维码320*320、条形码480*120 + 58纸384*96
  let newWidth = customImgSize.width;
  let newHeight = null;
  switch (type) {
    case 4:
      newWidth = customImgSize.width;
      break;
    case 2:
      newWidth = qrCodeSize.width;
      newHeight = qrCodeSize.height;
      break;
    case 3:
      if (pageSize === 58) {
        newWidth = smBarCodeSize.width;
        newHeight = smBarCodeSize.height;
      } else {
        newWidth = barCodeSize.width;
        newHeight = barCodeSize.height;
      }
      break;
    default:
      return;
  }
  const previewStyle = {
    width: `${newWidth}px`,
    height: newHeight ? `${newHeight}px` : 'auto',
  };
  // console.log('imgUrl----' + buttonLabel, align);
  return (
    <div className="upload-box" style={boxStyle}>
      {!readOnly && data !== '{shopLogo}' && (
        <Upload {...props}>{imgUrl && imgUrl !== 'null' ? null : uploadButton}</Upload>
      )}
      {!readOnly && data === '{shopLogo}' && uploadButton}
      {(imgUrl && imgUrl !== 'null') ? (
        <div style={{ border: '2px solid gray' }}>
          <div className="preview-box" style={previewStyle}>
            {type === 4 ? (
              <img src={imgUrl} className="preview-img" />
            ) : (
                <QRCode value={imgUrl} size={newWidth} />
              )}
            {
              (!data || data === 'null') && <span className="overlayer"></span>
            }
            {
              (!data || data === 'null') && <Icon type="delete" className="del-icon" onClick={handleDelImg} />
            }
          </div>
        </div>
      ) : null}
      {param && <div style={textStyle}>{param}</div>}
    </div>
  );
}
