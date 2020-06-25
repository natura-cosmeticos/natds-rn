# Merging and Publishing

Merging your code means that the features or fix was reviewed and approved by the Design System Team and that a new version is ready to be published!
When you merge you code you are all done here. A new version of the library will be release as soon as the pipeline finishes.

## Before merging your code

Before opening a merging, please be sure that:

- your code was reviewed and approved by the Design System Team developers
- your changes were visually validated by the Design System Team designers
- your changes were approved and the jira issue was moved to waiting release

> Are you a developer from outside Natura organization and does not have an jira issue?
> [Contact us](https://github.com/natura-cosmeticos/natds-rn/issues)

## Merging your code

After all is developed, reviewed and approved, your ready to merge and publish your changes!
This is automatically by our pipeline and you can follow the build status on bitrise.
If you have any issue, please contact the Design System Team

### Pipeline

Our merge workflow will run the following steps:

- code quality (tests, lint, type checking)
- build and publish a new version of the `ios` sample app on the iTunes connect
- build the `android` a new version of sample app and distribute via bitrise install page for review
- build and publish a new version of the storybook documentation on netlify for review (accessible by the url `natds-rn.netlify.app`)
- build and publish a new version of the library on npm (`npm install @naturacosmeticos/natds-rn`)
