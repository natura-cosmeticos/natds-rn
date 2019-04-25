import { typography } from './typography';
import { robotoRegular, naturaRegular } from '../fonts/fonts';

describe('Typography', () => {
  it('Should return correct styles Typography', () => {
    const display_xlarge = {
      fontFamily: naturaRegular,
      fontSize: 96,
      fontWeight: '400',
      lineHeight: 104,
    };

    const display_large = {
      fontFamily: naturaRegular,
      fontSize: 88,
      fontWeight: '400',
      lineHeight: 96,
    };

    const display_medium = {
      fontFamily: naturaRegular,
      fontSize: 72,
      fontWeight: '400',
      lineHeight: 80,
    };

    const display_small = {
      fontFamily: naturaRegular,
      fontSize: 56,
      fontWeight: '400',
      lineHeight: 64,
    };

    const header_xlarge = {
      fontFamily: naturaRegular,
      fontSize: 40,
      fontWeight: '400',
      lineHeight: 48,
    };

    const header_large = {
      fontFamily: naturaRegular,
      fontSize: 32,
      fontWeight: '400',
      lineHeight: 40,
    };

    const header_medium = {
      fontFamily: naturaRegular,
      fontSize: 28,
      fontWeight: '400',
      lineHeight: 36,
    };

    const header_small = {
      fontFamily: naturaRegular,
      fontSize: 24,
      fontWeight: '400',
      lineHeight: 32,
    };

    const header_xsmall = {
      fontFamily: naturaRegular,
      fontSize: 20,
      fontWeight: '400',
      lineHeight: 28,
    };

    const body_large = {
      fontFamily: robotoRegular,
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    };

    const body_small = {
      fontFamily: robotoRegular,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 22,
    };

    const meta = {
      fontFamily: robotoRegular,
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 20,
    };

    expect(typography.display_xlarge).toEqual(display_xlarge);
    expect(typography.display_large).toEqual(display_large);
    expect(typography.display_medium).toEqual(display_medium);
    expect(typography.display_small).toEqual(display_small);

    expect(typography.header_xlarge).toEqual(header_xlarge);
    expect(typography.header_large).toEqual(header_large);
    expect(typography.header_medium).toEqual(header_medium);
    expect(typography.header_small).toEqual(header_small);
    expect(typography.header_xsmall).toEqual(header_xsmall);

    expect(typography.body_large).toEqual(body_large);
    expect(typography.body_small).toEqual(body_small);
    expect(typography.meta).toEqual(meta);
  });
});
