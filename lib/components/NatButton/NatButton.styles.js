import styled, { css } from 'styled-components/native';
import { roboto } from '../../assets/theme/fonts/fonts';
import { colors } from '../../assets/theme/colors/colors';

const buttonStyles = {
  default: {
    backgroundColor: colors.primary.yellow,
    color: colors.primary.white,
    height: 48,
  },
  short: {
    backgroundColor: colors.primary.white,
    color: colors.primary.yellow,
    width: 328,
    height: 40,
  },
  outline: {
    backgroundColor: colors.primary.white,
    color: colors.primary.yellow,
    borderWidth: 2,
    borderColor: colors.primary.yellow,
    height: 48,
  },
  card: {
    backgroundColor: colors.primary.yellow,
    color: colors.primary.white,
    width: 128,
    height: 128,
  },
  newDefault: {
    backgroundColor: colors.primary.yellow,
    color: colors.bw.grayDarker,
    height: 48,
  },
};

const getStylesFrom = styles => type => styles[type] || styles.default;

const getButtonStyles = getStylesFrom(buttonStyles);

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${({ type }) => getButtonStyles(type).backgroundColor};
  height: ${({ type }) => getButtonStyles(type).height};
  width: ${({ type }) => getButtonStyles(type).width || '100%'};
  border-radius: 6;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-color: ${({ type }) => getButtonStyles(type).borderColor || 'transparent'};
  border-width: ${({ type }) => getButtonStyles(type).borderWidth || 0};
`;

export const ButtonText = styled.Text`
  color: ${({ type }) => getButtonStyles(type).color};
  font-size: 14px;
  align-self: center;
  font-weight: bold;
  letter-spacing: 1;
  font-family:  ${roboto.bold};

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
