import React from 'react';
import {
  SafeAreaView, ScrollView, Dimensions, View,
} from 'react-native';

import { Avatar, NatText } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    marginTop: 2,
    width: Dimensions.get('window').width,
  },
};

export const StoryAvatar = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <ScrollView>
      <NatText value="Letter" />
      <View style={{ flexDirection: 'row' }}>
        <Avatar name="MP" size={1} type='letter' />
        <Avatar name="MP" size={2} type='letter' />
        <Avatar name="MP" size={3} type='letter' />
        <Avatar name="MP" size={4} type='letter' />
        <Avatar name="MP" size={5} type='letter' />
      </View>
      <NatText value="Anonymous" />
      <View style={{ flexDirection: 'row' }}>
        <Avatar size={1} type='anonymous' />
        <Avatar size={2} type='anonymous' />
        <Avatar size={3} type='anonymous' />
        <Avatar size={4} type='anonymous' />
        <Avatar size={5} type='anonymous' />
      </View>

      <NatText value="Image" />
      <View style={{ flexDirection: 'row' }}>
        <Avatar size={1} type='image' uri='https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d' />
        <Avatar size={2} type='image' uri='https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d'/>
        <Avatar size={3} type='image' uri='https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d' />
        <Avatar size={4} type='image' uri='https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d' />
        <Avatar size={5} type='image' uri='https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d' />
      </View>
    </ScrollView>
  </SafeAreaView>
);
