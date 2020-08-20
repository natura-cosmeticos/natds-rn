import theme from '../theme/mock-theme.json';
import * as selectors from './elevation';

describe('Elevation', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  describe.each`
  title   | selector                    | expected
  ${'0'}  | ${selectors.getElevation0}  | ${theme.elevation['0']}
  ${'1'}  | ${selectors.getElevation1}  | ${theme.elevation['1']}
  ${'2'}  | ${selectors.getElevation2}  | ${theme.elevation['2']}
  ${'3'}  | ${selectors.getElevation3}  | ${theme.elevation['3']}
  ${'4'}  | ${selectors.getElevation4}  | ${theme.elevation['4']}
  ${'6'}  | ${selectors.getElevation6}  | ${theme.elevation['6']}
  ${'8'}  | ${selectors.getElevation8}  | ${theme.elevation['8']}
  ${'9'}  | ${selectors.getElevation9}  | ${theme.elevation['9']}
  ${'12'} | ${selectors.getElevation12} | ${theme.elevation['12']}
  ${'16'} | ${selectors.getElevation16} | ${theme.elevation['16']}
  ${'24'} | ${selectors.getElevation24} | ${theme.elevation['24']}
  `('', ({
  title, selector, expected,
}) => {
  it(`should return props for elevation ${title}`, () => {
    const result = selector(theme);

    expect(result).toBe(expected);
  });
});
  /* eslint-enable mocha/no-setup-in-describe */
});
