import React, { useState } from 'react';
import { themes } from '@naturacosmeticos/natds-styles';
import { ThemeProvider } from 'styled-components/native';
import {
  ScrollView, SafeAreaView, Dimensions, StyleSheet, Platform, View,
} from 'react-native';
import { TextWithTheme } from '../HelperComponents/ThemeHelper.styles';
import { getBackgroundPaper } from '../themeSelectors';
import { Container, Button } from './StoryWrapper.styles';
import { ThemeSelectorModal } from './ThemeSelectorModal';
import { SwitchWithLabel } from './SwitchWithLabel';

const styles = StyleSheet.create({
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});

export const StoriesWrapperNative = ({ story }) => {
  const themeNames = Object.keys(themes);
  const [isLight, changeMode] = useState(true);
  const [activeTheme, changeTheme] = useState(themeNames[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const mode = isLight ? 'light' : 'dark';
  const theme = themes[activeTheme][mode];

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <ThemeProvider theme={theme}>
        <Container>
          <ThemeSelectorModal
            modalVisible={modalVisible}
            themeNames={themeNames}
            activeTheme={activeTheme}
            changeTheme={changeTheme}
            setModalVisible={setModalVisible}
          />
          <Button onPress={() => setModalVisible(true)}>
            <TextWithTheme>Change Theme</TextWithTheme>
          </Button>
          <SwitchWithLabel
            onChange={changeMode}
            label="Light"
            isActive={isLight}
            isLast
          />
        </Container>
        <ScrollView>
          <View style={{ backgroundColor: getBackgroundPaper(theme) }}>
            {story && story({ activeTheme, light: isLight })}
          </View>
        </ScrollView>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export const StoriesWrapperWeb = ({ story }) => (
  <SafeAreaView style={styles.defaultScreen}>
    <ScrollView>
      <View>
        {story && story()}
      </View>
    </ScrollView>
  </SafeAreaView>
);

export const StoriesWrapper = props => (
  Platform.OS === 'web'
    ? <StoriesWrapperWeb {...props} />
    : <StoriesWrapperNative {...props} />
);
