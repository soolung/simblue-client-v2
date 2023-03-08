import React from "react";
import { Props } from "./type";
export const HeaderLayout = ({ children, bgColor }: Props) => {
  return (
    <div style={{ position: "fixed", display: "flex", width: "100%", justifyContent: "center", backgroundColor: bgColor, height: "75px", zIndex: 3 }}>
      <div style={{ width: "75%" }}>{children}</div>
    </div>
  );
};
