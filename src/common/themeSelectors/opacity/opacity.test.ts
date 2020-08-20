import theme from '../theme/mock-theme.json';
import * as selectors from './opacity';

describe('Opacity', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  describe.each`
  title   | selector                  | expected
  ${'00'} | ${selectors.getOpacity00} | ${theme.opacity['00']}
  ${'04'} | ${selectors.getOpacity04} | ${theme.opacity['04']}
  ${'08'} | ${selectors.getOpacity08} | ${theme.opacity['08']}
  ${'12'} | ${selectors.getOpacity12} | ${theme.opacity['12']}
  ${'16'} | ${selectors.getOpacity16} | ${theme.opacity['16']}
  ${'24'} | ${selectors.getOpacity24} | ${theme.opacity['24']}
  ${'32'} | ${selectors.getOpacity32} | ${theme.opacity['32']}
  ${'48'} | ${selectors.getOpacity48} | ${theme.opacity['48']}
  ${'56'} | ${selectors.getOpacity56} | ${theme.opacity['56']}
  ${'64'} | ${selectors.getOpacity64} | ${theme.opacity['64']}
  ${'80'} | ${selectors.getOpacity80} | ${theme.opacity['80']}
  `('', ({
  title, selector, expected,
}) => {
  it(`should return the opacity ${title}%`, () => {
    const result = selector(theme);

    expect(result).toBe(expected);
  });
});
  /* eslint-enable mocha/no-setup-in-describe */
});
