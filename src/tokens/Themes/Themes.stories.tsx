import React from 'react';
import { withTheme } from 'styled-components/native';
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

const buildData = (
  item: Record<string, string>,
) => Object.keys(item).map(key => ({ key, value: item[key] }));

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

const ThemesWithHoc = withTheme((props) => {
  const { theme: { palette }, light, activeTheme } = props;

  const sections = Object
    .keys(palette)
    .map(item => ({ data: buildData(palette[item]), title: item }));

  return (
    <View>
      <Title>
        {activeTheme ? `${activeTheme} ${light ? 'Light' : 'Dark'}` : 'Selected theme'}
      </Title>
      <SectionList
        sections={sections}
        renderItem={item => handleRenderItem(item)}
        renderSectionHeader={item => handleRenderSectionHeader(item)}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
});

export const themes = () => <ThemesWithHoc />;

export default {
  parameters: {
    componentSubtitle: 'These are the props available in the current theme',
  },
  title: 'Tokens|Theme',
};
