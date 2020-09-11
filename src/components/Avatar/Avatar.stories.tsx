import React from 'react';
import { View } from 'react-native';
import { select, text } from '@storybook/addon-knobs';
import { Avatar, AvatarTypes } from './Avatar';
import { ContainerRow, TextWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';

export default {
  component: Avatar,
  parameters: {
    componentSubtitle:
      'Avatar',
  },
  title: 'Components/Avatar',
};

const imgSource = 'https://pbs.twimg.com/profile_images/1285932878795333632/Wl95KE_m_400x400.jpg';
const textSample = 'Design System';

const avatarTypes = {
  anonymous: 'anonymous',
  image: 'image',
  letter: 'letter',
};

export const all = () => (
  <View>
    <TextWithTheme>image</TextWithTheme>
    <ContainerRow>
      <Avatar type="image" size="huge" imgSource={{ uri: imgSource }} />
      <Avatar type="image" size="large" imgSource={{ uri: imgSource }}/>
      <Avatar type="image" size="standard" imgSource={{ uri: imgSource }}/>
      <Avatar type="image" size="small" imgSource={{ uri: imgSource }}/>
      <Avatar type="image" size="tiny" imgSource={{ uri: imgSource }}/>
    </ContainerRow>
    <TextWithTheme>letter</TextWithTheme>
    <ContainerRow>
      <Avatar type="letter" size="huge" text={textSample} />
      <Avatar type="letter" size="large" text={textSample}/>
      <Avatar type="letter" size="standard" text={textSample}/>
      <Avatar type="letter" size="small" text={textSample}/>
      <Avatar type="letter" size="tiny" text={textSample}/>
    </ContainerRow>
    <TextWithTheme>anonymous</TextWithTheme>
    <ContainerRow>
      <Avatar type="anonymous" size="huge"/>
      <Avatar type="anonymous" size="large"/>
      <Avatar type="anonymous" size="standard"/>
      <Avatar type="anonymous" size="small"/>
      <Avatar type="anonymous" size="tiny"/>
    </ContainerRow>
  </View>
);

export const interactive = () => (
  <View>
    <TextWithTheme>interactive</TextWithTheme>
    <Avatar
      type={select('Type', avatarTypes, 'letter') as AvatarTypes}
      text={text('Label', 'Natura Design System')}
      size="huge"
    />
  </View>
);
