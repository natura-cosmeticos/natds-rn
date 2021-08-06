/* eslint-disable max-lines */
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

export const Default = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StoryContainer title='Default'>
      <Counter
        onChangeText={() => {}}
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        value={value}
      />
    </StoryContainer>
  );
};

export const Label = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StoryContainer title='With label'>
      <Counter
        onChangeText={() => {}}
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        label="Label"
      />
    </StoryContainer>
  );
};

export const Size = () => {
  const [mediumValue, setMediumValue] = React.useState(0);
  const [semiXValue, setSemiXValue] = React.useState(0);

  return (
    <StoryContainer title='Sizes'>
      <Counter
        onChangeText={() => {}}
        onDecrement={() => setMediumValue(mediumValue - 1)}
        onIncrement={() => setMediumValue(mediumValue + 1)}
        label="medium" size="medium" />
      <Counter
        onChangeText={() => {}}
        onDecrement={() => setSemiXValue(semiXValue - 1)}
        onIncrement={() => setSemiXValue(semiXValue + 1)}
        label="semiX" size="semiX" />
    </StoryContainer>
  );
};
export const Disabled = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StoryContainer title='Disabled'>
      <Counter
        onChangeText={() => {}}
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        disabled
      />
    </StoryContainer>
  );
};

export const Value = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StoryContainer title='Value'>
      <Counter
        onChangeText={() => {}}
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        decrementButtonAccessibilityLabel="decrement button"
        decrementButtonAccessibilityHint="decrement the value of the counter"
        incrementButtonAccessibilityLabel="increment button"
        incrementButtonAccessibilityHint="increment the value of the counter"
        label="you can set an initial value other than 0"
        value={42}
      />
    </StoryContainer>
  );
};

export const Interactive = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StoryContainer title='Interactive'>
      <Counter
        onChangeText={() => {}}
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        label={text('Label', 'Interactive example')}
        value={number('Value', 0)}
        disabled={boolean('Disabled', false)}
      />
    </StoryContainer>
  );
};

export const All = () => (
  <>
    <Default />
    <Label />
    <Size />
    <Disabled />
    <Value />
  </>
);
