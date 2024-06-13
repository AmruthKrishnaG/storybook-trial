import React from "react";
import "./_indeterminate-loader.scss";
interface LoaderProps {
  type: string;
}

export const IndeterminateLoader = ({
  type = "horizontal",
  ...props
}: LoaderProps) => {
  return (
    <div
      className={
        type === "horizontal"
          ? "container horizontal-animation"
          : "container vertical-animation"
      }
    >
      <div className="ball left"></div>
      <div className="ball center"></div>
      <div className="ball right"></div>
    </div>
  );
};
