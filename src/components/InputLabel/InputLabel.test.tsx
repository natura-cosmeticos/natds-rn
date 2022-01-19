import React from 'react'
import { renderWithTheme } from '../../../test/testHelpers'
import { InputLabel } from './InputLabel'

jest.mock('../../common/themeSelectors', () => (
  {
    getColorMediumEmphasis: () => '#777',
    getSpacingMicro: () => 2,
    getTypographyStyles: () => ({ subtitle2: { fontSize: 16 } })
  }))

const defaultProps = {
  content: 'testing label'
}

describe('InputLabel', () => {
  it('should render with default props', () => {
    const { getByTestId } = renderWithTheme(
      <InputLabel {...defaultProps} />
    )

    expect(getByTestId('label')).toHaveStyle({ color: '#777', fontSize: 14, marginBottom: 2 })
  })

  it('should render given content correctly', () => {
    const { getByTestId } = renderWithTheme(
      <InputLabel {...defaultProps} />
    )

    expect(getByTestId('label')).toHaveTextContent('testing label')
  })

  it('should render given content with asterisk when required', () => {
    const { getByTestId } = renderWithTheme(
      <InputLabel {...defaultProps} required />
    )

    expect(getByTestId('label')).toHaveTextContent('testing label*')
  })

  it('should render with given color', () => {
    const { getByTestId } = renderWithTheme(
      <InputLabel {...defaultProps} color="#BBB" />
    )

    expect(getByTestId('label')).toHaveStyle({ color: '#BBB' })
  })
})
