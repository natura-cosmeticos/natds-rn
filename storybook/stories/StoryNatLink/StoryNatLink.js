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
  NatLink,
} from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatLink = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <NatContainer>
      <ScrollView>
        <NatSpace
          marginTop="small"
          marginBottom="none"
          marginRight="none"
          marginLeft="none"
          paddingTop="none"
          paddingBottom="standard"
          paddingRight="none"
          paddingLeft="none"
        />
        <NatText value="Text without link" type="body1" />
        <NatLink value="Text with link" type="body1" onPress={() => alert('click link')} />
        <NatLink value="Text with link" type="body1" onPress={() => alert('click link')} align="center" />
        <NatLink value="Text with link" type="body1" onPress={() => alert('click link')} align="flex-end" />
      </ScrollView>
    </NatContainer>
  </SafeAreaView>

);
