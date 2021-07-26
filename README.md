```
███╗   ██╗ █████╗ ████████╗██████╗ ███████╗      ██████╗ ███╗   ██╗
████╗  ██║██╔══██╗╚══██╔══╝██╔══██╗██╔════╝      ██╔══██╗████╗  ██║
██╔██╗ ██║███████║   ██║   ██║  ██║███████╗█████╗██████╔╝██╔██╗ ██║
██║╚██╗██║██╔══██║   ██║   ██║  ██║╚════██║╚════╝██╔══██╗██║╚██╗██║
██║ ╚████║██║  ██║   ██║   ██████╔╝███████║      ██║  ██║██║ ╚████║
╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═════╝ ╚══════╝      ╚═╝  ╚═╝╚═╝  ╚═══╝
```

The Natura Design system for `react-native`

[![Build Status](https://app.bitrise.io/app/2c91a0037aed90db/status.svg?token=BG3viyrEObiVtyL99gVNfQ&branch=master)](https://app.bitrise.io/app/2c91a0037aed90db) [![npm version](https://badge.fury.io/js/%40naturacosmeticos%2Fnatds-rn.svg)](https://badge.fury.io/js/%40naturacosmeticos%2Fnatds-rn) ![npm](https://img.shields.io/npm/dm/@naturacosmeticos/natds-rn?label=npm%20downloads) ![GitHub issues](https://img.shields.io/github/issues/natura-cosmeticos/natds-rn) ![NPM](https://img.shields.io/npm/l/@naturacosmeticos/natds-rn)

:bowtie: [Check out our component docs](https://natds-rn.natura.design/)

You can also install our sample apps in your iOS or Android device, check in with our team to get the latest versions of the sample apps

> For `iOS` you will need to have your device registered as a beta tester.
> you can request access opening an issue or at our MS Teams channel

---

# Get started

Our library is made to be used with `react-native` and because of this, we usume that you already have a few things setup and a `react-native` project up and running.

If that is not the case, we strongly recommend that you follow the [getting started](https://reactnative.dev/docs/getting-started) and [environment setup](https://reactnative.dev/docs/environment-setup) from the official `react-native` docs.

## Prerequisites

- `node>=12`
- `yarn` or `npm`
- a working project with:
  - `react` >=16.8.0
  - `react-native` >=0.59.10
  - `styled-components` >=5.0.0

###### ⚠️ You will need to install the `styled-components` package before the installation, as it is a prerequisite and it will not be installed automatically.

## Installation

To start using the `natds-rn` components on you project, first you will need to install it

```sh
npm install --save @naturacosmeticos/natds-rn

# OR

yarn add @naturacosmeticos/natds-rn
```

**Dependencies**

This package currently depend on `natds-themes`, `natds-icons` and `react-native-gesture-handler`. This packages will be installed automatically with the command above.

*If you have currently installed versions of these packages, be sure to check the installation logs for version incompatibilities*

## Usage

You can edit [this live example](https://snack.expo.io/@arielwb/natds-rn:button) to test component props and theme setup

### Setup the theme

On your application entry point, add the `<ThemeProvider />` and choose the `theme` to be applied to the components

```javascript
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { buildTheme } from '@naturacosmeticos/natds-rn';
import { App } from './app';

export const Main = () => {
  /**
   * The `buildTheme` function accepts two parameters:
   *
   * — brand: the name of the brand to applied
   *    ('natura' | 'theBodyShop' | 'avon' | 'aesop')
   *
   * — mode: the color scheme for the current branch
   *    ('light' | 'dark')
   *
   */
  const theme = buildTheme('natura', 'light');

  /**
   * add your application component inside the `ThemeProvider`
   */
  return (
    <ThemeProvider theme={theme}>
      <App />
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

> For component detailed API and usage examples, check out the page [Using NatDS Icons](https://natds-rn.natura.design/?path=/docs/documentation-icons--page/)
> and the [Icon component documentation](https://natds-rn.natura.design/?path=/docs/components-icon--default/).

# Issues

Have an issue, need help or have a feature request? [create a issue](https://github.com/natura-cosmeticos/natds-rn/issues)

# Contributing

If you want to add a new component or feature to `natds-rn` check our [contributing docs](./CONTRIBUTING.md) :tada: :tada:

# License

ISC
