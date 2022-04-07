import React, { useState } from 'react'
import { View, Button } from 'react-native'
import { text, select, number } from '@storybook/addon-knobs'
import { Snackbar, SnackbarType } from './Snackbar'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'

const description = () => `
- - -

  ### NOTE for UX: This component is available in the following variants:

  - ✅ Standard

With the following attribute status:

  - **Color:**
    - ✅ Error
    - ✅ Info
    - ✅ Standard
    - ✅ Success
    - ✅ Warning

- - -
`

export default {
  component: Snackbar,
  parameters: {
    componentSubtitle: 'Snackbars provide brief messages about app processes at the bottom of the screen.',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Snackbar'
}

const snackbarTypeOptions = ['error', 'info', 'standard', 'success', 'warning']

export const Colors = () => {
  const [standard, setStandard] = useState(false)
  const [info, setInfo] = useState(false)
  const [warning, setWarning] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [multi, setMulti] = useState(false)
  const [withButton, setWithButton] = useState(false)

  const defaultMessage = 'A short snackbar message'
  const multiMessage = 'A longer message to hopefully show how it behaves when there is a multiline snackbar. The text will be truncated and the missing text at the end of the line will be indicated by an ellipsis glyph'

  return (
    <StoryWrapper title="Variants">
      <StoryContainer title="Standard">
        <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
          <Snackbar message={defaultMessage} open={standard} onClose={() => setStandard(false)} />
          <Button onPress={() => setStandard(!standard)} title="open standard snackbar" />
        </View>
      </StoryContainer>

      <StoryContainer title="Info">
        <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
          <Snackbar message={defaultMessage} open={info} onClose={() => setInfo(false)} type="info" />
          <Button onPress={() => setInfo(!info)} title="open info snackbar" />
        </View>
      </StoryContainer>

      <StoryContainer title="Warning">
        <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
          <Snackbar message={defaultMessage} open={warning} onClose={() => setWarning(false)} type="warning" />
          <Button onPress={() => setWarning(!warning)} title="open warning snackbar" />
        </View>
      </StoryContainer>

      <StoryContainer title="Error">
        <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
          <Snackbar message={defaultMessage} open={error} onClose={() => setError(false)} type="error" />
          <Button onPress={() => setError(!error)} title="open error snackbar" />
        </View>
      </StoryContainer>

      <StoryContainer title="Success">
        <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
          <Snackbar message={defaultMessage} open={success} onClose={() => setSuccess(false)} type="success" />
          <Button onPress={() => setSuccess(!success)} title="open success snackbar" />
        </View>
      </StoryContainer>

      <StoryContainer title="Multiline">
        <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
          <Snackbar message={multiMessage} open={multi} onClose={() => setMulti(false)} type="standard" />
          <Button onPress={() => setMulti(!multi)} title="open multiline snackbar" />
        </View>
      </StoryContainer>

      <StoryContainer title="Multiline with Button">
        <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
          <Snackbar message={multiMessage} open={withButton} onClose={() => setWithButton(false)} type="standard" buttonText="ok" />
          <Button onPress={() => setWithButton(!withButton)} title="open multiline snackbar with button" />
        </View>
      </StoryContainer>
    </StoryWrapper>
  )
}

export const Interactive = () => {
  const [open, setOpen] = useState(false)

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar
        message={text('message', 'A short snackbar message')}
        buttonText={text('button text', 'ok')}
        type={select('type', snackbarTypeOptions, 'standard') as SnackbarType}
        autoHideDuration={number('auto hide duration', 5000)}
        open={open}
        onClose={() => setOpen(false)}
      />
      <Button onPress={() => setOpen(!open)} title="open snackbar" />
    </View>
  )
}
