import theme from '../theme/mock-theme.json';
import * as selectors from './opacity';


/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
  title    | selector                  | expected
  ${'56'}  | ${selectors.getOpacity56} | ${theme.opacity[56]}

`('Opacity', ({
  title, selector, param, expected,
}) => {
  it(`should return the opacity ${title}`, () => {
    const result = selector(theme);

    expect(result).toBe(expected);
  });
});
/* eslint-enable mocha/no-setup-in-describe */
