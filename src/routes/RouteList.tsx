import { RouteObject } from "react-router-dom";

import { BaseApp } from "./BaseApp";
import { AuthRoutes } from "@/features/auth/route";
import { DashboardRoutes } from "@/features/dashboard/route";
import { RouteError } from "@/components/error/ErrorElement";

export const routesList: RouteObject[] = [
  {
    path: "",
    element: <BaseApp />,
    errorElement: <RouteError />,
    children: [AuthRoutes, DashboardRoutes],
  },
  {
    path: "*",
    element: <p>Not found</p>,
  },
];
