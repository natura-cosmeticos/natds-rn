import styled from 'styled-components/native';
import { colors } from '../../assets/theme/colors/colors';

const inputStyles = {
  default: {
    backgroundColor: colors.primary.white,
  },
};

const getStylesFrom = styles => type => styles[type] || styles.default;

const getInputStyles = getStylesFrom(inputStyles);

export const CardWrapper = styled.TouchableOpacity`
  background-color: ${({ type }) => getInputStyles(type).backgroundColor};
  border-radius: 4px;
  margin-bottom: ${({ defaultMargin }) => defaultMargin || '0px'};
`;

export const CardFooter = styled.View`
  padding: 10px;
`;
