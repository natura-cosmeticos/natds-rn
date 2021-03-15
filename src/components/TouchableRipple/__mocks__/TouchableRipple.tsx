import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

export const TouchableRipple = ({ children, ...props }) => (
  <TouchableWithoutFeedback {...props}>
    {typeof children === 'function' ? '[Child as a function]' : children}
  </TouchableWithoutFeedback>
);
