import styled, { css } from 'styled-components/native';
import { robotoBold } from '../../assets/theme/fonts';
import { colors } from '../../assets/theme/colors';

const buttonStyles = {
  default: {
    backgroundColor: colors.primary.white,
    width: 328,
    height: 48,
    marginRight: 0,
  },
  short: {
    backgroundColor: colors.primary.white,
    width: 328,
    height: 40,
    marginRight: 0,
  },
  card: {
    backgroundColor: colors.primary.yellow,
    width: 128,
    height: 80,
    marginRight: 30,
  },
};

const textStyles = {
  default: { color: colors.primary.yellow },
  card: { color: colors.primary.white },
};

const getStylesFrom = styles => type => styles[type] || styles.default;

const getButtonStyles = getStylesFrom(buttonStyles);

const getTextStyles = getStylesFrom(textStyles);

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${({ type }) => getButtonStyles(type).backgroundColor};
  height: ${({ type }) => getButtonStyles(type).height};
  width: ${({ type }) => getButtonStyles(type).width};
  margin-right: ${({ type }) => getButtonStyles(type).marginRight};
  border-radius: 6;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${props => props.secondary && css`
    background-color: ${ colors.primary.white };
  `}
`;

export const ButtonText = styled.Text`
  color: ${({ type }) => getTextStyles(type).color};
  font-size: 14px;
  align-self: center;
  font-weight: bold;
  ${robotoBold};

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
