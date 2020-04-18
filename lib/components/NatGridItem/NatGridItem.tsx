import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import {
  Thumb, Item, Description, Title,
} from './NatGridItem.styles';

type NatGridItemProps = {
  onPress?: (...args: any[]) => any,
  sizeMedium?: boolean,
  source: string
};

export const NatGridItem: React.SFC<NatGridItemProps> = ({
  source,
  sizeMedium,
  onPress,
  children,
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
    <Description sizeMedium={sizeMedium} accessibilityLabel={`${children}`}>
      <Title>{children}</Title>
    </Description>
  </Item>
);
NatGridItem.defaultProps = {
  children: 'Título da imagem',
  onPress: PropTypes.func,
  sizeMedium: false,
};
