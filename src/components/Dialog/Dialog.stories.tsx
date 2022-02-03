/* eslint-disable max-len */
import React, { useState } from 'react'
import { View } from 'react-native'
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '.'
import { Button } from '../Button'
import {
  IconButton, DialogHeader
} from '..'
import { StoryWrapper } from '../../common/HelperComponents/StoryContainer'

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
`

export default {
  component: Dialog,
  parameters: {
    componentSubtitle: 'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. ',
    docs: {
      extractComponentDescription: description
    }
  },
  subcomponents: {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogHeader,
    DialogTitle
  },
  title: 'Components|Dialog'
}

export const Alert = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <StoryWrapper title="Alert">
      <>
        <Button text="alert dialog" onPress={() => setModalVisible(!modalVisible)} />
        <Dialog visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <DialogContent>
            <DialogContentText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque metus nibh.
              Suspendisse varius gravida ex. Praesent consequat, nibh non semper mattis
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <View style={{ paddingRight: 16 }}>
              <Button text="cancel" type="text" onPress={() => setModalVisible(!modalVisible)} />
            </View>
            <Button text="ok" type="text" onPress={() => setModalVisible(!modalVisible)} />
          </DialogActions>
        </Dialog>
      </>
    </StoryWrapper>
  )
}

export const Standard = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const icons = (
    <>
      <IconButton onPress={() => ({})} />
      <IconButton onPress={() => ({})} />
      <IconButton onPress={() => ({})} />
    </>
  )

  return (
    <StoryWrapper title="Standard">
      <>
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
            <View style={{ paddingRight: 16 }}>
              <Button text="cancel" type="text" onPress={() => setModalVisible(!modalVisible)} />
            </View>
            <Button text="ok" onPress={() => setModalVisible(!modalVisible)} />
          </DialogActions>
        </Dialog>
      </>
    </StoryWrapper>
  )
}
