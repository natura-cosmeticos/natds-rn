import React from "react";
import { View, Text } from "./NatText.styles";
import { ThemeNaturaLight } from "../../themes/ThemeNaturaLight";
type NatTextProps = {
  color?: string,
  margin?: number,
  type?: string,
  value?: string
};
export const NatText: React.SFC<NatTextProps> = ({
  value,
  type,
  color,
  margin
}) => (
  <View margin={margin}>
    <Text type={type} color={color}>
      {value}
    </Text>
  </View>
);
NatText.defaultProps = {
  color: ThemeNaturaLight.palette.text.primary,
  margin: ThemeNaturaLight.spacing.spacingStandard,
  type: "body1",
  value: ""
};
