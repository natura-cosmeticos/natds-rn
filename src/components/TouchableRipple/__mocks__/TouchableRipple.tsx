import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

export const TouchableRipple = ({ children, ...props }) => (
  <TouchableWithoutFeedback {...props}>
    <View {...props}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);
