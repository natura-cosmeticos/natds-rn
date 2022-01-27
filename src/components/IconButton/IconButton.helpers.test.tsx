/* eslint-disable mocha/no-setup-in-describe */
import mockTheme from '../../common/themeSelectors/theme/mock-theme.json'
import { getShadowBySize, getColorByName, buildColorWithOpacity } from '../../common/themeSelectors'
import { IconButtonColors, IconButtonSizes } from './IconButton.types'
import {
  getContainerElevation,
  getIconColor,
  getIconSize,
  getContainerBackgroundColor
} from './IconButton.helpers'

jest.mock('../../common/themeSelectors', () => ({
  getShadowBySize: jest.fn().mockReturnValue({ elevation: 3 }),
  getColorByName: jest.fn().mockReturnValue('#eaeaea'),
  buildColorWithOpacity: jest.fn().mockReturnValue('#eaeaea00')
}))

interface IconColorScenarios {
  expectedIconColor: string;
  iconColor: IconButtonColors;
  disabled?: boolean;
}

interface IconSizesScenarios {
  expectedIconSize: string;
  iconSize: IconButtonSizes;
}

describe('getContainerElevation', () => {
  afterEach(() => {
    jest.restoreAllMocks()
    jest.clearAllMocks()
  })

  it('should return elevation micro when background style is float', () => {
    getContainerElevation('float', mockTheme)

    expect(getShadowBySize).toHaveBeenCalled()
  })

  it('should return no elevation if background style is not float', () => {
    const elevation = getContainerElevation('overlay', mockTheme)

    expect(elevation).toEqual({ elevation: 0 })
    expect(getShadowBySize).not.toHaveBeenCalled()
  })
})

describe('getIconColor', () => {
  const iconColors: Array<IconColorScenarios> = [
    {
      expectedIconColor: 'highEmphasis',
      iconColor: 'default'
    },
    {
      expectedIconColor: 'highEmphasis',
      iconColor: 'highEmphasis'
    },
    {
      expectedIconColor: 'surface',
      iconColor: 'light'
    },
    {
      expectedIconColor: 'primary',
      iconColor: 'primary'
    }
  ]

  const iconColorsDisabled: Array<IconColorScenarios> = [
    {
      expectedIconColor: 'mediumEmphasis',
      iconColor: 'default'
    },
    {
      expectedIconColor: 'mediumEmphasis',
      iconColor: 'highEmphasis'
    },
    {
      expectedIconColor: 'lowEmphasis',
      iconColor: 'light'
    },
    {
      expectedIconColor: 'mediumEmphasis',
      iconColor: 'primary'
    }
  ]

  it.each(iconColors)('should return the correct icon color for %o', ({
    expectedIconColor,
    iconColor
  }) => {
    const result = getIconColor(iconColor, false)

    expect(result).toEqual(expectedIconColor)
  })

  it.each(iconColorsDisabled)('should return the correct icon color for %o when is disabled', ({
    expectedIconColor,
    iconColor
  }) => {
    const result = getIconColor(iconColor, true)

    expect(result).toEqual(expectedIconColor)
  })
})

describe('getIconSize', () => {
  const iconSizes: Array<IconSizesScenarios> = [
    {
      expectedIconSize: 'semiX',
      iconSize: 'medium'
    },
    {
      expectedIconSize: 'standard',
      iconSize: 'semi'
    },
    {
      expectedIconSize: 'semi',
      iconSize: 'semiX'
    },
    {
      expectedIconSize: 'standard',
      iconSize: 'small'
    }
  ]

  it.each(iconSizes)('should return the correct icon color for %o when is disabled', ({
    expectedIconSize,
    iconSize
  }) => {
    const result = getIconSize(iconSize)

    expect(result).toEqual(expectedIconSize)
  })
})

describe('getContainerBackgroundColor', () => {
  it('should return the background color float', () => {
    getContainerBackgroundColor({
      backgroundStyle: 'float',
      disabled: false,
      theme: mockTheme
    })

    expect(getColorByName).toHaveBeenCalledWith(mockTheme, 'surface')
  })

  it('should return the background color float when is disabled', () => {
    getContainerBackgroundColor({
      backgroundStyle: 'float',
      disabled: true,
      theme: mockTheme
    })

    expect(getColorByName).toHaveBeenCalledWith(mockTheme, 'lowEmphasis')
  })

  it('should return the background color transparent', () => {
    const backgroundColor = getContainerBackgroundColor({
      backgroundStyle: 'none',
      disabled: false,
      theme: mockTheme
    })

    expect(backgroundColor).toEqual('transparent')
  })

  it('should call with all requested parameters', () => {
    buildColorWithOpacity(jest.fn(), jest.fn(), mockTheme)
    getContainerBackgroundColor({
      backgroundStyle: 'overlay',
      disabled: false,
      theme: mockTheme
    })

    expect(buildColorWithOpacity)
      .toHaveBeenCalledWith(expect.any(Function), expect.any(Function), mockTheme)
  })
})
