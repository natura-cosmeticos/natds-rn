import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

/* eslint-disable */
export const TouchableRipple = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback {...props}>
      {typeof children === 'function' ? '[Child as a function]' : children}
    </TouchableWithoutFeedback>
  );
};
