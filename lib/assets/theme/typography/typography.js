import { StyleSheet } from 'react-native';
import { roboto, natura } from '../fonts/fonts';

export const typography = StyleSheet.create({
  display_xlarge: {
    fontFamily: natura.regular,
    fontSize: 96,
    fontWeight: '400',
    lineHeight: 104,
  },
  display_large: {
    fontFamily: natura.regular,
    fontSize: 88,
    fontWeight: '400',
    lineHeight: 96,
  },
  display_medium: {
    fontFamily: natura.regular,
    fontSize: 72,
    fontWeight: '400',
    lineHeight: 80,
  },
  display_small: {
    fontFamily: natura.regular,
    fontSize: 56,
    fontWeight: '400',
    lineHeight: 64,
  },
  header_xlarge: {
    fontFamily: natura.regular,
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 48,
  },
  header_large: {
    fontFamily: natura.regular,
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
  },
  header_medium: {
    fontFamily: natura.regular,
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36,
  },
  header_small: {
    fontFamily: natura.regular,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
  },
  header_xsmall: {
    fontFamily: natura.regular,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
  },
  body_large: {
    fontFamily: roboto.regular,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  body_small: {
    fontFamily: roboto.regular,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
  meta: {
    fontFamily: roboto.regular,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
});
