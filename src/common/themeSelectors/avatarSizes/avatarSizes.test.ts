import theme from '../theme/mock-theme.json'
import * as selectors from './avatarSizes'

describe.each`
    title         | selector                     | param         | expected
    ${'tiny'}     | ${selectors.getAvatarBySize} | ${'tiny'}     | ${{ fontSize: '12px', size: theme.size.standard }}
    ${'small'}    | ${selectors.getAvatarBySize} | ${'small'}    | ${{ fontSize: '14px', size: theme.size.semi }}
    ${'standard'} | ${selectors.getAvatarBySize} | ${'standard'} | ${{ fontSize: '16px', size: theme.size.semiX }}
    ${'large'}    | ${selectors.getAvatarBySize} | ${'large'}    | ${{ fontSize: '16px', size: theme.size.medium }}
    ${'huge'}     | ${selectors.getAvatarBySize} | ${'huge'}     | ${{ fontSize: '24px', size: theme.size.largeXX }}
  `('AvatarSize', ({
  title, selector, param, expected
}) => {
  it(`should return avatarSize for size ${title}`, () => {
    const result = selector(param as selectors.AvatarSize, theme)

    expect(result).toEqual(expected)
  })
})
