import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';

import {
  Thumb, Item, Description, Title,
} from './NatGridItem.styles';

export const NatGridItem = ({
  source, square, onPress, children,
}) => (
  <Item square={square}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Thumb
        square={square}
        source={{ uri: source }}
      />
    </TouchableWithoutFeedback>
    <Description square={square}>
      <Title>{children}</Title>
    </Description>
  </Item>
);

NatGridItem.propTypes = {
  source: PropTypes.string.isRequired,
  square: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
  children: PropTypes.string,
};
