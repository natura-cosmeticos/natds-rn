import React from "react";
import { SafeAreaView, Dimensions } from "react-native";
import { NatLogo, NatText, NatContainer } from "../../../lib";
const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get("window").width
  }
};
export const Welcome = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <NatContainer>
      <NatLogo name="logo-natura-vertical" size={300} />
      <NatText type="h3" value="Welcome to NATDS!" />
      <NatText value="Here you can try out the components of our react-native library." />
    </NatContainer>
  </SafeAreaView>
);
