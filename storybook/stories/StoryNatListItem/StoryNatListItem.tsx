import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Text,
  Alert,
} from 'react-native';
import { NatContainer, NatListItem } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatListItem = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <NatContainer>
      <ScrollView>
        <NatListItem
          title="Title Text and SVG icon"
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
          onPressLeft={() => Alert.alert('press')}
          onPressRight={() => Alert.alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and SVG icon"
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          onPressLeft={() => Alert.alert('press')}
          onPress={() => Alert.alert('press')}
          dividerBottom
          active
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and SVG icon"
          onPress={() => Alert.alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and URL icon"
          iconRight={{
            uri:
              'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/generic_menu/img_url_tmp_generic_menu_20170822160140.png',
          }}
          hideIconLeft
          onPressLeft={() => Alert.alert('press')}
          onPressRight={() => Alert.alert('press')}
          dividerTop
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and URL icon"
          iconLeft={{
            uri:
              'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/generic_menu/img_url_tmp_generic_menu_20170822160140.png',
          }}
          onPressLeft={() => Alert.alert('press')}
          onPress={() => Alert.alert('press')}
          active
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and URL icon"
          hideIconLeft
          onPress={() => Alert.alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and Node icon"
          iconRight={{ node: <Text>DS</Text> }}
          onPressLeft={() => Alert.alert('press')}
          onPressRight={() => Alert.alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and Node icon"
          iconLeft={{ node: <Text>DS</Text> }}
          onPressLeft={() => Alert.alert('press')}
          onPress={() => Alert.alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and Node icon"
          onPress={() => Alert.alert('press')}
        />
        <View style={{ height: 10 }} />
      </ScrollView>
    </NatContainer>
  </SafeAreaView>
);
