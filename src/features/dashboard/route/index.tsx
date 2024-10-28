import { Navigate, RouteObject } from "react-router-dom";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Overview } from "../overview";
import { ProtectedRoutes } from "@/routes/ProtectedRoutes";
import { RouteEnum } from "@/common/enum/Route";
import { RouteError } from "@/components/error/ErrorElement";

// eslint-disable-next-line react-refresh/only-export-components
const DashboardRouteList: RouteObject[] = [
  { path: RouteEnum.OVERVIEW, element: <Overview /> },
  // { path: RouteEnum.PRODUCT, children: ProductRoutes },
];

export const DashboardRoutes = {
  path: "",
  element: (
    <ProtectedRoutes>
      <DashboardLayout />
    </ProtectedRoutes>
  ),
  errorElement: <RouteError />,
  children: [
    { path: "/", element: <Navigate to={RouteEnum.OVERVIEW} /> },
    ...DashboardRouteList,
  ],
};
