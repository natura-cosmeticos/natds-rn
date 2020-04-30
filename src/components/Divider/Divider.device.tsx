import { storiesOf } from '@storybook/react-native';
import { fullWidth, inset, middle } from './Divider.stories';

storiesOf('Divider', module)
  .add('full width', fullWidth)
  .add('inset ', inset)
  .add('middle ', middle);
