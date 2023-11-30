import mockTheme from './mock-theme.json'
import { getTheme, buildTheme, Theme } from './theme'

describe('Theme selectors', () => {
  describe('getTheme', () => {
    it('should call the given function destructuring the theme prop', () => {
      const fakeSelector = jest.fn((theme: Theme) => theme.color.alert)
      const result = getTheme(fakeSelector)({ theme: mockTheme })

      expect(fakeSelector).toHaveBeenCalledWith(mockTheme)
      expect(result).toBe(mockTheme.color.alert)
    })
  })

  describe('buildTheme', () => {
    it('should build theme using tokens', () => {
      const result = buildTheme('consultoriaDeBeleza', 'light')

      expect(result).toStrictEqual(mockTheme)
    })
  })
})
