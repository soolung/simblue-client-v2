import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atoms/user";

export const AuthRequired = ({ children }: { children?: React.ReactNode }) => {
  const user = useRecoilValue(userState);
  const location = useLocation();
  return user.authority ? <>{children}</> : <Navigate to="/" state={{ from: location }} replace />;
};
