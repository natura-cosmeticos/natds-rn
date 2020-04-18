import styled from "styled-components/native";
import { ThemeNaturaLight } from "../../themes/ThemeNaturaLight";
export const HeaderWrapper = styled.View`
  flex: 1;
`;
export const HeaderContent = styled.View`
  flex: 1;
  width: 100%;
  height: 56;
  padding: 0px;
  position: relative;
  background-color: ${ThemeNaturaLight.palette.background.paper};
  flex-direction: row;
  align-items: stretch;
  z-index: 1;
`;
export const HeaderShadow = styled.View`
  background-color: ${ThemeNaturaLight.palette.background.paper};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 55;
  z-index: -2;
`;
export const HeaderTitle = styled.Text`
  margin-left: 0px;
  font-size: 20;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  color: ${ThemeNaturaLight.palette.text.primary};
`;
export const IconPress = styled.TouchableOpacity`
  align-self: center;
  flex: 1;
  height: 56;
  width: 40;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: ${({ position }) => (position === "right" ? "16px" : "0px")};
  padding-left: ${({ position }) => (position === "right" ? "0px" : "16px")};
`;
export const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
`;
