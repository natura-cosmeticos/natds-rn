import theme from '../theme/mock-theme.json';
import * as selectors from './iconSizes';

describe('Icon sizes', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  describe.each`
    title         | selector                       | param         | expected
    ${'micro'}    | ${selectors.getIconSizesProps} | ${'micro'}    | ${theme.iconSizes.micro}
    ${'tiny'}     | ${selectors.getIconSizesProps} | ${'tiny'}     | ${theme.iconSizes.tiny}
    ${'small'}    | ${selectors.getIconSizesProps} | ${'small'}    | ${theme.iconSizes.small}
    ${'standard'} | ${selectors.getIconSizesProps} | ${'standard'} | ${theme.iconSizes.standard}
    ${'medium'}   | ${selectors.getIconSizesProps} | ${'medium'}   | ${theme.iconSizes.medium}
    ${'large'}    | ${selectors.getIconSizesProps} | ${'large'}    | ${theme.iconSizes.large}
    ${'largex'}   | ${selectors.getIconSizesProps} | ${'largex'}   | ${theme.iconSizes.largex}
    ${'largexx'}  | ${selectors.getIconSizesProps} | ${'largexx'}  | ${theme.iconSizes.largexx}
    ${'huge'}     | ${selectors.getIconSizesProps} | ${'huge'}     | ${theme.iconSizes.huge}
    ${'hugex'}    | ${selectors.getIconSizesProps} | ${'hugex'}    | ${theme.iconSizes.hugex}
    ${'hugexx'}   | ${selectors.getIconSizesProps} | ${'hugexx'}   | ${theme.iconSizes.hugexx}
  `('', ({
  title, selector, param, expected,
}) => {
  it(`should return ${title} icon size`, () => {
    const result = selector(theme, param as selectors.Size);

    expect(result).toBe(expected);
  });
});
  /*  eslint-enable mocha/no-setup-in-describe */
});
