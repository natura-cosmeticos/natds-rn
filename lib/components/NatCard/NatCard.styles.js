import styled, { css } from 'styled-components/native';
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
  margin-top: ${({ defaultMargin }) => defaultMargin || '0px'};
`;

export const CardIcon = styled.Image`
  width: 50;
  height: 50;
`;

export const CardImage = styled.Image`
  height: 120;
`;

export const CardIHeader = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const CardFooter = styled.View`
  padding: 10px;
`;

export const IconContainer = styled.View`
  flex: 1;
  padding: 5px;
`;

export const TitleContainer = styled.View`
  flex: 5;
  padding: 5px;
`;

export const Title = styled.Text`
  font-size: 14;
`;

export const Subtitle = styled.Text`
  font-size: 12;
`;

export const Resume = styled.Text`
  font-size: 12;
`;
