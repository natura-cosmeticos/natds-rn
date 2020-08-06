import React from 'react';
import { View } from 'react-native';
import { Divider } from './Divider';
import { ContainerWithBorder, TextWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';

export default {
  component: Divider,
  parameters: {
    componentSubtitle:
      'A divider is a thin line that groups content in lists and layouts.',
  },
  title: 'Components|Divider',
};

export const all = () => (
  <View style={{ maxWidth: 300, padding: 30 }}>
    <TextWithTheme>fullBleed</TextWithTheme>
    <ContainerWithBorder
      style={{
        height: 50,
        justifyContent: 'center',
        marginBottom: 20,
      }}>
      <Divider type="fullBleed" />
    </ContainerWithBorder>
    <TextWithTheme>inset</TextWithTheme>
    <ContainerWithBorder
      style={{
        height: 50,
        justifyContent: 'center',
        marginBottom: 20,
      }}>
      <Divider type="inset" />
    </ContainerWithBorder>
    <TextWithTheme>middle</TextWithTheme>
    <ContainerWithBorder
      style={{
        height: 50,
        justifyContent: 'center',
        marginBottom: 20,
      }}>
      <Divider type="middle" />
    </ContainerWithBorder>
  </View>
);

export const fullBleed = () => (
  <View
    style={{
      height: 50,
      justifyContent: 'center',
    }}>
    <Divider type="fullBleed" />
  </View>
);

export const inset = () => (
  <View
    style={{
      height: 50,
      justifyContent: 'center',
    }}>
    <Divider type="inset" />
  </View>
);

export const middle = () => (
  <View
    style={{
      height: 50,
      justifyContent: 'center',
    }}>
    <Divider type="middle" />
  </View>
);
