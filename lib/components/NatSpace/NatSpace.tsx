import React from "react";
import { NatView } from "./NatSpace.styles";
type NatSpaceProps = {
  backgroundColor?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  marginTop?: string,
  paddingBottom?: string,
  paddingLeft?: string,
  paddingRight?: string,
  paddingTop?: string
};
export const NatSpace: React.SFC<NatSpaceProps> = ({
  children,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  backgroundColor
}) => (
  <NatView
    {...{
      backgroundColor,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop
    }}
  >
    {children}
  </NatView>
);
NatSpace.defaultProps = {
  backgroundColor: "transparent",
  marginBottom: "small",
  marginLeft: "none",
  marginRight: "none",
  marginTop: "none",
  paddingBottom: "none",
  paddingLeft: "none",
  paddingRight: "none",
  paddingTop: "none"
};
