import React from "react";
import { load as loadSvg } from "../../assets/logo/svg";
type NatLogoProps = {
  height?: number,
  name?: string,
  size?: number,
  width?: number
};
export const NatLogo: React.SFC<NatLogoProps> = ({
  name,
  size,
  width,
  height
}) => {
  const IconComponent = loadSvg(name);
  return (
    <IconComponent
      width={width > 0 ? width : size}
      height={height > 0 ? height : size}
    />
  );
};
NatLogo.defaultProps = {
  height: 0,
  name: "logo-natura-vertical",
  size: 0,
  width: 0
};
