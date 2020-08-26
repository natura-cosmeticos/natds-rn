import React from 'react';
import { View } from 'react-native';
import { Snackbar } from './Snackbar';

export default {
  component: Snackbar,
  parameters: {
    componentSubtitle:
      'Snackar',
  },
  title: 'Components|Snackbar',
};

export const all = () => (
  <View style={{ maxWidth: 600, padding: 30 }}>
    <Snackbar message={'This is a snackbar with multiple lines to show how it behaves when dealing with a longer message'} buttonText={'ok'} open={true} type='info' />
    <Snackbar message={'This is a short snackbar'} buttonText={'ok'} open={true} type='info' />
    <Snackbar message={'This is a short snackbar'} type='info' open={true} />
    <Snackbar message={'This is a short snackbar'} type='warning' open={true} />
    <Snackbar message={'This is a short snackbar'} type='error' open={true} />
    <Snackbar message={'This is a short snackbar'} type='success' open={true} />
  </View>
);
