# Merging and Publishing

Merging your code means that the features or fix was reviewed and approved by the Design System Team and that a new version is ready to be published!
When you merge your code, you are all done here. A new version of the library will be released as soon as the pipeline finishes.

## Before merging your code

Before merging, please be sure that:

- your code was reviewed and approved by the Design System Team developers
- your changes were visually validated by the Design System Team designers
- your changes were approved and the jira issue was updated with the names of the approvers

> Are you a developer from outside Natura organization and does not have a jira issue?
> [Contact us](https://github.com/natura-cosmeticos/natds-rn/issues)

## Merging your code

After all is developed, reviewed and approved, you are ready to merge and publish your changes!
This is automatically done by our pipeline and you can follow the build status on [Bitrise](https://app.bitrise.io/app/2c91a0037aed90db).
If you have any issues, please contact the Design System Team

### Pipeline

Our merge workflow will run the following steps:

- code quality (tests, lint, type checking)
- build and publish a new version of the `ios` sample app on TestFlight
- build a new version of the `android` sample app and distribute via bitrise install page for review
- build and publish a new version of the storybook documentation for review (accessible by the url `https://natds-rn.natura.design`)
- build and publish a new version of the library on [NPM](https://www.npmjs.com/package/@naturacosmeticos/natds-rn)
