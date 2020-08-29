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

const snackbarTypeOptions = {
  error: 'error',
  info: 'info',
  standard: 'standard',
  success: 'success',
  warning: 'warning',
};

export const interactive = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar
        message={text('message', 'Lorem ipsum dolor sit amet')}
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

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message="Lorem ipsum dolor sit amet" open={open} onClose={() => setOpen(false)} />
      <Button onPress={() => setOpen(!open)} title='open standard snackbar' />
    </View>
  );
};

export const info = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message="Lorem ipsum dolor sit amet" open={open} onClose={() => setOpen(false)} type="info" />
      <Button onPress={() => setOpen(!open)} title='open info snackbar' />
    </View>
  );
};

export const warning = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message="Lorem ipsum dolor sit amet" open={open} onClose={() => setOpen(false)} type="warning" />
      <Button onPress={() => setOpen(!open)} title='open warning snackbar' />
    </View>
  );
};

export const error = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message="Lorem ipsum dolor sit amet" open={open} onClose={() => setOpen(false)} type="error" />
      <Button onPress={() => setOpen(!open)} title='open error snackbar' />
    </View>
  );
};

export const success = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ backgroundColor: 'gainsboro', flex: 1, height: 200 }}>
      <Snackbar message="Lorem ipsum dolor sit amet" open={open} onClose={() => setOpen(false)} type="success" />
      <Button onPress={() => setOpen(!open)} title='open success snackbar' />
    </View>
  );
};
