
import React from 'react';
import styled from 'styled-components/native';
import {
  getColorHighlight, Theme,
} from '../../common/themeSelectors';

export default {
  title: 'Components|Typography',
};

const TypographyContainer = styled.View<{theme: Theme}>(({ theme }) => ({
  flexDirection: 'column',
  padding: theme.spacing.small,
}));

const TypographyText = styled.Text<{theme: Theme}>(({ theme }) => ({
  color: getColorHighlight(theme),
  fontSize: theme.heading3.fontSize,
  marginBottom: theme.spacing.small,
}));

const Display = styled(TypographyText)<{theme: Theme}>(({ theme }) => ({
  fontFamily: `"${theme.typography.display.fontFamily}"`,
  fontWeight: theme.typography.display.fontWeight,
}));

const Headline = styled(TypographyText)<{theme: Theme}>(({ theme }) => ({
  fontFamily: `"${theme.typography.headline.fontFamily}"`,
  fontWeight: theme.typography.headline.fontWeight,
}));

const BodyRegular = styled(TypographyText)<{theme: Theme}>(({ theme }) => ({
  fontFamily: `"${theme.typography.body.regular.fontFamily}"`,
  fontWeight: theme.typography.body.regular.fontWeight,
}));

const BodyBold = styled(TypographyText)<{theme: Theme}>(({ theme }) => ({
  fontFamily: `"${theme.typography.body.bold.fontFamily}"`,
  fontWeight: theme.typography.body.bold.fontWeight,
}));

export const CustomFonts = () => (
  <TypographyContainer>
    <Display>Display</Display>
    <Headline>Headline</Headline>
    <BodyRegular>Body Regular</BodyRegular>
    <BodyBold>Body Bold</BodyBold>
  </TypographyContainer>
);
