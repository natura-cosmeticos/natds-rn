import styled from 'styled-components/native';
import { colors } from '../../assets/theme/colors/colors';

const textStyles = {
  h6: {
    fontSize: 20,
    color: colors.bw.grayDarker,
    lineHeight: 24,
    fontWeight: 400,
  },
};

const getStylesFrom = styles => type => styles[type] || styles.default;

const getTextStyles = getStylesFrom(textStyles);

export const View = styled.View`
  flex: 1;
  margin-top: ${({ defaultMargin }) => defaultMargin || '0px'};
`;

export const Text = styled.Text`
  font-size: ${({ type }) => getTextStyles(type).fontSize};
  color: ${({ type }) => getTextStyles(type).color};
  line-height: ${({ type }) => getTextStyles(type).lineHeight};
  font-weight: ${({ type }) => getTextStyles(type).fontWeight};
`;