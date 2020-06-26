# Installation

Clone or fork the project

```shell
git clone https://github.com/natura-cosmeticos/natds-rn.git
```

Install dependencies

```shell
yarn install
cd ios
pod install // if you intend to run on an ios device/simulator
```

## Check your Installation

We use `storybook` to build our native samples for ios and android, and also the [web docs](https://natds-rn.netlify.app/).

To preview your changes on the device/simulator run:

```shell
yarn ios //or
yarn android
```

To preview your documentation changes on the browser run:

```shell
yarn storybook:web
```
