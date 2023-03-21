import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";

export const AuthRequired = ({
  children,
  authority = null,
}: {
  children?: React.ReactNode;
  authority?: string | null;
}) => {
  const { user } = useUser();
  const location = useLocation();

  return !user.authority ||
    (user.authority !== null && user.authority !== authority) ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <>{children}</>
  );
};
