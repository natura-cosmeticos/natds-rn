import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { NatContainer, NatHeader } from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FAFAFA',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatHeader = () => {
  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
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
};

StoryNatHeader.propTypes = {
};
