/* eslint-disable max-lines */
import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import { NatContainer, NatAppBar, NatLogo } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatAppBar = () => {
  const logo = () => (
    <NatLogo name="logo-natura-horizontal" width={150} height={56} />
  );
  const logoAvon = () => <NatLogo name="logo-avon" width={208} height={47} />;
  const logoAesop = () => <NatLogo name="logo-aesop" width={100} height={56} />;
  const logoTheBodyShop = () => (
    <NatLogo name="logo-the-body-shop" width={200} height={56} />
  );
  const logoNaturaco = () => (
    <NatLogo name="logo-naturaco" width={150} height={56} />
  );

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView>
          <NatAppBar
            title="Center title"
            alignTitle="center"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => Alert.alert('press')}
            onPressRight={() => Alert.alert('press')}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Title Text"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => Alert.alert('press')}
            onPressRight={() => Alert.alert('press')}
            showNotificationRight={true}
            showNotificationLeft={true}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Title Text"
            iconLeft={{ svg: { name: 'outlined-navigation-directionright' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => Alert.alert('press')}
            onPressRight={() => Alert.alert('press')}
            showNotificationLeft={true}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Title Text"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-content-bellringing' } }}
            onPressLeft={() => Alert.alert('press')}
            onPress={() => Alert.alert('press')}
            showNotificationLeft={true}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Title Text"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-content-bellringing' } }}
            onPressLeft={() => Alert.alert('press')}
            onPress={() => Alert.alert('press')}
            showNotificationRight={true}
          />
          <View style={{ height: 60 }} />
          <NatAppBar title="Title Text" onPress={() => Alert.alert('press')} />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Title Text"
            node={logo()}
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => Alert.alert('press')}
            onPressRight={() => Alert.alert('press')}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Title Text"
            alignTitle="center"
            node={logo()}
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            onPressLeft={() => Alert.alert('press')}
            onPress={() => Alert.alert('press')}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Title Text"
            node={logo()}
            onPress={() => Alert.alert('press')}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Exclusive"
            showIconLeft={false}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => Alert.alert('press')}
            onPressRight={() => Alert.alert('press')}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Exclusive"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            showIconRight={false}
            onPressLeft={() => Alert.alert('press')}
            onPress={() => Alert.alert('press')}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Exclusive"
            showIconLeft={false}
            showIconRight={false}
            onPress={() => Alert.alert('press')}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Avon"
            node={logoAvon()}
            onPress={() => Alert.alert('press')}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="Aesop"
            node={logoAesop()}
            onPress={() => Alert.alert('press')}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="The Body Shop"
            node={logoTheBodyShop()}
            onPress={() => Alert.alert('press')}
          />
          <View style={{ height: 60 }} />
          <NatAppBar
            title="NaturaCo"
            node={logoNaturaco()}
            onPress={() => Alert.alert('press')}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatAppBar.propTypes = {};
