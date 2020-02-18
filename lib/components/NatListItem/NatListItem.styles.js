import styled from 'styled-components/native';
import { ThemeNaturaLight } from '../..';

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
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: 48;
  padding: 0px;
  ${({ dividerTop }) => ((dividerTop === true) ? dividerTopStyle : '')}
  ${({ dividerBottom }) => ((dividerBottom === true) ? dividerBottomStyle : '')}
  position: relative;
  background-color: ${({ active }) => ((active === true) ? ThemeNaturaLight.palette.primary.light : ThemeNaturaLight.palette.background.paper)};
`;

export const HeaderTitle = styled.Text`
  flex:1;
  justify-content:center;
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
  padding-right: ${({ position }) => ((position === 'right') ? '16px' : '0px')};
  padding-left: ${({ position }) => ((position === 'right') ? '0px' : '16px')};
`;

export const TouchableOpacity = styled.TouchableOpacity`
  justify-content:center;
  flex:1;
  align-self: stretch;
`;

export const InputIcon = styled.Image`
  height: 24;
  width: 24;
`;
