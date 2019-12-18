/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

// eslint-disable-next-line import/extensions
import {
  Login, Card, Form, FriendExchange,
} from './ScreenSamples';
import { StoryNatTextInput } from './StoryNatTextInput';
import { NatGenericCard } from '../../lib/components/NatGenericCard/NatGenericCard';
import { StoryNatCard } from './StoryNatCard';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('NATDS', () => <Welcome showApp={linkTo('Welcome')} />);

storiesOf('NatTextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <StoryNatTextInput type="default" />
  ))
  .add('Error', () => (
    <StoryNatTextInput type="error" />
  ))
  .add('Disabled', () => (
    <StoryNatTextInput type="disabled" />
  ))
  .add('With icon', () => (
    <StoryNatTextInput type="default" icon />
  ));

storiesOf('NatCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <StoryNatCard />
  ));
storiesOf('NatGenericCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <NatGenericCard>
      <StoryNatTextInput type="default" />
    </NatGenericCard>
  ));

storiesOf('Screen Samples', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Login', () => (
    <Login />
  ))
  .add('Form', () => (
    <Form />
  ))
  .add('Card', () => (
    <Card />
  ))
  .add('FriendExchange', () => (
    <FriendExchange />
  ));
