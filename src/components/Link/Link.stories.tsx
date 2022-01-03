import React from 'react';
import { Alert } from 'react-native';
import { select, text as textKnob } from '@storybook/addon-knobs';

import { StoryContainer, VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Link } from './Link';
import { LinkTypes } from './Link.types';

const description = () => `
---

**NOTE**: This component is available in the following variants:

  - ✅ standard

With the following attribute status:

- **Type:**
    - ✅ \`standard\`
    - ✅ \`underline\`

---
`;

export default {
  component: Link,
  parameters: {
    componentSubtitle: 'The link component allows you to have a pattern for anchor text.',
    docs: {
      extractComponentDescription: description,
    },
  },
  title: 'Components|Link',
};

const onPress = () => {
  Alert.alert('something happened');
};

export const Default = () => (
  <StoryContainer title="Standard">
    <Link onPress={onPress}>Natura Design System</Link>
  </StoryContainer>
);

export const Types = () => (
  <VerticalStoryContainer title='Types'>
    <StoryContainer title="Standard">
      <Link onPress={onPress}>Natura Design System</Link>
    </StoryContainer>
      <StoryContainer title="Underline">
      <Link onPress={onPress} type="underline">Natura Design System</Link>
    </StoryContainer>
  </VerticalStoryContainer>
);

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Link
      onPress={onPress}
      type={select('Type', ['standard', 'underline'], 'standard') as LinkTypes}
    >
      {textKnob('Children', 'Natura Design System')}
    </Link>
  </StoryContainer>
);
