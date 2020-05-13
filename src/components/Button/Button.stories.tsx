
import React from 'react';
import { View } from 'react-native';
import { text as textKnob, select } from '@storybook/addon-knobs';
import { ContainerRow, ContainerWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';
import { Button, ButtonTypes } from './Button';

export default {
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons allow users to take actions, and make choices, with a single tap.',
  },
  title: 'Components|Button',
};

const onPress = () => { };

const buttonTypes = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
};

export const all = () => (
  <View style={{ maxWidth: 600, padding: 30 }}>
    <ContainerRow style={{ marginBottom: 30 }}>
      <Button onPress={onPress} text="default" />
      <Button onPress={onPress} text="default" type="outlined" />
      <Button onPress={onPress} text="default" type="text" />
    </ContainerRow >
    <ContainerWithTheme style={{ height: 200, justifyContent: 'space-between' }} >
      <Button onPress={onPress} text="default" />
      <Button onPress={onPress} text="default" type="outlined" />
      <Button onPress={onPress} text="default" type="text" />
    </ContainerWithTheme >
  </View>
);

export const contained = () => (
  <ContainerRow style={{ padding: 30 }} >
    <Button onPress={onPress} text="default" type="contained" />
  </ContainerRow>
);

export const outlined = () => (
  <ContainerRow style={{ padding: 30 }}>
    <Button onPress={onPress} text="default" type="outlined" />
  </ContainerRow>
);

export const text = () => (
  <ContainerRow style={{ padding: 30 }}>
    <Button onPress={onPress} text="default" type="text" />
  </ContainerRow>
);

export const interactive = () => (
  <ContainerRow style={{ padding: 30 }} >
    <Button
      onPress={onPress}
      text={textKnob('Text', 'default')}
      type={select('Types', buttonTypes, 'contained') as ButtonTypes}
    />
  </ContainerRow>
);
