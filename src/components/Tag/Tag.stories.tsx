/* eslint-disable max-lines */
import { select, text } from '@storybook/addon-knobs';
import React from 'react';

import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Tag } from './Tag';
import { TagColors, TagPositions, TagSizes } from './Tag.types';

const description = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ Standard

With the following attribute status:

  - **Attributes:**
    - ✅ **Text:**
    - **Size:**
      - ✅ \`Standard\`
      - ✅ \`Small\`
    - **Color:**
      - ✅ \`Primary\`
      - ✅ \`Secondary\`
      - ✅ \`Alert\`
      - ✅ \`Success\`
      - ✅ \`Link\`
      - ✅ \`Warining\`
    - **Border Position:**
      - ✅ \`Default\`
      - ✅ \`Left\`
      - ✅ \`Right\`

- - -
`;

const tagColors = [
  'alert',
  'link',
  'primary',
  'secondary',
  'success',
  'warning',
];

export default {
  component: Tag,
  parameters: {
    componentSubtitle: 'A tag labels UI objects for quick recognition and navigation.',
    docs: {
      extractComponentDescription: description,
    },
  },
  title: 'Components|Tag',
};

export const Default = () => (
  <StoryContainer title='Standard'>
    <Tag text='Lorem Ipsum' />
  </StoryContainer>
);

export const Borders = () => (
  <>
    <StoryContainer title='Default'>
      <Tag text='Lorem Ipsum' borderPosition='default' />
    </StoryContainer>
    <StoryContainer title='Right'>
      <Tag text='Lorem Ipsum' borderPosition='right' />
    </StoryContainer>
    <StoryContainer title='Left'>
      <Tag text='Lorem Ipsum' borderPosition='left' />
    </StoryContainer>
  </>
);

export const Sizes = () => (
  <>
    <StoryContainer title='Standard'>
      <Tag text='Lorem Ipsum' size="standard" />
    </StoryContainer>
    <StoryContainer title='Small'>
      <Tag text='Lorem Ipsum' size="small" />
    </StoryContainer>
  </>
);

export const Colors = () => (
  <>
    <StoryContainer title='Primary'>
      <Tag text='Lorem Ipsum' color='primary' />
    </StoryContainer>
    <StoryContainer title='Secondary'>
      <Tag text='Lorem Ipsum' color='secondary' />
    </StoryContainer>
    <StoryContainer title='Alert'>
      <Tag text='Lorem Ipsum' color='alert' />
    </StoryContainer>
    <StoryContainer title='Warning'>
      <Tag text='Lorem Ipsum' color='warning' />
    </StoryContainer>
    <StoryContainer title='Success'>
      <Tag text='Lorem Ipsum' color='success' />
    </StoryContainer>
    <StoryContainer title='Link'>
      <Tag text='Lorem Ipsum' color='link' />
    </StoryContainer>
  </>
);

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Tag
      text={text('Text', 'Lorem Ipsum')}
      size={select('Size', ['small', 'standard'], 'small') as TagSizes}
      color={select('Color', tagColors, 'primary') as TagColors}
      borderPosition={select('Border Position', ['default', 'left', 'right'], 'default') as TagPositions}
    />
  </StoryContainer>
);
