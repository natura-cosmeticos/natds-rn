import React from 'react';
import { View } from 'react-native';
import { select, text as textKnob } from '@storybook/addon-knobs';
import { Card, CardTypes } from './Card';
import { TextWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';

export default {
  component: Card,
  parameters: {
    componentSubtitle:
      'Cards are surfaces that groups content and actions in the same space. Its construction must always create a visual hierarchy of the content and communicate its purposes clearly.',
  },
  title: 'Components|Card',
};

const cardTypes = {
  base: 'base',
};

export const base = () => (
  <View
    style={{
      alignContent: 'center',
      justifyContent: 'center',
      margin: 30,
      width: 328,
    }}>
    <TextWithTheme>Base</TextWithTheme>
    <Card>
      <View style={{ minHeight: 216 }} />
    </Card>
  </View>
);

export const interactive = () => (
  <View
    style={{
      alignContent: 'center',
      justifyContent: 'center',
      margin: 30,
      width: 328,
    }}>
    <Card type={select('Types', cardTypes, 'base') as CardTypes}>
      <View>
        <TextWithTheme style={{ margin: 16, minHeight: 216 }}>
          {textKnob(
            'Content',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque metus nibh.',
          )}
        </TextWithTheme>
      </View>
    </Card>
  </View>
);
