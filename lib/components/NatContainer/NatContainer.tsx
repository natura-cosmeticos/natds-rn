import React from "react";
import { View } from "./NatContainer.styles";
type NatContainerProps = {
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  marginTop?: string,
  paddingBottom?: string,
  paddingLeft?: string,
  paddingRight?: string,
  paddingTop?: string
};
export const NatContainer: React.SFC<NatContainerProps> = ({
  children,
  ...props
}) => <View {...props}>{children}</View>;
NatContainer.defaultProps = {
  marginBottom: "none",
  marginLeft: "none",
  marginRight: "none",
  marginTop: "none",
  paddingBottom: "small",
  paddingLeft: "small",
  paddingRight: "small",
  paddingTop: "small"
};
