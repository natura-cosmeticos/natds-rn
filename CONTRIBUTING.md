# Contributing

## Steps

Follow the steps bellow to add a new feature, make an improvement or fix a bug.
(Make sure to read the guides on each step as they contain important additional information)

- Make sure your development environment meets the [prerequisites]()
- [Install]() the project on your machine
- Open a branch and [make your changes]()
- [Check your]() code locally
- Submit a [Pull Request]() for validation
- [Merge]() your contribuition

## Prerequisites

This docs assume you have some knoledge and made the setup of:

- git
- node
- yarn
- react-native ([environment-setup](https://reactnative.dev/docs/environment-setup))
- xcode/android studio

## Instalation

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

## Preview your changes

We use `storybook` to build our native samples for ios and android, and also the [web docs](https://natds-rn.netlify.app/).

To preview your changes on the device/simulator run:

```shell
  yarn ios //or
  yarn android
```

To preview your documentarion changes on the browser run:

```shell
  yarn storybook:web
```

## Contribution guidelines

This projects use some information (file names, commit messages) to automate several tasks.
Because of this, some guidelines must be followed.

### Project structure

#### Source code

All code that should be exposed in main entry of the package should be exported in the exported by `src/components/index.ts` file.
New code should be placed in the `src` folder.
Shared code and components should be located under the `src/common` folder.
Token related stories should be located under the `src/tokens` folder.
Public components (the ones the users will import) should be locatend in the `src/components` folder.

> in the `lib` folder there are several legacy components that are being refactored and then, moved to src.
> before add a new component you could check out this folder for reference
> after adding a new component, be sure to delete any files related this component in the `lib` folder and also any related stories at `storybook/stories` folder

#### Folder conventions

- Folders should follow component names
- Avoid deep nested folders
- If you and to break your component code, do it by the component domain rather than the file nature (create a Button and a ButtonIcon folder rather than a test and stories one)

#### File naming conventions

This projects follows several file name based configurations:

- Component names should follow the Design System stablish name
- Component files should be PacalCased
- Test files should have the src file name plus the `.test` suffix (Button.test.tsx)
- All components should have a `.stories` (for web docs) and a `.device` (for native) file. Read more about in the [Storybook]() section.
- A component may have a optional `.styles` file.

### Commits

This project follows the [conventional commits](https://www.conventionalcommits.org) guidelines to automate our version menagement and changelog generation.
A precommit hook runs [commit lint](https://commitlint.js.org/) before every commit to ensure commit consistency.
If you need some help commiting, try running `yarn commit` to commit using the [commitizen](https://github.com/commitizen/cz-cli) tool.

> Be sure to check out those links for more information on how conventional commits guidelines and tools

#### Commit requirements

- A commit message should follow the conventional commits guidelines
- A commit message should include an issue number (DSY-*)

#### Commit Examples

```sh
docs: update readme, move contributing section to new file
DSY-778


chore(dialog): add max-width and actionsAlignment prop

DSY-793


feat(button): add button component

co-author: @somebody
DSY-766
```
