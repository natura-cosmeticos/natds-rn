import React from 'react'
import { View, Modal } from 'react-native'
import { Button } from '../../components'
import {
  ModalContainer, Title
} from './StoryWrapper.styles'
import { SwitchWithLabel } from './SwitchWithLabel'

export const ThemeSelectorModal = ({
  modalVisible, themeNames, activeTheme, changeTheme, setModalVisible
}) => (
  <Modal animationType="slide" visible={modalVisible}>
    <ModalContainer>
      <Title>Available Themes:</Title>
      <View style={{ width: '100%' }}>
        {
          themeNames.map((themeName, index) => (
            <SwitchWithLabel
              key={index.toString()}
              onChange={() => changeTheme(themeName)}
              isLast={index === themeNames.length - 1}
              label={themeName}
              isActive={activeTheme === themeName}
            />
          ))
        }
      </View>
      <View style={{ marginTop: 20, width: '100%' }}>
        <Button onPress={() => setModalVisible(!modalVisible)} text="Close" />
      </View>
    </ModalContainer>
  </Modal>
)
