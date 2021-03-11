/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import {
  View, FlatList, Text, Animated, Easing,
} from 'react-native';
import { Card } from '../Card';
import { Divider } from '../Divider';
import { List } from './List';
import { ListItem } from './ListItem';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';
import { TextWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';

export default {
  component: List,
  parameters: {
    componentSubtitle: 'List let users choose between several items',
  },
  title: 'Components|List',
};

const data = [
  { title: 'A Game of Thrones ', key: 'item1' },
  { title: 'A Clash of Kings', key: 'item2' },
  { title: 'A Storm of Swords', key: 'item3' },
  { title: 'A Feast for Crows', key: 'item4' },
  { title: 'A Dance with Dragons', key: 'item5', extraInfo: { releaseDate: '2000', author: 'George R.R. Marting', rating: 10 } },
  { title: 'The Winds of Winter', key: 'item6', unreleased: true },
  { title: 'A Dream of Spring', key: 'item7', unreleased: true },
];

export const Base = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem>
          <TextWithTheme>{item.title}</TextWithTheme>
        </ListItem>
      )}
    />
  );
};

export const States = () => {
  const [selected, setSelected] = useState('');

  return (
    <FlatList
      ItemSeparatorComponent={Divider}
      data={data}
      renderItem={({ item }) => (
        <ListItem
          inline
          onPress={() => setSelected(item.key)}
          disabled={item.unreleased}
          selected={item.key === selected}
        >
          <TextWithTheme>{item.title}</TextWithTheme>
          <Checkbox
            selected={item.key === selected}
            onPress={() => setSelected(item.key)}
            disabled={item.unreleased}
          />
        </ListItem>
      )}
    />
  );
};

const Collapse = ({ children, collapsed = true }) => {
  const height = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(height, {
      duration: 600,
      easing: Easing.inOut(Easing.quad),
      toValue: collapsed ? 0 : 150,
      useNativeDriver: false,
    }).start();
  }, [collapsed]);

  const collapseStyles = {
    backgroundColor: '#eaeaea',
    overflow: 'hidden',
  };

  return (
    <Animated.View style={{ ...collapseStyles, height }}>
      {children}
    </Animated.View>
  );
}

const renderExtraInfo = (extraInfo) => {
  if (!extraInfo) return null;

  const extraInfoData = Object
    .keys(extraInfo)
    .map((item, index) => (
      <>
        <ListItem inline>
          <TextWithTheme>{item}</TextWithTheme>
          <TextWithTheme>{extraInfo[item]}</TextWithTheme>
        </ListItem>
        {index < Object.keys(extraInfo).length - 1 ? <Divider type="inset" /> : null}
      </>
    ));

  return extraInfoData;
};

export const Dividers = () => {
  const [isCollapsed, setCollapse] = useState('jjjjj');

  const toggleCollapse = (id) => {
    const newValue = isCollapsed === id ? '' : id;

    setCollapse(newValue);
  };

  return (
    <View style={{ flex: 1, paddingVertical: 100, paddingHorizontal: 20 }}>
      <Card>
        <FlatList
          ItemSeparatorComponent={Divider}
          data={data}
          renderItem={({ item, index, separators }) => (
            <>
              <ListItem inline onPress={() => toggleCollapse(item.key)}>
                <Text>{item.title}</Text>
                {
                  item.extraInfo
                    ?
                    <Icon
                      size="small"
                      name={`outlined-navigation-arrow${isCollapsed === item.key ? 'bottom' : 'left'}`}
                    /> : null
                }
              </ListItem>
              {
                item.extraInfo
                  ? (
                    <Collapse collapsed={!(isCollapsed === item.key)}>
                      {renderExtraInfo(item.extraInfo)}
                    </Collapse>
                  )
                  : null
              }
            </>
          )}
        />
      </Card>
    </View>
  );
};

export const Vertical = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={Divider}
      renderItem={({ item }) => (
        <ListItem onPress={() => console.log('foi')}>
          <TextWithTheme>{item.title}</TextWithTheme>
          <View style={{ height: 200, backgroundColor: '#eaeaea' }} />
        </ListItem>
      )}
    />
  );
};
