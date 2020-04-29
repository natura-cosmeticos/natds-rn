import React from 'react';
import { Text } from 'react-native';
import { tokens } from '@naturacosmeticos/natds-styles';
import { TokenMosaicWithCategories, TokenColor } from '../../common/HelperComponents/TokenMosaic';

const mosaicItemRendered = (
  colorName: string, colors: Record<string, string>,
) => <TokenColor colorName={colorName} color={colors[colorName]} />;

export const colors = ({ activeTheme }) => {
  const colorByTheme = tokens.colors[activeTheme || 'natura'];

  if (!colorByTheme) return <Text>No colors found for this theme.</Text>;

  delete colorByTheme.gradient;

  return (
    <TokenMosaicWithCategories
      categories={colorByTheme}
      itemRenderer={mosaicItemRendered}
    />
  );
};

export default {
  parameters: {
    componentSubtitle: 'These are the colors available in the current theme',
  },
  title: 'Tokens|Colors',
};
