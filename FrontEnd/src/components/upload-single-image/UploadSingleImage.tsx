import { Upload } from "antd";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "./style.scss";
import uploadFile from "service/uploadService";
import type { UploadProps, UploadFile } from "antd";
import { RcFile } from "antd/lib/upload";


interface UploadSingleImageProps {
  disabled?: boolean;
  imageUrl: string | "";
  onChange: (arr: string) => void;
  beforeUpload: (err: string) => void;
  folderUpload?: string;
  maxItem?: number;
}

interface FileEl {
  uid: string;
  name: string;
  status: string;
  url: string;
}

const UploadSingleImage = (props: UploadSingleImageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(props.imageUrl);
  }, [props]);

  const handleChange: UploadProps["onChange"] = async (info) => {
    if (info.file.status === "removed") {
      setImageUrl("");
      props.onChange("");
    } else if (info.file.status === "uploading") {
      const url = await uploadFile(
        info.file.originFileObj as File,
        props.folderUpload || ""
      );
      props.onChange(url);
      setIsLoading(false);
    }
  };

  function beforeUpload(file: RcFile) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      props.beforeUpload(`Invalid image format`);
      return false;
    }
    if (isJpgOrPng) {
      props.beforeUpload("");
    }
    return isJpgOrPng;
  }

  const uploadButton = (
    <div>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <CameraOutlined style={{ fontSize: "20px" }} />
      )}
      {/* <div style={{ marginTop: 8 }}>Upload</div> */}
    </div>
  );
  return (
    <Upload
      {...props}
      name="imageUrl"
      listType="picture-card"
      fileList={
        imageUrl
          ? ([
              {
                uid: "-xxx",
                status: "done",
                url: imageUrl,
                name: "image.png",
              },
            ] as UploadFile<FileEl>[])
          : []
      }
      className="single-image-uploader"
      showUploadList={{ showRemoveIcon: true, showPreviewIcon: false }}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? null : uploadButton}
    </Upload>
  );
};

export default UploadSingleImage;
