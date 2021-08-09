/* eslint-disable max-lines */
import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { StoryContainer, VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Counter } from './Counter';

const description = () => `
---

  ### NOTE:
  This component is available in the following variants:

  - ✅ Standard

With the following attribute status:

  - ✅ **Label**
  - **Size:**
    - ✅ \`Medium\`
    - ✅ \`SemiX\`
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
        decrementButtonAccessibilityHint="decrement the value of the counter"
        decrementButtonAccessibilityLabel="decrement button"
        incrementButtonAccessibilityHint="increment the value of the counter"
        incrementButtonAccessibilityLabel="increment button"
        inputAccessibilityHint="you can set the quantity you want editing this field"
        inputAccessibilityLabel={`you have ${value} items in your shopping cart`}
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        label="Label"
        value={value}
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
        decrementButtonAccessibilityHint="decrement the value of the counter"
        decrementButtonAccessibilityLabel="decrement button"
        incrementButtonAccessibilityHint="increment the value of the counter"
        incrementButtonAccessibilityLabel="increment button"
        inputAccessibilityHint="you can set the quantity you want editing this field"
        inputAccessibilityLabel={`you have ${mediumValue} items in your shopping cart`}
        onDecrement={() => setMediumValue(mediumValue - 1)}
        onIncrement={() => setMediumValue(mediumValue + 1)}
        label="medium" size="medium"
        value={mediumValue}
      />
      <Counter
        decrementButtonAccessibilityHint="decrement the value of the counter"
        decrementButtonAccessibilityLabel="decrement button"
        incrementButtonAccessibilityHint="increment the value of the counter"
        incrementButtonAccessibilityLabel="increment button"
        inputAccessibilityHint="you can set the quantity you want editing this field"
        inputAccessibilityLabel={`you have ${semiXValue} items in your shopping cart`}
        onDecrement={() => setSemiXValue(semiXValue - 1)}
        onIncrement={() => setSemiXValue(semiXValue + 1)}
        label="semiX" size="semiX"
        value={semiXValue}
      />
    </StoryContainer>
  );
};
export const Disabled = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StoryContainer title='Disabled'>
      <Counter
        decrementButtonAccessibilityHint="decrement the value of the counter"
        decrementButtonAccessibilityLabel="decrement button"
        incrementButtonAccessibilityHint="increment the value of the counter"
        incrementButtonAccessibilityLabel="increment button"
        inputAccessibilityHint="you can set the quantity you want editing this field"
        inputAccessibilityLabel={`you have ${value} items in your shopping cart`}
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        value={value}
        disabled
      />
    </StoryContainer>
  );
};

export const Value = () => {
  const initialValue = 42;
  const [value, setValue] = React.useState(initialValue);

  return (
    <VerticalStoryContainer title='Value'>
      <Text style={{ paddingBottom: 16 }}>
        You can set a minimum, maximum and initial value for the component
      </Text>
      <Counter
        decrementButtonAccessibilityHint="decrement the value of the counter"
        decrementButtonAccessibilityLabel="decrement button"
        incrementButtonAccessibilityHint="increment the value of the counter"
        incrementButtonAccessibilityLabel="increment button"
        inputAccessibilityHint="this shows the quantity of items you have in your shopping cart"
        inputAccessibilityLabel={`you have ${value} items in your shopping cart`}
        label="Fixed range of value"
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        maxValue={45}
        minValue={40}
        value={value}
        />
    </VerticalStoryContainer>
  );
};

export const Interactive = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StoryContainer title='Interactive'>
      <Counter
        decrementButtonAccessibilityHint={text('Decrement button Accessibility Hint', 'A hint about what the decrement button does')}
        decrementButtonAccessibilityLabel={text('Decrement button Accessibility Label', 'Description of what the decrement button does')}
        incrementButtonAccessibilityHint={text('Increment button Accessibility Hint', 'A hint about what the increment button does')}
        incrementButtonAccessibilityLabel={text('Increment button Accessibility Label', 'Description of what the increment button does')}
        inputAccessibilityHint={text('Input Accessibility Hint', 'A hint about what the input does')}
        inputAccessibilityLabel={text('Input Accessibility Label', 'Description of what the input does')}
        disableDecrementButton={boolean('Disable Decrement Button', false)}
        disableIncrementButton={boolean('Disable Increment Button', false)}
        disabled={boolean('Disabled', false)}
        label={text('Label', 'Interactive example')}
        maxValue={number('Maximum value for the counter', 99)}
        minValue={number('Minimum value for the counter', 0)}
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        value={value}
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
