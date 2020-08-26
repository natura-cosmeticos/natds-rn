import React from 'react';
import styled from 'styled-components/native';
import {
  getTheme,
  getSpacingTiny,
  getSpacingStandard,
} from '../themeSelectors';
import { ContainerRow, ContainerWithTheme, TextWithTheme } from './ThemeHelper.styles';

export const StoryContainer = ({ children, title }) => (
  <Container>
      <Title>{title}</Title>
      <ContainerRow>
        {children}
      </ContainerRow>
  </Container>
);

const Container = styled(ContainerWithTheme)`
  max-width: 600px;
  padding: ${getTheme(getSpacingStandard)}px;
`;

const Title = styled(TextWithTheme)`
  margin-bottom: ${getTheme(getSpacingTiny)}px;
`;
