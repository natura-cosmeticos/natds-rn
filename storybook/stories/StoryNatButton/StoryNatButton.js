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
          <NatText value={`Buttons - Variations`} type="h6" />
          <NatSpace />
          <NatButton
            type="newDefault"
            label="newDefault"
            onPress={() => alert('press button')}
          />
          <NatSpace />
          <NatButton
            type="disabled"
            label="disabled"
            onPress={() => alert('press button')}
          />
          <NatSpace />
          <NatButton
            type="link"
            label="link"
            onPress={() => alert('press button')}
          />
          <NatSpace />
          <NatButton
            type="newShort"
            label="newShort"
            onPress={() => alert('press button')}
          />
          <NatSpace />
          <NatButton
            type="outline"
            label="outline"
            onPress={() => alert('press button')}
          />
          <NatSpace />
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
