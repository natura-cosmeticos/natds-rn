import theme from '../theme/mock-theme.json';
import * as selectors from './avatarSizes';

describe.each`
    title         | selector                     | param         | expected
    ${'tiny'}     | ${selectors.getAvatarBySize} | ${'tiny'}     | ${theme.avatarSizes.tiny}
    ${'small'}    | ${selectors.getAvatarBySize} | ${'small'}    | ${theme.avatarSizes.small}
    ${'standard'} | ${selectors.getAvatarBySize} | ${'standard'} | ${theme.avatarSizes.standard}
    ${'large'}    | ${selectors.getAvatarBySize} | ${'large'}    | ${theme.avatarSizes.large}
    ${'huge'}     | ${selectors.getAvatarBySize} | ${'huge'}     | ${theme.avatarSizes.huge}
  `('AvatarSize', ({
  title, selector, param, expected,
}) => {
  it(`should return avatarSize for size ${title}`, () => {
    const result = selector(param as selectors.AvatarSize, theme);

    expect(result).toBe(expected);
  });
});
