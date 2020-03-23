import styled from 'styled-components/native';

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
        width: theme.sizes.hugexx,
      },
      medium: {
        fontSize: theme.sizes.small,
        height: theme.sizes.medium,
        width: theme.sizes.huge,
      },
      padding: theme.sizes.micro,
      small: {
        fontSize: 12,
        height: theme.sizes.semix,
        width: theme.sizes.largexx,
      },
    },
    round: {
      borderRadius: theme.sizes.medium,
      large: {
        fontSize: theme.sizes.largexxx,
        height: theme.sizes.largexxx,
        width: theme.sizes.largexxx,
      },
      medium: {
        fontSize: theme.sizes.largex,
        height: theme.sizes.largex,
        width: theme.sizes.largex,
      },
      padding: theme.sizes.none,
      small: {
        fontSize: theme.sizes.mediumx,
        height: theme.sizes.mediumx,
        width: theme.sizes.mediumx,
      },
    },
  };

  return {
    backgroundColor: colorsType[color].backgroundColor,
    borderRadius: types[type].borderRadius,
    fontSize: types[type][size].fontSize,
    height: types[type][size].height,
    padding: types[type].padding,
    textColor: colorsType[color].textColor,
    width: types[type][size].width,
  };
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
  text-transform: uppercase;
`;
