import { useEffect, useState } from "react";
import { Button } from "antd";
import { UpOutlined } from "@ant-design/icons";

export default function BtnScrollToTop() {
  const [isShowButtonScroll, setIsShowButtonScroll] = useState(false);

  const handleWindowScroll = () => {
    if (window.pageYOffset >= 200) {
      setIsShowButtonScroll(true);
    } else {
      setIsShowButtonScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  return (
    <Button
      icon={<UpOutlined />}
      size="large"
      shape="circle"
      type="primary"
      className={`fixed z-50 bottom-4 right-2 bg-blue-500 hover:bg-blue-400 border-0 transition-all duration-500 shadow-lg shadow-slate-400 ${
        isShowButtonScroll ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    />
  );
}
