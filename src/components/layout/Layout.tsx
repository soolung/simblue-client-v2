import React from "react";

type Props = { children: React.ReactNode; bgColor?: string };

export const Layout = ({ children, bgColor }: Props) => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center", backgroundColor: bgColor }}>
      <div style={{ width: "75%" }}>{children}</div>
    </div>
  );
};
