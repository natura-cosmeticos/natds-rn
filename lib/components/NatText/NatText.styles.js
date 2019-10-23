import styled from 'styled-components/native';
import { colors } from '../../assets/theme/colors/colors';

const textStyles = {
  h6: {
    fontSize: 20,
    color: colors.bw.grayDarker,
    lineHeight: 24,
    fontWeight: 400,
  },
  caption: {
    fontSize: 12,
    color: colors.bw.grayDark,
    lineHeight: 14,
    fontWeight: 400,
  },
  body2: {
    fontSize: 14,
    color: colors.bw.grayDark,
    lineHeight: 21,
    fontWeight: 400,
  },
};

const getStylesFrom = styles => type => styles[type] || styles.default;

const getTextStyles = getStylesFrom(textStyles);

export const View = styled.View`
  flex: 1;
  margin-top: ${({ defaultMargin }) => defaultMargin || '0'};
`;

export const Text = styled.Text`
  font-size: ${({ type }) => getTextStyles(type).fontSize};
  color: ${({ type }) => getTextStyles(type).color};
  line-height: ${({ type }) => getTextStyles(type).lineHeight};
  font-weight: ${({ type }) => getTextStyles(type).fontWeight};
`;
