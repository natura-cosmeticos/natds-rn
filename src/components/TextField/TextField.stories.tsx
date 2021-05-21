/* eslint-disable max-lines */
import React from 'react';
import { View } from 'react-native';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { TextField } from './TextField';

const description = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ Standard

With the following attribute status:

  - **Size:**
    - ✅ \`Medium\`
    - ✅ \`MediumX\`
  - **Style:**
    - ✅ \`Outlined\`
  - **States:**
    - ✅ \`Enabled\`
    - ✅ \`Active\`
    - ✅ \`Filled\`
  - **Feedback:**
    - ✅ \`Error\`
    - ✅ \`Success\`
  - ✅ **Required**
  - ✅ **Disabled**
  - ✅ **Read Only**
  - ✅ **Helper Text**
  - **Action:**
    - ✅ \`None\`
    - ✅ \`Icon Button\`
    - ✅ \`Image\`
  - **Type:**
    - ✅ \`Text\`
    - ✅ \`Password\`
    - ✅ \`Multi-line\`
    - ✅ \`Number\`

- - -
`;

export default {
  component: TextField,
  parameters: {
    componentSubtitle: 'Story Teste',
    docs: {
      extractComponentDescription: description,
    },
  },
  title: 'Components|TextField',
};

export const Default = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <StoryContainer title='Default'>
        <TextField
          helperText="Helper text"
          label="Label"
          placeholder="Placeholder"
          onChangeText={text => setValue(text)}
          value={value}
        />
      </StoryContainer>
    </>
  );
};

export const Sizes = () => (
  <>
    <StoryContainer title='Sizes' style={{ flexDirection: 'column' }}>
        <TextField
          helperText="Helper text"
          label="Label"
          placeholder="Placeholder"
          value="This is the default size: MediumX"
        />
      <View style={{ marginBottom: 8 }}></View>
      <TextField
        helperText="Helper text"
        label="Label"
        placeholder="Placeholder"
        size='medium'
        value="This is the size: Medium"
      />
    </StoryContainer>
  </>
);

export const States = () => (
  <>
    <StoryContainer title='States' style={{ flexDirection: 'column' }}>
        <TextField
          helperText="Helper text"
          label="Label"
          placeholder="This field is not filled yet"
        />
      <View style={{ marginBottom: 8 }}></View>
      <TextField
        helperText="Helper text"
        label="Label"
        placeholder="Placeholder"
        value="This field has already been filled"
      />
    </StoryContainer>
  </>
);

export const Feedback = () => (
  <>
    <StoryContainer title='Feedback' style={{ flexDirection: 'column' }}>
        <TextField
          helperText="Helper text"
          label="Label"
          placeholder="Placeholder"
          feedback='error'
          value="This value does not fit the field's validation rules"
        />
      <View style={{ marginBottom: 8 }}></View>
      <TextField
        helperText="Helper text"
        label="Label"
        placeholder="Placeholder"
        feedback='success'
        value="This value fits the field's validation rules"
      />
    </StoryContainer>
  </>
);

export const Required = () => (
  <>
    <StoryContainer title='Required'>
      <TextField
        helperText="Helper text"
        label="Label"
        placeholder="Placeholder"
        required
        value="This field is required to move on to the next step"
      />
    </StoryContainer>
  </>
);

export const Disabled = () => (
  <>
    <StoryContainer title='Disabled'>
      <TextField
        disabled
        helperText="Helper text"
        label="Label"
        placeholder="Placeholder"
        value="This field is disabled, the user can't fill it"
      />
    </StoryContainer>
  </>
);

export const Readonly = () => (
  <>
    <StoryContainer title='Read Only'>
      <TextField
        helperText="Helper text"
        label="Label"
        placeholder="Placeholder"
        value="This content is read only, the user can't change it"
        readonly
      />
    </StoryContainer>
  </>
);

export const Action = () => {
  const initialValue = '';
  const [actionIconValue, setActionIconValue] = React.useState(initialValue);
  const [actionImageValue, setActionImageValue] = React.useState(initialValue);

  return (
    <>
      <StoryContainer title='Action' style={{ flexDirection: 'column' }}>
        <TextField
          action='icon'
          helperText="Helper text"
          label="Label"
          placeholder="Placeholder"
          onChangeText={text => setActionIconValue(text)}
          value={actionIconValue}
        />
        <View style={{ marginBottom: 8 }}></View>
        <TextField
          action='image'
          helperText="Helper text"
          label="Label"
          placeholder="Placeholder"
          onChangeText={text => setActionImageValue(text)}
          value={actionImageValue}
        />
      </StoryContainer>
    </>
  );
};

export const All = () => (
  <>
    <Action />
    <Default />
    <Sizes />
    <States />
    <Feedback/>
    <Required />
    <Disabled />
    <Readonly />
  </>
);
