import React from "react";
import { View, Image } from "./NatImage.styles";
type NatImageProps = {
  onPress?: (...args: any[]) => any,
  source: string,
  type?: string
};
export const NatImage: React.SFC<NatImageProps> = ({
  source,
  onPress,
  type
}) => (
  <View onPress={onPress} type={type}>
    <Image source={{ uri: source }} type={type} resizeMode="contain" />
  </View>
);
NatImage.defaultProps = {
  onPress: () => {},
  type: "default"
};
