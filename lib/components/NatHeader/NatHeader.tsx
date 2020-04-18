import React from "react";
import { Image, Platform, Text, TouchableOpacity } from "react-native";
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderIcon,
  HeaderRight,
  AndroidStyle
} from "./NatHeader.styles";
import { icons } from "../../assets/theme/icons";
type NatHeaderProps = {
  icon?: string,
  iconRight?: string,
  onPress: (...args: any[]) => any,
  onPressRight?: (...args: any[]) => any,
  textRight?: string,
  title: string
};
export const NatHeader: React.SFC<NatHeaderProps> = ({
  title,
  icon,
  onPress,
  textRight,
  iconRight,
  onPressRight
}) => {
  if (!title) {
    throw new Error("Title should not empty string");
  }
  return (
    <HeaderWrapper
      style={Platform.OS === "android" && AndroidStyle.android}
      accessibilityRole="header"
    >
      {icon && (
        <HeaderIcon onPress={onPress} accessibilityRole="button">
          <Image
            source={icons[icon]}
            accessibilityLabel="navegação para retornar a página anterior"
          />
        </HeaderIcon>
      )}

      <HeaderTitle icon={icon} accessibilityLabel={`${title}`}>
        {title}
      </HeaderTitle>
      <HeaderRight accessibilityRole="button">
        <TouchableOpacity onPress={onPressRight}>
          <Text
            accessibilityLabel={textRight}
            style={{ color: "orange", fontSize: 14 }}
          >
            {" "}
            {textRight}{" "}
          </Text>
          <Image
            source={icons[iconRight]}
            accessibilityLabel="realizar ação do item da barra superior direita"
          />
        </TouchableOpacity>
      </HeaderRight>
    </HeaderWrapper>
  );
};
NatHeader.defaultProps = {
  icon: ""
};
