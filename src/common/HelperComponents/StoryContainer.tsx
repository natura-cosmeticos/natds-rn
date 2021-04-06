import React from 'react';
import styled from 'styled-components/native';
import { ContainerRow, ContainerWithTheme, TextWithTheme } from './ThemeHelper.styles';

export const StoryContainer = ({ children, title, ...props }) => (
  <Container>
      <Title>{title}</Title>
      <ContainerRow {...props}>
        {children}
      </ContainerRow>
  </Container>
);

const Container = styled(ContainerWithTheme)`
  max-width: 600px;
  padding: 24px;
`;

const Title = styled(TextWithTheme)`
  margin-bottom: 8px;
`;
