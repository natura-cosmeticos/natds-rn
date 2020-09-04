import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { text, select, number } from '@storybook/addon-knobs';
import { Snackbar, SnackbarType } from './Snackbar';

export default {
  component: Snackbar,
  parameters: {
    componentSubtitle:
      'Snackar',
  },
  title: 'Components|Snackbar',
};

const snackbarTypeOptions = ['error', 'info', 'standard', 'success', 'warning'];

export const interactive = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar
        message={text('message', 'A short snackbar message')}
        buttonText={text('button text', 'ok')}
        type={select('type', snackbarTypeOptions, 'standard') as SnackbarType}
        autoHideDuration={number('auto hide duration', 5000)}
        open={open}
        onClose={() => setOpen(false)} />
      <Button onPress={() => setOpen(!open)} title='open standard snackbar' />
    </View>
  );
};

export const standard = () => {
  const [open, setOpen] = useState(false);
  const message = 'A short snackbar message';

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} />
      <Button onPress={() => setOpen(!open)} title='open standard snackbar' />
    </View>
  );
};

export const info = () => {
  const [open, setOpen] = useState(false);
  const message = 'A short snackbar message';

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="info" />
      <Button onPress={() => setOpen(!open)} title='open info snackbar' />
    </View>
  );
};

export const warning = () => {
  const [open, setOpen] = useState(false);
  const message = 'A short snackbar message';

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="warning" />
      <Button onPress={() => setOpen(!open)} title='open warning snackbar' />
    </View>
  );
};

export const error = () => {
  const [open, setOpen] = useState(false);
  const message = 'A short snackbar message';

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="error" />
      <Button onPress={() => setOpen(!open)} title='open error snackbar' />
    </View>
  );
};

export const success = () => {
  const [open, setOpen] = useState(false);
  const message = 'A short snackbar message';

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="success" />
      <Button onPress={() => setOpen(!open)} title='open success snackbar' />
    </View>
  );
};

export const multiline = () => {
  const [open, setOpen] = useState(false);
  const message = 'A longer message to hopefully show how it behaves when there is a multiline snackbar. The text will be truncated and the missing text at the end of the line will be indicated by an ellipsis glyph';

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="standard" />
      <Button onPress={() => setOpen(!open)} title='open multiline snackbar' />
    </View>
  );
};

export const multilineWithButton = () => {
  const [open, setOpen] = useState(false);
  const message = 'A longer message to hopefully show how it behaves when there is a multiline snackbar. The text will be truncated and the missing text at the end of the line will be indicated by an ellipsis glyph';

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message={message} open={open} onClose={() => setOpen(false)} type="standard" buttonText="ok" />
      <Button onPress={() => setOpen(!open)} title='open multiline snackbar with button' />
    </View>
  );
};
