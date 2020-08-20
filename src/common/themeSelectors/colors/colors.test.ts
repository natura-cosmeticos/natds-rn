import theme from '../theme/mock-theme.json';
import * as selectors from './colors';

describe('Colors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  describe.each`
    title                   | selector                              | expected
    ${'Primary'}            | ${selectors.getColorPrimary}          | ${theme.colorTokens.colorPrimary}
    ${'on Primary'}         | ${selectors.getColorOnPrimary}        | ${theme.colorTokens.colorOnPrimary}
    ${'Primary Light'}      | ${selectors.getColorPrimaryLight}     | ${theme.colorTokens.colorPrimaryLight}
    ${'on Primary Light'}   | ${selectors.getColorOnPrimaryLight}   | ${theme.colorTokens.colorOnPrimaryLight}
    ${'Primary Dark'}       | ${selectors.getColorPrimaryDark}      | ${theme.colorTokens.colorPrimaryDark}
    ${'on Primary Dark'}    | ${selectors.getColorOnPrimaryDark}    | ${theme.colorTokens.colorOnPrimaryDark}
    ${'Secondary'}          | ${selectors.getColorSecondary}        | ${theme.colorTokens.colorSecondary}
    ${'on Secondary'}       | ${selectors.getColorOnSecondary}      | ${theme.colorTokens.colorOnSecondary}
    ${'Secondary Light'}    | ${selectors.getColorSecondaryLight}   | ${theme.colorTokens.colorSecondaryLight}
    ${'on Secondary Light'} | ${selectors.getColorOnSecondaryLight} | ${theme.colorTokens.colorOnSecondaryLight}
    ${'Secondary Dark'}     | ${selectors.getColorSecondaryDark}    | ${theme.colorTokens.colorSecondaryDark}
    ${'on Secondary Dark'}  | ${selectors.getColorOnSecondaryDark}  | ${theme.colorTokens.colorOnSecondaryDark}
    ${'Background'}         | ${selectors.getColorBackground}       | ${theme.colorTokens.colorBackground}
    ${'on Background'}      | ${selectors.getColorOnBackground}     | ${theme.colorTokens.colorOnBackground}
    ${'Surface'}            | ${selectors.getColorSurface}          | ${theme.colorTokens.colorSurface}
    ${'on Surface'}         | ${selectors.getColorOnSurface}        | ${theme.colorTokens.colorOnSurface}
    ${'Highlight'}          | ${selectors.getColorHighlight}        | ${theme.colorTokens.colorHighlight}
    ${'High Emphasis'}      | ${selectors.getColorHighEmphasis}     | ${theme.colorTokens.colorHighEmphasis}
    ${'Medium Emphasis'}    | ${selectors.getColorMediumEmphasis}   | ${theme.colorTokens.colorMediumEmphasis}
    ${'Low Emphasis'}       | ${selectors.getColorLowEmphasis}      | ${theme.colorTokens.colorLowEmphasis}
    ${'Link'}               | ${selectors.getColorLink}             | ${theme.colorTokens.colorLink}
    ${'on Link'}            | ${selectors.getColorOnLink}           | ${theme.colorTokens.colorOnLink}
    ${'Success'}            | ${selectors.getColorSuccess}          | ${theme.colorTokens.colorSuccess}
    ${'on Success'}         | ${selectors.getColorOnSuccess}        | ${theme.colorTokens.colorOnSuccess}
    ${'Warning'}            | ${selectors.getColorWarning}          | ${theme.colorTokens.colorWarning}
    ${'on Warning'}         | ${selectors.getColorOnWarning}        | ${theme.colorTokens.colorOnWarning}
    ${'Alert'}              | ${selectors.getColorAlert}            | ${theme.colorTokens.colorAlert}
    ${'on Alert'}           | ${selectors.getColorOnAlert}          | ${theme.colorTokens.colorOnAlert}
    `('', ({
  title, selector, expected,
}) => {
  it(`should return the color ${title}`, () => {
    const result = selector(theme);

    expect(result).toBe(expected);
  });
});
  /* eslint-enable mocha/no-setup-in-describe */
});
