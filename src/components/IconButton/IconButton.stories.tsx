import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { ContainerRow } from '../../common/HelperComponents/ThemeHelper.styles';
import { IconButton } from './IconButton';

export default {
  component: IconButton,
  parameters: {
    componentSubtitle: 'A button component with an icon from @naturacosmeticos/natds-icons package',
  },
  title: 'Components/IconButton',
};

export const Base = () => (
  <ContainerRow style={{ padding: 20 }}>
    <IconButton onPress={() => { }} />
  </ContainerRow>
);

export const IconColor = () => (
  <ContainerRow style={{ backgroundColor: '#eaeaea', padding: 20 }}>
    <IconButton onPress={() => { }} iconColor="highEmphasis" />
    <IconButton onPress={() => { }} iconColor="primary" />
    <IconButton onPress={() => { }} iconColor="light" />
  </ContainerRow>
);

export const BackgroundStyle = () => (
  <ContainerRow style={{ backgroundColor: '#eaeaea', padding: 20 }}>
    <IconButton onPress={() => { }} iconColor="highEmphasis" backgroundStyle="none" />
    <IconButton onPress={() => { }} iconColor="primary" backgroundStyle="float" />
    <IconButton onPress={() => { }} iconColor="light" backgroundStyle="overlay" />
  </ContainerRow>
);

export const Disabled = () => (
  <ContainerRow style={{ backgroundColor: '#eaeaea', padding: 20 }}>
    <IconButton onPress={() => { }} disabled iconColor="highEmphasis" backgroundStyle="none" />
    <IconButton onPress={() => { }} disabled iconColor="primary" backgroundStyle="float" />
    <IconButton onPress={() => { }} disabled iconColor="light" backgroundStyle="overlay" />
  </ContainerRow>
);

export const Size = () => (
  <ContainerRow style={{ backgroundColor: '#eaeaea', padding: 20 }}>
    <IconButton onPress={() => { }} size="semi" iconColor="highEmphasis" backgroundStyle="none" />
    <IconButton onPress={() => { }} size="semiX" iconColor="primary" backgroundStyle="float" />
    <IconButton onPress={() => { }} size="medium" iconColor="light" backgroundStyle="overlay" />
  </ContainerRow>
);

export const all = () => (
  <ContainerRow style={{ justifyContent: 'space-around' }}>
    <IconButton onPress={() => { }} />
    <IconButton
      color="primary"
      icon="outlined-finance-bank"
      size="small"
      onPress={() => Function.prototype()}
    />
    <IconButton
      color="default"
      size="medium"
      icon="outlined-finance-bank"
      onPress={() => Function.prototype()}
    />
  </ContainerRow>
);

const iconButtonSizes = {
  medium: 'medium',
  small: 'small',
};

const iconButtonColors = {
  default: 'default',
  primary: 'primary',
};

export const interactive = () => (
  <ContainerRow style={{ padding: 20 }} >
    <IconButton
      color={select('Colors', iconButtonColors, 'default')}
      icon={text('Icon name', 'outlined-finance-bank')}
      size={select('Sizes', iconButtonSizes, 'small')}
      onPress={() => Function.prototype()}
    />
  </ContainerRow>
);
