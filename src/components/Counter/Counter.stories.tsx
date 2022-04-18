/* eslint-disable max-lines */
import React from 'react'
import { boolean, number, text } from '@storybook/addon-knobs'
import { Text } from 'react-native'
import { StoryContainer, StoryWrapper, VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer'
import { Counter } from './Counter'

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
`

export default {
  component: Counter,
  parameters: {
    componentSubtitle: 'A Counter reduces input effort for fields with values that deviate little from the default by allowing users to increase or decrease the number in a single button press.',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Counter'
}

export const Default = () => {
  const [value, setValue] = React.useState(0)

  return (
    <StoryContainer title="Default">
      <Counter
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        value={value}
      />
    </StoryContainer>
  )
}

export const Variants = () => {
  const [standard, setStandard] = React.useState(0)
  const [withLabel, setWithLabel] = React.useState(0)
  const [range, setRange] = React.useState(42)

  return (
    <StoryWrapper title="Variants">
      <StoryContainer title="Standard">
        <Counter
          onDecrement={() => setStandard(standard - 1)}
          onIncrement={() => setStandard(standard + 1)}
          value={standard}
        />
      </StoryContainer>
      <StoryContainer title="With label">
        <Counter
          decrementButtonAccessibilityHint="decrement the value of the counter"
          decrementButtonAccessibilityLabel="decrement button"
          incrementButtonAccessibilityHint="increment the value of the counter"
          incrementButtonAccessibilityLabel="increment button"
          inputAccessibilityHint="you can set the quantity you want editing this field"
          inputAccessibilityLabel={`you have ${withLabel} items in your shopping cart`}
          onDecrement={() => setWithLabel(withLabel - 1)}
          onIncrement={() => setWithLabel(withLabel + 1)}
          label="Label"
          value={withLabel}
        />
      </StoryContainer>
      <StoryContainer title="Disabled">
        <Counter
          decrementButtonAccessibilityHint="decrement the value of the counter"
          decrementButtonAccessibilityLabel="decrement button"
          incrementButtonAccessibilityHint="increment the value of the counter"
          incrementButtonAccessibilityLabel="increment button"
          inputAccessibilityHint="you can set the quantity you want editing this field"
          inputAccessibilityLabel={`you have ${0} items in your shopping cart`}
          onDecrement={() => ({})}
          onIncrement={() => ({})}
          value={0}
          disabled
        />
      </StoryContainer>
      <VerticalStoryContainer title="Range">
        <Text style={{ paddingBottom: 16 }}>
          You can set a minimum, maximum and initial value for the component
        </Text>
        <Counter
          decrementButtonAccessibilityHint="decrement the value of the counter"
          decrementButtonAccessibilityLabel="decrement button"
          incrementButtonAccessibilityHint="increment the value of the counter"
          incrementButtonAccessibilityLabel="increment button"
          inputAccessibilityHint="this shows the quantity of items you have in your shopping cart"
          inputAccessibilityLabel={`you have ${range} items in your shopping cart`}
          onDecrement={() => setRange(range - 1)}
          onIncrement={() => setRange(range + 1)}
          maxValue={45}
          minValue={40}
          value={range}
        />
      </VerticalStoryContainer>
    </StoryWrapper>
  )
}

export const Sizes = () => {
  const [mediumValue, setMediumValue] = React.useState(0)
  const [semiXValue, setSemiXValue] = React.useState(0)

  return (
    <StoryWrapper title="Sizes">
      <StoryContainer title="Medium">
        <Counter
          decrementButtonAccessibilityHint="decrement the value of the counter"
          decrementButtonAccessibilityLabel="decrement button"
          incrementButtonAccessibilityHint="increment the value of the counter"
          incrementButtonAccessibilityLabel="increment button"
          inputAccessibilityHint="you can set the quantity you want editing this field"
          inputAccessibilityLabel={`you have ${mediumValue} items in your shopping cart`}
          onDecrement={() => setMediumValue(mediumValue - 1)}
          onIncrement={() => setMediumValue(mediumValue + 1)}
          label="Label"
          size="medium"
          value={mediumValue}
        />
      </StoryContainer>
      <StoryContainer title="SemiX">
        <Counter
          decrementButtonAccessibilityHint="decrement the value of the counter"
          decrementButtonAccessibilityLabel="decrement button"
          incrementButtonAccessibilityHint="increment the value of the counter"
          incrementButtonAccessibilityLabel="increment button"
          inputAccessibilityHint="you can set the quantity you want editing this field"
          inputAccessibilityLabel={`you have ${semiXValue} items in your shopping cart`}
          onDecrement={() => setSemiXValue(semiXValue - 1)}
          onIncrement={() => setSemiXValue(semiXValue + 1)}
          label="Label"
          size="semiX"
          value={semiXValue}
        />
      </StoryContainer>
    </StoryWrapper>
  )
}

export const Interactive = () => {
  const [value, setValue] = React.useState(0)

  return (
    <StoryContainer title="Interactive">
      <Counter
        decrementButtonAccessibilityHint={text('Decrement button Accessibility Hint', 'A hint about what the decrement button does')}
        decrementButtonAccessibilityLabel={text('Decrement button Accessibility Label', 'Description of what the decrement button does')}
        incrementButtonAccessibilityHint={text('Increment button Accessibility Hint', 'A hint about what the increment button does')}
        incrementButtonAccessibilityLabel={text('Increment button Accessibility Label', 'Description of what the increment button does')}
        inputAccessibilityHint={text('Input Accessibility Hint', 'A hint about what the input does')}
        inputAccessibilityLabel={text('Input Accessibility Label', 'Description of what the input does')}
        disabled={boolean('Disabled', false)}
        label={text('Label', 'Interactive example')}
        maxValue={number('Maximum value for the counter', 99)}
        minValue={number('Minimum value for the counter', 0)}
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
        value={value}
      />
    </StoryContainer>
  )
}
