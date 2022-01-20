import React from 'react'
import { Logo } from './Logo'
import { renderWithTheme } from '../../../test/testHelpers'

describe('Logo component', () => {
  it('should render correctly with default props', () => {
    const { toJSON } = renderWithTheme(<Logo />)

    expect(toJSON()).toMatchSnapshot()
  })
  it('should render correctly with given model', () => {
    const { toJSON } = renderWithTheme(<Logo model="b" />)

    expect(toJSON()).toMatchSnapshot()
  })
  it('should render correctly with given color', () => {
    const { toJSON } = renderWithTheme(<Logo color="primary" />)

    expect(toJSON()).toMatchSnapshot()
  })
  it('should render correctly with given size', () => {
    const { toJSON } = renderWithTheme(<Logo size="medium" />)

    expect(toJSON()).toMatchSnapshot()
  })
})
