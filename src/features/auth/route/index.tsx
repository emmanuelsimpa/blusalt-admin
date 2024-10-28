import { RouteObject } from "react-router-dom";
import { Login } from "../login";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { SignUp } from "../signup";
import { RouteEnum } from "@/common/enum/Route";
import { RouteError } from "@/components/error/ErrorElement";

// eslint-disable-next-line react-refresh/only-export-components
const AuthRouteList: RouteObject[] = [
  { path: RouteEnum.LOGIN, element: <Login /> },
  { path: RouteEnum.SIGN_UP, element: <SignUp /> },
];

export const AuthRoutes: RouteObject = {
  path: "auth",
  element: <AuthLayout />,
  errorElement: <RouteError />,
  children: AuthRouteList,
};
