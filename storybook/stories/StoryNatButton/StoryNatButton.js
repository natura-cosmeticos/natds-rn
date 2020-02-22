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
} from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FAFAFA',
    marginTop: 0,
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
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
        <ScrollView>
          <NatText value={`Buttons by type`} />
          <NatButton
            type="newDefault"
            label="Button with type newDefault"
            onPress={() => alert('press button')}
          />
          <NatButton
            type="short"
            label="Button with type short"
            onPress={() => alert('press button')}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatButton.propTypes = {
};
