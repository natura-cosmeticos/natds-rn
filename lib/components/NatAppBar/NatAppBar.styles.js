import styled from 'styled-components/native';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';

export const HeaderWrapper = styled.View`
  flex: 1;
  position: relative;
`;

export const HeaderContent = styled.View`
  flex: 1;
  height: 56px;
  background-color: ${ThemeNaturaLight.palette.background.paper};
  flex-direction: row;
  align-items: stretch;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
`;

export const HeaderTitle = styled.Text`
  margin-left: 0px;
  font-size: 20;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: ${({ alignTitle }) => ((alignTitle === 'center') ? '0px' : '16px')};
  text-align: center;
  align-items: center;
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
  padding-right: ${({ position }) => ((position === 'right') ? '16px' : '0px')};
  padding-left: ${({ position }) => ((position === 'right') ? '0px' : '16px')};
`;

export const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
`;
