import theme from '../theme/mock-theme.json'
import {
  getTypographyStyles
} from './typography'

describe('Typography', () => {
  it('should return props for Body1 typography', () => {
    expect(getTypographyStyles(theme).body1).toStrictEqual({
      fontSize: theme.body1.fontSize,
      fontWeight: theme.body1.fontWeight,
      letterSpacing: theme.body1.letterSpacing
    })
  })
  it('should return props for Caption typography', () => {
    expect(getTypographyStyles(theme).caption).toStrictEqual({
      fontSize: theme.caption.fontSize,
      fontWeight: theme.caption.fontWeight,
      letterSpacing: theme.caption.letterSpacing
    })
  })
  it('should return props for Subtitle2 typography', () => {
    expect(getTypographyStyles(theme).subtitle2).toStrictEqual({
      fontSize: theme.subtitle2.fontSize,
      fontWeight: theme.subtitle2.fontWeight,
      letterSpacing: theme.subtitle2.letterSpacing
    })
  })
})
