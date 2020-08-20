import React from 'react';
import { boolean, select, text as textKnob } from '@storybook/addon-knobs';
import { ContainerRow, ContainerWithTheme, TextWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';
import { Button, ButtonTypes, ButtonSizes } from './Button';

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


const StoryContainer = ({ children, title }) => (
  <ContainerWithTheme style={{ maxWidth: 600, padding: 30 }}>
    <ContainerRow style={{ marginBottom: 10 }}>
      <TextWithTheme>{title}</TextWithTheme>
    </ContainerRow>
    <ContainerRow style={{ marginBottom: 10 }}>{children}</ContainerRow>
  </ContainerWithTheme>
);

export const Default = () => (
  <StoryContainer title="_Default">
    <Button onPress={onPress} text="default" />
  </StoryContainer>
);

export const Variants = () => (
  <StoryContainer title="_Variants">
    <Button type="contained" onPress={onPress} text="default" />
    <Button type="outlined" onPress={onPress} text="default" />
    <Button type="text" onPress={onPress} text="default" />
  </StoryContainer>
);

export const Size = () => (
  <StoryContainer title="_Sizes">
    <Button onPress={onPress} text="default" size="large" />
    <Button onPress={onPress} text="default" size="medium" />
    <Button onPress={onPress} text="default" size="small" />
  </StoryContainer>
);

export const Disabled = () => (
  <StoryContainer title="_Disabled">
    <Button disabled type="contained" onPress={onPress} text="default" />
    <Button disabled type="outlined" onPress={onPress} text="default" />
    <Button disabled type="text" onPress={onPress} text="default" />
  </StoryContainer>
);

export const All = () => (
  <ContainerWithTheme
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
    <Default />
    <Variants />
    <Size />
    <Disabled />
  </ContainerWithTheme>
);

export const Interactive = () => (
  <ContainerRow style={{ padding: 30 }}>
    <Button
      onPress={onPress}
      text={textKnob('Text', 'default')}
      type={select('Types', buttonTypes, 'contained') as ButtonTypes}
      size={select('Size', buttonSizes, 'medium') as ButtonSizes}
      disabled={boolean('Disabled', false)}
    />
  </ContainerRow>
);
