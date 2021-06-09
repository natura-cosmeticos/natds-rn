/* eslint-disable max-lines */
import React from 'react';
import { ImageSourcePropType, View } from 'react-native';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { TextField } from './TextField';
// @ts-ignore
import placeholderImage from '../../assets/images/textfield_image_arealimit.png';

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
    componentSubtitle: 'TextField let users enter and edit text.',
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
          onChangeText={text => setValue(text)}
          placeholder="Placeholder"
          value={value}
        />
      </StoryContainer>
    </>
  );
};

export const Sizes = () => {
  const [mediumXValue, setMediumXValue] = React.useState('This is the default size: MediumX');
  const [mediumValue, setMediumValue] = React.useState('This is the size: Medium');

  return (
  <>
    <StoryContainer title='Sizes' style={{ flexDirection: 'column' }}>
      <TextField
        helperText="Helper text"
        label="Label"
        onChangeText={text => setMediumXValue(text)}
        placeholder="Placeholder"
        value={mediumXValue}
      />
      <View style={{ marginBottom: 8 }}></View>
      <TextField
        helperText="Helper text"
        label="Label"
        onChangeText={text => setMediumValue(text)}
        placeholder="Placeholder"
        size='medium'
        value={mediumValue}
      />
    </StoryContainer>
  </>
  );
};

export const States = () => {
  const [blankValue, setBlankValue] = React.useState('');
  const [filledValue, setFilledValue] = React.useState('This field has already been filled');

  return (
    <>
      <StoryContainer title='States' style={{ flexDirection: 'column' }}>
          <TextField
            helperText="Helper text"
            label="Label"
            onChangeText={text => setBlankValue(text)}
            placeholder="This field is not filled yet"
            value={blankValue}
          />
        <View style={{ marginBottom: 8 }}></View>
        <TextField
          helperText="Helper text"
          label="Label"
          onChangeText={text => setFilledValue(text)}
          placeholder="Placeholder"
          value={filledValue}
        />
      </StoryContainer>
    </>
  );
};

export const Feedback = () => {
  const [errorValue, setErrorValue] = React.useState('This value does not fit the field\'s validation rules');
  const [successValue, setSuccessValue] = React.useState('This value fits the field\'s validation rules');

  return (
    <>
      <StoryContainer title='Feedback' style={{ flexDirection: 'column' }}>
          <TextField
            feedback='error'
            helperText="Helper text"
            label="Label"
            onChangeText={text => setErrorValue(text)}
            placeholder="Placeholder"
            value={errorValue}
          />
        <View style={{ marginBottom: 8 }}></View>
        <TextField
          feedback='success'
          helperText="Helper text"
          label="Label"
          onChangeText={text => setSuccessValue(text)}
          placeholder="Placeholder"
          value={successValue}
        />
      </StoryContainer>
    </>
  );
};

export const Required = () => {
  const [value, setValue] = React.useState('This field is required to move on to the next step');

  return (
    <>
      <StoryContainer title='Required'>
        <TextField
          helperText="Helper text"
          label="Label"
          onChangeText={text => setValue(text)}
          placeholder="Placeholder"
          required
          value={value}
        />
      </StoryContainer>
    </>
  );
};

export const Disabled = () => {
  const [value, setValue] = React.useState('This field is disabled, the user can\'t fill it');

  return (
    <>
      <StoryContainer title='Disabled'>
        <TextField
          disabled
          helperText="Helper text"
          label="Label"
          onChangeText={text => setValue(text)}
          placeholder="Placeholder"
          value={value}
        />
      </StoryContainer>
    </>
  );
};

export const Readonly = () => {
  const [value, setValue] = React.useState('This content is read only, the user can\'t change it');

  return (
    <>
      <StoryContainer title='Read Only'>
        <TextField
          helperText="Helper text"
          label="Label"
          onChangeText={text => setValue(text)}
          placeholder="Placeholder"
          readonly
          value={value}
        />
      </StoryContainer>
    </>
  );
};

export const Action = () => {
  const initialValue = '';
  const [actionIconValue, setActionIconValue] = React.useState(initialValue);
  const [actionImageValue, setActionImageValue] = React.useState(initialValue);

  return (
    <>
      <StoryContainer title='Action' style={{ flexDirection: 'column' }}>
        <TextField
          action='icon'
          actionOnPress={() => {}}
          iconName="outlined-default-mockup"
          helperText="Helper text"
          label="Label"
          placeholder="Placeholder"
          onChangeText={text => setActionIconValue(text)}
          value={actionIconValue}
        />
        <View style={{ marginBottom: 8 }}></View>
        <TextField
          action='image'
          actionOnPress={() => {}}
          imageSource={placeholderImage as ImageSourcePropType}
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

export const Password = () => {
  const [value, setValue] = React.useState('');
  const [secureState, setSecureState] = React.useState(true);
  const onPress = () => {
    setSecureState(!secureState);
  };

  return (
    <>
      <StoryContainer title='Example'>
        <TextField
          action="icon"
          actionOnPress={onPress}
          helperText="The eye icon on the right side will change your password visibility"
          iconName={!secureState
            ? 'outlined-action-visibility'
            : 'outlined-action-visibilityoff'}
          label="Password"
          onChangeText={text => setValue(text)}
          placeholder="Type here your password"
          secureTextEntry={secureState}
          value={value}
        />
      </StoryContainer>
    </>
  );
};

export const All = () => (
  <>
    <Default />
    <Sizes />
    <States />
    <Feedback/>
    <Required />
    <Disabled />
    <Readonly />
    <Action />
  </>
);
