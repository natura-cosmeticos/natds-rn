# Pull Requests

## Before opening a pull request

Before opening a pull request, please be sure that:

- your code follows our [contributing guidelines](./ContributionGuidelines.md) and that your [code quality checks](./CodeQuality.md) pass locally.
- you tested your code on an ios and android and made sure that both are consistent with our visual guidelines.
- you documented your code. If it is a component, make sure you documented the props and added examples in you sample app and web documentation.

## Opening a pull request

When you open a pull request, be sure to fill the description template provided and add any other additional information that will be helpful for the review process.

Also, a pull request is a trigger for several processes.
The main processes are:

- The pipeline will run our pull request workflow
- The design system team will start the review

### Pipeline

Our pull request pipeline will run the following steps:

- code quality (tests, lint, type checking)
- build and publish the `ios` sample app on the iTunes connect for review
- build the `android` sample app and distribute via bitrise install page for review
- build and publish a test version the storybook documentation on netlify for review (accessible by the url `natds-rn-your-branch-name.netlify.app`)
- build and publish our lib on npm as a pre-release for a integrated test (installable using a tag, `npm install @naturacosmeticos/natds-rn@DSY-<your component issue number>`)
