import theme from '../theme/mock-theme.json';
import * as selectors from './typography';

describe('Typography', () => {
  it('should return props for Body1 typography', () => {
    expect(selectors.getTypographyStyles(theme).body1).toStrictEqual({
      fontSize: theme.body1.fontSize,
      fontWeight: theme.body1.fontWeight,
      letterSpacing: theme.body1.letterSpacing,
    });
  });
  it('should return props for Caption typography', () => {
    expect(selectors.getTypographyStyles(theme).caption).toStrictEqual({
      fontSize: theme.caption.fontSize,
      fontWeight: theme.caption.fontWeight,
      letterSpacing: theme.caption.letterSpacing,
    });
  });
  it('should return props for Subtitle2 typography', () => {
    expect(selectors.getTypographyStyles(theme).subtitle2).toStrictEqual({
      fontSize: theme.subtitle2.fontSize,
      fontWeight: theme.subtitle2.fontWeight,
      letterSpacing: theme.subtitle2.letterSpacing,
    });
  });
});
/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
type           | selector                            | expected
${'primary'}   | ${selectors.getFontFamilyPrimary}   | ${theme.typography.fontFamily.primary}
${'secondary'} | ${selectors.getFontFamilySecondary} | ${theme.typography.fontFamily.secondary}
${'branding'}  | ${selectors.getFontFamilyBranding}  | ${theme.typography.fontFamily.branding}
${'code'}      | ${selectors.getFontFamilyCode}      | ${theme.typography.fontFamily.code}
${'display'}   | ${selectors.getFontFamilyDisplay}   | ${theme.typography.fontFamily.display}
${'headline'}  | ${selectors.getFontFamilyHeadline}  | ${theme.typography.fontFamily.headline}
${'body'}      | ${selectors.getFontFamilyBody}      | ${theme.typography.fontFamily.body}
${'fallback'}  | ${selectors.getFontFamilyFallback}  | ${theme.typography.fontFamily.fallback}
`('Font family', ({
  type, selector, expected,
}) => {
  it(`should return font file for type ${type}`, () => {
    const result = selector(theme);

    expect(result).toStrictEqual(expected);
  });
});
/* eslint-enable mocha/no-setup-in-describe */
