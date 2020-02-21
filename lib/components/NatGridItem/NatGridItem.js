import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';

import {
  Thumb, Item, Description, Title,
} from './NatGridItem.styles';

export const NatGridItem = ({
  source, sizeMedium, onPress, children,
}) => (
  <Item sizeMedium={sizeMedium}>
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
  children: PropTypes.string,
  onPress: PropTypes.func,
  sizeMedium: PropTypes.bool,
  source: PropTypes.string.isRequired,
};

NatGridItem.defaultProps = {
  children: 'Título da imagem',
  onPress: PropTypes.func,
  sizeMedium: false,
};
