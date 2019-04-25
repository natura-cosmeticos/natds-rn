import { StyleSheet } from 'react-native';
import { robotoRegular, naturaRegular } from '../fonts/fonts';

export const typography = StyleSheet.create({
  display_xlarge: {
    fontFamily: naturaRegular,
    fontSize: 96,
    fontWeight: '400',
    lineHeight: 104,
  },
  display_large: {
    fontFamily: naturaRegular,
    fontSize: 88,
    fontWeight: '400',
    lineHeight: 96,
  },
  display_medium: {
    fontFamily: naturaRegular,
    fontSize: 72,
    fontWeight: '400',
    lineHeight: 80,
  },
  display_small: {
    fontFamily: naturaRegular,
    fontSize: 56,
    fontWeight: '400',
    lineHeight: 64,
  },
  header_xlarge: {
    fontFamily: naturaRegular,
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 48,
  },
  header_large: {
    fontFamily: naturaRegular,
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
  },
  header_medium: {
    fontFamily: naturaRegular,
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36,
  },
  header_small: {
    fontFamily: naturaRegular,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
  },
  header_xsmall: {
    fontFamily: naturaRegular,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
  },
  body_large: {
    fontFamily: robotoRegular,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  body_small: {
    fontFamily: robotoRegular,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
  meta: {
    fontFamily: robotoRegular,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
});
