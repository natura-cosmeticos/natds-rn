import theme from '../theme/mock-theme.json';
import * as selectors from './buttonSizes';

/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
    title       | selector                          | param       | expected
    ${'small'}  | ${selectors.getButtonPropsBySize} | ${'small'}  | ${theme.buttonSizes.small}
    ${'medium'} | ${selectors.getButtonPropsBySize} | ${'medium'} | ${theme.buttonSizes.medium}
    ${'large'}  | ${selectors.getButtonPropsBySize} | ${'large'}  | ${theme.buttonSizes.large}
  `('Button sizes', ({
  title, selector, param, expected,
}) => {
  it(`should return button props by size ${title}`, () => {
    const result = selector(theme, param as selectors.Size);

    expect(result).toBe(expected);
  });
});
/*  eslint-enable mocha/no-setup-in-describe */
