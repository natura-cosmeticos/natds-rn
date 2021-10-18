import React from 'react';
import { Platform } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { Typography } from './Typography.styles';
import { Separator, VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer';

const description = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ Heading1
  - ✅ Heading2
  - ✅ Heading3
  - ✅ Heading4
  - ✅ Heading5
  - ✅ Heading6
  - ✅ Body1
  - ✅ Body2
  - ✅ Caption
  - ✅ Overline

  Props of the nativo component are also available.

- - -
`;

export default {
  component: Typography,
  parameters: {
    componentSubtitle: 'Typography component for displaying text.',
    docs: {
      extractComponentDescription: description,
    },
  },
  title: 'Components|Typography',
};

type TypographyProps = {
  type: string
  weight: 'bold' | 'regular'
} | {
  type: string
  weight?: 'bold' | 'regular'
}


export const CustomFonts = () => {
  const isWebPlatform = Platform.OS === 'web';
  const isAndroidPlatform = Platform.OS === 'android';

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const isBodyTypography = ({ type = 'body', weight = 'regular' }: TypographyProps) => (type === 'body' ? theme.typography[type][weight] : theme.typography[type]);
        const isAndroidBodyTypography = ({ type = 'body', weight = 'regular' }: TypographyProps) => (type === 'body' ? theme.asset.font.file[type][weight] : theme.asset.font.file[type]);
        const fontByPlatform = ({ type = 'body', weight = 'regular' }: TypographyProps) => (isWebPlatform ? `"${isBodyTypography({ type, weight }).fontFamily}"` : isBodyTypography({ type, weight }).fontFamily);
        const weightByPlatform = ({ type = 'body', weight = 'regular' }: TypographyProps) => (isWebPlatform ? isBodyTypography({ type, weight }).fontWeight : isBodyTypography({ type, weight }).fontWeight.toString());

        const setTypographyByPlatform = ({ type, weight }: TypographyProps) => {
          if (isAndroidPlatform) {
            return isAndroidBodyTypography({ type, weight });
          }

          return fontByPlatform({ type, weight });
        };


        return (
        <VerticalStoryContainer title="custom">
          <Typography variant="heading3"
            style={{
              fontFamily: setTypographyByPlatform({ type: 'display' }),
              fontWeight: isAndroidPlatform ? '' : weightByPlatform({ type: 'display' }),
            }}
          >Display</Typography>
          <Separator />
          <Typography variant="heading3"
            style={{
              fontFamily: setTypographyByPlatform({ type: 'headline' }),
              fontWeight: isAndroidPlatform ? '' : weightByPlatform({ type: 'headline' }),
            }}
          >Headline</Typography>
          <Separator />
          <Typography variant="heading3"
            style={{
              fontFamily: setTypographyByPlatform({ type: 'body', weight: 'regular' }),
              fontWeight: isAndroidPlatform ? '' : weightByPlatform({ type: 'body', weight: 'regular' }),
            }}
          >Body Regular</Typography>
          <Separator />
          <Typography variant="heading3"
            style={{
              fontFamily: setTypographyByPlatform({ type: 'body', weight: 'bold' }),
              fontWeight: isAndroidPlatform ? '' : weightByPlatform({ type: 'body', weight: 'bold' }),
            }}
          >Body Bold</Typography>
        </VerticalStoryContainer>
        );
      }}
  </ThemeContext.Consumer>
  );
};

export const Variants = () => (
  <VerticalStoryContainer title="variants">
    <Typography variant="heading1" numberOfLines={1}>Heading1</Typography>
    <Separator />
    <Typography variant="heading2" numberOfLines={1}>Heading2</Typography>
    <Separator />
    <Typography variant="heading3">Heading3</Typography>
    <Separator />
    <Typography variant="heading4">Heading4</Typography>
    <Separator />
    <Typography variant="heading5">Heading5</Typography>
    <Separator />
    <Typography variant="heading6">Heading6</Typography>
    <Separator />
    <Typography variant="body1">Body1</Typography>
    <Separator />
    <Typography variant="body1">Body2</Typography>
    <Separator />
    <Typography variant="caption">Caption</Typography>
    <Separator />
    <Typography variant="overline">Overline</Typography>
  </VerticalStoryContainer>
);

export const All = () => (
  <>
    <CustomFonts />
    <Variants />
  </>
);
