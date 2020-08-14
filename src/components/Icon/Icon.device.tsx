import { storiesOf } from '@storybook/react-native';
import { all, interactive } from './Icon.stories';

storiesOf('Icon', module)
  .add('all', all)
  .add('interactive', interactive);
