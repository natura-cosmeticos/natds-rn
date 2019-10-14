import React from 'react';
const logoVertical = require('../../assets/images/logoVertical/logoVertical.png');

import { NatView, NatImage } from './NatLogoVertical.styles';

export const NatLogoVertical = () => (
  <NatView>
    <NatImage
      source={logoVertical}
      />
  </NatView>
);

