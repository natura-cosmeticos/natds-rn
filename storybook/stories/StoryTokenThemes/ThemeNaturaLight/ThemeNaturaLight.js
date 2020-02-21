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
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
  },
};

export const ThemeNaturaLight = () => {
  const renderItem = (name, color) => (
    <View style={{ flexDirection: 'row' }}>
      <NatText type="body1" value={name} />
      <View style={{ backgroundColor: color, height: 30, width: 30 }} />
      <NatText type="body1" value={color} />
    </View>
  );

  const primary = Object.keys(Theme.palette.primary)
    .map(k => ({ color: Theme.palette.primary[k], name: k }));
  const secondary = Object.keys(Theme.palette.secondary)
    .map(k => ({ color: Theme.palette.secondary[k], name: k }));
  const error = Object.keys(Theme.palette.error)
    .map(k => ({ color: Theme.palette.error[k], name: k }));
  const success = Object.keys(Theme.palette.success)
    .map(k => ({ color: Theme.palette.success[k], name: k }));
  const background = Object.keys(Theme.palette.background)
    .map(k => ({ color: Theme.palette.background[k], name: k }));
  const text = Object.keys(Theme.palette.text)
    .map(k => ({ color: Theme.palette.text[k], name: k }));
  const complementary = Object.keys(Theme.palette.complementary)
    .map(k => ({ color: Theme.palette.complementary[k], name: k }));

  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
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

ThemeNaturaLight.propTypes = {
};
