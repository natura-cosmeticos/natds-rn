/* eslint-disable max-lines */
import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { Separator, StoryContainer, VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer';
import { TextField } from './TextField';
// @ts-ignore
import placeholderImage from '../../assets/images/textfield_image_arealimit.png';
import { IconButton } from '../IconButton';

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
    <VerticalStoryContainer title='Sizes'>
      <TextField
        helperText="Helper text"
        label="Label"
        onChangeText={text => setMediumXValue(text)}
        placeholder="Placeholder"
        value={mediumXValue}
      />
      <Separator />
      <TextField
        helperText="Helper text"
        label="Label"
        onChangeText={text => setMediumValue(text)}
        placeholder="Placeholder"
        size='medium'
        value={mediumValue}
      />
    </VerticalStoryContainer>
  </>
  );
};

export const States = () => {
  const [blankValue, setBlankValue] = React.useState('');
  const [filledValue, setFilledValue] = React.useState('This field has already been filled');

  return (
    <>
      <VerticalStoryContainer title='States'>
          <TextField
            helperText="Helper text"
            label="Label"
            onChangeText={text => setBlankValue(text)}
            placeholder="This field is not filled yet"
            value={blankValue}
          />
        <Separator />
        <TextField
          helperText="Helper text"
          label="Label"
          onChangeText={text => setFilledValue(text)}
          placeholder="Placeholder"
          value={filledValue}
        />
      </VerticalStoryContainer>
    </>
  );
};

export const Feedback = () => {
  const [errorValue, setErrorValue] = React.useState('This value does not fit the field\'s validation rules');
  const [successValue, setSuccessValue] = React.useState('This value fits the field\'s validation rules');

  return (
    <>
      <VerticalStoryContainer title='Feedback'>
          <TextField
            feedback='error'
            helperText="Helper text"
            label="Label"
            onChangeText={text => setErrorValue(text)}
            placeholder="Placeholder"
            value={errorValue}
          />
        <Separator />
        <TextField
          feedback='success'
          helperText="Helper text"
          label="Label"
          onChangeText={text => setSuccessValue(text)}
          placeholder="Placeholder"
          value={successValue}
        />
      </VerticalStoryContainer>
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

const imageStyle = { height: 56 };

export const Action = () => {
  const initialValue = '';
  const [actionIconValue, setActionIconValue] = React.useState(initialValue);
  const [actionImageValue, setActionImageValue] = React.useState(initialValue);

  return (
    <>
      <VerticalStoryContainer title='Action'>
        <TextField
          action='icon'
          actionComponent={<IconButton onPress={() => {}} />}
          helperText="Helper text"
          label="Label"
          placeholder="Placeholder"
          onChangeText={text => setActionIconValue(text)}
          value={actionIconValue}
        />
        <Separator />
        <TextField
          action='image'
          actionComponent={
            <Image
              source={placeholderImage as ImageSourcePropType}
              style={imageStyle}
            />}
          helperText="Helper text"
          label="Label"
          placeholder="Placeholder"
          onChangeText={text => setActionImageValue(text)}
          value={actionImageValue}
        />
      </VerticalStoryContainer>
    </>
  );
};

export const Type = () => {
  const [textValue, setTextValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [numberValue, setNumberValue] = React.useState('');

  return (
    <>
      <VerticalStoryContainer title='Type'>
        <TextField
          helperText="This is the default type"
          label="Text"
          onChangeText={text => setTextValue(text)}
          placeholder="Type anything here"
          value={textValue}
        />
        <Separator />
        <TextField
          type="password"
          helperText="The eye button on the right side will change your password visibility"
          label="Password"
          onChangeText={text => setPasswordValue(text)}
          placeholder="Type here your password"
          value={passwordValue}
        />
        <Separator />
        <TextField
          type="number"
          helperText="This field will only accept numbers"
          label="Number"
          onChangeText={text => setNumberValue(text)}
          placeholder="Type numbers here"
          value={numberValue}
        />
      </VerticalStoryContainer>
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
    <Type />
  </>
);
