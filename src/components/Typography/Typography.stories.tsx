
import React from 'react';
import styled from 'styled-components/native';
import {
  getColorHighlight, getTypographyStyles, Theme,
} from '../../common/themeSelectors';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';

export default {
  title: 'Components|Typography',
};

const TypographyContainer = styled.View<{theme: Theme}>(() => ({
  flexDirection: 'column',
}));

const TypographyText = styled.Text<{theme: Theme}>(({ theme }) => ({
  color: getColorHighlight(theme),
  fontSize: theme.heading3.fontSize,
  marginBottom: theme.spacing.small,
}));

const Display = styled(TypographyText)<{theme: Theme}>(({ theme }) => ({
  fontFamily: `"${getTypographyStyles(theme).display.fontFamily}"`,
  fontWeight: getTypographyStyles(theme).display.fontWeight,
}));

const Headline = styled(TypographyText)<{theme: Theme}>(({ theme }) => ({
  fontFamily: `"${getTypographyStyles(theme).headline.fontFamily}"`,
  fontWeight: getTypographyStyles(theme).headline.fontWeight,
}));

const BodyRegular = styled(TypographyText)<{theme: Theme}>(({ theme }) => ({
  fontFamily: `"${getTypographyStyles(theme).bodyRegular.fontFamily}"`,
  fontWeight: getTypographyStyles(theme).bodyRegular.fontWeight,
}));

const BodyBold = styled(TypographyText)<{theme: Theme}>(({ theme }) => ({
  fontFamily: `"${getTypographyStyles(theme).bodyBold.fontFamily}"`,
  fontWeight: getTypographyStyles(theme).bodyBold.fontWeight,
}));

export const CustomFonts = () => (
  <StoryContainer title='Read Only'>
    <TypographyContainer>
      <Display>Display</Display>
      <Headline>Headline</Headline>
      <BodyRegular>Body Regular</BodyRegular>
      <BodyBold>Body Bold</BodyBold>
    </TypographyContainer>
  </StoryContainer>
);
