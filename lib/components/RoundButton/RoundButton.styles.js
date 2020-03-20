import styled from 'styled-components/native';

const styleType = ({ theme, type, size }) => {
  const colorsType = {
    primary: {
      backgroundColor: theme.palette.primary.main,
      textColor: theme.palette.background.default,
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main,
      textColor: theme.palette.text.secondary,
    },
    tertiary: {
      backgroundColor: theme.palette.background.default,
      textColor: theme.palette.primary.main,
    },
  };

  const types = {
    [type]: {
      backgroundColor: colorsType[type].backgroundColor,
      color: colorsType[type].textColor,
      fontSize: theme.sizes[size],
      height: theme.sizes[size],
      width: theme.sizes[size],
    },
  };

  return types[type];
};

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${({ theme, type, size }) => styleType({ size, theme, type }).backgroundColor};
  height: ${({ theme, type, size }) => styleType({ size, theme, type }).height};
  width: ${({ theme, type, size }) => styleType({ size, theme, type }).width};
  border-radius: 60;
  justify-content:center;
  align-items: center;
  elevation: 2;
  margin: 5px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme, type, size }) => styleType({ size, theme, type }).color};
  font-size: ${({ theme, type, size }) => styleType({ size, theme, type }).fontSize};
  padding-bottom: 5px;
`;
