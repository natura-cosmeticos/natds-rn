import React from 'react'
import { Typography } from './Typography.styles'
import { renderWithTheme } from '../../../test/testHelpers'

jest.mock('../../common/themeSelectors', () => (
  {
    getColorHighlight: () => '#000000'
  }))

describe('Typography Component', () => {
  it('should render with default variant', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Typography testID="typography">Typography</Typography>)

    expect(getByTestId('typography')).toHaveStyle({ fontSize: 96 })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with heading2 variant', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Typography testID="typography" variant="heading2">Typography</Typography>)

    expect(getByTestId('typography')).toHaveStyle({ fontSize: 64 })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with heading3 variant', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Typography testID="typography" variant="heading3">Typography</Typography>)

    expect(getByTestId('typography')).toHaveStyle({ fontSize: 48 })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with heading4 variant', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Typography testID="typography" variant="heading4">Typography</Typography>)

    expect(getByTestId('typography')).toHaveStyle({ fontSize: 32 })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with heading5 variant', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Typography testID="typography" variant="heading5">Typography</Typography>)

    expect(getByTestId('typography')).toHaveStyle({ fontSize: 24 })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with heading6 variant', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Typography testID="typography" variant="heading6">Typography</Typography>)

    expect(getByTestId('typography')).toHaveStyle({ fontSize: 20 })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with body1 variant', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Typography testID="typography" variant="body1">Typography</Typography>)

    expect(getByTestId('typography')).toHaveStyle({ fontSize: 16 })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with body2 variant', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Typography testID="typography" variant="body2">Typography</Typography>)

    expect(getByTestId('typography')).toHaveStyle({ fontSize: 14 })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with caption variant', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Typography testID="typography" variant="caption">Typography</Typography>)

    expect(getByTestId('typography')).toHaveStyle({ fontSize: 12 })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with overline variant', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Typography testID="typography" variant="overline">Typography</Typography>)

    expect(getByTestId('typography')).toHaveStyle({ fontSize: 12 })
    expect(toJSON()).toMatchSnapshot()
  })
})
