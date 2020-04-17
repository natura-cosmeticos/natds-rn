import React from 'react';
import { withTheme } from 'styled-components';
import { View, Text } from 'react-native';
import { tokens } from '@naturacosmeticos/natds-styles';
import { TokenContainer, TokenColorContainer, ActualColor, ColorName, CategoryTitle, CategoryWrapper } from './TokenMosaic.styles';

const buildMosaic = (data, itemRenderer) => Object
  .keys(data)
  .map(key => itemRenderer(key, data));

const Category = ({ category, data, itemRenderer }) => (
  <CategoryWrapper>
    <CategoryTitle>{category}</CategoryTitle>
    <TokenContainer>
      {buildMosaic(data, itemRenderer)}
    </TokenContainer>
  </CategoryWrapper>
);

const buildCategories = (categories, itemRenderer) => Object
  .keys(categories)
  .map(category => (
    <Category
      key={category}
      category={category}
      data={categories[category]}
      itemRenderer={itemRenderer}
    />
  ));

export const TokenMosaicWithCategories = ({ categories, itemRenderer }) => (
  <View>
    {buildCategories(categories, itemRenderer)}
  </View>
);

export const TokenMosaic = ({ data, itemRenderer }) => (
  <View>
    {buildMosaic(data, itemRenderer)}
  </View>
);

export const TokenColor = ({ colorName, color }) => (
  <TokenColorContainer>
    <ActualColor style={{ backgroundColor: color }}></ActualColor>
    <View>
      <ColorName>{colorName}</ColorName>
      <ColorName style={{ color: '#bbbbbb' }}>{color}</ColorName>
    </View>
  </TokenColorContainer>
);
