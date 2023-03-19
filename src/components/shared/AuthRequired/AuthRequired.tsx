import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useUser } from "../../../hooks/useUser";

export const AuthRequired = ({
  children,
  authority = null,
}: {
  children?: React.ReactNode;
  authority?: string | null;
}) => {
  const location = useLocation();
  const { user } = useUser();

  return !user.authority ||
    (user.authority !== null && user.authority !== authority) ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <>{children}</>
  );
};
