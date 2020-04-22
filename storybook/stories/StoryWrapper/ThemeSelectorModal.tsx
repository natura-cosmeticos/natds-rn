import React from 'react';
import { View, Modal } from 'react-native';
import { TextWithTheme } from '../HelperComponents/ThemeHelper.styles';
import {
  ModalContainer, BlockButton, Title,
} from './StoryWrapper.styles';
import { SwitchWithLabel } from './SwitchWithLabel';

export const ThemeSelectorModal = ({
  modalVisible, themeNames, activeTheme, changeTheme, setModalVisible,
}) => (
  <Modal animationType="slide" visible={modalVisible} statusBarTranslucent >
    <ModalContainer>
      <Title>Available Themes:</Title>
      <View style={{ width: '100%' }}>
        {
          themeNames.map((themeName, index) => (
            <SwitchWithLabel
              key={index}
              onChange={() => changeTheme(themeName)}
              isLast={index === themeNames.length - 1}
              label={themeName}
              isActive={activeTheme === themeName}
            />))
        }
      </View>
      <BlockButton style={{ marginTop: 20 }} onPress={() => setModalVisible(!modalVisible)}>
        <TextWithTheme style={{ textAlign: 'center' }}>Close</TextWithTheme>
      </BlockButton>
    </ModalContainer>
  </Modal>
);
