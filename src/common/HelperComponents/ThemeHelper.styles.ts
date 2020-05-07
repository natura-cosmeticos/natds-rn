import styled from 'styled-components/native';
import { getTheme, getColorOnBackground, getColorBackground } from '../themeSelectors';

export const TextWithTheme = styled.Text`
  color: ${getTheme(getColorOnBackground)};
`;

export const ContainerWithTheme = styled.View`
  background-color: ${getTheme(getColorBackground)};
`;

export const ContainerRow = styled(ContainerWithTheme)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
