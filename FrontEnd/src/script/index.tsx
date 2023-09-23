import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

declare global {
  interface Window {
    dialogConfirm: (title: string, content: string, callback: Function) => void;
  }
}

window.dialogConfirm = (title: string, content: string, callback: Function) => {
  Modal.confirm({
    title: "",
    icon: null,
    content: (
      <div className="text-center">
        <div>
          <ExclamationCircleOutlined
            style={{ fontSize: "30px", color: "#faad14" }}
          />
        </div>
        <p className="text-lg mt-2 font-bold">{title}</p>
        <p className="mt-3">{content}</p>
      </div>
    ),
    okText: `Yes`,
    cancelText: `No`,
    onOk: () => {
      callback(true);
    },
    onCancel: () => {
      callback(false);
    },
  });
};
