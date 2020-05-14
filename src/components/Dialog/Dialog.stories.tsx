/* eslint-disable no-use-before-define, max-lines */
import React, { useState } from 'react';
import { View } from 'react-native';
import { text, boolean } from '@storybook/addon-knobs';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from '.';
import { Button } from '../Button';

export default {
  component: Dialog,
  parameters: {
    componentSubtitle: 'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. ',
  },
  subcomponents: {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  },
  title: 'Components|Dialog',
};

export const all = () => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 500,
    padding: 20,
  }}>
    <View style={{ maxWidth: 300 }}>
      {
        // for implemantation samples view `alert` story bellow
        alert()
      }
    </View>
    <View style={{ maxWidth: 300 }}>
      {
        // for implementation samples view `confirmation` story bellow
        confirmation()
      }
    </View>
  </View>
);

export const alert = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flexDirection: 'row' }} >
      <Button text="alert dialog" onPress={() => setModalVisible(!modalVisible)} />
      <Dialog visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque metus nibh.
            Suspendisse varius gravida ex. Praesent consequat, nibh non semper mattis
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button text="cancel" type="text" onPress={() => setModalVisible(!modalVisible)} />
          <Button text="ok" type="text" onPress={() => setModalVisible(!modalVisible)} />
        </DialogActions>
      </Dialog>
    </View >
  );
};

export const confirmation = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flexDirection: 'row' }} >
      <Button text="confimation dialog" onPress={() => setModalVisible(!modalVisible)} />
      <Dialog visible={modalVisible}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque metus nibh.
            Suspendisse varius gravida ex. Praesent consequat, nibh non semper mattis, lorem purus
            pellentesque sapien, vitae facilisis tellus sem et enim. Sed eget nunc nec eros gravida
            egestas. Phasellus nec ipsum dolor. Donec justo ipsum, vehicula vel lacus at, facilisis
            bibendum tellus. Duis ornare in tellus vel scelerisque.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button text="cancel" type="text" onPress={() => setModalVisible(!modalVisible)} />
          <Button text="ok" onPress={() => setModalVisible(!modalVisible)} />
        </DialogActions>
      </Dialog>
    </View>
  );
};

export const interactive = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const title = text('Title', 'Title');
  const content = text('Content', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque metus nibh.');
  const withTextButton = boolean('With a text button?', true);
  const textButtonLabel = text('Text button label', 'cancel');
  const withTextContainedButton = boolean('With a contained button?', true);
  const containedButtonLabel = text('Contained button label', 'ok');

  const buttonText = withTextButton && <Button text={textButtonLabel} type="text" onPress={() => setModalVisible(!modalVisible)} />;
  const buttonContained = withTextContainedButton && (
    <Button
      text={containedButtonLabel}
      onPress={() => setModalVisible(!modalVisible)}
    />
  );

  return (
    <View style={{ flexDirection: 'row' }} >
      <Button text="confimation dialog" onPress={() => setModalVisible(!modalVisible)} />
      <Dialog visible={modalVisible}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {content}
          </DialogContentText>
        </DialogContent>
        {
          (withTextButton || withTextContainedButton) && (
            <DialogActions>
              {buttonText}
              {buttonContained}
            </DialogActions>
          )
        }
      </Dialog>
    </View>
  );
};
