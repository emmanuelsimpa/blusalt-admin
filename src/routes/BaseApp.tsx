import { PropsWithChildren, Suspense } from "react";
import { Outlet } from "react-router-dom";

export const BaseApp = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {children ? children : <Outlet />}
    </Suspense>
  );
};
