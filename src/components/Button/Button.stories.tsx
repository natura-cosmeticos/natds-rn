/* eslint-disable max-lines */
import React from 'react';
import { View } from 'react-native';
import { boolean, select, text as textKnob } from '@storybook/addon-knobs';
import styled from 'styled-components/native';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Button } from './Button';
import { getSpacingStandard, getTheme } from '../../common/themeSelectors';
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

const ContainerRow = styled.View`
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${getTheme(theme => getSpacingStandard(theme))};
  width: 100%;
`;

const ContainerColumn = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const All = () => (
  <View>
    <Default />
    <Variants />
    <Size />
    <Icon />
    <Disabled />
    <Display />
  </View>
);

export const Default = () => (
  <StoryContainer title="Default">
    <Button onPress={onPress} text="default" />
  </StoryContainer>
);

export const Variants = () => (
  <StoryContainer title="Variants">
    <Button type="contained" onPress={onPress} text="contained" />
    <Button type="outlined" onPress={onPress} text="outlined" />
    <Button type="text" onPress={onPress} text="text" />
  </StoryContainer>
);

export const Size = () => (
  <StoryContainer title="Sizes">
    <ContainerColumn>
      <ContainerRow>
        <Button onPress={onPress} text="medium" size="medium" type="contained" />
        <Button onPress={onPress} text="semiX" size="semiX" type="contained" />
        <Button onPress={onPress} text="semi" size="semi" type="contained" />
      </ContainerRow>
      <ContainerRow>
        <Button onPress={onPress} text="medium" size="medium" type="outlined" />
        <Button onPress={onPress} text="semiX" size="semiX" type="outlined" />
        <Button onPress={onPress} text="semi" size="semi" type="outlined" />
      </ContainerRow>
      <ContainerRow style={{ marginBottom: 0 }}>
        <Button onPress={onPress} text="medium" size="medium" type="text" />
        <Button onPress={onPress} text="semiX" size="semiX" type="text" />
        <Button onPress={onPress} text="semi" size="semi" type="text" />
      </ContainerRow>
    </ContainerColumn>
  </StoryContainer>
);

export const Icon = () => (
  <StoryContainer title="Icon">
    <ContainerColumn>
      <ContainerRow>
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="left" text="left icon" type="contained" />
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="right" text="right icon" type="contained" />
      </ContainerRow>
      <ContainerRow>
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="left" text="left icon" type="outlined" />
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="right" text="right icon" type="outlined" />
      </ContainerRow>
      <ContainerRow style={{ marginBottom: 0 }}>
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="left" text="left icon" type="text" />
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="right" text="right icon" type="text" />
      </ContainerRow>
    </ContainerColumn>
  </StoryContainer>
);

export const Disabled = () => (
  <StoryContainer title="Disabled">
    <Button disabled type="contained" onPress={onPress} text="default" />
    <Button disabled type="outlined" onPress={onPress} text="default" />
    <Button disabled type="text" onPress={onPress} text="default" />
  </StoryContainer>
);

export const Display = () => (
  <StoryContainer title="Display">
    <ContainerColumn>
      <View style={{ alignItems: 'flex-start', marginBottom: 14 }}>
        <Button type="contained" onPress={onPress} text="display inline" />
      </View>
      <View style={{ alignItems: 'flex-start', marginBottom: 14 }}>
        <Button type="outlined" onPress={onPress} text="display inline" />
      </View>
      <View style={{ alignItems: 'flex-start', marginBottom: 14 }}>
        <Button type="text" onPress={onPress} text="display inline" />
      </View>

      <View style={{ marginBottom: 14 }}>
        <Button type="contained" onPress={onPress} text="display block" />
      </View>
      <View style={{ marginBottom: 14 }}>
        <Button type="outlined" onPress={onPress} text="display block" />
      </View>
      <View>
        <Button type="text" onPress={onPress} text="display block" />
      </View>
    </ContainerColumn>
  </StoryContainer>
);

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Button
      disabled={boolean('Disabled', false)}
      onPress={onPress}
      size={select('Size', buttonSizes, 'semiX') as ButtonSizes}
      text={textKnob('Text', 'default')}
      type={select('Types', buttonTypes, 'contained') as ButtonTypes}
    />
  </StoryContainer>
);
