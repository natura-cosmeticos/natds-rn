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
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
  },
};

export const StoryTokenColors = () => {
  const renderItem = (name, color) => (
    <View style={{ flexDirection: 'row' }}>
      <NatText type="body1" value={name} />
      <View style={{ backgroundColor: color, width: 30, height: 30 }} />
      <NatText type="body1" value={color} />
    </View>
  );

  const primary = Object.keys(Tokens.colors.natura.primary)
    .map(k => ({ name: k, color: Tokens.colors.natura.primary[k] }));
  const secondary = Object.keys(Tokens.colors.natura.secondary)
    .map(k => ({ name: k, color: Tokens.colors.natura.secondary[k] }));
  const grayscale = Object.keys(Tokens.colors.natura.grayscale)
    .map(k => ({ name: k, color: Tokens.colors.natura.grayscale[k] }));
  const level = Object.keys(Tokens.colors.natura.level)
    .map(k => ({ name: k, color: Tokens.colors.natura.level[k] }));
  const complementary = Object.keys(Tokens.colors.natura.complementary)
    .map(k => ({ name: k, color: Tokens.colors.natura.complementary[k] }));

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
