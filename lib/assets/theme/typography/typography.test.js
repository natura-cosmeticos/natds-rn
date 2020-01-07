import { display, body, header } from './typography';
import { roboto, sanfrancisco, natura } from '../fonts/fonts';

describe('Typography', () => {
  it('Should return correct styles Typography', () => {
    const displayXLarge = {
      fontFamily: natura.regular,
      fontSize: 96,
      fontWeight: '400',
      lineHeight: 104,
    };

    const displayLarge = {
      fontFamily: natura.regular,
      fontSize: 88,
      fontWeight: '400',
      lineHeight: 96,
    };

    const displayMedium = {
      fontFamily: natura.regular,
      fontSize: 72,
      fontWeight: '400',
      lineHeight: 80,
    };

    const displaySmall = {
      fontFamily: natura.regular,
      fontSize: 56,
      fontWeight: '400',
      lineHeight: 64,
    };

    const headerXLarge = {
      fontFamily: natura.regular,
      fontSize: 40,
      fontWeight: '400',
      lineHeight: 48,
    };

    const headerLarge = {
      fontFamily: natura.regular,
      fontSize: 32,
      fontWeight: '400',
      lineHeight: 40,
    };

    const headerMedium = {
      fontFamily: natura.regular,
      fontSize: 28,
      fontWeight: '400',
      lineHeight: 36,
    };

    const headerSmall = {
      fontFamily: natura.regular,
      fontSize: 24,
      fontWeight: '400',
      lineHeight: 32,
    };

    const headerXSmall = {
      fontFamily: natura.regular,
      fontSize: 20,
      fontWeight: '400',
      lineHeight: 28,
    };

    const bodyLarge = {
      fontFamily: roboto.regular,
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    };

    const bodySmall = {
      fontFamily: roboto.regular,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 22,
    };

    const meta = {
      fontFamily: roboto.regular,
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 20,
    };

    const bodyLargeIOS = {
      fontFamily: sanfrancisco.regular,
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    };

    const bodySmallIOS = {
      fontFamily: sanfrancisco.regular,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 22,
    };

    const metaIOS = {
      fontFamily: sanfrancisco.regular,
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 20,
    };

    expect(display.XLarge).toEqual(displayXLarge);
    expect(display.Large).toEqual(displayLarge);
    expect(display.Medium).toEqual(displayMedium);
    expect(display.Small).toEqual(displaySmall);

    expect(header.XLarge).toEqual(headerXLarge);
    expect(header.Large).toEqual(headerLarge);
    expect(header.Medium).toEqual(headerMedium);
    expect(header.Small).toEqual(headerSmall);
    expect(header.XSmall).toEqual(headerXSmall);

    expect(body('android').Large).toEqual(bodyLarge);
    expect(body('android').Small).toEqual(bodySmall);
    expect(body('android').Meta).toEqual(meta);
    expect(body('ios').Large).toEqual(bodyLargeIOS);
    expect(body('ios').Small).toEqual(bodySmallIOS);
    expect(body('ios').Meta).toEqual(metaIOS);
  });
});
