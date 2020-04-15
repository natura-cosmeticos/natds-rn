import React, { useState } from 'react';
import { themes } from '@naturacosmeticos/natds-styles';
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

  return (
    <SafeAreaView style={styles.defaultScreen}>
        <Button
            type="primary"
            label="Change Theme"
            onPress={() => changeTheme(!isLight)}
          />
        <ScrollView>
      <NatContainer>
        {story && story({ light: isLight, theme: themes.natura[mode] })}
      </NatContainer>
        </ScrollView>
    </SafeAreaView>
  );
};
