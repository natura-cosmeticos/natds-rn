import styled from 'styled-components/native';
import { ThemeNaturaLight } from '../..';

export const HeaderWrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 48;
  padding: 0px;
  position: relative;
  background-color: ${ThemeNaturaLight.palette.background.paper};
  flex-direction: row;
  align-items: stretch;
`;

export const HeaderTitle = styled.Text`
  margin-left: 0px;
  font-size: 16px;
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
  flex: 1;
`;

export const InputIcon = styled.Image`
  height: 24;
  width: 24;
`;
