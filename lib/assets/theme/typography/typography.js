import { StyleSheet } from 'react-native';
import { roboto, sanfrancisco, natura } from '../fonts/fonts';

export const display = StyleSheet.create({
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
  XLarge: {
    fontFamily: natura.regular,
    fontSize: 96,
    fontWeight: '400',
    lineHeight: 104,
  },
});

export const header = StyleSheet.create({
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
  XLarge: {
    fontFamily: natura.regular,
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 48,
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

export const body = (Platform = 'android') => StyleSheet.create({
  Large: {
    fontFamily: Platform === 'ios' ? sanfrancisco.regular : roboto.regular,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  Meta: {
    fontFamily: Platform === 'ios' ? sanfrancisco.regular : roboto.regular,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  Small: {
    fontFamily: Platform === 'ios' ? sanfrancisco.regular : roboto.regular,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
});
