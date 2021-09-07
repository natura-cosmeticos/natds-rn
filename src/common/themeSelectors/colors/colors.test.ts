import theme from '../theme/mock-theme.json';
import * as selectors from './colors';

/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
title               | selector                            | expected
${'primary'}        | ${selectors.getColorPrimary}        | ${theme.color.primary}
${'onPrimary'}      | ${selectors.getColorOnPrimary}      | ${theme.color.onPrimary}
${'primaryLight'}   | ${selectors.getColorPrimaryLight}   | ${theme.color.primaryLight}
${'secondary'}      | ${selectors.getColorSecondary}      | ${theme.color.secondary}
${'onSecondary'}    | ${selectors.getColorOnSecondary}    | ${theme.color.onSecondary}
${'background'}     | ${selectors.getColorBackground}     | ${theme.color.background}
${'onBackground'}   | ${selectors.getColorOnBackground}   | ${theme.color.onBackground}
${'success'}        | ${selectors.getColorSuccess}        | ${theme.color.success}
${'onSuccess'}      | ${selectors.getColorOnSuccess}      | ${theme.color.onSuccess}
${'alert'}          | ${selectors.getColorAlert}          | ${theme.color.alert}
${'onAlert'}        | ${selectors.getColorOnAlert}        | ${theme.color.onAlert}
${'lowEmphasis'}    | ${selectors.getColorLowEmphasis}    | ${theme.color.lowEmphasis}
${'mediumEmphasis'} | ${selectors.getColorMediumEmphasis} | ${theme.color.mediumEmphasis}
${'highEmphasis'}   | ${selectors.getColorHighEmphasis}   | ${theme.color.highEmphasis}
${'surface'}        | ${selectors.getColorSurface}        | ${theme.color.surface}
${'onSurface'}      | ${selectors.getColorOnSurface}      | ${theme.color.onSurface}
${'highlight'}      | ${selectors.getColorHighlight}      | ${theme.color.highlight}
${'link'}           | ${selectors.getColorLink}           | ${theme.color.link}
`('Color selectors', ({
  title, model, selector, expected,
}) => {
  it(`should color ${title}`, () => {
    const result = selector(theme);

    expect(result).toEqual(expected);
  });
});
/* eslint-enable mocha/no-setup-in-describe */
