## Usage

You can edit [this live example](https://snack.expo.io/@arielwb/natds-rn:button) to test component props and theme setup

### Setup the theme

On your application entry point, add the `<Provider />` and choose the `theme` to be applied to the components

```javascript
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { buildTheme } from '@naturacosmeticos/natds-rn';
import { App } from './app';

export const Main = () => {
  /**
   * The `buildTheme` function accepts three parameters:
   *
   * brand: the name of the brand to applied ('natura' | 'avon' | 'theBodyShop')
   * mode: the color scheme for the current branch ('light' | 'dark')
   */
  const theme = buildTheme('natura', 'light');

  return (
    <ThemeProvider theme={theme}>
      <App /> // add your application component inside the `ThemeProvider`
    </ThemeProvider>
  );
};
```

### Using the components in your app

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@naturacosmeticos/natds-rn';

export const App = () => {
  const onPress = () => console.log('I am pressed!');

  return (
    <View>
      <Text>A page title</Text>
      <Button onPress={onPress} text="default" type="contained" />
    </View>
  );
};
```

## Icons

We have the icons package `@naturacosmeticos/natds-icons` as a dependency of this library, so you have the font icon files available in your `node_modules` folder after installation.
To use the fonts in your app, you need to add the font icons path to your `react-native.config.js` file:

```javascript
module.exports = {
  assets: [
    'node_modules/@naturacosmeticos/natds-icons/dist/fonts',
  ],
};
```

and then run:

```shell
npx react-native link
```

> For component detailed API and usage examples, check out the [docs](https://natds-rn.netlify.app/).
