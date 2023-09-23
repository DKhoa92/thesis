import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useResponsive from "hooks/useResponsive";

export default function NotFound() {
  const navigate = useNavigate();
  const isMobile = useResponsive();
  return (
    <div className="flex flex-wrap h-screen justify-center items-center">
      <div className="w-full">
        <img
          src="/images/not-found.png"
          alt="Not found"
          className={`${isMobile ? "w-4/5" : "w-1/2"} mx-auto`}
        />
        <div className="w-full flex justify-center">
          <Button
            className={`bg-[#1890ff] flex items-center ${
              isMobile ? "text-md" : "text-lg"
            }`}
            type="primary"
            icon={<LeftOutlined />}
            size={isMobile ? "middle" : "large"}
            onClick={() => navigate("/")}
          >
            {`Back to home`}
          </Button>
        </div>
      </div>
    </div>
  );
}
