import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatSpace,
  ThemeNaturaLight as Theme,
  NatText,
  Divider,
} from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryDivider = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <NatContainer>
      <ScrollView>
        <NatSpace
          marginTop="small"
          backgroundColor={Theme.palette.background.paper}
        />
        <NatText value="Default" type="body1" />
        <Divider />
        <NatSpace
          marginTop="small"
          backgroundColor={Theme.palette.background.paper}
        />
        <NatText value="Custom Background" type="body1" />
        <Divider
          backgroundColor={Theme.palette.grayscale.colorBrdBlack}
        />
        <NatSpace
          marginTop="small"
          backgroundColor={Theme.palette.background.paper}
        />
        <Divider
          backgroundColor={Theme.palette.primary.main}
        />
        <NatSpace
          marginTop="small"
          backgroundColor={Theme.palette.background.paper}
        />

      </ScrollView>
    </NatContainer>
  </SafeAreaView>

);
