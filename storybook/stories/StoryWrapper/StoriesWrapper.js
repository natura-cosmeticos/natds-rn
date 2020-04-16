import React, { useState } from 'react';
import { themes } from '@naturacosmeticos/natds-styles';
import { ThemeProvider } from 'styled-components/native';
import {
  ScrollView, SafeAreaView, Dimensions, View, Switch, Modal, StyleSheet,
} from 'react-native';
import { NatContainer } from '../../../lib';
import { SwitchContainer, ModalContainer, Container, Button, BlockButton, TextWithTheme, Title } from './StoryWrapper.styles';

const styles = StyleSheet.create({
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});

const SwitchWithLabel = ({ colors, onChange, isLast, label, isActive }) => {
  return (
    <SwitchContainer isLast={isLast}>
      <TextWithTheme style={{ paddingRight: 5 }}>{label}</TextWithTheme>
      <Switch
        trackColor={{ false: colors.action.disabled, true: colors.success.main }}
        thumbColor={colors.success.contrastText}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={isActive}
      />
    </SwitchContainer>
  );
};

const ThemeSelectorModal = ({ modalVisible, themeNames, colors, activeTheme, changeTheme, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      statusBarTranslucent
    >
      <ModalContainer>
        <Title>Available Themes:</Title>
        <View style={{ width: '100%' }}>
          {
            themeNames.map((themeName, index) => (
              <SwitchWithLabel
                key={index}
                colors={colors}
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
};

export const StoriesWrapper = ({ story }) => {
  themes.test = themes.natura
  const themeNames = Object.keys(themes);
  const [isLight, changeMode] = useState(true);
  const [activeTheme, changeTheme] = useState(themeNames[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const mode = isLight ? 'light' : 'dark';
  const theme = themes[activeTheme][mode];
  const colors = theme.palette;

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <ThemeProvider theme={theme}>
        <Container>
          <ThemeSelectorModal
            modalVisible={modalVisible}
            themeNames={themeNames}
            colors={colors}
            activeTheme={activeTheme}
            changeTheme={changeTheme}
            setModalVisible={setModalVisible}
          />
          <Button onPress={() => setModalVisible(true)}>
            <TextWithTheme>Change Theme</TextWithTheme>
          </Button>
          <SwitchWithLabel
            colors={colors}
            onChange={changeMode}
            value={isLight}
            label="Light"
            isActive={isLight}
            isLast
          />
        </Container>
        <ScrollView>
          <NatContainer style={{ backgroundColor: themes.natura[mode].palette.background.paper }}>
            {story && story({ light: isLight, theme: themes.natura[mode] })}
          </NatContainer>
        </ScrollView>
      </ThemeProvider>
    </SafeAreaView>
  );
};
