import React, { useState } from 'react';
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
  NatText,
} from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatList = () => {
  const [valueWithoutHighlight, setValueWithoutHighlight] = useState([]);
  const [valueSimple, setValueSimple] = useState([]);
  const [valueMultiple, setValueMultiple] = useState([]);
  const listItems = [
    {
      iconLeft: { svg: { name: 'outlined-navigation-menu' } },
      iconRight: { svg: { name: 'outlined-action-autofilter' } },
      id: '1',
      onPress: () => alert('press'),
      onPressLeft: () => alert('press'),
      onPressRight: () => alert('press'),
      title: 'Title Text',
    },
    {
      dividerBottom: true,
      hideIconLeft: false,
      iconRight: { svg: { name: 'outlined-action-autofilter' } },
      id: '2',
      onPressLeft: () => alert('press'),
      onPressRight: () => alert('press'),
      title: 'Title Text',
    },
    {
      hideIconLeft: true,
      hideIconRight: true,
      iconLeft: { svg: { name: 'outlined-navigation-menu' } },
      id: '3',
      onPressLeft: () => alert('press'),
      onPressRight: () => alert('press'),
      title: 'Title Text',
    },
    {
      dividerTop: true,
      hideIconRight: false,
      iconLeft: { svg: { name: 'outlined-navigation-menu' } },
      id: '4',
      onPressLeft: () => alert('press'),
      onPressRight: () => alert('press'),
      title: 'Title Text',
    },
  ];

  const changeWithoutHighlight = (result) => {
    setValueWithoutHighlight(result);
  };
  const changeSimple = (result) => {
    setValueSimple(result);
  };
  const changeMulitple = (result) => {
    setValueMultiple(result);
  };

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView>
          <NatText value="List with simple select without Highlight" />
          <NatText value="Value: " />
          <NatText value={JSON.stringify(valueWithoutHighlight)} />
          <NatList
            items={listItems}
            selected={valueWithoutHighlight}
            onChange={changeWithoutHighlight}
            showHighlight={false}
          />
          <NatText value="List with simple select" />
          <NatText value="Value: " />
          <NatText value={JSON.stringify(valueSimple)} />
          <NatList
            items={listItems}
            selected={valueSimple}
            onChange={changeSimple}
          />
          <NatText value="List with multiple select" />
          <NatText value="Value: " />
          <NatText value={JSON.stringify(valueMultiple)} />
          <NatList
            items={listItems}
            selected={valueMultiple}
            onChange={changeMulitple}
            multiSelect
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatList.propTypes = {
};
