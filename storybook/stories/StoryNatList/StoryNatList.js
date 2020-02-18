import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatList,
  NatListItem,
  NatLogo,
} from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FAFAFA',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatList = () => {
  const listItems = [
    {
      id: '1',
      title: 'Title Text',
      iconLeft: { svg: { name: 'outlined-navigation-menu' } },
      iconRight: { svg: { name: 'outlined-action-autofilter' } },
      onPressLeft: () => alert('press'),
      onPress: () => alert('press'),
      onPressRight: () => alert('press'),
    },
    {
      id: '2',
      title: 'Title Text',
      iconRight: { svg: { name: 'outlined-action-autofilter' } },
      hideIconLeft: false,
      onPressLeft: () => alert('press'),
      onPressRight: () => alert('press'),
      dividerBottom: true,
    },
    {
      id: '3',
      title: 'Title Text',
      iconLeft: { svg: { name: 'outlined-navigation-menu' } },
      hideIconRight: false,
      onPressLeft: () => alert('press'),
      onPressRight: () => alert('press'),
    },
    {
      id: '4',
      title: 'Title Text',
      iconLeft: { svg: { name: 'outlined-navigation-menu' } },
      hideIconRight: false,
      onPressLeft: () => alert('press'),
      onPressRight: () => alert('press'),
      dividerTop: true,
    },
  ];

  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
        <ScrollView>
          <NatList
            items={listItems}
            selected="3"
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatList.propTypes = {
};
