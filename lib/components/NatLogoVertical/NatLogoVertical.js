import React from 'react';

import { NatView, NatImage } from './NatLogoVertical.styles';

const logoVertical = require('../../assets/images/logoVertical/logoVertical.png');

export const NatLogoVertical = () => (
  <NatView>
    <NatImage
      source={logoVertical}
    />
  </NatView>
);
