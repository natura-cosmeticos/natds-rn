import React, { useState } from 'react';
import { themes } from '@naturacosmeticos/natds-styles';
import { ThemeProvider } from 'styled-components';
import { ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { NatContainer, Button } from '../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoriesWrapper = ({ story }) => {
  const [isLight, changeTheme] = useState(true);

  const mode = isLight ? 'light' : 'dark';
  const theme = themes.natura[mode];

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <Button
          type="primary"
          label="Change Theme"
          onPress={() => changeTheme(!isLight)}
        />
      <ScrollView>
        <ThemeProvider theme={theme}>
          <NatContainer>
            {story && story({ light: isLight, theme: themes.natura[mode] })}
          </NatContainer>
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
};
