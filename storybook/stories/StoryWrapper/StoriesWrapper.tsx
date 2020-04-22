import React, { useState } from 'react';
import { themes } from '@naturacosmeticos/natds-styles';
import { ThemeProvider } from 'styled-components/native';
import {
  ScrollView, SafeAreaView, Dimensions, StyleSheet,
} from 'react-native';
import { NatContainer, getBackgroundPaper } from '../../../lib';
import { TextWithTheme } from '../HelperComponents/ThemeHelper.styles';
import { Container, Button } from './StoryWrapper.styles';
import { ThemeSelectorModal } from './ThemeSelectorModal';
import { SwitchWithLabel } from './SwitchWithLabel';

const styles = StyleSheet.create({
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});

export const StoriesWrapper = ({ story }) => {
  themes.test = themes.natura;
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
            onChange={changeMode}
            value={isLight}
            label="Light"
            isActive={isLight}
            isLast
          />
        </Container>
        <ScrollView>
          <NatContainer style={{ backgroundColor: getBackgroundPaper(theme) }}>
            {story && story({ activeTheme, light: isLight })}
          </NatContainer>
        </ScrollView>
      </ThemeProvider>
    </SafeAreaView>
  );
};
