/* eslint-disable complexity */
import React from 'react';
import { Platform, TouchableNativeFeedback } from 'react-native';
import {
  CustomView,
  Title,
  SubTitle,
  CheckedIcon,
  CustomTouchableOpacity,
} from './NatPeriodButton.styles';

type NatPeriodButtonProps = {
  iconSrc: string,
  onSelect: (...args: any[]) => any,
  selected?: boolean,
  subtitle?: string,
  title?: string
};
export const NatPeriodButton: React.SFC<NatPeriodButtonProps> = ({
  selected,
  title,
  subtitle,
  onSelect,
  iconSrc,
}) => {
  if (!onSelect) {
    throw new Error(
      'Period Button needs an onSelect property to be passed to the component.',
    );
  }

  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback onPress={onSelect}>
      <CustomView selected={selected}>
        {selected && <CheckedIcon source={{ uri: iconSrc }} />}
        {title && <Title selected={selected}>{title}</Title>}
        {subtitle && <SubTitle selected={selected}>{subtitle}</SubTitle>}
      </CustomView>
    </TouchableNativeFeedback>
  ) : (
    <CustomTouchableOpacity onPress={onSelect}>
      <CustomView selected={selected}>
        {selected && <CheckedIcon source={{ uri: iconSrc }} />}
        {title && <Title selected={selected}>{title}</Title>}
        {subtitle && <SubTitle selected={selected}>{subtitle}</SubTitle>}
      </CustomView>
    </CustomTouchableOpacity>
  );
};
NatPeriodButton.defaultProps = {
  selected: false,
  subtitle: null,
  title: null,
};
