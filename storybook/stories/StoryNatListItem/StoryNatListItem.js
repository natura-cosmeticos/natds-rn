import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Text,
} from 'react-native';
import {
  NatContainer,
  NatListItem,
} from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FAFAFA',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatListItem = () => (
  <SafeAreaView>
    <NatContainer style={styles.defaultScreen}>
      <ScrollView>
        <NatListItem
          title="Title Text and SVG icon"
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
          onPressLeft={() => alert('press')}
          onPressRight={() => alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and SVG icon"
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          onPressLeft={() => alert('press')}
          onPress={() => alert('press')}
          dividerBottom
          active
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and SVG icon"
          onPress={() => alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and URL icon"
          iconRight={{ uri: 'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/generic_menu/img_url_tmp_generic_menu_20170822160140.png' }}
          hideIconLeft
          onPressLeft={() => alert('press')}
          onPressRight={() => alert('press')}
          dividerTop
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and URL icon"
          iconLeft={{ uri: 'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/generic_menu/img_url_tmp_generic_menu_20170822160140.png' }}
          onPressLeft={() => alert('press')}
          onPress={() => alert('press')}
          active
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and URL icon"
          hideIconLeft
          onPress={() => alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and Node icon"
          iconRight={{ node: <Text>DS</Text> }}
          onPressLeft={() => alert('press')}
          onPressRight={() => alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and Node icon"
          iconLeft={{ node: <Text>DS</Text> }}
          onPressLeft={() => alert('press')}
          onPress={() => alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatListItem
          title="Title Text and Node icon"
          onPress={() => alert('press')}
        />
        <View style={{ height: 10 }} />
      </ScrollView>
    </NatContainer>
  </SafeAreaView>
);

StoryNatListItem.propTypes = {
};
