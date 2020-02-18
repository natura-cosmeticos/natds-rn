import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatText,
} from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FAFAFA',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatAppBarSearch = () => (
  <SafeAreaView>
    <NatContainer style={styles.defaultScreen}>
      <ScrollView>
        <NatText value="Developing..." />
      </ScrollView>
    </NatContainer>
  </SafeAreaView>
);

StoryNatAppBarSearch.propTypes = {
};
