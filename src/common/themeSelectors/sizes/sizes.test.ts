import theme from '../theme/mock-theme.json';
import * as selectors from './sizes';

/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
  title        | selector                    | expected
  ${'Semi'}    | ${selectors.getSizeSemi}    | ${theme.size.semi}
  ${'SemiX'}   | ${selectors.getSizeSemiX}   | ${theme.size.semiX}
  ${'Medium'}  | ${selectors.getSizeMedium}  | ${theme.size.medium}
  ${'MediumX'} | ${selectors.getSizeMediumX} | ${theme.size.mediumX}
  ${'Large'}   | ${selectors.getSizeLarge}   | ${theme.size.large}
  ${'LargeX'}   | ${selectors.getSizeLargeX}   | ${theme.size.largeX}
`('Size selectors', ({
  title, selector, expected,
}) => {
  it(`should return size ${title}`, () => {
    const result = selector(theme);

    expect(result).toBe(expected);
  });
});
describe.each`
  title       | selector                           | expected
  ${'Medium'} | ${selectors.getBorderRadiusMedium} | ${theme.borderRadius.medium}
`('BorderRadius selectors', ({
  title, selector, expected,
}) => {
  it(`should return border radius ${title}`, () => {
    const result = selector(theme);

    expect(result).toBe(expected);
  });
});
/* eslint-enable mocha/no-setup-in-describe */
