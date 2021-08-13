import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer';
import { getColorOnSurface } from '../../common/themeSelectors';
import { Logo } from './Logo';

const description = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ Base

With the following attribute status:

- **Model**
    - ✅ \`primary\`
    - ✅ \`secondary\`
- **Color**
    - ✅ \`neutral\`
    - ✅ \`primary\`
    - ✅ \`secondary\`
    - ✅ \`highlight\`
    - ✅ \`surface\`
- **Size**
    - ✅ \`medium\`
    - ✅ \`mediumx\`
    - ✅ \`large\`
    - ✅ \`largex\`
    - ✅ \`largexx\`
    - ✅ \`largexxx\`
    - ✅ \`huge\`
    - ✅ \`hugex\`
    - ✅ \`hugexx\`
    - ✅ \`hugexxx\`
    - ✅ \`veryhuge\`

- - -
`;

export default {
  component: Logo,
  parameters: {
    componentSubtitle: 'Logo adapted as brand standards for each company.',
    docs: {
      extractComponentDescription: description,
    },
  },
  title: 'Components|Logo',
};

export const Default = () => (
  <VerticalStoryContainer title='Default'>
    <Logo />
  </VerticalStoryContainer>
);

export const Models = () => (
  <VerticalStoryContainer title='Models'>
    <Logo />
    <Logo model="b" />
  </VerticalStoryContainer>
);

export const Colors = () => {
  const theme = useTheme();

  return (
    <VerticalStoryContainer title='Colors'>
      <Logo />
      <Logo color="primary" />
      <Logo color="secondary" />
      <Logo color="highlight" />
      <View style={{
        backgroundColor: getColorOnSurface(theme),
        flex: 1,
      }}>
        <Logo color="surface" />
      </View>
    </VerticalStoryContainer>
  );
};

export const Sizes = () => (
  <VerticalStoryContainer title='Sizes'>
    <Logo size="medium" />
    <Logo size="mediumX" />
    <Logo size="large" />
    <Logo size="largeX" />
    <Logo size="largeXX" />
    <Logo size="largeXXX" />
    <Logo size="huge" />
    <Logo size="hugeX" />
    <Logo size="hugeXX" />
    <Logo size="hugeXXX" />
    <Logo size="veryHuge" />
  </VerticalStoryContainer>
);

export const All = () => (
  <>
    <Default />
    <Models />
    <Colors />
    <Sizes />
  </>
);
