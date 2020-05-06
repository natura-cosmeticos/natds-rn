import styled from 'styled-components/native';
import { getTheme, getColorPrimary } from '../themeSelectors';
import { ContainerWithTheme, TextWithTheme } from '../HelperComponents/ThemeHelper.styles';

export const Container = styled(ContainerWithTheme)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom-color: #eaeaea;
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

export const Button = styled.TouchableHighlight.attrs(props => ({
  activeOpacity: 0.9,
  elevation: 2,
  underlayColor: '#eaeaea',
}))`
  border-radius: 20px;
  border-color: ${getTheme(getColorPrimary)};
  border-width: 1px;
  padding: 10px;
`;

export const BlockButton = styled(Button)`
  align-self: stretch;
`;

export const Title = styled(TextWithTheme)`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 100;
`;
