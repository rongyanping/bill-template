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
  param, // 图片下方的文案
  data = null, // 图片地址
  style = { align: 1, fontSize: 4, fontWeight: 2 }, // 节点样式
  readOnly = false, // 是否显示上传按钮; 仅自定义图片、自定义二维码支持上传
  buttonLabel = '上传图片', // 按钮文字
  onUpload, // 上传
  onCancelUpload, // 删除上传的图片
}) {

  const { align, fontSize, fontWeight } = formatCellStyle(style);
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
      onUpload && onUpload(options);
    }
  };
  // 删除图片
  const handleDelImg = () => {
    onCancelUpload && onCancelUpload();
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
  // console.log('upload=====' + buttonLabel, data, param);
  return (
    <div className="upload-box" style={boxStyle}>
      {/* 上传自定义图片/二维码 */}
      {
        (!readOnly && !data) && (
          <Upload {...props}>{uploadButton}</Upload>
        )
      }
      {/* 上传logo */}
      {!readOnly && data === '{shopLogo}' && uploadButton}
      {/* 预览图 */}
      {
        (data && data !== '{shopLogo}') ? (
          <div style={{ border: '2px solid gray' }}>
            <div className="preview-box" style={previewStyle}>
              {
                type === 4 ? (
                  <img src={data} className="preview-img" />
                ) : (
                    <QRCode value={data} size={newWidth} />
                  )
              }
              {
                !readOnly && <span className="overlayer"></span>
              }
              {
                !readOnly && <Icon type="delete" className="del-icon" onClick={handleDelImg} />
              }
            </div>
          </div>
        ) : null
      }
      {param && <div style={textStyle}>{param}</div>}
    </div>
  );
}
