/* eslint-disable max-lines */
import React, { useState } from 'react';
import { View } from 'react-native';
import { select, text as textKnob, boolean as booleanKnob } from '@storybook/addon-knobs';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { TextField } from './TextField';

export default {
  component: TextField,
  parameters: {
    componentSubtitle: 'TextField let users enter and edit text.',
  },
  title: 'Components|TextField',
};

const onChangeText = (ev: string) => {};
const onSubmitEditing = () => {};

export const Variants = () => {
  const [value, setValue] = useState('');

  return (
    <StoryContainer title="Variants">
      <TextField
        type="text"
        onChangeText={(ev: string) => setValue(ev)}
        onSubmitEditing={onSubmitEditing}
        label="Label"
        placeholder="Placeholder"
        value={value}
        helperText="Helper Text"
      />
    </StoryContainer>
  );
};

export const Size = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  return (
    <StoryContainer title="Sizes">
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TextField
          type="text"
          onChangeText={(ev: string) => setFirstValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Label"
          placeholder="Placeholder"
          value={firstValue}
          size="small"
          helperText="Helper Text"
        />

        <TextField
          type="text"
          onChangeText={(ev: string) => setSecondValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Label"
          placeholder="Placeholder"
          value={secondValue}
          helperText="Helper Text"
        />
      </View>
    </StoryContainer>
  );
};

export const State = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [thirdValue, setThirdValue] = useState('Hello World');

  return (
    <StoryContainer title="States">
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TextField
          type="text"
          onChangeText={(ev: string) => setFirstValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Enabled"
          placeholder="Placeholder"
          value={firstValue}
          state="enabled"
          helperText="Helper Text"
        />

        <TextField
          type="text"
          onChangeText={(ev: string) => setSecondValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Active"
          placeholder="Placeholder"
          value={secondValue}
          state="active"
          helperText="Helper Text"
        />

        <TextField
          type="text"
          onChangeText={(ev: string) => setThirdValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Filled"
          placeholder="Placeholder"
          value={thirdValue}
          state="filled"
          helperText="Helper Text"
        />
      </View>
    </StoryContainer>
  );
};

export const Feedback = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  return (
    <StoryContainer title="Feedback">
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TextField
          type="text"
          onChangeText={(ev: string) => setFirstValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Label"
          placeholder="Placeholder"
          value={firstValue}
          feedback="success"
          helperText="Helper Text"
        />

        <TextField
          type="text"
          onChangeText={(ev: string) => setSecondValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Label"
          placeholder="Placeholder"
          value={secondValue}
          feedback="error"
          helperText="Helper Text"
        />
      </View>
    </StoryContainer>
  );
};

export const Required = () => {
  const [value, setValue] = useState('');

  return (
    <StoryContainer title="Required">
      <TextField
        type="text"
        onChangeText={(ev: string) => setValue(ev)}
        onSubmitEditing={onSubmitEditing}
        label="Label"
        placeholder="Placeholder"
        value={value}
        required
        helperText="Helper Text"
      />
    </StoryContainer>
  );
};

export const Disabled = () => (
  <StoryContainer title="Disabled">
    <TextField
      type="text"
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      label="Label"
      placeholder="Placeholder"
      value=""
      disabled
      helperText="Helper Text"
    />
  </StoryContainer>
);

export const ReadOnly = () => (
  <StoryContainer title="Read Only">
    <TextField
      type="text"
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      label="Label"
      placeholder="Placeholder"
      value="Hello World"
      readOnly
      helperText="Helper Text"
    />
  </StoryContainer>
);

export const HelperText = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  return (
    <StoryContainer title="Helper Text">
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TextField
          type="text"
          onChangeText={(ev: string) => setFirstValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Label"
          placeholder="Placeholder"
          value={firstValue}
          helperText="Helper Text"
        />

        <TextField
          type="text"
          onChangeText={(ev: string) => setSecondValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Label"
          placeholder="Placeholder"
          value={secondValue}
        />
      </View>
    </StoryContainer>
  );
};

export const Type = () => {
  const [firstValue, setFirstValue] = useState('Text');
  const [secondValue, setSecondValue] = useState('Password');

  return (
    <StoryContainer title="Type">
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TextField
          type="text"
          onChangeText={(ev: string) => setFirstValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Label"
          placeholder="Placeholder"
          value={firstValue}
          helperText="Helper Text"
        />

        <TextField
          type="password"
          onChangeText={(ev: string) => setSecondValue(ev)}
          onSubmitEditing={onSubmitEditing}
          label="Label"
          placeholder="Placeholder"
          value={secondValue}
          helperText="Helper Text"
        />
      </View>
    </StoryContainer>
  );
};

export const Interactive = () => {
  const [value, setValue] = useState('');

  return (
    <StoryContainer title="Interactive">
      <TextField
        type={select('Types', { password: 'password', text: 'text' }, 'text')}
        onChangeText={(ev: string) => setValue(ev)}
        onSubmitEditing={onSubmitEditing}
        label={textKnob('Label', 'Label')}
        placeholder={textKnob('Placeholder', 'Placeholder')}
        value={value}
        helperText={textKnob('HelperText', 'HelperText')}
        multiline={booleanKnob('Multiline', false)}
      />
    </StoryContainer>
  );
};

export const All = () => (
  <View>
    <Variants />
    <Size />
    <State />
    <Feedback />
    <Required />
    <Disabled />
    <ReadOnly />
    <HelperText />
    <Type />
  </View>
);
