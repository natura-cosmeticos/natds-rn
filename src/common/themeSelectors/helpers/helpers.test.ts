import { buildColorWithOpacity } from './helpers'
import theme from '../theme/mock-theme.json'

describe('buildColorWithOpacity', () => {
  it('should create a color adding opacity', () => {
    const colorSelectorSpy = jest
      .fn()
      .mockReturnValue('#000000')

    const opacitySelectorSpy = jest
      .fn()
      .mockReturnValue(0.8)

    const result = buildColorWithOpacity(colorSelectorSpy, opacitySelectorSpy, theme)

    expect(colorSelectorSpy).toHaveBeenCalledWith(theme)
    expect(opacitySelectorSpy).toHaveBeenCalledWith(theme)
    expect(result).toEqual('#00000080')
  })

  it('should return the original color if opacity is undefined', () => {
    const colorSelectorSpy = jest
      .fn()
      .mockReturnValue('#000000')

    const opacitySelectorSpy = jest.fn()

    const result = buildColorWithOpacity(colorSelectorSpy, opacitySelectorSpy, theme)

    expect(colorSelectorSpy).toHaveBeenCalledWith(theme)
    expect(opacitySelectorSpy).toHaveBeenCalledWith(theme)
    expect(result).toEqual('#000000')
  })
})
