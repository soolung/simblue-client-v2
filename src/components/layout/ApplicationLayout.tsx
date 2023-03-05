import React from "react";

type Props = { children: React.ReactNode; bgColor?: string };

export const ApplicationLayout = ({ children, bgColor }: Props) => {
  return <div style={{ display: "flex", width: "100%", gap: "2%", flexDirection: "row", marginTop: "3%" }}>{children}</div>;
};
