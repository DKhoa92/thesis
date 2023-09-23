import { useState, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import NavBar from "./NavBar";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import { selectAuth, getMyProfileAsync } from "store/auth/authSlice";
import BtnScrollToTop from "./BtnScrollToTop";
import useResponsive from "hooks/useResponsive";
import { initFirebaseAppAsync } from "store/app/app.slice";
import Loading from "components/Loading";

const { Content } = Layout;

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const isMobile = useResponsive();

  let location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (isMobile && !collapsed) {
      setCollapsed(true);
    } else if (!isMobile && collapsed) {
      setCollapsed(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile, pathname]);

  useEffect(() => {
    if (auth) {
      dispatch(getMyProfileAsync());
      dispatch(initFirebaseAppAsync());
      // Modal.info({
      //   title: translate("Allow messages sound"),
      //   content: translate("Please press OK"),
      //   maskClosable: true,
      // });
    }
  }, [auth, dispatch]);

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {!collapsed && isMobile && (
        <div
          className="fixed w-screen h-screen bg-gray-500 top-0 left-0 z-[20] opacity-50"
          onClick={() => {
            setCollapsed(true);
          }}
        ></div>
      )}

      <Loading />
      <Layout style={{ minHeight: "100vh" }} id="portal">
        <NavBar
          collapsed={collapsed}
          isMobile={isMobile}
          setCollapsed={setCollapsed}
        />
        <Layout className="overflow-y-auto">
          <Header collapsed={collapsed} isMobile={isMobile} />
          <Content
            style={{
              marginLeft:
                collapsed && !isMobile
                  ? "80px"
                  : !collapsed && !isMobile
                  ? "265px"
                  : "0px",
            }}
            className="transition-all mt-14 p-2 px-4 pb-0 mb-10 h-full overflow-hidden"
          >
            {pathname !== "/realtime-support" ? <Breadcrumb /> : null}
            {pathname === "/dashboard" ||
            pathname === "/exchange-rate" ||
            pathname === "/realtime-support" ||
            pathname === "/" ? (
              <Outlet />
            ) : (
              <div className="h-full bg-white p-4 my-3 fade-in" key={pathname}>
                <Outlet />
              </div>
            )}
          </Content>
          <div
            className="h-20 bg-[#ffffff] flex justify-center items-center"
            style={{
              marginLeft:
                isMobile && collapsed ? "0px" : collapsed ? "80px" : "265px",
            }}
          >
            <span className="opacity-50">Liberty Exchange ©2023</span>
          </div>
        </Layout>
      </Layout>
      <BtnScrollToTop />
    </>
  );
};

export default DefaultLayout;
