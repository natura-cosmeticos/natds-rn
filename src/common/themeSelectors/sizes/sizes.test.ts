import theme from '../theme/mock-theme.json';
import * as selectors from './sizes';

/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
  title         | selector                     | expected
  ${'none'}     | ${selectors.getNoneSize}     | ${theme.sizes.none}
  ${'micro'}    | ${selectors.getMicroSize}    | ${theme.sizes.micro}
  ${'tiny'}     | ${selectors.getTinySize}     | ${theme.sizes.tiny}
  ${'small'}    | ${selectors.getSmallSize}    | ${theme.sizes.small}
  ${'standard'} | ${selectors.getStandardSize} | ${theme.sizes.standard}
  ${'semi'}     | ${selectors.getSemiSize}     | ${theme.sizes.semi}
  ${'semix'}    | ${selectors.getSemixSize}    | ${theme.sizes.semix}
  ${'medium'}   | ${selectors.getMediumSize}   | ${theme.sizes.medium}
  ${'mediumx'}  | ${selectors.getMediumxSize}  | ${theme.sizes.mediumx}
  ${'large'}    | ${selectors.getLargeSize}    | ${theme.sizes.large}
  ${'largex'}   | ${selectors.getLargexSize}   | ${theme.sizes.largex}
  ${'largexx'}  | ${selectors.getLargexxSize}  | ${theme.sizes.largexx}
  ${'largexxx'} | ${selectors.getLargexxxSize} | ${theme.sizes.largexxx}
  ${'huge'}     | ${selectors.getHugeSize}     | ${theme.sizes.huge}
  ${'hugex'}    | ${selectors.getHugexSize}    | ${theme.sizes.hugex}
  ${'hugexx'}   | ${selectors.getHugexxSize}   | ${theme.sizes.hugexx}
  ${'hugexxx'}  | ${selectors.getHugexxxSize}  | ${theme.sizes.hugexxx}
  ${'veryhuge'} | ${selectors.getVeryhugeSize} | ${theme.sizes.veryhuge}
  `('Sizes', ({
  title, selector, expected,
}) => {
  it(`should return the value for the size ${title}`, () => {
    const result = selector(theme);

    expect(result).toBe(expected);
  });
});
/* eslint-enable mocha/no-setup-in-describe */
