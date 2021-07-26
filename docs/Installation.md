# Installation

Clone or fork the project

```sh
git clone https://github.com/natura-cosmeticos/natds-rn.git
```

### Install dependencies

```sh
yarn install
```

### If you intend to run on an iOS device/simulator
```sh
cd ios
pod install
```

## Check your Installation

We use `storybook` to build our native samples for ios and android, and also the [web docs](https://natds-rn.natura.design/).

To preview your changes on the device/simulator run:

```sh
yarn ios

# OR

yarn android
```

To preview your documentation changes on the browser run:

```sh
yarn storybook:web
```
