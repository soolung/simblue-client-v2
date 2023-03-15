import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atoms/user";
import { STUDENT, TEACHER } from "../../../constants/user/auth.constant";

export const SeperateAccess = ({ children }: { children: React.ReactNode }) => {
  const user = useRecoilValue(userState);
  const location = useLocation();
  return user.authority === STUDENT ? (
    <>{children}</>
  ) : user.authority === TEACHER ? (
    <Navigate to="/record/teacher" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
