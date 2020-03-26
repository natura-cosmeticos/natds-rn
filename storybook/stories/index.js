/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

// eslint-disable-next-line import/extensions
import { Login, Card, Form, FriendExchange } from './ScreenSamples';
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
import { StoryTokenColors } from './StoryTokenColors';
import { StoryTokenSpace } from './StoryTokenSpace';
import { StoryTokenTypography } from './StoryTokenTypography';
import { ThemeNaturaLight } from './StoryTokenThemes/ThemeNaturaLight';
import CenterView from './CenterView';
import { Welcome } from './Welcome';
import iconArrowLeft from '../../lib/assets/icons/ic_arrow_left_white.png';
import { StoryIcon } from './StoryIcon';
import { StoryTabBar } from './StoryTabBar';
import { StoryFAB } from './StoryFAB';
import { StoryAvatar } from './StoryAvatar';

storiesOf('Welcome', module).add('NATDS', () => <Welcome />);

storiesOf('Tokens', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Typography', () => <StoryTokenTypography />)
  .add('Colors', () => <StoryTokenColors />)
  .add('Space', () => <StoryTokenSpace />)
  .add('Theme Natura Light', () => <ThemeNaturaLight />);

storiesOf('Divider', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => <StoryDivider />);

storiesOf('Images', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Icons', () => <StoryNatIcon />)
  .add('Logo', () => <StoryNatLogo />);

storiesOf('Link', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => <StoryNatLink />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => <StoryButton />);

storiesOf('NatTextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
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
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <StoryNatSelectInput type="default" />)
  .add('Error', () => <StoryNatSelectInput type="error" />)
  .add('Disabled', () => <StoryNatSelectInput type="disabled" />);

storiesOf('NatMenuItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => <StoryNatMenuItem />);

storiesOf('NatList', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('List', () => <StoryNatList />)
  .add('Only ListItem', () => <StoryNatListItem />);

storiesOf('NatAppBar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => <StoryNatAppBar />)
  .add('Search', () => <StoryNatAppBarSearch />);

storiesOf('NatCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <StoryNatCard />);

storiesOf('TabBar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => <StoryTabBar />);

storiesOf('FAB', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Round', () => <StoryFAB type="round" />)
  .add('Extended', () => <StoryFAB type="extended" value="extended" />);

storiesOf('Avatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => <StoryAvatar />);

storiesOf('NatButton - OLD', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => <StoryNatButton />);

storiesOf('NatHeader - OLD', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => <StoryNatHeader />);

storiesOf('Icons', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('All', () => <StoryIcon />);

storiesOf('Screen Samples', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Login', () => <Login />)
  .add('Form', () => <Form />)
  .add('Card', () => <Card />)
  .add('FriendExchange', () => <FriendExchange />);
