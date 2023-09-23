import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Switch } from "antd";
import {
  BulbOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import routes from "../routes";
import { selectMyProfile } from "store/auth/authSlice";
import { RouteEl } from "types";

const { Sider } = Layout;

function getItem(
  label: React.ReactNode,
  path: string,
  key: React.Key,
  icon?: React.ReactNode,
  children?: RouteEl[]
): RouteEl {
  return {
    key,
    icon,
    children,
    label: path ? <Link to={path}>{label}</Link> : label,
  } as RouteEl;
}

const NavBar = (props: {
  collapsed: boolean;
  isMobile: boolean;
  setCollapsed: Function;
}) => {
  const myProfile = useSelector(selectMyProfile);
  const { pathname } = useLocation();
  const [key, setKey] = useState<string[]>([]);
  const [openKey, setOpenKey] = useState<string[]>([]);

  useEffect(() => {
    setKey([pathname.split("/")[1]]);
    setOpenKey(
      pathname.split("/")[1].split("-").length
        ? [pathname.split("/")[1].split("-")[0]]
        : [pathname.split("/")[1]]
    );
  }, [pathname]);

  let items: RouteEl[] = [];

  routes.forEach((route) => {
    let {
      label,
      path,
      key,
      icon,
      children = [],
      hidden,
    } = route;
    if (!hidden) {
      let childRoutes: RouteEl[] = [];
      if (children.length) {
        children.forEach((child) => {
          let {
            label,
            path,
            key,
            icon,
            hidden,
          } = child;
          if (!hidden) {
            childRoutes.push(getItem(label, path, key, icon));
          }
        });
        if (childRoutes.length) {
          items.push(getItem(label, path, key, icon, [...childRoutes]));
        }
        return;
      }
      items.push(getItem(label, path, key, icon));
    }
  });

  const { collapsed, isMobile, setCollapsed } = props;
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      className="fixed top-0 left-0 z-20 h-screen overflow-y-scoll"
      trigger={null}
      theme={darkMode ? "dark" : "light"}
      width={265}
      style={{ left: isMobile && collapsed ? "-80px" : 0 }}
    >
      <span
        onClick={() => setCollapsed(!collapsed)}
        className={`absolute top-3 right-[-40px] w-50 ${
          !collapsed && isMobile ? "hidden" : ""
        }`}
      >
        {collapsed ? (
          <MenuUnfoldOutlined className="cursor-pointer text-xl opacity-60" />
        ) : (
          <MenuFoldOutlined className="cursor-pointer text-xl opacity-60" />
        )}
      </span>
      <div className="overflow-y-auto h-[90%] menu-wrapper">
        <Link
          to="/dashboard"
          className="flex justify-center items-center h-16 shadow-[0_1px_9px_-3px_rgba(0,0,0,0.2)]"
        >
          <img
            src={collapsed ? "/images/liberty-logo-mob.png" : "/images/liberty-logo.png"}
            className={`${collapsed ? "h-1/2" : "h-3/4"} object-cover`}
            alt="logo"
          />
        </Link>
        <Menu
          theme={darkMode ? "dark" : "light"}
          selectedKeys={key}
          openKeys={openKey}
          mode="inline"
          className="h-auto overflow-x-hiden mt-5 mb-10"
          items={items}
          onOpenChange={(openKeys) => {
            setOpenKey(openKeys);
          }}
          onClick={({ item, key }) => {
            setKey([key]);
          }}
        />
      </div>
      {!collapsed ? (
        <div
          className="px-4 w-full absolute flex items-center justify-between"
          style={{ bottom: "15px" }}
        >
          <div style={{ color: "#666666" }} className="flex items-center">
            <BulbOutlined style={{ fontSize: "16px" }} className="mr-1" />
            <span>{`Switch theme`}</span>
          </div>
          <Switch
            checkedChildren={`Dark`}
            unCheckedChildren={`Light`}
            checked={darkMode}
            style={{ backgroundColor: darkMode ? "#1890ff" : "#cccccc" }}
            onChange={(check) => setDarkMode(check)}
          />
        </div>
      ) : null}
    </Sider>
  );
};

export default NavBar;
