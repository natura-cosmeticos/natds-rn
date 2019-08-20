import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';

import {
  Thumb, Item, Description, Title,
} from './NatGridItem.styles';

export const NatGridItem = ({
  source, sizeMedium, onPress, children,
}) => (
  <Item sizeMedium={sizeMedium} accessible accessibilityLabel={`${children}`}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Thumb
        accessibilityRole="image"
        sizeMedium={sizeMedium}
        source={{ uri: source }}
        accessibilityLabel={`${children}`}
      />
    </TouchableWithoutFeedback>
    <Description
      sizeMedium={sizeMedium}
      accessibilityLabel={`${children}`}
    >
      <Title>{children}</Title>
    </Description>
  </Item>
);

NatGridItem.propTypes = {
  source: PropTypes.string.isRequired,
  sizeMedium: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.string,
};

NatGridItem.defaultProps = {
  onPress: PropTypes.func,
  children: 'Título da imagem',
  sizeMedium: false,
};
