import React, { useState } from 'react';
import { View } from 'react-native';
import { Snackbar } from './Snackbar';
import { Button } from '../Button';

export default {
  component: Snackbar,
  parameters: {
    componentSubtitle:
      'Snackar',
  },
  title: 'Components|Snackbar',
};

export const all = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ maxWidth: 600, padding: 30 }}>
      <Button onPress={() => setOpen(!open)} text='open' />
      <Snackbar
        message={'This is a snackbar with multiple lines to show how it behaves when dealing with a longer message'}
        buttonText={'ok'}
        open={open}
        onClose={() => setOpen(false)}
        type='info'
      />
    </View>
  );
};
