import React, { useState } from 'react'
import { boolean, text, select } from '@storybook/addon-knobs'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import {
  RatingAlignProps, RatingValueProps, RatingVarianstProps
} from './Rating.types'

import { Rating } from './Rating'

const description = () => `
> Rating is used to allow users to assign ratings or reviews to an item.

## Properties
| Property                | Values                                         |    Status    |
|---                      |                                             ---|           ---|
| **variant**             | counter, input, read-Only                      | ✅ Available |
| **accessibilityHint**   | string                                         | ✅ Available |
| **accessibilityLabel**  | string                                         | ✅ Available |
| **label**               | string                                         | ✅ Available |
| **size**                | semi, semiX, small, standard, medium           | ✅ Available |
| **align**               | left, right                                    | ✅ Available |
| **disabled**            | true/false                                     | ✅ Available |
| **onPress**             | function                                       | ✅ Available |
| **rate**                | number                                         | ✅ Available |
## Technical Usages Examples
`

export default {
  component: Rating,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Rating'
}

const variants = {
  counter: 'counter',
  input: 'input',
  readOnly: 'read-only'
}

const sizes = {
  medium: 'medium',
  semi: 'semi',
  semix: 'semiX',
  small: 'small',
  standard: 'standard'
}

const rates = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5
}

export const Default = () => {
  const [rating, setRating] = useState<RatingValueProps | number>(0)

  return (
    <StoryContainer title="Standard">
      <Rating variant="input" rate={rating} label="Placeholder" size="semi" onPress={((value) => setRating(value))} />
    </StoryContainer>
  )
}

export const Variants = () => {
  const [rating, setRating] = useState<RatingValueProps | number>(0)

  return (
    <StoryWrapper title="Variants">
      <StoryContainer title="Input">
        <Rating variant="input" rate={rating} label="Placeholder" size="semi" onPress={((value) => setRating(value))} />
      </StoryContainer>

      <StoryContainer title="Read-Only">
        <Rating variant="read-only" rate={3} size="semi" />
      </StoryContainer>

      <StoryContainer title="Counter">
        <Rating variant="counter" label="Placeholder" size="semi" />
      </StoryContainer>
    </StoryWrapper>
  )
}

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Rating
      variant={select('Variant', variants, 'read-only') as RatingVarianstProps}
      label={text('Label', 'Placeholder')}
      size={select('Size', sizes, 'semi') as never}
      align={select('Align', ['left', 'right'], 'left') as RatingAlignProps}
      disabled={boolean('Disabled', false)}
      rate={select('Rate', rates, 1) as RatingValueProps}
      onPress={(() => ({}))}
    />
  </StoryContainer>
)
