import React from 'react';
import { withTheme } from 'styled-components';
import { View, SectionList } from 'react-native';
import {
  ItemWrapper,
  ListItemLabel,
  ColorContainer,
  ColorIndicator,
  ColorName,
  SectionHeader,
  Title,
} from './Themes.styles';

const buildData = item => Object.keys(item).map(key => ({ key, value: item[key] }));

const handleRenderItem = ({ item }) => (
  <ItemWrapper>
    <ListItemLabel >{item.key}</ListItemLabel>
    <ColorContainer>
      <ColorIndicator style={{ backgroundColor: item.value }} />
      <ColorName>{item.value}</ColorName>
    </ColorContainer>
  </ItemWrapper>
);

const handleRenderSectionHeader = ({ section }) => (
  <SectionHeader>{section.title}</SectionHeader>
);

export const Themes = withTheme((props) => {
  const { theme: { palette }, light, activeTheme } = props;

  const sections = Object
    .keys(palette)
    .map(item => ({ data: buildData(palette[item]), title: item }));

  return (
    <View>
      <Title>
        {`${activeTheme} ${light ? 'Light' : 'Dark'}`}
      </Title>
      <SectionList
        sections={sections}
        renderItem={item => handleRenderItem(item)}
        renderSectionHeader={item => handleRenderSectionHeader(item, palette.text.primary)}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
});
