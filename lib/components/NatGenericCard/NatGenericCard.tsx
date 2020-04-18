import React from "react";
import { CustomView } from "./NatGenericCard.styles";
import { colors } from "../../assets/theme/colors/colors";
type NatGenericCardProps = {
  bgColor?: string,
  height?: number,
  width?: number
};
export const NatGenericCard: React.SFC<NatGenericCardProps> = ({
  children,
  height,
  width,
  bgColor
}) => (
  <CustomView height={height} width={width} bgColor={bgColor}>
    {children}
  </CustomView>
);
NatGenericCard.defaultProps = {
  bgColor: colors.primary.white,
  height: 216,
  width: 363
};
