import { storiesOf } from '@storybook/react-native';
import { contained, outlined } from './Button.stories';

storiesOf('Button', module)
  .add('contained', contained)
  .add('outlined', outlined);
