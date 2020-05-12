import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { TabBar, NatSpace, NatText, ThemeNaturaLight } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryTabBar = () => {
  const navigation = {
    routes: [
      {
        key: 'given',
        title: 'Given',
      },
      {
        key: 'received',
        title: 'Received',
      },
      {
        key: 'disabled',
        status: 'disabled',
        title: 'Disabled',
      },
    ],
  };
  const position = {};

  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <ScrollView>
        <NatText
          value={'Example with types: primary, secondary and disabled'}
          type="h6"
          margin={ThemeNaturaLight.spacing.spacingStandard}
        />
        <NatSpace>
          <TabBar
            navigationState={navigation}
            position={position}
            setIndex={setIndex}
            value={index}
          />
        </NatSpace>
      </ScrollView>
    </SafeAreaView>
  );
};
