/* eslint-disable max-lines */
import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import { boolean, select, text as textKnob } from '@storybook/addon-knobs'

import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { TextField } from './TextField'
import placeholderImage from '../../assets/images/textfield_image_arealimit.png'
import { IconButton } from '../IconButton'

const description = () => `
> TextField let users enter and edit text.

## Properties
| Property                  | Values                                              |    Status    |
|---                        |                                                  ---|           ---|
| **variant (no prop)**     | Standard                                            | ✅ Available |
| **action**                | none, iconButton, image                             | ✅ Available |
| **actionComponent**       | component image                                     | ✅ Available |
| **disabled**              | true/false                                          | ✅ Available |
| **feedback**              | error, success                                      | ✅ Available |
| **helperText**            | string                                              | ✅ Available |
| **keyboardType**          | TextInputProps                                      | ✅ Available |
| **label**                 | string                                              | ✅ Available |
| **readonly**              | true/false                                          | ✅ Available |
| **required**              | true/false                                          | ✅ Available |
| **secureTextEntry**       | TextInputProps                                      | ✅ Available |
| **onBlur**                | function                                            | ✅ Available |
| **onChangeText**          | function                                            | ✅ Available |
| **onFocus**               | function                                            | ✅ Available |
| **size**                  | medium, mediumX                                     | ✅ Available |
| **type**                  | text, password, number                              | ✅ Available |
| **value**                 | string                                              | ✅ Available |
| **multiline**             | true/false                                          | ✅ Available |
| **brand**                 | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |
## Technical Usages Examples
`

export default {
  component: TextField,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|TextField'
}

export const Default = () => {
  const [value, setValue] = React.useState('')

  return (
    <StoryContainer title="Standard">
      <TextField
        helperText="Helper text"
        label="Label"
        onChangeText={(text) => setValue(text)}
        placeholder="Placeholder"
        value={value}
      />
    </StoryContainer>
  )
}
export const Brand = () => {
  const [value, setValue] = React.useState('')

  return (
    <StoryWrapper title="Brand">
      <StoryContainer title="Avon">
        <TextField
          brand="avon"
          helperText="Helper text"
          label="Label"
          onChangeText={(text) => setValue(text)}
          placeholder="Placeholder"
          value={value}
        />
      </StoryContainer>
      <StoryContainer title="Avon v2">
        <TextField
          brand="avon_v2"
          helperText="Helper text"
          label="Label"
          onChangeText={(text) => setValue(text)}
          placeholder="Placeholder"
          value={value}
        />
      </StoryContainer>
    </StoryWrapper>
  )
}

export const Sizes = () => {
  const [mediumXValue, setMediumXValue] = React.useState('This is the default size: MediumX')
  const [mediumValue, setMediumValue] = React.useState('This is the size: Medium')

  return (
    <StoryWrapper title="Sizes">
      <StoryContainer title="MediumX">
        <TextField
          helperText="Helper text"
          label="Label"
          onChangeText={(text) => setMediumXValue(text)}
          placeholder="Placeholder"
          value={mediumXValue}
        />
      </StoryContainer>
      <StoryContainer title="Medium">
        <TextField
          helperText="Helper text"
          label="Label"
          onChangeText={(text) => setMediumValue(text)}
          placeholder="Placeholder"
          size="medium"
          value={mediumValue}
        />
      </StoryContainer>
    </StoryWrapper>
  )
}

export const States = () => {
  const [blankValue, setBlankValue] = React.useState('')
  const [filledValue, setFilledValue] = React.useState('This field has already been filled')

  return (
    <StoryWrapper title="States">
      <StoryContainer title="Not Filled">
        <TextField
          helperText="Helper text"
          label="Label"
          onChangeText={(text) => setBlankValue(text)}
          placeholder="This field is not filled yet"
          value={blankValue}
        />
      </StoryContainer>
      <StoryContainer title="Filled">
        <TextField
          helperText="Helper text"
          label="Label"
          onChangeText={(text) => setFilledValue(text)}
          placeholder="Placeholder"
          value={filledValue}
        />
      </StoryContainer>
    </StoryWrapper>
  )
}

export const Feedback = () => {
  const [errorValue, setErrorValue] = React.useState('This value does not fit the field\'s validation rules')
  const [successValue, setSuccessValue] = React.useState('This value fits the field\'s validation rules')

  return (
    <StoryWrapper title="Feedback">
      <StoryContainer title="Error">
        <TextField
          feedback="error"
          helperText="Helper text"
          label="Label"
          onChangeText={(text) => setErrorValue(text)}
          placeholder="Placeholder"
          value={errorValue}
        />
      </StoryContainer>
      <StoryContainer title="Success">
        <TextField
          feedback="success"
          helperText="Helper text"
          label="Label"
          onChangeText={(text) => setSuccessValue(text)}
          placeholder="Placeholder"
          value={successValue}
        />
      </StoryContainer>
    </StoryWrapper>
  )
}

export const Required = () => {
  const [value, setValue] = React.useState('This field is required to move on to the next step')

  return (
    <StoryContainer title="Required">
      <TextField
        helperText="Helper text"
        label="Label"
        onChangeText={(text) => setValue(text)}
        placeholder="Placeholder"
        required
        value={value}
      />
    </StoryContainer>
  )
}

export const Disabled = () => {
  const [value, setValue] = React.useState('This field is disabled, the user can\'t fill it')

  return (
    <StoryContainer title="Disabled">
      <TextField
        disabled
        helperText="Helper text"
        label="Label"
        onChangeText={(text) => setValue(text)}
        placeholder="Placeholder"
        value={value}
      />
    </StoryContainer>
  )
}

export const Readonly = () => {
  const [value, setValue] = React.useState('This content is read only, the user can\'t change it')

  return (
    <StoryContainer title="Read Only">
      <TextField
        helperText="Helper text"
        label="Label"
        onChangeText={(text) => setValue(text)}
        placeholder="Placeholder"
        readonly
        value={value}
      />
    </StoryContainer>
  )
}

const imageStyle = { height: 56 }

export const Action = () => {
  const initialValue = ''
  const [actionIconValue, setActionIconValue] = React.useState(initialValue)
  const [actionImageValue, setActionImageValue] = React.useState(initialValue)

  return (
    <StoryWrapper title="Action">
      <StoryContainer title="Icon">
        <TextField
          action="icon"
          actionComponent={<IconButton onPress={() => ({})} />}
          helperText="Helper text"
          label="Label"
          placeholder="Placeholder"
          onChangeText={(text) => setActionIconValue(text)}
          value={actionIconValue}
        />
      </StoryContainer>
      <StoryContainer title="Image">
        <TextField
          action="image"
          actionComponent={(
            <Image
              source={placeholderImage as ImageSourcePropType}
              style={imageStyle}
            />
          )}
          helperText="Helper text"
          label="Label"
          placeholder="Placeholder"
          onChangeText={(text) => setActionImageValue(text)}
          value={actionImageValue}
        />
      </StoryContainer>
    </StoryWrapper>
  )
}

export const Type = () => {
  const [textValue, setTextValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')
  const [numberValue, setNumberValue] = React.useState('')

  return (
    <StoryWrapper title="Type">
      <StoryContainer title="Text">
        <TextField
          helperText="This is the default type"
          label="Label"
          onChangeText={(text) => setTextValue(text)}
          placeholder="Type anything here"
          value={textValue}
        />
      </StoryContainer>
      <StoryContainer title="Password">
        <TextField
          type="password"
          helperText="The eye button on the right side will change your password visibility"
          label="Label"
          onChangeText={(text) => setPasswordValue(text)}
          placeholder="Type here your password"
          value={passwordValue}
        />
      </StoryContainer>
      <StoryContainer title="Number">
        <TextField
          type="number"
          helperText="This field will only accept numbers"
          label="Label"
          onChangeText={(text) => setNumberValue(text)}
          placeholder="Type numbers here"
          value={numberValue}
        />
      </StoryContainer>
    </StoryWrapper>
  )
}

export const TextArea = () => {
  const [value, setValue] = React.useState('')

  return (
    <StoryContainer title="Text Area">
      <TextField
        helperText="Helper text"
        label="Label"
        onChangeText={(text) => setValue(text)}
        placeholder="Placeholder"
        value={value}
        multiline
      />
    </StoryContainer>
  )
}

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <TextField
      helperText={textKnob('Helper Text', 'Helper text')}
      label={textKnob('Label', 'Label')}
      placeholder={textKnob('Placeholder', 'Placeholder')}
      value={textKnob('Value', 'Value')}
      type={select('Type', ['text', 'password', 'number'], 'text')}
      size={select('Size', ['medium', 'mediumX'], 'medium')}
      disabled={boolean('Disabled', false)}
      readonly={boolean('Readonly', false)}
      feedback={select('Feedback', ['error', 'success'], 'error')}
      multiline={boolean('Multiline', false)}
    />
  </StoryContainer>
)
