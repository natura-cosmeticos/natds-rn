import theme from '../theme/mock-theme.json';
import * as selectors from './spacing';

describe('Spacing', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  describe.each`
  title         | selector                        | expected
  ${'small'}    | ${selectors.getSpacingSmall}    | ${theme.spacing.spacingSmall}
  ${'tiny'}     | ${selectors.getSpacingTiny}     | ${theme.spacing.spacingTiny}
  ${'standard'} | ${selectors.getSpacingStandard} | ${theme.spacing.spacingStandard}
  ${'none'}     | ${selectors.getSpacingNone}     | ${theme.spacing.spacingNone}
  `('', ({
  title, selector, expected,
}) => {
  it(`should return the ${title} spacing`, () => {
    const result = selector(theme);

    expect(result).toBe(expected);
  });
});
  /* eslint-enable mocha/no-setup-in-describe */
});
