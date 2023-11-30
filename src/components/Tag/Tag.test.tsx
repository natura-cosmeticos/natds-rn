import React from 'react'
import {
  getBorderPosition, getPaddingBySize, getTextColorByName
} from './Tag.styles'

import { renderWithTheme } from '../../../test/testHelpers'
import { Tag } from './Tag'
import theme from '../../common/themeSelectors/theme/mock-theme.json'

jest.mock('../../common/themeSelectors')

describe('Tag Component', () => {
  it('should render with default variant', () => {
    const { toJSON } = renderWithTheme(<Tag text="Lorem Ipsum" testID="tag" />)

    expect(toJSON()).toMatchSnapshot()
  })
})

describe('Tag Colors', () => {
  it('should render with secondary color', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Tag text="Lorem Ipsum" color="secondary" />)

    expect(getByTestId('ds-tag')?.props).toHaveProperty('color', 'secondary')
    expect(getByTestId('ds-tag')).toHaveStyle({ backgroundColor: '#9f81fd' })
    expect(getByTestId('ds-tag-label')).toHaveStyle({ color: '#000000' })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should return the standard color value', () => {
    const mockFn = jest.fn(getTextColorByName)

    expect(mockFn({ theme })).toEqual('#000000')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

describe('Tag Sizes', () => {
  it('should render with non default size', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Tag text="Lorem Ipsum" size="standard" />)

    expect(getByTestId('ds-tag')?.props).toHaveProperty('size', 'standard')
    expect(getByTestId('ds-tag')).toHaveStyle({
      paddingHorizontal: 8,
      paddingVertical: 4
    })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should return default padding value ', () => {
    const mockFn = jest.fn(getPaddingBySize)

    expect(mockFn({ theme })).toEqual({ paddingHorizontal: 8 })
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

describe('Tag Border Position', () => {
  it('should render with non standard border', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Tag text="Lorem Ipsum" borderPosition="left" />)

    expect(getByTestId('ds-tag')?.props).toHaveProperty('borderPosition', 'left')
    expect(getByTestId('ds-tag')).toHaveStyle({
      borderBottomLeftRadius: 8,
      borderTopLeftRadius: 8
    })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should return standard border value', () => {
    const mockFn = jest.fn(getBorderPosition)

    expect(mockFn({ theme })).toEqual({ borderRadius: 8 })
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
