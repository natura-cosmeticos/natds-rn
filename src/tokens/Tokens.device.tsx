import { storiesOf } from '@storybook/react-native';
import { themes } from './Themes/Themes.stories';
import { colors } from './Colors/Colors.stories';

storiesOf('Tokens', module)
  .add('Themes', themes)
  .add('Colors', colors);
