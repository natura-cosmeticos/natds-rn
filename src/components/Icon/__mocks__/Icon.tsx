import React from 'react';
import { Text } from 'react-native';

export const Icon = props => (
  <Text {...props}>
    {props.name}
  </Text>
);
