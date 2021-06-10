import React from 'react';
import { Image } from 'react-native';
import LogoAesop from './logo-aesop.svg';
import LogoTheBodyShop from './logo-thebodyshop.svg';
import LogoNaturaco from './logo-naturaco.svg';
import LogoNaturaHorizontal from './logo-natura-horizontal.svg';
import LogoNaturaVertical from './logo-natura-vertical.svg';
import LogoNaturaNegativeHorizontal from './logo-natura-negative-horizontal.svg';
import LogoNaturaNegativeVertical from './logo-natura-negative-vertical.svg';

const LogoAvon = require('./logo-avon.png');

const LogoAvonImage = (
  <Image source={LogoAvon} style={{ width: 110 }} resizeMode="contain" />
);

const icons = {
  LogoAesop,
  LogoAvon: LogoAvonImage,
  LogoNaturaco,
  LogoNaturaHorizontal,
  LogoNaturaNegativeHorizontal,
  LogoNaturaNegativeVertical,
  LogoNaturaVertical,
  LogoTheBodyShop,
};

const parseName = name => name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

const load = name => icons[parseName(name)];

export {
  parseName,
  load,
};
