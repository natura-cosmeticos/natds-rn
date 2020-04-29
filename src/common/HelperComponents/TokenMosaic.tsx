import React, { ReactElement } from 'react';
import { View } from 'react-native';
import {
  TokenContainer,
  TokenColorContainer,
  ActualColor, ColorName,
  CategoryTitle,
  CategoryWrapper,
  Container,
} from './TokenMosaic.styles';

type TokenMosaicData = Record<string, string>
type TokenMosaicWithCategoriesData = Record<string, TokenMosaicData>

interface ItemRenderer {
  (key: string, data: TokenMosaicData): ReactElement
}

interface TokenColorProps {
  colorName: string
  color: string
}

interface TokenMosaicProps {
  data: TokenMosaicData
  itemRenderer: ItemRenderer
}

interface TokenMosaicWithCategoriesProps {
  categories: TokenMosaicWithCategoriesData
  itemRenderer: ItemRenderer
}

const buildMosaic = (data: TokenMosaicData, itemRenderer: ItemRenderer) => Object
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

const buildCategories = (
  categories: TokenMosaicWithCategoriesData,
  itemRenderer: ItemRenderer,
) => Object
  .keys(categories)
  .map(category => (
    <Category
      key={category}
      category={category}
      data={categories[category]}
      itemRenderer={itemRenderer}
    />
  ));

export const TokenMosaicWithCategories = (
  { categories, itemRenderer }: TokenMosaicWithCategoriesProps,
) => (
  <Container>
    {buildCategories(categories, itemRenderer)}
  </Container>
);

export const TokenMosaic = ({ data, itemRenderer }: TokenMosaicProps) => (
  <Container>
    <TokenContainer>
      {buildMosaic(data, itemRenderer)}
    </TokenContainer>
  </Container>
);

export const TokenColor = ({ colorName, color }: TokenColorProps) => (
  <TokenColorContainer>
    <ActualColor style={{ backgroundColor: color }}></ActualColor>
    <View>
      <ColorName>{colorName}</ColorName>
      <ColorName style={{ color: '#bbbbbb' }}>{color}</ColorName>
    </View>
  </TokenColorContainer>
);
