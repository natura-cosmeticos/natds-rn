import { storiesOf } from '@storybook/react-native';
import { colors } from './Colors/Colors.stories';
import { typography } from './Typography/Typography.stories';

storiesOf('Tokens', module)
  .add('Colors', colors)
  .add('Typography', typography);
