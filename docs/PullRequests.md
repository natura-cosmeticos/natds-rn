 # Pull Requests

## Before opening a pull request

Before opening a pull request, please be sure that:

- your code follows our [contributing guidelines](./ContributionGuidelines.md) and that your [code quality checks](./CodeQuality.md) pass locally.
- you tested your code on an ios and android and made sure that both are consistent with [our visual guidelines](https://ds.natura.design/28db352be/p/45fbb3-index).
- you documented your code. If it is a component, make sure you documented the props and added examples in you sample app and web documentation. Also check that the documentation is rendering and legible on storybook.

## Opening a pull request

When you open a pull request, be sure to fill the description template provided and add any other additional information that will be helpful for the review process.

Also, a pull request is a trigger for several processes.
The main processes are:

- The pipeline will run our pull request workflow
- Make a review session with the Design System Team to ensure that your code is in accordance with the documentation and that the visual guidelines are followed


### Pipeline

Our pull request pipeline will run the following steps:

- code quality (tests, lint, type checking)
- build and publish a new version of the `ios` sample app on TestFlight
- build a new version of the `android` sample app and distribute via bitrise install page for review
- build and publish a test version of the storybook documentation for review (accessible by the url `https://natds-rn.natura.design/[_your_branch_name_]/index.html`)
- build and publish a pre-release version of the library on [NPM](https://www.npmjs.com/package/@naturacosmeticos/natds-rn) for an integrated test (installable using the version that will be updated on your `package.json` file after the pipeline finishes). Ex.:
    ```sh
    npm install --save @naturacosmeticos/natds-rn@7.2.0-DSY-1216.0

    # OR

    yarn add @naturacosmeticos/natds-rn@7.2.0-DSY-1216.0
    ```
