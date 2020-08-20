import theme from '../theme/mock-theme.json';
import * as selectors from './fontSize';

describe('Font Sizes', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  describe.each`
    title          | selector                      | param          | expected
    ${'h1'}        | ${selectors.getFontSizeProps} | ${'h1'}        | ${theme.fontSize.h1}
    ${'h2'}        | ${selectors.getFontSizeProps} | ${'h2'}        | ${theme.fontSize.h2}
    ${'h3'}        | ${selectors.getFontSizeProps} | ${'h3'}        | ${theme.fontSize.h3}
    ${'h4'}        | ${selectors.getFontSizeProps} | ${'h4'}        | ${theme.fontSize.h4}
    ${'h5'}        | ${selectors.getFontSizeProps} | ${'h5'}        | ${theme.fontSize.h5}
    ${'h6'}        | ${selectors.getFontSizeProps} | ${'h6'}        | ${theme.fontSize.h6}
    ${'subtitle1'} | ${selectors.getFontSizeProps} | ${'subtitle1'} | ${theme.fontSize.subtitle1}
    ${'subtitle2'} | ${selectors.getFontSizeProps} | ${'subtitle2'} | ${theme.fontSize.subtitle2}
    ${'body1'}     | ${selectors.getFontSizeProps} | ${'body1'}     | ${theme.fontSize.body1}
    ${'body2'}     | ${selectors.getFontSizeProps} | ${'body2'}     | ${theme.fontSize.body2}
    ${'button'}    | ${selectors.getFontSizeProps} | ${'button'}    | ${theme.fontSize.button}
    ${'caption'}   | ${selectors.getFontSizeProps} | ${'caption'}   | ${theme.fontSize.caption}
    ${'overline'}  | ${selectors.getFontSizeProps} | ${'overline'}  | ${theme.fontSize.overline}
  `('', ({
  title, selector, param, expected,
}) => {
  it(`should return props for ${title} font size`, () => {
    const result = selector(theme, param as selectors.Size);

    expect(result).toBe(expected);
  });
});
  /*  eslint-enable mocha/no-setup-in-describe */
});
