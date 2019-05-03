import { StyleSheet } from 'react-native';
import { roboto, natura } from '../fonts/fonts';

export const display = StyleSheet.create({
  XLarge: {
    fontFamily: natura.regular,
    fontSize: 96,
    fontWeight: '400',
    lineHeight: 104,
  },
  Large: {
    fontFamily: natura.regular,
    fontSize: 88,
    fontWeight: '400',
    lineHeight: 96,
  },
  Medium: {
    fontFamily: natura.regular,
    fontSize: 72,
    fontWeight: '400',
    lineHeight: 80,
  },
  Small: {
    fontFamily: natura.regular,
    fontSize: 56,
    fontWeight: '400',
    lineHeight: 64,
  },
});

export const header = StyleSheet.create({
  XLarge: {
    fontFamily: natura.regular,
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 48,
  },
  Large: {
    fontFamily: natura.regular,
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
  },
  Medium: {
    fontFamily: natura.regular,
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36,
  },
  Small: {
    fontFamily: natura.regular,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
  },
  XSmall: {
    fontFamily: natura.regular,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
  },
  XSmallBold: {
    fontFamily: natura.bold,
    fontSize: 20,
    lineHeight: 28,
  },
});

export const body = StyleSheet.create({
  Large: {
    fontFamily: roboto.regular,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  Small: {
    fontFamily: roboto.regular,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
  Meta: {
    fontFamily: roboto.regular,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
});
