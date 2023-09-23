import { Layout, Menu, Dropdown, Badge } from "antd";
import { setAuth, selectAuth } from "../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined, BellOutlined, MessageOutlined } from "@ant-design/icons";
import logoMob from "../assets/images/liberty-logo-mob.png";
import { useState } from "react";
import ModalChangePass from "./ModalChangePass";
import { selectMyProfile } from "store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import api from "service/apiService";

const { Header: HeaderAntd } = Layout;

const Header = (props: { collapsed: boolean; isMobile: boolean }) => {
  const navigate = useNavigate();
  const { collapsed, isMobile } = props;
  const [isShowModalChangePass, setIsShowModalChangePass] = useState(false);
  const myProfile = useSelector(selectMyProfile);

  const { avatar, fullName } = myProfile;

  const dispatch = useDispatch();

  const logout = () => {
    api.post("/auth/logout", {});
    dispatch(setAuth(null));
  };

  const StaffOpts = () => {
    const items = [
      {
        label: `My account`,
        key: "my-account",
      },
      {
        label: `Change password`,
        key: "change-password",
      },
      {
        label: `Logout`,
        key: "logout",
      },
    ];
    return (
      <Menu
        items={items}
        onClick={(e) => {
          if (e.key === "change-password") {
            setIsShowModalChangePass(true);
          } else if (e.key === "logout") {
            logout();
          } else if (e.key === "my-account") {
            navigate("/my-account");
          }
        }}
      />
    );
  };

  return (
    <>
      {isShowModalChangePass ? (
        <ModalChangePass setIsShowModalChangePass={setIsShowModalChangePass} />
      ) : null}
      <HeaderAntd
        className="fixed top-0 right-0 p-0 z-10 shadow-[4px_4px_40px_0_rgba(0,0,0,0.05)] bg-white h-14"
        style={{
          width: `calc(100% - ${
            collapsed && !isMobile
              ? "80px"
              : !collapsed && !isMobile
              ? "265px"
              : "0px"
          })`,
        }}
      >
        <div className="transition-all flex justify-end relative h-full">
          {isMobile && collapsed ? (
            <div className="flex items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <img src={"/images/liberty-logo-mob.png"} alt="logo" className="h-[30px]" />
            </div>
          ) : null}
          <div className="flex gap-6 items-center">
            <Dropdown overlay={<StaffOpts />} trigger={["click"]}>
              <div className="cursor-pointer text-black flex items-center">
                <img
                  src={avatar || ""}
                  alt={fullName || ""}
                  className="w-6 h-6 rounded-full object-cover"
                />
                {!isMobile ? (
                  <div className="ml-1">
                    <span>{fullName}</span>
                  </div>
                ) : null}
                <DownOutlined className="pl-2" />
              </div>
            </Dropdown>
          </div>
        </div>
      </HeaderAntd>
    </>
  );
};

export default Header;
