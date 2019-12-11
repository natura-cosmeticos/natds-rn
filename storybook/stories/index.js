import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// eslint-disable-next-line import/extensions
import { Login, Card, Form, FriendExchange } from './ScreenSamples';
import { StoryNatTextInput } from './StoryNatTextInput';
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
    <StoryNatTextInput type="default" icon={true} />
  ));

  storiesOf('NatCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <StoryNatCard />
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
  )).add('FriendExchange', () => (
    <FriendExchange />
  ));
