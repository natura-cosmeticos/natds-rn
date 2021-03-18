/* eslint-disable max-lines */
import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Card } from '../Card';
import { Divider } from '../Divider';
import { ListItem, ListItemFeedback } from './ListItem';
import { Checkbox } from '../Checkbox';
import { TextWithTheme } from '../../common/HelperComponents/ThemeHelper.styles';
import { data } from './stories.data';

export default {
  component: ListItem,
  parameters: {
    componentSubtitle: 'List let users choose between several items',
  },
  title: 'Components|List',
};

export const Base = () => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <ListItem>
        <View style={{ padding: 16 }}>
          <TextWithTheme>{item.title}</TextWithTheme>
        </View>
      </ListItem>
    )}
  />
);

export const RippleFeedback = () => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <ListItem feedback="ripple" onPress={() => console.log('I was pressed')}>
        <View style={{ padding: 16 }}>
          <TextWithTheme>{item.title}</TextWithTheme>
        </View>
      </ListItem>
    )}
  />
);

export const SelectionFeedback = () => {
  const [selected, setSelected] = useState('');

  const renderItem = ({ item }) => {
    const listItemProps = {
      feedback: 'selection' as ListItemFeedback,
      selected: item.key === selected,
      ...(item.unreleased ? {} : { onPress: () => setSelected(item.key) }),
    };

    return (
      <ListItem {...listItemProps}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
        }}>
          <TextWithTheme>{item.title}</TextWithTheme>
          <Checkbox
            selected={item.key === selected}
            onPress={() => setSelected(item.key)}
            disabled={item.unreleased}
          />
        </View>
      </ListItem>
    );
  };

  return (
    <FlatList
      ItemSeparatorComponent={Divider}
      data={data}
      renderItem={renderItem}
      extraData={selected}
    />
  );
};


export const Dividers = () => {
  const renderExtraInfo = (extraInfo) => {
    if (!extraInfo) return null;

    const extraInfoData = Object
      .keys(extraInfo)
      .map((item, index) => (
        <View key={extraInfo[item].key} style={{ backgroundColor: '#fafafa' }}>
          <ListItem>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 32,
              paddingVertical: 16,
            }}>
              <TextWithTheme>{item}</TextWithTheme>
              <TextWithTheme>{extraInfo[item]}</TextWithTheme>
            </View>
          </ListItem>
          {
            index < Object.keys(extraInfo).length - 1
              ? <Divider type="inset" />
              : null
          }
        </View >
      ));

    return extraInfoData;
  };

  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 20,
    }}>
      <Card>
        <FlatList
          ItemSeparatorComponent={Divider}
          data={data}
          renderItem={({ item }) => (
            <>
              <ListItem onPress={() => console.log('I was pressed')}>
                <View style={{ padding: 16 }}>
                  <Text>{item.title}</Text>
                </View>
              </ListItem>
              {renderExtraInfo(item.extraInfo)}
            </>
          )}
        />
      </Card>
    </View>
  );
};
