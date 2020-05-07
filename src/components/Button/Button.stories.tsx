
import React from 'react';
import { ContainerRow } from '../../common/HelperComponents/ThemeHelper.styles';
import { Button } from './Button';

export default {
  component: Button,
  parameters: {
    componentSubtitle: 'A usefull button component.',
  },
  title: 'Components|Button',
};

export const contained = () => (
  <ContainerRow style={{ padding: 30 }}>
    <Button text="Hello :)" />
  </ContainerRow>
);

export const outlined = () => (
  <ContainerRow >
    <Button type="outlined" text="Hello :)" />
  </ContainerRow>
);

export const text = () => (
  <ContainerRow >
    <Button type="text" text="Hello :)" />
  </ContainerRow>
);
