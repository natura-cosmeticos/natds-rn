import React from 'react';
import { Text, View } from 'react-native';
import { Link } from './Link';

export default {
  component: Link,
  title: 'Components/Link',
};

const onPress = () => {};

export const all = () => (
  <View style={{ padding: 24 }}>
    <Link onPress={onPress}>
      <Text>some content here</Text>
    </Link>
    <Link type="underline" onPress={onPress}>
      <Text>some content here</Text>
    </Link>
  </View>
);
