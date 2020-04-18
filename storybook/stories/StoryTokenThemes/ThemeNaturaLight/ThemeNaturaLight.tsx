/* eslint-disable max-lines */
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatText,
  ThemeNaturaLight as Theme,
} from '../../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const ThemeNaturaLight: React.SFC<{}> = () => {
  const renderItem = (name, color) => (
    <View style={{ flexDirection: 'row' }}>
      <NatText type="body1" value={name} />
      <View style={{ backgroundColor: color, height: 30, width: 30 }} />
      <NatText type="body1" value={color} />
    </View>
  );
  const primary = Object.keys(Theme.palette.primary).map(key => ({
    color: Theme.palette.primary[key],
    name: key,
  }));
  const secondary = Object.keys(Theme.palette.secondary).map(key => ({
    color: Theme.palette.secondary[key],
    name: key,
  }));
  const error = Object.keys(Theme.palette.error).map(key => ({
    color: Theme.palette.error[key],
    name: key,
  }));
  const success = Object.keys(Theme.palette.success).map(key => ({
    color: Theme.palette.success[key],
    name: key,
  }));
  const background = Object.keys(Theme.palette.background).map(key => ({
    color: Theme.palette.background[key],
    name: key,
  }));
  const text = Object.keys(Theme.palette.text).map(key => ({
    color: Theme.palette.text[key],
    name: key,
  }));
  const complementary = Object.keys(Theme.palette.complementary).map(key => ({
    color: Theme.palette.complementary[key],
    name: key,
  }));

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView>
          <NatText type="h6" value="PRIMARY" />
          <FlatList
            data={primary}
            renderItem={({ item }) => renderItem(item.name, item.color)}
            keyExtractor={item => item.name}
          />
          <NatText type="h6" value="SECONDARY" />
          <FlatList
            data={secondary}
            renderItem={({ item }) => renderItem(item.name, item.color)}
            keyExtractor={item => item.name}
          />
          <NatText type="h6" value="ERROR" />
          <FlatList
            data={error}
            renderItem={({ item }) => renderItem(item.name, item.color)}
            keyExtractor={item => item.name}
          />
          <NatText type="h6" value="SUCCESS" />
          <FlatList
            data={success}
            renderItem={({ item }) => renderItem(item.name, item.color)}
            keyExtractor={item => item.name}
          />
          <NatText type="h6" value="BACKGROUND" />
          <FlatList
            data={background}
            renderItem={({ item }) => renderItem(item.name, item.color)}
            keyExtractor={item => item.name}
          />
          <NatText type="h6" value="TEXT" />
          <FlatList
            data={text}
            renderItem={({ item }) => renderItem(item.name, item.color)}
            keyExtractor={item => item.name}
          />
          <NatText type="h6" value="COMPLEMENTARY" />
          <FlatList
            data={complementary}
            renderItem={({ item }) => renderItem(item.name, item.color)}
            keyExtractor={item => item.name}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};
