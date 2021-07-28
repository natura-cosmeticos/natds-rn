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
  <StoryContainer title='Label'>
    <Counter />
  </StoryContainer>
);

export const Disabled = () => (
  <StoryContainer title='Disabled'>
    <Counter />
  </StoryContainer>
);

export const All = () => (
  <>
    <Default />
    <Label />
    <Disabled />
  </>
);
