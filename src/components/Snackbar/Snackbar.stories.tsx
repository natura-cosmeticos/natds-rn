import React, { useState } from 'react'
import { View, Button } from 'react-native'
import { text, select, number } from '@storybook/addon-knobs'
import { Snackbar, SnackbarType } from './Snackbar'

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

export const Standard = () => {
  const [open, setOpen] = useState(false)
  const message = 'A short snackbar message'

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} />
      <Button onPress={() => setOpen(!open)} title="open standard snackbar" />
    </View>
  )
}

export const Info = () => {
  const [open, setOpen] = useState(false)
  const message = 'A short snackbar message'

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="info" />
      <Button onPress={() => setOpen(!open)} title="open info snackbar" />
    </View>
  )
}

export const Warning = () => {
  const [open, setOpen] = useState(false)
  const message = 'A short snackbar message'

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="warning" />
      <Button onPress={() => setOpen(!open)} title="open warning snackbar" />
    </View>
  )
}

export const Error = () => {
  const [open, setOpen] = useState(false)
  const message = 'A short snackbar message'

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="error" />
      <Button onPress={() => setOpen(!open)} title="open error snackbar" />
    </View>
  )
}

export const Success = () => {
  const [open, setOpen] = useState(false)
  const message = 'A short snackbar message'

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="success" />
      <Button onPress={() => setOpen(!open)} title="open success snackbar" />
    </View>
  )
}

export const Multiline = () => {
  const [open, setOpen] = useState(false)
  const message = 'A longer message to hopefully show how it behaves when there is a multiline snackbar. The text will be truncated and the missing text at the end of the line will be indicated by an ellipsis glyph'

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="standard" />
      <Button onPress={() => setOpen(!open)} title="open multiline snackbar" />
    </View>
  )
}

export const MultilineWithButton = () => {
  const [open, setOpen] = useState(false)
  const message = 'A longer message to hopefully show how it behaves when there is a multiline snackbar. The text will be truncated and the missing text at the end of the line will be indicated by an ellipsis glyph'

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="standard" buttonText="ok" />
      <Button onPress={() => setOpen(!open)} title="open multiline snackbar with button" />
    </View>
  )
}
