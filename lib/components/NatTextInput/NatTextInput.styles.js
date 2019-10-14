import styled from 'styled-components/native';
import { colors } from '../../assets/theme/colors/colors';

const inputStyles = {
  default: {
    default: {
      color: colors.bw.grayDark,
      borderColor: colors.bw.grayDark,
    },
    active: {
      color: colors.bw.grayDarker,
      border: '2px',
      borderColor: colors.primary.yellow,
    },
    filled: {
      color: colors.bw.grayDarker,
      borderColor: colors.bw.grayDarker,
    },
  },
  error: {
    default: {
      color: colors.feedback.error,
      borderColor: colors.feedback.error,
      fontColor: colors.feedback.error,
    },
    active: {
      color: colors.feedback.error,
      borderColor: colors.feedback.error,
      fontColor: colors.feedback.error,
    },
    filled: {
      color: colors.feedback.error,
      borderColor: colors.feedback.error,
      fontColor: colors.feedback.error,
    },
  },
  disabled: {
    default: {
      color: colors.bw.gray,
      borderColor: colors.bw.gray,
      backgroundColor: colors.bw.grayLight,
    },
    active: {
      color: colors.bw.gray,
      borderColor: colors.bw.gray,
      backgroundColor: colors.bw.grayLight,
    },
    filled: {
      color: colors.bw.gray,
      borderColor: colors.bw.gray,
      backgroundColor: colors.bw.grayLight,
    },
  },
};

const getStylesFrom = styles => (type, state) => (styles[type][state] || styles.default.default);
const getInputStyles = getStylesFrom(inputStyles);

export const Wrapper = styled.View`
  margin-top: ${({ defaultMargin }) => defaultMargin || '0px'};
`;

export const InputWrapper = styled.View`
  border: ${({ type, state }) => getInputStyles(type, state).border || '1px'};
  border-color: ${({ type, state }) => getInputStyles(type, state).borderColor};
  border-radius: 4px;
  height: ${({ defaultSize }) => defaultSize || '56px'};
  padding-left: 16px;
  padding-bottom: 0px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ type, state }) => getInputStyles(type, state).backgroundColor || 'transparent'};
`;

export const TextInput = styled.TextInput`
  font-size: 16px;
  flex: 7;
  align-self: center;
  height: ${({ defaultSize }) => defaultSize || '56px'};
  color: ${({ type, state }) => getInputStyles(type, state).fontColor || colors.bw.grayDarker};
  letter-spacing: ${({ secureTextEntry }) => secureTextEntry ? '8px' : '0px'};
`;

export const Label = styled.Text`
  color: ${({ type, state }) => getInputStyles(type, state).color};
  font-size: 14px;
  margin-bottom: 3px;
  font-weight: 500;
`;

export const AssistiveText = styled.Text`
  color: ${({ type, state }) => getInputStyles(type, state).color};
  font-size: 12px;
  margin-top: 3px;
  font-weight: 400;
`;

export const InputIcon = styled.Image`
  height: 30;
  width: 30;
  tint-color: ${({ type, state }) => getInputStyles(type, state).color};
`;

export const IconPress = styled.TouchableOpacity`
  align-self: center;
  flex: 1;
`;
