import React from 'react';
import { NatLogo, NatText } from '../../../lib';

export const Welcome = () => (
  <>
    <NatLogo name="logo-natura-vertical" size={300} />
    <NatText type="h3" value="Welcome to NATDS!" />
    <NatText value="Here you can try out the components of our react-native library." />
  </>
);
