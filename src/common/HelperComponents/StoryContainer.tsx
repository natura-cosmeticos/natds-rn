import React from 'react';
import { CSSObject } from 'styled-components';
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

export const VerticalStoryContainer = ({ children, title }) => {
  const verticalStyle = { flexDirection: 'column' };

  return <StoryContainer {...{ children, title }} style={verticalStyle} />;
};

export const Separator = styled.View((): CSSObject => ({
  marginTop: 16,
}));

const Container = styled(ContainerWithTheme)`
  max-width: 600px;
  padding: 24px;
`;

const Title = styled(TextWithTheme)`
  margin-bottom: 8px;
`;
