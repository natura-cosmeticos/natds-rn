import React from 'react';
import { SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { RoundButton, NatText, NatSpace } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryRoundButton = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <ScrollView>
      <NatText value="Medium (default)" />
      <RoundButton onPress={() => alert('pressed')} text="+" type="primary" />
      <RoundButton onPress={() => alert('pressed')} text="+" type="secondary" />
      <RoundButton onPress={() => alert('pressed')} text="+" type="tertiary" />
      <RoundButton onPress={() => alert('pressed')}  type="tertiary" />
      <NatSpace />
      <NatText value="Large" />
      <RoundButton
        onPress={() => alert('pressed')}
        text="+"
        type="primary"
        size="large"
      />
      <RoundButton
        onPress={() => alert('pressed')}
        text="+"
        type="secondary"
        size="large"
      />
      <RoundButton
        onPress={() => alert('pressed')}
        text="+"
        type="tertiary"
        size="large"
      />
      <NatText value="huge" />
      <RoundButton
        onPress={() => alert('pressed')}
        text="+"
        type="primary"
        size="huge"
      />
      <RoundButton
        onPress={() => alert('pressed')}
        text="+"
        type="secondary"
        size="huge"
      />
      <RoundButton
        onPress={() => alert('pressed')}
        text="+"
        type="tertiary"
        size="huge"
      />
    </ScrollView>
  </SafeAreaView>
);
