/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Storybook from './storybook';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Storybook);
