/* eslint-disable import/no-extraneous-dependencies, max-lines */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import {
  Login, Card, Form, FriendExchange,
} from './ScreenSamples';
import { StoryButton } from './StoryButton';
import { StoryDivider } from './StoryDivider';
import { StoryNatAppBar } from './StoryNatAppBar';
import { StoryNatAppBarSearch } from './StoryNatAppBarSearch';
import { StoryNatButton } from './StoryNatButton';
import { StoryNatCard } from './StoryNatCard';
import { StoryNatHeader } from './StoryNatHeader';
import { StoryNatIcon } from './StoryNatIcon';
import { StoryNatLink } from './StoryNatLink';
import { StoryNatList } from './StoryNatList';
import { StoryNatListItem } from './StoryNatListItem';
import { StoryNatLogo } from './StoryNatLogo';
import { StoryNatMenuItem } from './StoryNatMenuItem';
import { StoryNatSelectInput } from './StoryNatSelectInput';
import { StoryNatTextInput } from './StoryNatTextInput';
import { Colors } from './StoryTokenColors';
import { StoryTokenSpace } from './StoryTokenSpace';
import { StoryTokenTypography } from './StoryTokenTypography';
import { Themes } from './StoryTokenThemes/Themes';
import { Welcome } from './Welcome';
import iconArrowLeft from '../../lib/assets/icons/ic_arrow_left_white.png';
import { StoryIcon } from './StoryIcon';
import { StoryTabBar } from './StoryTabBar';
import { StoryFAB } from './StoryFAB';
import { StoryAvatar } from './StoryAvatar';
import { StoriesWrapper } from './StoryWrapper';


console.disableYellowBox = true; // eslint-disable-line no-console

addDecorator(storyFn => <StoriesWrapper story={storyFn || null} />);

storiesOf('Welcome', module).add('NATDS', () => <Welcome />);

storiesOf('Tokens', module)
  .add('Typography', () => <StoryTokenTypography />)
  .add('Colors', props => <Colors {...props} />)
  .add('Space', () => <StoryTokenSpace />)
  .add('Themes', props => <Themes {...props} />);
storiesOf('Divider', module)
  .add('All', () => <StoryDivider />);
storiesOf('Images', module)
  .add('Icons', () => <StoryNatIcon />)
  .add('Logo', () => <StoryNatLogo />);
storiesOf('Link', module)
  .add('All', () => <StoryNatLink />);
storiesOf('Button', module)
  .add('All', () => <StoryButton />);
storiesOf('NatTextInput', module)
  .add('Default', () => <StoryNatTextInput type="default" />)
  .add('Error', () => <StoryNatTextInput type="error" />)
  .add('Disabled', () => <StoryNatTextInput type="disabled" />)
  .add('With icon - URL', () => (
    <StoryNatTextInput
      type="default"
      icon={{
        uri:
          'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/generic_menu/img_url_tmp_generic_menu_20170822160140.png',
      }}
    />
  ))
  .add('With icon - image', () => (
    <StoryNatTextInput type="default" icon={{ content: iconArrowLeft }} />
  ))
  .add('With icon - SVG', () => (
    <StoryNatTextInput
      type="default"
      icon={{ svg: { name: 'filled-action-check' } }}
    />
  ));
storiesOf('NatSelectInput', module)
  .add('Default', () => <StoryNatSelectInput type="default" />)
  .add('Error', () => <StoryNatSelectInput type="error" />)
  .add('Disabled', () => <StoryNatSelectInput type="disabled" />);
storiesOf('NatMenuItem', module)
  .add('All', () => <StoryNatMenuItem />);
storiesOf('NatList', module)
  .add('List', () => <StoryNatList />)
  .add('Only ListItem', () => <StoryNatListItem />);
storiesOf('NatAppBar', module)
  .add('All', () => <StoryNatAppBar />)
  .add('Search', () => <StoryNatAppBarSearch />);
storiesOf('NatCard', module)
  .add('Default', () => <StoryNatCard />);
storiesOf('TabBar', module)
  .add('All', () => <StoryTabBar />);
storiesOf('FAB', module)
  .add('All', () => <StoryFAB />);
storiesOf('Avatar', module)
  .add('All', () => <StoryAvatar />);
storiesOf('NatButton - OLD', module)
  .add('All', () => <StoryNatButton />);
storiesOf('NatHeader - OLD', module)
  .add('All', () => <StoryNatHeader />);
storiesOf('Icons', module)
  .add('All', () => <StoryIcon />);
storiesOf('Screen Samples', module)
  .add('Login', () => <Login />)
  .add('Form', () => <Form />)
  .add('Card', () => <Card />)
  .add('FriendExchange', () => <FriendExchange />);
