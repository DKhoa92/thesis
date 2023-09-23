import React, { useState, useEffect } from "react";
import { Breadcrumb as BreadcrumbAntd } from "antd";
import { Link, useLocation, matchPath } from "react-router-dom";
import routes from "../routes";
import { RouteEl } from "types";

interface BreadcrumbType {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const Breadcrumb: React.FC = () => {
  const { pathname } = useLocation();
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbType[]>([]);

  useEffect(() => {
    const listBreadcrumbItem: BreadcrumbType[] = [];
    let dashboard = routes.find((el) => el.path === "/dashboard");
    if (dashboard) addItem(dashboard);

    if (pathname === "/dashboard") {
      setBreadcrumbItems(listBreadcrumbItem);
      return;
    }

    const pathnameArr = pathname.split("/");
    pathnameArr.splice(0, 1);

    if (pathnameArr.length === 1) {
      findRouteMatch(pathname);
    } else if (pathnameArr.length >= 2) {
      findRouteMatch("/" + pathnameArr[0]);
      findRouteMatch(pathname);
    }

    function findRouteMatch(pathname: string) {
      let routeMatch = routes.find((route) =>
        matchPath({ path: route.path }, pathname) ? true : false
      );
      routes.forEach((route) => {
        if (matchPath({ path: route.path }, pathname)) {
          routeMatch = route;
        }
        if (route.children) {
          route.children.forEach((child) => {
            if (matchPath({ path: child.path }, pathname)) {
              routeMatch = child;
            }
          });
        }
      });
      if (routeMatch) {
        addItem(routeMatch);
      }
    }

    function addItem(route: RouteEl) {
      listBreadcrumbItem.push({
        label: route.label,
        path: route.path,
        icon: route.icon,
      });
    }
    setBreadcrumbItems(listBreadcrumbItem);
  }, [pathname]);

  return (
    <BreadcrumbAntd>
      {breadcrumbItems.map((el, index) => {
        return (
          <BreadcrumbAntd.Item key={el.label}>
            {!(index === breadcrumbItems.length - 1) ? (
              <Link key={el.path} to={el.path}>
                <span className="relative pr-1" style={{ bottom: "3px" }}>
                  {el.icon}
                </span>
                <span>{el.label}</span>
              </Link>
            ) : (
              <>
                <span className="relative pr-1" style={{ bottom: "3px" }}>
                  {el.icon}
                </span>
                <span>{el.label}</span>
              </>
            )}
          </BreadcrumbAntd.Item>
        );
      })}
    </BreadcrumbAntd>
  );
};

export default Breadcrumb;
