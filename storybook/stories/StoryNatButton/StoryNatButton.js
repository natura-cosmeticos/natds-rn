import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
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

/*
<NatButton
  type="primary"
  color="default"
  state="enabled"
  iconLeft=""
  iconRight=""
  size="medium"
  label="Primary default enable"
  onPress={() => alert('press button')}
/>
*/
export const StoryNatButton = () => {

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView>
          <NatText value={`Buttons - Social Selling`} type="h6" />
          <NatSpace />
          <NatButton
            type="default"
            label="default"
            onPress={() => alert('press button')}
          />
          <NatSpace />
          <NatButton
            type="short"
            label="short"
            onPress={() => alert('press button')}
          />
          <NatButton
            type="card"
            label="card"
            onPress={() => alert('press button')}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatButton.propTypes = {
};
