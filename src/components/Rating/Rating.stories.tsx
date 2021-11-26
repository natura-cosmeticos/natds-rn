import React, { useState } from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { RatingValueProps } from './Rating.types';

import { Rating } from './Rating';

const description = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ Counter
  - ✅ Input
  - ✅ Read-Only

With the following attribute status:

  - ✅ Hint (available on input and counter variants)
  - **Size:**
      - ✅ \`Small\` (available on input and read-only variants)
      - ✅ \`Standard\` (available on input and read-only variants)
      - ✅ \`Semi\` (available in all variants)
      - ✅ \`SemiX\` (available in all variants)
      - ✅ \`Medium\` (available only in input variant)
  - **Alignment** (available only in counter variant)
    - ✅ \`left\`
    - ✅ \`right\`
  - ✅ **Disabled** (available only in input variant)
  - ✅ **Rate** (available on input and read-only variants)
  - **Interaction state**:
      - ✅ \`Enabled\`
      - ✅ \`Press\`

- - -
`;

export default {
  component: Rating,
  parameters: {
    componentSubtitle: 'Rating subtitle',
    docs: {
      extractComponentDescription: description,
    },
  },
  title: 'Components|Rating',
};

const variants = {
  counter: 'counter',
  input: 'input',
  readOnly: 'read-only',
};

const sizes = {
  medium: 'medium',
  semi: 'semi',
  semix: 'semiX',
  small: 'small',
  standard: 'standard',
};

const rates = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
};


export const Input = () => {
  const [rating, setRating] = useState<RatingValueProps>(0);

  return (
    <StoryContainer title='Input'>
      <Rating variant='input' rate={rating} label='Placeholder' size='semi' onPress={(value => setRating(value))}/>
    </StoryContainer>
  );
};

export const ReadOnly = () => (
  <StoryContainer title='Read-Only'>
    <Rating variant='read-only' rate={3} size='semi' />
  </StoryContainer>
);

export const Counter = () => (
  <StoryContainer title='Counter'>
    <Rating variant='counter' label='Placeholder' size='semi' />
  </StoryContainer>
);

export const Interactive = () => (
  <StoryContainer title='Interactive'>
    <Rating
      variant={select('Variant', variants, 'read-only') as any}
      label={text('Label', 'Placeholder')}
      size={select('Size', sizes, 'semi') as any}
      align={select('Align', ['left', 'right'], 'left') as any}
      disabled={boolean('Disabled', false)}
      rate={select('Rate', rates, 1) as RatingValueProps}
      onPress={(() => {})}
    />
  </StoryContainer>
);
