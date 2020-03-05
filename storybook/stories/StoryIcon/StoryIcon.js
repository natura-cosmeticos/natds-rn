import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Dimensions,
  Text,
} from 'react-native';
import {
  NatContainer,
  NatText,
  Icon,
  NatTextInput,
} from '../../../lib';
import natdsIcons from '@naturacosmeticos/natds-icons/dist/natds-icons.json';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryIcon = () => {
  const [input, setInput] = useState('');

  const renderItem = name => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Icon name={name} />
      <Text>{"  "}</Text>
      <NatText type="body1" value={name} />
    </View>
  );

  const listHeader = () => (
    <>
      <NatText type="h6" value="ICONS" />
      <NatTextInput
        label=""
        placeholder="Search"
        onChangeText={setInput}
        value={input}
        size="normal"
        type="default"
        icon={null}
      />
    </>
  );

  const filterIconList = filter => Object.keys(natdsIcons).filter(item => item.includes(filter.toLowerCase()));

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <FlatList
          ListHeaderComponent={listHeader()}
          data={filterIconList(input)}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item}
        />
      </NatContainer>
    </SafeAreaView>
  );
};
