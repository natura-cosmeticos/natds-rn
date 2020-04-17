import styled from 'styled-components/native';
import {
  getBackgroundDefault, getTheme, getPrimaryMain, getTextPrimary,
} from '../../../lib';

export const ContainerWithTheme = styled.View`
  background-color: ${getTheme(getBackgroundDefault)};
`;

export const Container = styled(ContainerWithTheme)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const addBorder = ({ isLast }) => {
  if (isLast) return '';

  return `
      border-bottom-color: #eaeaea;
      border-bottom-width: 1px;
    `;
};

export const SwitchContainer = styled(Container)`
  ${addBorder}
`;

export const ModalContainer = styled(ContainerWithTheme)`
  flex: 1;
  align-items: flex-start;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Button = styled.TouchableHighlight`
  border-radius: 20px;
  border-color: ${getTheme(getPrimaryMain)}; 
  border-width: 1px;
  padding: 10px;
  elevation: 2;
`;

export const BlockButton = styled(Button)`
  align-self: stretch;
`;

export const TextWithTheme = styled.Text`
  color: ${getTheme(getTextPrimary)};
`;

export const Title = styled(TextWithTheme)`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 100;
`;
