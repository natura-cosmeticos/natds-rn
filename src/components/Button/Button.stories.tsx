import React from 'react';
import { View } from 'react-native';
import { boolean, select, text as textKnob } from '@storybook/addon-knobs';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Button } from './Button';
import { ButtonTypes, ButtonSizes, DisplayTypes } from './ButtonBase';

export default {
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons allow users to take actions, and make choices, with a single tap.',
  },
  title: 'Components|Button',
};

const onPress = () => {};

const buttonTypes = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
};

const buttonSizes = {
  large: 'large',
  medium: 'medium',
  small: 'small',
};

const displayTypes = {
  block: 'block',
  inline: 'inline',
};

export const Default = () => (
  <StoryContainer title="Default">
    <Button onPress={onPress} text="default" />
  </StoryContainer>
);

export const Variants = () => (
  <StoryContainer title="Variants">
    <Button type="contained" onPress={onPress} text="default" />
    <Button type="outlined" onPress={onPress} text="default" />
    <Button type="text" onPress={onPress} text="default" />
  </StoryContainer>
);

export const Icon = () => (
  <StoryContainer title="Icon">
    <Button onPress={onPress} text="default" iconPosition="left" iconName="outlined-default-mockup" />
    <Button onPress={onPress} text="default" iconPosition="right" iconName="outlined-default-mockup" />
  </StoryContainer>
);

export const Size = () => (
  <StoryContainer title="Sizes">
    <Button onPress={onPress} text="default" size="large" />
    <Button onPress={onPress} text="default" size="medium" />
    <Button onPress={onPress} text="default" size="small" />
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
  <View>
    <StoryContainer title="Display inline">
      <Button display="inline" type="contained" onPress={onPress} text="default" />
    </StoryContainer>
    <StoryContainer title="Display block">
      <Button display="block" type="contained" onPress={onPress} text="default" />
    </StoryContainer>
  </View>
);

export const All = () => (
  <View>
    <Default />
    <Variants />
    <Icon />
    <Size />
    <Disabled />
    <Display />
  </View>
);

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Button
      onPress={onPress}
      text={textKnob('Text', 'default')}
      type={select('Types', buttonTypes, 'contained') as ButtonTypes}
      size={select('Size', buttonSizes, 'medium') as ButtonSizes}
      display={select('Display type', displayTypes, 'inline') as DisplayTypes}
      disabled={boolean('Disabled', false)}
    />
  </StoryContainer>
);
