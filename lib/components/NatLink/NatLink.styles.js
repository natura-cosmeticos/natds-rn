import styled from 'styled-components/native';
import { colors } from '../../assets/theme/colors/colors';

const linkStyles = {
  body2: {
    fontSize: 14,
    color: colors.bw.grayDark,
    lineHeight: 21,
    fontWeight: 400,
  },
};

const getStylesFrom = styles => type => styles[type] || styles.default;

const getLinkStyles = getStylesFrom(linkStyles);

export const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  margin-top: ${({ defaultMargin }) => defaultMargin || '0px'};
`;

export const Text = styled.Text`
  font-size: ${({ type }) => getLinkStyles(type).fontSize};
  color: ${({ type }) => getLinkStyles(type).color};
  line-height: ${({ type }) => getLinkStyles(type).lineHeight};
  font-weight: ${({ type }) => getLinkStyles(type).fontWeight};
`;
