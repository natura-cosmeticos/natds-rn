import styled from 'styled-components/native';
import { getTheme, getTextPrimary, getBackgroundDefault } from '../themeSelectors';

export const TextWithTheme = styled.Text`
  color: ${getTheme(getTextPrimary)};
`;

export const ContainerWithTheme = styled.View`
  background-color: ${getTheme(getBackgroundDefault)};
`;
