import React from 'react';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Counter } from './Counter';

const description = () => `
---

  ### NOTE:
  This component is available in the following variants:

  - ✅ Standard

With the following attribute status:

  - ✅ **Label**
  - ✅ **Size:** \`Medium\`
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

export const All = () => (
  <>
    <Default />
    <Label />
    <Size />
    <Disabled />
  </>
);
