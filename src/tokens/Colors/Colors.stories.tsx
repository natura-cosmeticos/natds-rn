import React from 'react';
import { Text } from 'react-native';
import { TokenColor, TokenMosaic } from '../../common/HelperComponents/TokenMosaic';
import { Brand, buildTheme } from '../..';

type ColorsStoryProps = {
  activeTheme: Brand;
  light: boolean;
}

const mosaicItemRendered = (
  colorName: string, colors: Record<string, string>,
) => <TokenColor colorName={colorName} color={colors[colorName]} />;

export const colors = (args) => {
  const { activeTheme, light } = args as ColorsStoryProps;

  const mode = light ? 'light' : 'dark';
  const brandTheme = buildTheme(activeTheme, mode);

  if (!brandTheme) return <Text>No colors found for this theme.</Text>;

  return (
    <TokenMosaic
      data={{ ...brandTheme.color }}
      itemRenderer={mosaicItemRendered}
    />
  );
};

export default {
  parameters: {
    componentSubtitle: 'Colors available in the current theme. Read more in the Documentation section.',
  },
  title: 'Tokens|Colors',
};
