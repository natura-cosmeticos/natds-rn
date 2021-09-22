/* eslint-disable no-use-before-define, max-lines */
import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from '.';
import { Button } from '../Button';
import {
  IconButton, DialogHeader,
} from '..';

const description = () => `
---

**NOTE**: This component is available in the following variants:

  - ✅ standard (available but with alternative composition)
  - ✅ alert (available but with alternative composition)

With the following attribute status:

- ✅ **Size**
- ✅ **Divider**
- ✅ **Scroll**

---
`;

export default {
  component: Dialog,
  parameters: {
    componentSubtitle: 'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. ',
    docs: {
      extractComponentDescription: description,
    },
  },
  subcomponents: {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogHeader,
    DialogTitle,
  },
  title: 'Components|Dialog',
};

export const all = () => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 800,
    padding: 20,
  }}>
    <View style={{ maxWidth: 300 }}>
      {
        // for implementation samples view `standard` story bellow
        standard()
      }
    </View>
    <View style={{ maxWidth: 300 }}>
      {
        // for implemantation samples view `alert` story bellow
        alert()
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

export const standard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const icons = (
    <>
      <IconButton onPress={() => {}} />
      <IconButton onPress={() => {}} />
      <IconButton onPress={() => {}} />
    </>
  );

  return (
    <View style={{ flexDirection: 'row' }} >
      <Button text="standard dialog" onPress={() => setModalVisible(!modalVisible)} />
      <Dialog visible={modalVisible}>
        <DialogHeader icon={icons}>
          <DialogTitle>Title</DialogTitle>
        </DialogHeader>
          <DialogContent divider>
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
