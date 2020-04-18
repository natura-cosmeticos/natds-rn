import styled from "styled-components/native";
import { ThemeNaturaLight } from "../../themes/ThemeNaturaLight";
const dividerTopStyle = `
  border-top-width: 1px;
  border-top-color: ${ThemeNaturaLight.palette.grayscale.colorBrdNatGray3}
`;
const dividerBottomStyle = `
  border-bottom-width: 1px;
  border-bottom-color: ${ThemeNaturaLight.palette.grayscale.colorBrdNatGray3}
`;
export const HeaderWrapper = styled.View`
  flex: 1;
  width: 100%;
  padding: 0px;
  ${({ dividerTop }) => (dividerTop === true ? dividerTopStyle : "")}
  ${({ dividerBottom }) => (dividerBottom === true ? dividerBottomStyle : "")}
  background-color: ${({ active }) =>
    active === true
      ? `${ThemeNaturaLight.palette.secondary.main}29`
      : `${ThemeNaturaLight.palette.background.paper}29`};
`;
export const HeaderTitleView = styled.View`
  justify-content: center;
  align-items: center;
  right: ${({ hideIconRight }) => (hideIconRight ? "0" : "48")};
  left: ${({ hideIconLeft }) => (hideIconLeft ? "0" : "48")};
  top: 0;
  bottom: 0;
  color: ${ThemeNaturaLight.palette.text.primary};
`;
export const HeaderTitle = styled.Text`
  flex: 1;
  justify-content: center;
  font-size: 16px;
  margin-left: 0px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  color: ${ThemeNaturaLight.palette.text.primary};
`;
export const IconPress = styled.TouchableOpacity`
  align-self: center;
  flex: 1;
  height: 40;
  width: 40;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: ${({ position }) => (position === "right" ? "16px" : "0px")};
  padding-left: ${({ position }) => (position === "right" ? "0px" : "16px")};
`;
export const TouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  flex: 1;
  align-self: stretch;
`;
