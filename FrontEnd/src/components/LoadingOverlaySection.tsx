import { Spin } from "antd";

export default function LoadingOverlaySection() {
  return (
    <div
      className={`w-full h-full flex justify-center items-center transition-all duration-300 absolute left-0 top-0 z-10 `}
    >
      <Spin tip="Loading..." size="large" />
    </div>
  );
}
