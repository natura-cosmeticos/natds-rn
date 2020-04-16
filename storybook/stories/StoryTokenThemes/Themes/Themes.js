import React from 'react';
import {
  StyleSheet, Text, View, SectionList,
} from 'react-native';
import { withTheme } from 'styled-components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'stretch',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    width: 200,
  },
  itemColor: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: '#eaeaea',
    borderWidth: 2,
  },
  colorWrapper: {
    flex: 1,
    flexDirection: 'row',

  },
  itemColorName: {
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: '100',
    marginBottom: 20,
  },
});

const buildData = item => Object.keys(item).map(key => ({ key, value: item[key] }));

const handleRenderItem = ({ item }, textColor) => (
  <View style={styles.container}>
    <Text style={{ ...styles.item, color: textColor }}>{item.key}</Text>
    <View style={styles.colorWrapper}>
      <View style={{ backgroundColor: item.value, ...styles.itemColor }}></View>
      <Text style={{ ...styles.itemColorName, color: textColor }}>{item.value}</Text>
    </View>
  </View>
);

const handleRenderSectionHeader = ({ section }) => (
  <Text style={styles.sectionHeader}>
    {section.title}
  </Text>
);

export const Themes = withTheme((props) => {
  const { theme: { palette }, light } = props;

  const sections = Object
    .keys(palette)
    .map(item => ({ data: buildData(palette[item]), title: item }));

  return (
    <View>
      <Text style={{ ...styles.title, color: palette.text.primary }}>
        {`Natura ${light ? 'Light' : 'Dark'}`}
      </Text>
      <SectionList
        sections={sections}
        renderItem={item => handleRenderItem(item, palette.text.primary)}
        renderSectionHeader={item => handleRenderSectionHeader(item, palette.text.primary)}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
});
