import theme from '../theme/mock-theme.json';
import * as selectors from './assets';

/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
title         | model  | selector                     | expected
${'neutral'}  | ${'a'} | ${selectors.getNeutralLogoA} | ${theme.asset.brand.neutral.a}
${'neutral'}  | ${'b'} | ${selectors.getNeutralLogoB} | ${theme.asset.brand.neutral.b}
${'custom'}   | ${'a'} | ${selectors.getCustomLogoA}  | ${theme.asset.brand.custom.a}
${'custom'}   | ${'b'} | ${selectors.getCustomLogoB}  | ${theme.asset.brand.custom.b}
`('Assets selectors', ({
  title, model, selector, expected,
}) => {
  it(`should return brand's ${title} logo in model ${model}`, () => {
    const result = selector(theme);

    expect(result).toStrictEqual(expected);
  });
});
/* eslint-enable mocha/no-setup-in-describe */
