// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LeftArrowSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LeftArrowSvgrepoComsvgIcon(
  props: LeftArrowSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 979.469 979.469"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M421.337 945.03l-377.5-378.1c-44.4-44.5-44.4-111.1 0-155.401l377.5-377.3c44.3-44.3 113.7-46.2 157.7-2.2 43 43 38.399 115.5-3.4 157.2l-184.399 184.4 465.3.6c30.8 0 60.5 12 81.6 34.4 50.601 54 37.101 148.5-27.7 184.4-16.399 9.101-35.1 13.9-53.899 13.801l-465.3-.4 184.399 184.3c41.9 41.9 46.101 114.101 3.4 156.9-44.001 44.001-113.401 41.701-157.701-2.6z"
        }
      ></path>
    </svg>
  );
}

export default LeftArrowSvgrepoComsvgIcon;
/* prettier-ignore-end */
