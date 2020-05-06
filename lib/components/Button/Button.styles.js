/* eslint-disable max-lines */
import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { roboto, sanfrancisco } from '../../assets/theme/fonts/fonts';

const styleType = (type, color, theme) => {
  const colorsTypes = {
    primary: {
      default: {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      disabled: {
        backgroundColor: `${theme.palette.grayscale.colorBrdBlack}1F`,
        borderColor: `${theme.palette.grayscale.colorBrdNatGray3}1F`,
        color: `${theme.palette.grayscale.colorBrdNatGray}40`,
      },
      primary: {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      secondary: {
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      },
    },
    secondary: {
      default: {
        backgroundColor: 'transparent',
        borderColor: `${theme.palette.grayscale.colorBrdNatGray2}`,
        color: theme.palette.primary.contrastText,
      },
      disabled: {
        backgroundColor: 'transparent',
        borderColor: `${theme.palette.grayscale.colorBrdNatGray2}`,
        color: `${theme.palette.grayscale.colorBrdNatGray}7A`,
      },
      primary: {
        backgroundColor: 'transparent',
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      secondary: {
        backgroundColor: 'transparent',
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      },
    },
    tertiary: {
      default: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: theme.palette.primary.contrastText,
      },
      disabled: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: `${theme.palette.grayscale.colorBrdNatGray}7A`,
      },
      primary: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: theme.palette.primary.main,
      },
      secondary: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: theme.palette.secondary.main,
      },
    },
  };
  const types = {
    primary: {
      backgroundColor: colorsTypes[type][color].backgroundColor,
      borderColor: colorsTypes[type][color].borderColor,
      borderWidth: 1,
      color: colorsTypes[type][color].color,
      height: 48,
    },
    secondary: {
      backgroundColor: colorsTypes[type][color].backgroundColor,
      borderColor: colorsTypes[type][color].borderColor,
      borderWidth: 1,
      color: colorsTypes[type][color].color,
      height: 48,
    },
    tertiary: {
      backgroundColor: colorsTypes[type][color].backgroundColor,
      borderColor: colorsTypes[type][color].borderColor,
      borderWidth: 1,
      color: colorsTypes[type][color].color,
      height: 48,
    },
  };

  return types[type];
};

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${({ type, color, theme }) => styleType(type, color, theme).backgroundColor};
  height: 48;
  border-radius: 4;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  border-color: ${({ type, color, theme }) => styleType(type, color, theme).borderColor};
  border-width: ${({ type, color, theme }) => styleType(type, color, theme).borderWidth};
`;

export const ButtonText = styled.Text`
  color: ${({ type, color, theme }) => styleType(type, color, theme).color};
  font-size: 14px;
  align-self: center;
  font-weight: bold;
  letter-spacing: 1;
  font-family:  ${(Platform.OS === 'ios') ? sanfrancisco.bold : roboto.bold};

  ${props => props.type === 'card' && css`
    width: 64px;
    text-align: center;
    line-height: 21px;
  `}
`;

export const ButtonIcon = styled.Image`
  height: 30;
  width: 30;
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
