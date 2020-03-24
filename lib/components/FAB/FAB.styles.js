import styled from 'styled-components/native';
import { Platform } from 'react-native';

const styleType = ({
  color, size, theme, type,
}) => {
  const colorsType = {
    default: {
      backgroundColor: theme.palette.background.paper,
      textColor: theme.palette.text.primary,
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      textColor: theme.palette.text.primary,
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main,
      textColor: theme.palette.text.secondary,
    },
  };

  const types = {
    extended: {
      borderRadius: theme.sizes.standard,
      large: {
        fontSize: theme.sizes.standard,
        height: theme.sizes.mediumx,
        lineHeight: theme.sizes.standard,
        width: theme.sizes.hugexx,
      },
      medium: {
        fontSize: theme.sizes.small,
        height: theme.sizes.medium,
        lineHeight: theme.sizes.small,
        width: theme.sizes.huge,
      },
      padding: theme.sizes.micro,
      small: {
        fontSize: 12,
        height: theme.sizes.semix,
        lineHeight: 12,
        width: theme.sizes.largexx,
      },
    },
    round: {
      borderRadius: theme.sizes.medium,
      large: {
        fontSize: theme.sizes.largexxx,
        height: theme.sizes.largexxx,
        lineHeight: theme.sizes.largexxx,
        width: theme.sizes.largexxx,
      },
      medium: {
        fontSize: theme.sizes.largex,
        height: theme.sizes.largex,
        lineHeight: theme.sizes.largex,
        width: theme.sizes.largex,
      },
      padding: theme.sizes.none,
      small: {
        fontSize: theme.sizes.mediumx,
        height: theme.sizes.mediumx,
        lineHeight: theme.sizes.mediumx,
        width: theme.sizes.mediumx,
      },
    },
  };

  return {
    backgroundColor: colorsType[color].backgroundColor,
    borderRadius: types[type].borderRadius,
    fontSize: types[type][size].fontSize,
    height: types[type][size].height,
    lineHeight: types[type][size].lineHeight,
    padding: types[type].padding,
    textColor: colorsType[color].textColor,
    width: types[type][size].width,
  };
};

const calcLineHeight = (lineHeight) => {
  const multiplier = lineHeight > 20 ? 1.5 : 1;

  if (Platform.OS === 'ios') return lineHeight;

  return lineHeight + (lineHeight * multiplier);
};

export const FABWrapper = styled.TouchableOpacity`
  background-color: ${({
    color, size, theme, type,
  }) => styleType({
    color,
    size,
    theme,
    type,
  }).backgroundColor};
  border-radius: ${({
    color, size, theme, type,
  }) => styleType({
    color,
    size,
    theme,
    type,
  }).borderRadius};
  height: ${({
    color, size, theme, type,
  }) => styleType({
    color,
    size,
    theme,
    type,
  }).height};
  width: ${({
    color, size, theme, type,
  }) => styleType({
    color,
    size,
    theme,
    type,
  }).width};
  justify-content: center;
  align-items: center;
  margin: 5px;
  shadow-opacity: 0.8;
  shadow-color: #333;
  elevation: 2;
  padding: ${({
    color, size, theme, type,
  }) => styleType({
    color,
    size,
    theme,
    type,
  }).padding}px;
  include-font-padding: false;
`;

export const FABText = styled.Text`
  color: ${({
    color, size, theme, type,
  }) => styleType({
    color,
    size,
    theme,
    type,
  }).textColor};
  font-size: ${({
    color, size, theme, type,
  }) => styleType({
    color,
    size,
    theme,
    type,
  }).fontSize};
  line-height: ${({
    color, size, theme, type,
  }) => {
    const { lineHeight } = styleType({
      color,
      size,
      theme,
      type,
    });

    return calcLineHeight(lineHeight);
  }};
  text-transform: uppercase;
`;
