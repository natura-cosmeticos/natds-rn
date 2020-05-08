
import React from 'react';
import { View } from 'react-native';
import { ContainerRow, ContainerWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';
import { Button } from './Button';

export default {
  component: Button,
  parameters: {
    componentSubtitle: 'A usefull button component.',
  },
  title: 'Components|Button',
};

const onPress = () => { };

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
    <Button onPress={onPress} text="default" />
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
