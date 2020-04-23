import React from 'react';
import { Text } from 'react-native';
import { tokens } from '@naturacosmeticos/natds-styles';
import { TokenMosaicWithCategories, TokenColor } from '../HelperComponents/TokenMosaic';

const mosaicItemRendered = (
  colorName, colors,
) => <TokenColor colorName={colorName} color={colors[colorName]} />;

export const Colors = ({ activeTheme }) => {
  const colorByTheme = tokens.colors[activeTheme];

  if (!colorByTheme) return <Text>No colors found for this theme.</Text>;

  delete colorByTheme.gradient;

  return (
    <TokenMosaicWithCategories
      categories={colorByTheme}
      itemRenderer={mosaicItemRendered}
    />
  );
};
