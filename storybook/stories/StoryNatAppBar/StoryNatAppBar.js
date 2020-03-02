import React, { useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatAppBar,
  NatLogo,
} from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatAppBar = () => {
  const logo = () => (<NatLogo name="logo-natura-horizontal" width={150} height={56} />);

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView>
          <NatAppBar
            title="Center title"
            alignTitle="center"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('press')}
            onPressRight={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatAppBar
            title="Title Text"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('press')}
            onPressRight={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatAppBar
            title="Title Text"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            onPressLeft={() => alert('press')}
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatAppBar
            title="Title Text"
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatAppBar
            title="Title Text"
            node={logo()}
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('press')}
            onPressRight={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatAppBar
            title="Title Text"
            alignTitle="center"
            node={logo()}
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            onPressLeft={() => alert('press')}
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatAppBar
            title="Title Text"
            node={logo()}
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatAppBar
            title="Exclusive"
            showIconLeft={false}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('press')}
            onPressRight={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatAppBar
            title="Exclusive"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            showIconRight={false}
            onPressLeft={() => alert('press')}
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatAppBar
            title="Exclusive"
            showIconLeft={false}
            showIconRight={false}
            onPress={() => alert('press')}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatAppBar.propTypes = {
};
