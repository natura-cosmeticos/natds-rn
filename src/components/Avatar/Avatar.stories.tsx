import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { IconName, iconNames } from '@naturacosmeticos/natds-icons';

import { AvatarTypes, AvatarSizes } from './Avatar.types';
// @ts-ignore
import NatAvatar from '../../assets/images/nat_avatar.jpg';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Avatar } from '.';

const description = () => `
---

**NOTE**: This component is available in the following types:

  - ✅ icon
  - ✅ image
  - ✅ letter

With the following attribute status:

- **Size:**
  - ✅ \`standard\`
  - ✅ \`semi\`
  - ✅ \`semiX\`
  - ✅ \`medium\`
  - ✅ \`largeXXX\`
- ✅ **imgSource**  (available only in image type)
- ✅ **text**  (available only in letter type)
- ✅ **iconName** (available only in icon type)

---
`;

export default {
  component: Avatar,
  parameters: {
    componentSubtitle: 'Avatars are used to identify a user.',
    docs: {
      extractComponentDescription: description,
    },
  },
  title: 'Components/Avatar',
};

const textSample = 'Design System';
const iconSample = 'outlined-default-mockup';

const avatarTypes = {
  icon: 'icon',
  image: 'image',
  letter: 'letter',
};

const avatarSizes = {
  largeXXX: 'largeXXX',
  medium: 'medium',
  semi: 'semi',
  semiX: 'semiX',
  standard: 'standard',
};

export const All = () => (
  <>
    <StoryContainer title="Image">
      <Avatar type="image" size="standard" imgSource={NatAvatar}/>
      <Avatar type="image" size="semi" imgSource={NatAvatar}/>
      <Avatar type="image" size="semiX" imgSource={NatAvatar}/>
      <Avatar type="image" size="medium" imgSource={NatAvatar}/>
      <Avatar type="image" size="largeXXX" imgSource={NatAvatar}/>
    </StoryContainer>
    <StoryContainer title="Letter">
      <Avatar type="letter" size="standard" text={textSample}/>
      <Avatar type="letter" size="semi" text={textSample}/>
      <Avatar type="letter" size="semiX" text={textSample}/>
      <Avatar type="letter" size="medium" text={textSample}/>
      <Avatar type="letter" size="largeXXX" text={textSample}/>
    </StoryContainer>
    <StoryContainer title="Icon">
      <Avatar type="icon" size="standard" iconName={iconSample}/>
      <Avatar type="icon" size="semi" iconName={iconSample}/>
      <Avatar type="icon" size="semiX" iconName={iconSample}/>
      <Avatar type="icon" size="medium" iconName={iconSample}/>
      <Avatar type="icon" size="largeXXX" iconName={iconSample}/>
    </StoryContainer>
  </>
);

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Avatar
      type={select('Type', avatarTypes, 'icon') as AvatarTypes}
      text={text('Text', 'Natura Design System')}
      imgSource={text('URL', '')}
      iconName={select('IconName', iconNames as Array<IconName>, 'outlined-default-mockup' as IconName)}
      size={select('Size', avatarSizes, 'medium') as AvatarSizes}
    />
  </StoryContainer>
);
