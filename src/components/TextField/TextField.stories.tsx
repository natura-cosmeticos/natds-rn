/* eslint-disable max-lines */
import React, { useState } from 'react';
import { View } from 'react-native';
import { select, text as textKnob } from '@storybook/addon-knobs';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { TextField } from './TextField';

export default {
  component: TextField,
  parameters: {
    componentSubtitle:
      'TextField allow users to take actions, and make choices, with a single tap.',
  },
  title: 'Components|TextField',
};

const onChangeText = (ev: string) => {};
const onSubmitEditing = () => {};

export const Variants = () => (
  <StoryContainer title="Variants">
    <TextField
      type="text"
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      label="Label"
      placeholder="Placeholder"
      value=""
      helperText="Helper Text"
    />
  </StoryContainer>
);

export const Size = () => (
  <StoryContainer title="Sizes">
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TextField
        type="text"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Label"
        placeholder="Placeholder"
        value=""
        size="tiny"
        helperText="Helper Text"
      />

      <TextField
        type="text"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Label"
        placeholder="Placeholder"
        value=""
        helperText="Helper Text"
      />
    </View>
  </StoryContainer>
);

export const State = () => (
  <StoryContainer title="States">
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TextField
        type="text"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Enabled"
        placeholder="Placeholder"
        value=""
        state="enabled"
        helperText="Helper Text"
      />

      <TextField
        type="text"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Active"
        placeholder="Placeholder"
        value=""
        state="active"
        helperText="Helper Text"
      />

      <TextField
        type="text"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Filled"
        placeholder="Placeholder"
        value="Hello World"
        state="filled"
        helperText="Helper Text"
      />
    </View>
  </StoryContainer>
);

export const Feedback = () => (
  <StoryContainer title="Feedback">
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TextField
        type="text"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Label"
        placeholder="Placeholder"
        value=""
        feedback="success"
        helperText="Helper Text"
      />

      <TextField
        type="text"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Label"
        placeholder="Placeholder"
        value=""
        feedback="error"
        helperText="Helper Text"
      />
    </View>
  </StoryContainer>
);

export const Required = () => (
  <StoryContainer title="Required">
    <TextField
      type="text"
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      label="Label"
      placeholder="Placeholder"
      value=""
      required
      helperText="Helper Text"
    />
  </StoryContainer>
);

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

export const HelperText = () => (
  <StoryContainer title="Helper Text">
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TextField
        type="text"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Label"
        placeholder="Placeholder"
        value=""
        helperText="Helper Text"
      />

      <TextField
        type="text"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Label"
        placeholder="Placeholder"
        value=""
      />
    </View>
  </StoryContainer>
);

export const Type = () => (
  <StoryContainer title="Type">
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TextField
        type="text"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Label"
        placeholder="Placeholder"
        value="Text"
        helperText="Helper Text"
      />

      <TextField
        type="password"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        label="Label"
        placeholder="Placeholder"
        value="password"
        helperText="Helper Text"
      />
    </View>
  </StoryContainer>
);

export const Interactive = () => {
  const [value, setValue] = useState('');

  return (
    <StoryContainer title="Interactive">
      <TextField
        type={select('Types', { password: 'password', text: 'text' }, 'text')}
        onChangeText={(ev: string) => setValue(ev)}
        onSubmitEditing={onSubmitEditing}
        label={textKnob('Text', 'Label')}
        placeholder="Placeholder"
        value={value}
        helperText="Helper Text"
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
