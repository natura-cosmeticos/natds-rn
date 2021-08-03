import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Counter } from './Counter';

const description = () => `
---

  ### NOTE:
  This component is available in the following variants:

  - ✅ Standard

With the following attribute status:

  - ✅ **Label**
  - ✅ **Size:**
  - ✅ **Disabled**

---
`;

export default {
  component: Counter,
  parameters: {
    componentSubtitle: 'A Counter reduces input effort for fields with values that deviate little from the default by allowing users to increase or decrease the number in a single button press.',
    docs: {
      extractComponentDescription: description,
    },
  },
  title: 'Components|Counter',
};

export const Default = () => (
  <StoryContainer title='Default'>
    <Counter />
  </StoryContainer>
);

export const Label = () => (
  <StoryContainer title='With label'>
    <Counter label="Label" />
  </StoryContainer>
);

export const Size = () => (
  <StoryContainer title='Sizes'>
    <Counter label="medium" size="medium" />
    <Counter label="semiX" size="semiX" />
  </StoryContainer>
);

export const Disabled = () => (
  <StoryContainer title='Disabled'>
    <Counter disabled />
  </StoryContainer>
);

export const Value = () => (
  <StoryContainer title='Value'>
    <Counter label="you can set an initial value other than 0" value={42} />
  </StoryContainer>
);

export const Interactive = () => (
  <StoryContainer title='Interactive'>
    <Counter
      label={text('Label', 'Interactive example')}
      value={number('Value', 0)}
      disabled={boolean('Disabled', false)}
    />
  </StoryContainer>
);

export const All = () => (
  <>
    <Default />
    <Label />
    <Size />
    <Disabled />
    <Value />
  </>
);
