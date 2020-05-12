
import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from './Dialog';
import { Button } from '../Button';

export default {
  component: Dialog,
  parameters: {
    componentSubtitle: 'A dialog component.',
  },
  title: 'Components|Dialog',
};

export const alert = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button text="open modal" onPress={() => setModalVisible(!modalVisible)} />
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
    </>
  );
};

export const confirmation = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button text="open modal" onPress={() => setModalVisible(!modalVisible)} />
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
    </>
  );
};
