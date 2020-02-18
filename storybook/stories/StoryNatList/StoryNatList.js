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
    backgroundColor: '#FAFAFA',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatList = () => {
  const [valueWithoutHighlight, setValueWithoutHighlight] = useState([]);
  const [valueSimple, setValueSimple] = useState([]);
  const [valueMultiple, setValueMultiple] = useState([]);
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
      hideIconLeft: true,
      hideIconRight: true,
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
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
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
