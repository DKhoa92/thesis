import React from "react";
import {
  DashboardOutlined,
} from "@ant-design/icons";
import { RouteEl } from "types";

// dashboard
const Dashboard = React.lazy(() => import("../pages/dashboard"));

const routes: RouteEl[] = [
  {
    label: `Dashboard`,
    path: "dashboard",
    key: "dashboard",
    icon: <DashboardOutlined />,
    children: [],
    component: <Dashboard />,
  },
];

export default routes;
