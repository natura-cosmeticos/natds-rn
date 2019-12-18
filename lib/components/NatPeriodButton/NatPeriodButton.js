import React from 'react';
import { Platform, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

import {
  CustomView, Title, SubTitle, CheckedIcon, CustomTouchableOpacity,
} from './NatPeriodButton.styles';

export const NatPeriodButton = ({
  selected, title, subtitle, onSelect, iconSrc,
}) => {
  if (!onSelect) {
    throw new Error('Period Button needs an onSelect property to be passed to the component.');
  }

  return (Platform.OS === 'android' ? (
    <TouchableNativeFeedback onPress={onSelect}>
      <CustomView selected={selected}>
        {selected && (
        <CheckedIcon
          source={{ uri: iconSrc }}
          // source temporario
        />
        )}
        {title && (
        <Title selected={selected}>{title}</Title>
        )}
        {subtitle && (
        <SubTitle selected={selected}>{subtitle}</SubTitle>
        )}
      </CustomView>
    </TouchableNativeFeedback>
  ) : (
    <CustomTouchableOpacity onPress={onSelect}>
      <CustomView selected={selected}>
        {selected && (
        <CheckedIcon
          source={{ uri: iconSrc }}
          // source temporario
        />
        )}
        {title && (
        <Title selected={selected}>{title}</Title>
        )}
        {subtitle && (
        <SubTitle selected={selected}>{subtitle}</SubTitle>
        )}
      </CustomView>
    </CustomTouchableOpacity>
  ));
};

NatPeriodButton.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  iconSrc: PropTypes.string.isRequired,
};
NatPeriodButton.defaultProps = {
  title: null,
  subtitle: null,
  selected: false,
};
