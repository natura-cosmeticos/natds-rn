import React from 'react';
import { Platform } from 'react-native';
import LogoNaturaHorizontal from './logo-natura-horizontal.svg';
import LogoNaturaVertical from './logo-natura-vertical.svg';
import LogoNaturaNegativeHorizontal from './logo-natura-negative-horizontal.svg';
import LogoNaturaNegativeVertical from './logo-natura-negative-vertical.svg';

const icons = {
  LogoNaturaHorizontal,
  LogoNaturaNegativeHorizontal,
  LogoNaturaNegativeVertical,
  LogoNaturaVertical,
};

const parseName = name => name
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join('');
const load = (name) => {
  const icon = icons[parseName(name)];

  return Platform.OS === 'web'
    ? props => <img {...props} src={icon} />
    : icon;
};

export { parseName, load };
