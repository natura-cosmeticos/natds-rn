import styled from 'styled-components/native';

const typeStyle = ({ type, theme }) => {
  const colorsType = {
    disabled: {
      backgroundColor: theme.palette.background.paper,
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: 2,
      textColor: theme.palette.text.disabled,
    },
    primary: {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.primary.main,
      borderStyle: 'solid',
      borderWidth: 2,
      textColor: theme.palette.text.primary,
    },
    secondary: {
      backgroundColor: theme.palette.background.paper,
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: 2,
      textColor: theme.palette.text.secondary,
    },
  };

  const types = {
    [type]: {
      backgroundColor: colorsType[type].backgroundColor,
      borderBottomColor: colorsType[type].borderColor,
      borderStyle: colorsType[type].borderStyle,
      borderWidth: colorsType[type].borderWidth,
      color: colorsType[type].textColor,
    },
  };

  return types[type];
};

export const TabWrapper = styled.View`
  border: none;
  flex-direction: row;
`;

export const TabText = styled.Text`
  color: ${({ type, theme }) => typeStyle({ theme, type }).color};
  font-weight: bold;
`;

export const TabButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 16px;
  border: none;
  border: transparent;
  border-bottom-color: ${({ type, theme }) => typeStyle({ theme, type }).borderBottomColor};
  border-style: ${({ type, theme }) => typeStyle({ theme, type }).borderStyle};
  border-width: ${({ type, theme }) => typeStyle({ theme, type }).borderWidth};
  background-color: ${({ type, theme }) => typeStyle({ theme, type }).backgroundColor};
  opacity: ${({ status }) => ((status === 'disabled') ? 0.5 : 1)};
`;
