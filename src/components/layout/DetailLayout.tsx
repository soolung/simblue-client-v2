import React from "react";
import { Props } from "./type";

export const DetailLayout = ({ children, bgColor }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "80vh",
        flexDirection: "row",
        marginLeft: "calc(-50vw + 50%)",
      }}>
      {children}
    </div>
  );
};
