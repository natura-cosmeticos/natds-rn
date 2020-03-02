import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { NatContainer, NatHeader } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatHeader = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <NatContainer>
      <ScrollView>
        <NatHeader
          title="Title Text"
          icon="iconRight"
          onPress={() => alert('press')}
          onPressRight={() => alert('press')}
          textRight="Text Right"
        />
      </ScrollView>
    </NatContainer>
  </SafeAreaView>
);

StoryNatHeader.propTypes = {
};
