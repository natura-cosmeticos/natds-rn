import styled from 'styled-components/native';
import { ThemeNaturaLight } from '../..';

export const HeaderWrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 56;
  padding: 0px;
  position: relative;
  background-color: ${ThemeNaturaLight.palette.background.paper};
  flex-direction: row;
  align-items: stretch;
`;

export const HeaderTitle = styled.Text`
  margin-left: 0px;
  font-size: 20;
  padding: 16px;
  color: ${ThemeNaturaLight.palette.text.primary};
`;

export const IconPress = styled.TouchableOpacity`
  align-self: center;
  flex: 1;
  height: 56;
  width: 56;
  padding: 16px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
`;

export const InputIcon = styled.Image`
  height: 24;
  width: 24;
`;
