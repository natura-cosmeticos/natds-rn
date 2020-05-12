import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import {
  View, Modal, Button, StyleSheet,
} from 'react-native';
import { Theme } from '../../common/themeSelectors';

export type DialogTypes = 'alert' | 'simple' | 'confirmation'

export interface DialogProps {
  /**
   * The dialog title
   */
  title?: string,
  /**
   * The dialog title
   */
  contentText?: string,
  /**
   * Dialog variants `alert` | `simple` | `confirmation`
   */
  type: DialogTypes,
  /**
   * The Dialog theme
   */
  theme: Theme,
  /**
   * Optional ID for testing
   */
  testID?: string,
}

interface DialogBase {
  type: DialogTypes
  theme: Theme
}

const DialogBase = styled.Modal<DialogBase>(() => ({
  flex: 1,
}));

const DialogContent = styled.View(() => ({
  alignItems: 'center',
  backgroundColor: '#00BCD4',
  borderColor: '#fff',
  borderRadius: 10,
  borderWidth: 1,
  height: 300,
  justifyContent: 'center',
  marginLeft: 40,
  marginTop: 80,
  width: '80%',
}));

const Title = styled.Text(() => ({
  color: '#3f2949',
  marginTop: 10,
}));

const ContentText = styled.Text(() => ({
  color: '#3f2949',
  marginTop: 10,
}));

const DialogComponent = ({
  title, contentText, theme, type, testID = 'dialog',
}: DialogProps) => (
  <DialogBase
    animationType={'fade'}
    theme={theme}
    type={type}
    transparent={false}
    visible={true}>
    <DialogContent testID={testID}>
      <Title>{title}</Title>
      <ContentText>{contentText}</ContentText>
    </DialogContent>
  </DialogBase>
);

export const Dialog = withTheme(DialogComponent);
