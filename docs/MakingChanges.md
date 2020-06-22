# Writing your contribution

Before your start writting code, recommend that you read your [contributing guidelines](./ContributionGuidelines.md) to help you get started.

## Writting a new component

### Step One: Create your component boilerplate

Create your component boilerplate following de [folder and file conventions](./ProjectStructure.md)

- Check the components name. The component names are decided by the Design System team and are the same for all the platforms. Its important to follow the component name of your jira issue. If you have any doubts, please contact us :)
- Create a new folder for your component in the `src/components` folder
- Create a `.test.tsx` file and write your first test
- Create a file for your component and write make the test pass

### Step Two: Create your component storybook files

#### About Storybook

We use storybook to write stories for our native sample apps (ios and android) and also for the web docs.
Unfortunately, some funcionality is only available to the web version and not the native.
Because of this, we have to separate our native stories from our web stories, and this is done by the file names

`.device` files are for the native sample apps

`.stories` files are loaded in the web docs

To prevent duplicating stories on the docs and native, we simply import our web stories into the `.device` files.
You can view examples in the [Button](../src/components/Button/) and [Dialog](../src/components/Dialog/) folder.

- Create a `.stories` file and write [your component stories](https://storybook.js.org/docs/basics/writing-stories/)
- Create a `.device` file import your stories

> This is needed because storybook native does not support [CSF](https://storybook.js.org/docs/formats/component-story-format/) style imports, only the storiesOf api
> read more: https://storybook.js.org/docs/guides/guide-react-native/

### Step Three: View your changes

Open your device or simulator and [run the app](./Instalation.md#check-your-instalation)

### Step Four: Add documentation to your component

As mentioned earlier, `.stories` represent your web docs file and will render like [this](https://natds-rn.netlify.app/?path=/docs/components-button--all)
The information from the example above comes from some places:

**The global story config**

In the `.stories` file, place a default export

```javascript
export default {
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons allow users to take actions, and make choices, with a single tap.',
  },
  title: 'Components|Button',
};
```

**The exported stories on the `.device` file**

```javascript
// this shows up in the docs
export const story = () => (<Text>I'm a text</Text>);

// this does not
const helperStory = () => (<Text>I'm also a text</Text>);

```

**Comments on your code**

Write interfaces for your components props and document what they do. Describe options that accepts.

```typescript
export interface ButtonProps {
  /**
   * The button text content
   */
  text: string
  /**
   * Button variants `contained` | `outlined` | `text`
   */
  type?: ButtonTypes
}
```
