import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atoms/user";
import { TEACHER } from "../../../constants/user/auth.constant";

export const OnlyTeacher = ({ children }: { children?: React.ReactNode }) => {
  const user = useRecoilValue(userState);
  const location = useLocation();
  return user.authority === TEACHER ? <>{children}</> : <Navigate to="/" state={{ from: location }} replace />;
};
