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
  Tokens,
} from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryTokenColors = () => {
  const renderItem = (name, color) => (
    <View style={{ flexDirection: 'row' }}>
      <NatText type="body1" value={name} />
      <View style={{ backgroundColor: color, height: 30, width: 30 }} />
      <NatText type="body1" value={color} />
    </View>
  );

  const primary = Object.keys(Tokens.colors.natura.primary)
    .map(key => ({ color: Tokens.colors.natura.primary[key], name: key }));
  const secondary = Object.keys(Tokens.colors.natura.secondary)
    .map(key => ({ color: Tokens.colors.natura.secondary[key], name: key }));
  const grayscale = Object.keys(Tokens.colors.natura.grayscale)
    .map(key => ({ color: Tokens.colors.natura.grayscale[key], name: key }));
  const level = Object.keys(Tokens.colors.natura.level)
    .map(key => ({ color: Tokens.colors.natura.level[key], name: key }));
  const complementary = Object.keys(Tokens.colors.natura.complementary)
    .map(key => ({ color: Tokens.colors.natura.complementary[key], name: key }));

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
          <NatText type="h6" value="GRAYSCALE" />
          <FlatList
            data={grayscale}
            renderItem={({ item }) => renderItem(item.name, item.color)}
            keyExtractor={item => item.name}
          />
          <NatText type="h6" value="LEVEL" />
          <FlatList
            data={level}
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

StoryTokenColors.propTypes = {
};
