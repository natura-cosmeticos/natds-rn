# Natura Design System for `React-Native`

[![Build Status](https://app.bitrise.io/app/2c91a0037aed90db/status.svg?token=BG3viyrEObiVtyL99gVNfQ&branch=master)](https://app.bitrise.io/app/2c91a0037aed90db) [![npm version](https://badge.fury.io/js/%40naturacosmeticos%2Fnatds-rn.svg)](https://badge.fury.io/js/%40naturacosmeticos%2Fnatds-rn) ![npm](https://img.shields.io/npm/dm/@naturacosmeticos/natds-rn?label=npm%20downloads) ![GitHub issues](https://img.shields.io/github/issues/natura-cosmeticos/natds-rn) ![NPM](https://img.shields.io/npm/l/@naturacosmeticos/natds-rn)

```
███╗   ██╗ █████╗ ████████╗██████╗ ███████╗      ██████╗ ███╗   ██╗
████╗  ██║██╔══██╗╚══██╔══╝██╔══██╗██╔════╝      ██╔══██╗████╗  ██║
██╔██╗ ██║███████║   ██║   ██║  ██║███████╗█████╗██████╔╝██╔██╗ ██║
██║╚██╗██║██╔══██║   ██║   ██║  ██║╚════██║╚════╝██╔══██╗██║╚██╗██║
██║ ╚████║██║  ██║   ██║   ██████╔╝███████║      ██║  ██║██║ ╚████║
╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═════╝ ╚══════╝      ╚═╝  ╚═╝╚═╝  ╚═══╝
```

### 🧩 [Check out our component docs](https://natds-rn.netlify.app/) 😎📋

You can also install our sample apps in your iOS or android device, check the [information version page](https://natds-rn.netlify.app/?path=/docs/documentation-version-information--page) to get the latest versions of the sample apps

> For `iOS` you will need to have your device registered as a beta tester.
> You can request access opening an issue or at your slack channel

---

## What for
Library with **React Native** components defined by [Natura Group Design System Team](https://zeroheight.com/28db352be/p/35bf2e-natds--natura-design-system).

## How to use
Our library is made to be used with `react-native` and because of this, we assume you already have a few things setup and a `react-native` project up and running.

If that is not the case, we strongly recommend that you finish the [get started](https://reactnative.dev/docs/getting-started) and [environment setup](https://reactnative.dev/docs/environment-setup) from the official `react-native` docs.

### Prerequisites

- `node`
- `yarn` or `npm`
- a working project with:
  - `react@>=16.8.0`
  - `react-native@>=0.59.10`

### How to add it as a dependency

To start using the `natds-rn` components on you project, first you will need to install it

```sh
npm install --save @naturacosmeticos/natds-rn
```
*or*
```sh
yarn add @naturacosmeticos/natds-rn
```

### Dependencies

This package currently depend on `natds-themes` and `styled-components`. This packages will be installed automatically with the command above.

> If you have currently installed versions of this packages, be sure to check the installation logs for version incompatibilities

### How to setup the theme

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

You can edit [this live example](https://snack.expo.io/@arielwb/natds-rn:button) to test component props and theme setup

## Getting Started
[Start using our lib](./docs/GettingStarted.md)

## How to contribute

If you want to add a new component or feature to `natds-rn` check our [contributing docs](./CONTRIBUTING.md) 🎉🎉

## Issues

Have an issue, need help or have a feature request? [create a issue](https://github.com/natura-cosmeticos/natds-rn/issues)

## License

ISC
