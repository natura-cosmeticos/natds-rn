import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Button } from 'react-native';
import { Snackbar, SnackbarType } from './Snackbar';

export default {
  component: Snackbar,
  parameters: {
    componentSubtitle:
      'Snackar',
  },
  title: 'Components|Snackbar',
};

const Wrapper = styled.View`
  borderColor: rgba(0, 0, 0, 0.12);
  borderRadius: 4;
  borderStyle: solid;
  borderWidth: 1;
  height: 200;
  marginTop: 20;
  width: 350;
`;

interface SnackbarContainerProps {
  buttonText: string,
  snackbarMessage: string,
  snackbarButtonText?: string,
  snackbarType: SnackbarType,
}

const SnackbarContainer: React.FC<SnackbarContainerProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Snackbar
        message={props.snackbarMessage}
        buttonText={props.snackbarButtonText}
        open={open}
        onClose={() => setOpen(false)}
        type={props.snackbarType}
      />
      <Button onPress={() => setOpen(!open)} title={props.buttonText} />
    </Wrapper>
  );
};

export const all = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ alignItems: 'center' }}>
      <SnackbarContainer
        buttonText='multiline snackbar with action'
        snackbarMessage='This is a snackbar with multiple lines to show how it behaves when dealing with a longer message'
        snackbarButtonText='ok'
        snackbarType='info'
      />
      <SnackbarContainer
        buttonText='multiline snackbar'
        snackbarMessage='This is a snackbar with multiple lines to show how it behaves when dealing with a longer message'
        snackbarType='info'
      />
      <SnackbarContainer
        buttonText='default snackbar with action'
        snackbarButtonText='ok'
        snackbarMessage='This is a short snackbar'
        snackbarType='default'
      />
      <SnackbarContainer buttonText='default snackbar' snackbarMessage='This is a short snackbar' snackbarType='default' />
      <SnackbarContainer buttonText='info snackbar' snackbarMessage='This is a short snackbar' snackbarType='info' />
      <SnackbarContainer buttonText='warning snackbar' snackbarMessage='This is a short snackbar' snackbarType='warning' />
      <SnackbarContainer buttonText='error snackbar' snackbarMessage='This is a short snackbar' snackbarType='error' />
      <SnackbarContainer buttonText='success snackbar' snackbarMessage='This is a short snackbar' snackbarType='success' />
    </View>
  );
};
