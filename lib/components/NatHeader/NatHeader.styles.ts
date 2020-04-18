import { Platform, StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "../../assets/theme/colors/colors";
import { natura } from "../../assets/theme/fonts/fonts";
export const AndroidStyle = StyleSheet.create({
  android: {
    marginTop: 4
  }
});
export const HeaderWrapper = styled.View`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 16;
  padding-right: 16;
  background-color: ${colors.primary.white};
  ${Platform.select({
    android: css`
      flex-direction: row;
    `,
    ios: css`
      flex-direction: row;
      justify-content: space-between;
    `
  })}
`;
export const HeaderIcon = styled.TouchableOpacity`
  width: 24;
`;
export const HeaderTitle = styled.Text`
  margin-left: 24;
  font-size: 20;
  color: ${colors.bw.grayDarker};
  font-family: ${natura.regular};
  ${Platform.select({
    android: css`
      padding-left: 16px;
    `,
    ios: css`
      padding-left: 45px;
      padding-top: 8px;
    `
  })}
`;
export const HeaderRight = styled.View`
  width: 60;
  color: ${colors.primary.yellow};
  ${Platform.select({
    android: css`
      flex: 1;
      align-items: flex-end;
      margin-right: 8;
    `,
    ios: css`
      margin-top: 4;
    `
  })}
`;
