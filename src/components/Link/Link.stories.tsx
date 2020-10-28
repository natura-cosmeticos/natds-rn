import React from 'react';
import { Alert, View } from 'react-native';
import { TextWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';
import { Link } from './Link';

export default {
  component: Link,
  title: 'Components/Link',
};

const onPress = () => {
  Alert.alert('something happened');
};

export const all = () => (
  <View style={{ padding: 24, width: 336 }}>
    <TextWithTheme>
      The link component allows you to have a pattern for anchor text. It is
      intended to be used <Link onPress={onPress}>inside paragraphs </Link>
      and have the same text styles (size, letter spacing, etc) as the rest of
      the <Link onPress={onPress} type="underline"> text content </Link>.
    </TextWithTheme>
  </View>
);
