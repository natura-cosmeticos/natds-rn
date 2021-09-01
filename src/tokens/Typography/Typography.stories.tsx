import React from 'react';
import { Text, View } from 'react-native';
import { buildTheme } from '../..';
import {
  getFontFamilyBody, getFontFamilyBranding, getFontFamilyCode, getFontFamilyDisplay, getFontFamilyFallback, getFontFamilyHeadline, getFontFamilyPrimary, getFontFamilySecondary,
} from '../../common/themeSelectors';

export const typography = ({ activeTheme, light }) => {
  const mode = light ? 'light' : 'dark';
  const brandTheme = buildTheme(activeTheme, mode);

  if (!brandTheme) return <Text>No typography found for this theme.</Text>;

  return (
    <View style={{ padding: 8 }}>
      <Text style={{ fontFamily: getFontFamilyPrimary(brandTheme) }}>Primary</Text>
      <Text style={{ fontFamily: getFontFamilySecondary(brandTheme) }}>Secondary</Text>
      <Text style={{ fontFamily: getFontFamilyBranding(brandTheme) }}>Branding</Text>
      <Text style={{ fontFamily: getFontFamilyCode(brandTheme) }}>Code</Text>
      <Text style={{ fontFamily: getFontFamilyDisplay(brandTheme) }}>Display</Text>
      <Text style={{ fontFamily: getFontFamilyHeadline(brandTheme) }}>Headline</Text>
      <Text style={{ fontFamily: getFontFamilyBody(brandTheme) }}>Body</Text>
      <Text style={{ fontFamily: getFontFamilyFallback(brandTheme) }}>Fallback</Text>
    </View>
  );
};

export default {
  parameters: {
    componentSubtitle: 'Custom fonts available in the current theme. Read more in the Documentation section.',
  },
  title: 'Tokens|Typography',
};
