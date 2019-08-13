import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';

import {
  Thumb, Item, Description, Title,
} from './NatGridItem.styles';

export const NatGridItem = ({
  source, square, onPress, children,
}) => (
  <Item square={square} accessible accessibilityLabel={`${children}`}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Thumb
        accessibilityRole="image"
        square={square}
        source={{ uri: source }}
        accessibilityLabel={`${children}`}
      />
    </TouchableWithoutFeedback>
    <Description
      square={square}
      accessibilityLabel={`${children}`}
    >
      <Title>{children}</Title>
    </Description>
  </Item>
);

NatGridItem.propTypes = {
  source: PropTypes.string.isRequired,
  square: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.string,
};

NatGridItem.defaultProps = {
  onPress: PropTypes.func,
  children: 'Título da imagem',
  square: false,
};
