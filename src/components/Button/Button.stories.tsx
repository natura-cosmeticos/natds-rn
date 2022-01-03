/* eslint-disable max-lines */
import React from 'react';
import { View } from 'react-native';
import { boolean, select, text as textKnob } from '@storybook/addon-knobs';
import { VerticalStoryContainer, StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Button } from './Button';
import { ButtonSizes, ButtonTypes } from './Button.types';

const description = () => `
---

**NOTE**: This component is available in the following variants:

  - ✅ contained
  - ✅ outlined
  - ✅ text

With the following attribute status:

- **Size:**
    - ✅ \`semi\`
    - ✅ \`semiX\`
    - ✅ \`medium\`
- **Icon**
  - ✅ \`left\`
  - ✅ \`right\`
- ✅ **Disabled**
- **Display**:
    - ✅ \`inline\`
    - ✅ \`block\`

---
`;


export default {
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons allow users to take actions, and make choices, with a single tap.',
    docs: {
      extractComponentDescription: description,
    },
  },
  title: 'Components|Button',
};

const onPress = () => { };

const buttonTypes = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
};
const buttonSizes = {
  medium: 'medium',
  semi: 'semi',
  semiX: 'semiX',
};

export const Default = () => (
  <VerticalStoryContainer title="Standard">
    <Button onPress={onPress} text="Natura Design System" />
  </VerticalStoryContainer>
);

export const Variants = () => (
  <VerticalStoryContainer title='Variants'>
    <StoryContainer title="Contained">
      <Button onPress={onPress} text="Natura Design System" type="contained" />
    </StoryContainer>
    <StoryContainer title="Outlined">
      <Button onPress={onPress} text="Natura Design System" type="outlined" />
    </StoryContainer>
    <StoryContainer title="Text">
      <Button onPress={onPress} text="Natura Design System" type="text" />
    </StoryContainer>
  </VerticalStoryContainer>
);

export const Sizes = () => (
  <VerticalStoryContainer title="Sizes">
    <StoryContainer title="Medium">
      <Button onPress={onPress} text="Natura Design System" size="medium" />
    </StoryContainer>
    <StoryContainer title="SemiX">
      <Button onPress={onPress} text="Natura Design System" size="semiX" />
    </StoryContainer>
    <StoryContainer title="Semi">
      <Button onPress={onPress} text="Natura Design System" size="semi" />
    </StoryContainer>
  </VerticalStoryContainer>
);

export const Icons = () => (
  <VerticalStoryContainer title="Icons">
    <StoryContainer title="Left Icon">
      <Button onPress={onPress} text="Natura Design System" iconName="outlined-default-mockup" iconPosition="left" />
    </StoryContainer>
    <StoryContainer title="Right Icon">
      <Button onPress={onPress} text="Natura Design System" iconName="outlined-default-mockup" iconPosition="right" />
    </StoryContainer>
  </VerticalStoryContainer>
);

export const Disabled = () => (
  <VerticalStoryContainer title="Disabled">
    <StoryContainer title="Contained">
      <Button onPress={onPress} text="Natura Design System" type="contained" disabled />
    </StoryContainer>
    <StoryContainer title="Outlined">
      <Button onPress={onPress} text="Natura Design System" type="outlined" disabled />
    </StoryContainer>
    <StoryContainer title="Text">
      <Button onPress={onPress} text="Natura Design System" type="text" disabled />
    </StoryContainer>
  </VerticalStoryContainer>
);

export const Display = () => (
    <>
    <StoryContainer title='Display Inline'>
      <View style={{ alignItems: 'flex-start', marginBottom: 14 }}>
        <Button onPress={onPress} text="Natura Design System" />
      </View>
    </StoryContainer>
    <StoryContainer title='Display Block'>
      <View style={{ marginBottom: 14, width: '100%' }}>
        <Button onPress={onPress} text="Natura Design System" />
      </View>
    </StoryContainer>
  </>
);

export const Interactive = () => (
  <VerticalStoryContainer title="Interactive">
    <Button
      disabled={boolean('Disabled', false)}
      onPress={onPress}
      size={select('Size', buttonSizes, 'semiX') as ButtonSizes}
      text={textKnob('Text', 'Natura Design System')}
      type={select('Types', buttonTypes, 'contained') as ButtonTypes}
    />
  </VerticalStoryContainer>
);
