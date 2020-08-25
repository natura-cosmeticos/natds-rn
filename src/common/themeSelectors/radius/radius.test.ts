import theme from '../theme/mock-theme.json';
import * as selectors from './radius';

/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
    title       | selector                     | param       | expected
    ${'none'}   | ${selectors.getRadiusBySize} | ${'none'}   | ${theme.radius.none}
    ${'circle'} | ${selectors.getRadiusBySize} | ${'circle'} | ${theme.radius.circle}
    ${'small'}  | ${selectors.getRadiusBySize} | ${'small'}  | ${theme.radius.small}
    ${'medium'} | ${selectors.getRadiusBySize} | ${'medium'} | ${theme.radius.medium}
    ${'large'}  | ${selectors.getRadiusBySize} | ${'large'}  | ${theme.radius.large}
  `('Radius', ({
  title, selector, param, expected,
}) => {
  it(`should return radius for size ${title}`, () => {
    const result = selector(theme, param as selectors.Radius);

    expect(result).toBe(expected);
  });
});
/*  eslint-enable mocha/no-setup-in-describe */
