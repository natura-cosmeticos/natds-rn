import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import {
  NatContainer,
  NatText,
  NatButton,
  NatSpace,
} from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatButton = () => (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView>
          <NatText value={'Buttons - Social Selling'} type="h6" />
          <NatSpace />
          <NatButton
            type="default"
            label="default"
            onPress={() => Alert.alert('press button')}
          />
          <NatSpace />
          <NatButton
            type="short"
            label="short"
            onPress={() => Alert.alert('press button')}
          />
          <NatButton
            type="card"
            label="card"
            onPress={() => Alert.alert('press button')}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
);
