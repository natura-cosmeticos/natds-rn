import React from 'react';
import { Text } from 'react-native';
import { tokens } from '@naturacosmeticos/natds-styles';
import { TokenColor, TokenMosaic } from '../../common/HelperComponents/TokenMosaic';

const mosaicItemRendered = (
  colorName: string, colors: Record<string, string>,
) => <TokenColor colorName={colorName} color={colors[colorName]} />;

export const colors = ({ activeTheme, light }) => {
  const brandColorName = `${activeTheme}${light ? 'Light' : 'Dark'}ColorTokens`;
  const colorByTheme = tokens.colorTokens[brandColorName];

  if (!colorByTheme) return <Text>No colors found for this theme.</Text>;

  delete colorByTheme.gradient;

  return (
    <TokenMosaic
      data={colorByTheme}
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
