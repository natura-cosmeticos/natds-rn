import React from 'react';
import { select, number as numberKnob } from '@storybook/addon-knobs';

import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import {
  Badge,
  BadgeTypes,
  BadgeLimit,
  BadgeColors,
} from './Badge';

const badgeDefinition = 'Notify the user by calling their attention to an update or something important';

export default {
  component: Badge,
  parameters: {
    componentSubtitle: badgeDefinition,
  },
  status: 'Still not implemeted: type pulse, motion: pulse',
  title: 'Components|Badge',
};

const types = {
  dot: 'dot',
  standard: 'standard',
};

const limits = {
  9: 9,
  99: 99,
  9999: 9999,
};

const colors = {
  alert: 'alert',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
};

export const type = () => (
  <StoryContainer title="Types">
    <Badge type="standard" content={9} />

    <Badge type="dot" />
  </StoryContainer>
);

export const color = () => (
  <StoryContainer title="Colors">
    <Badge type="dot" />

    <Badge type="dot" color="primary" />

    <Badge type="dot" color="success" />

    <Badge type="dot" color="secondary" />
  </StoryContainer>
);

export const content = () => (
  <StoryContainer title="Content">
    <Badge type="standard" content={9} />

    <Badge type="standard" content={9} color="primary" />

    <Badge type="standard" content={9} color="success" />

    <Badge type="standard" content={9} color="secondary" />
  </StoryContainer>
);

export const limit = () => (
  <StoryContainer title="Limit">
    <Badge type="standard" content={10} limit={9} />

    <Badge type="standard" content={100} limit={99} />

    <Badge type="standard" content={10000} />
  </StoryContainer>
);

export const all = () => (
  <>
    {type()}
    {color()}
    {content()}
    {limit()}
  </>
);

export const interactive = () => (
  <StoryContainer title="Interactive">
    <Badge
      type={select('Type', types, 'standard') as BadgeTypes}
      content={numberKnob('Content', 10)}
      limit={select('Limit', limits, 9) as BadgeLimit}
      color={select('Color', colors, 'alert') as BadgeColors}
    />
  </StoryContainer>
);
