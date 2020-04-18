import React from "react";
import { View, MenuTitle } from "./NatMenuItem.styles";
import { loadIcon } from "../../utils";
import { ThemeNaturaLight } from "../../themes/ThemeNaturaLight";
type NatMenuItemProps = {
  icon?: {
    icon?: string,
    svg?: {
      name?: string,
      size?: string
    },
    text?: string
  },
  onPress?: (...args: any[]) => any,
  title?: string,
  type?: string
};
export const NatMenuItem: React.SFC<NatMenuItemProps> = ({
  type,
  title,
  onPress,
  icon
}) => {
  const iconAttributes = {
    color: ThemeNaturaLight.palette.text.primary,
    size: 24
  };
  return (
    <View onPress={onPress}>
      {loadIcon(icon, iconAttributes)}
      <MenuTitle type={type}>{title}</MenuTitle>
    </View>
  );
};
NatMenuItem.defaultProps = {
  icon: {},
  onPress: null,
  title: "title",
  type: "default"
};
