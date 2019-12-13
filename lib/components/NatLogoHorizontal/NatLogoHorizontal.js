import React from 'react';

import { NatView, NatImage } from './NatLogoHorizontal.styles';

const logoHorizontal = require('../../assets/images/logoHorizontal/logoHorizontal.png');

export const NatLogoHorizontal = () => (
  <NatView>
    <NatImage
      source={logoHorizontal}
    />
  </NatView>
);
