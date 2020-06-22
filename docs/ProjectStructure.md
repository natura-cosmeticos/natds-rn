# Project structure

## Source code

All code that should be exposed in main entry of the package should be exported in the exported by `src/components/index.ts` file.
New code should be placed in the `src` folder.
Shared code and components should be located under the `src/common` folder.
Token related stories should be located under the `src/tokens` folder.
Public components (the ones the users will import) should be locatend in the `src/components` folder.

> in the `lib` folder there are several legacy components that are being refactored and then, moved to src.
> before add a new component you could check out this folder for reference
> after adding a new component, be sure to delete any files related this component in the `lib` folder and also any related stories at `storybook/stories` folder

## Folder conventions

- Folders should follow component names
- Avoid deep nested folders
- If you and to break your component code, do it by the component domain rather than the file nature (create a Button and a ButtonIcon folder rather than a test and stories one)

## File naming conventions

This projects follows several file name based configurations:

- Component names should follow the Design System stablish name
- Component files should be PacalCased
- Test files should have the src file name plus the `.test` suffix (Button.test.tsx)
- All components should have a `.stories` (for web docs) and a `.device` (for native) file. Read more about in the [Storybook]() section.
- A component may have a optional `.styles` file.
