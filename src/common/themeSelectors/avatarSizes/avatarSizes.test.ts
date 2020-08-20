import theme from '../theme/mock-theme.json';
import * as selectors from './avatarSizes';

describe('Avatar sizes', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  describe.each`
    title       | selector                          | param         | expected
    ${'tiny'}   | ${selectors.getAvatarPropsBySize} | ${'tiny'}     | ${theme.avatarSizes.tiny}
    ${'small'}  | ${selectors.getAvatarPropsBySize} | ${'small'}    | ${theme.avatarSizes.small}
    ${'medium'} | ${selectors.getAvatarPropsBySize} | ${'standard'} | ${theme.avatarSizes.standard}
    ${'large'}  | ${selectors.getAvatarPropsBySize} | ${'large'}    | ${theme.avatarSizes.large}
    ${'huge'}   | ${selectors.getAvatarPropsBySize} | ${'huge'}     | ${theme.avatarSizes.huge}
  `('', ({
  title, selector, param, expected,
}) => {
  it(`should return avatar props by size ${title}`, () => {
    const result = selector(theme, param as selectors.Size);

    expect(result).toBe(expected);
  });
});
  /*  eslint-enable mocha/no-setup-in-describe */
});
