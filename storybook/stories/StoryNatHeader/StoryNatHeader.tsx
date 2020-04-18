import React from 'react';
import {
  ScrollView, SafeAreaView, Dimensions, Alert,
} from 'react-native';
import { NatContainer, NatHeader } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatHeader: React.SFC<{}> = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <NatContainer>
      <ScrollView>
        <NatHeader
          title="Title Text"
          icon="iconRight"
          onPress={() => Alert.alert('press')}
          onPressRight={() => Alert.alert('press')}
          textRight="Text Right"
        />
      </ScrollView>
    </NatContainer>
  </SafeAreaView>
);
