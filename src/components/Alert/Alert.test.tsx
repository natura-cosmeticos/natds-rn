import React from 'react'
import theme from '../../common/themeSelectors/theme/mock-theme.json'
import { Alert } from '.'
import { renderWithTheme } from '../../../test/testHelpers'

jest.mock('../../common/themeSelectors', () => (
  {
    getColorByName: () => 'red',
    getColorOnPrimary: () => '#333333',
    getRadiusBySize: () => 8,
    getSize: () => 24,
    getSpacingSmall: () => 16,
    getSpacingTiny: () => 8
  }))

describe('Alert component', () => {
  it('Should render alert with default props', () => {
    const { toJSON } = renderWithTheme(<Alert testID="alert" title="title" message="Alert text message" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('Should render alert with outlined variant', () => {
    const { toJSON } = renderWithTheme(<Alert variant="outlined" title="title" message="Alert text message" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('Should render alert with custom type with outlined variant', () => {
    const { toJSON } = renderWithTheme(
      <Alert
        type="custom"
        title="title"
        message="Alert text message"
        variant="outlined"
        backgroundColorName="primary"
        borderColorName="primary"
        iconName="filled-action-check"
        iconColorName="link"
        messageColorName="link"
        titleColorName="link"
      />
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('Should change icon when type changes', () => {
    const { queryByTestId } = renderWithTheme(<Alert type="success" title="title" message="Alert text message" />)

    expect(queryByTestId('alert-icon')?.props?.children?.props).toHaveProperty('name', 'outlined-alert-check')
  })

  it('Should change alert background color when type changes', () => {
    const { queryByTestId } = renderWithTheme(<Alert type="warning" title="title" message="Alert text message" />)

    expect(queryByTestId('alert')?.props?.style[0]).toHaveProperty('backgroundColor', `${theme.color.warning}29`)
  })

  it('Should hide title component when not informed', () => {
    const { queryByTestId } = renderWithTheme(<Alert message="Alert text message" />)

    expect(queryByTestId('alert-content')?.props?.children[0]).toBeFalsy()
  })

  it('Should hide icon component when icon props is false', () => {
    const { queryByTestId } = renderWithTheme(<Alert icon={false} title="title" message="Alert text message" />)

    expect(queryByTestId('alert-icon')?.props?.children).toBeFalsy()
  })
})
