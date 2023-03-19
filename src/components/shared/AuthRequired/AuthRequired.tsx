import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atoms/user";

export const AuthRequired = ({ children, authority = null }: { children?: React.ReactNode; authority?: string | null }) => {
  const user = useRecoilValue(userState);
  const location = useLocation();

  return !user.authority || (user.authority !== null && user.authority !== authority) ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <>{children}</>
  );
};
