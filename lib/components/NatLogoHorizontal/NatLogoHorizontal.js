import React from 'react';
const logoHorizontal = require('../../assets/images/logoHorizontal/logoHorizontal.png');

import { NatView, NatImage } from './NatLogoHorizontal.styles';

export const NatLogoHorizontal = () => (
  <NatView>
    <NatImage
      source={logoHorizontal}
      />
  </NatView>
);

