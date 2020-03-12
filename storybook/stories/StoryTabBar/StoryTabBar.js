import React from 'react';
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
        title: 'Disabled',
        status: 'disabled'
      },
    ],
  };
  const position = {};
  const setIndex = value => alert('set index', value);
  return (
    <SafeAreaView style={styles.defaultScreen}>
      <ScrollView>
        <NatText value={"Example with types: primary, secondary and disabled"} type="h6" margin={ThemeNaturaLight.spacing.spacingStandard} />
        <NatSpace>
          <TabBar
            navigationState={navigation}
            position={position}
            setIndex={setIndex}
          />
        </NatSpace>
      </ScrollView>
    </SafeAreaView>
  );
};
