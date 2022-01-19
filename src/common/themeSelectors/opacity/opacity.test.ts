import theme from '../theme/mock-theme.json'
import * as selectors from './opacity'

/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
title            | selector                           | expected
${'mediumLow'}   | ${selectors.getOpacityMediumLow}   | ${theme.opacity.mediumLow}
${'disabledLow'} | ${selectors.getOpacityDisabledLow} | ${theme.opacity.disabledLow}
${'mediumHigh'}  | ${selectors.getOpacityMediumHigh}  | ${theme.opacity.mediumHigh}
${'high'}        | ${selectors.getOpacityHigh}        | ${theme.opacity.high}
${'veryHigh'}    | ${selectors.getOpacityVeryHigh}    | ${theme.opacity.veryHigh}
${'medium'}      | ${selectors.getOpacityMedium}      | ${theme.opacity.medium}
`('Opacity selectors', ({
  title, selector, expected
}) => {
  it(`should return the opacity ${title}`, () => {
    const result = selector(theme)

    expect(result).toBe(expected)
  })
})
/* eslint-enable mocha/no-setup-in-describe */
