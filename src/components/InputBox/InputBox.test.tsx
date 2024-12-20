import React from 'react'
import { renderWithTheme } from '../../../test/testHelpers'
import { InputBox } from './InputBox'

jest.mock('../../common/themeSelectors', () => (
  {
    getBorderRadiusMedium: () => 8,
    getColorLowEmphasis: () => '#BBB',
    getColorSurface: () => '#FFF',
    getTheme: () => ({})
  }))

const defaultProps = {
  children: <></>
}

describe('InputBox', () => {
  it('should render with default props', () => {
    const { getByTestId } = renderWithTheme(
      <InputBox {...defaultProps} />
    )

    expect(getByTestId('box-container')).toHaveStyle({
      borderColor: 'transparent',
      borderRadius: 4,
      borderWidth: 1
    })
    expect(getByTestId('box')).toHaveStyle({
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderColor: '#BBB',
      borderRadius: 4,
      borderWidth: 1,
      flexDirection: 'row'
    })
  })
  it('should render with given boxColor', () => {
    const { getByTestId } = renderWithTheme(
      <InputBox {...defaultProps} boxColor="#CCC" />
    )

    expect(getByTestId('box')).toHaveStyle({ borderColor: '#CCC' })
  })
  it('should render correctly with boxState "active"', () => {
    const { getByTestId } = renderWithTheme(
      <InputBox {...defaultProps} boxState="active" />
    )

    expect(getByTestId('box-container')).toHaveStyle({ borderWidth: 0 })
    expect(getByTestId('box')).toHaveStyle({ borderWidth: 2 })
  })
})
