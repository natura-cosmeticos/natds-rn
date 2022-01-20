import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '../../common/themeSelectors/theme/mock-theme.json'
import { Tab } from '.'
import { TabProps } from './Tab.types'

jest.mock('react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity')

jest.mock('../../common/themeSelectors', () => (
  {
    buildColorWithOpacity: () => '#BBBBBB00',
    getColorByName: () => '#000',
    getColorLowEmphasis: () => '#BBBBBB',
    getColorMediumEmphasis: () => '#777777',
    getColorOnBackground: () => '#333333',
    getColorPrimary: () => '#F4F4',
    getColorSurface: () => '#FFFFFF',
    getShadowBySize: () => ({ shadowColor: '#AEAEAE' }),
    getSize: () => 16,
    getSizeLarge: () => 60,
    getSizeLargeX: () => 72,
    getSizeMedium: () => 48,
    getSpacingSmall: () => 16
  }))

const renderTab = (fn, props: Omit<TabProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <Tab {...props} />
  </ThemeProvider>
))

const defaultProps = ({
  onChange: () => ({}),
  tabOptions: [
    {
      iconName: 'outlined-default-mockup',
      key: 'itemOne',
      label: 'Item One',
      selected: true
    },
    {
      key: 'itemTwo',
      label: 'Item Two'
    },
    {
      key: 'itemThree',
      label: 'Item Three'
    },
    {
      disabled: true,
      key: 'itemFourth',
      label: 'Item Four',
      selected: true
    }
  ]
})

describe('Tab component', () => {
  it('Should render tab component with default props', () => {
    const tab = renderTab(renderer.create, defaultProps).toJSON()

    expect(tab).toMatchSnapshot()
  })

  it('Should render tab item with a uppercase text', () => {
    const { queryByTestId } = renderTab(render, defaultProps)

    const firstTab = queryByTestId('ds-tab').children[0]

    expect(firstTab).toHaveTextContent('ITEM ONE')
  })
})

describe('Tab component actions', () => {
  it('Should call the given onChange function', () => {
    const onChangeMock = jest.fn()
    const { queryByTestId } = renderTab(render, {
      ...defaultProps,
      onChange: onChangeMock
    })

    const secondTab = queryByTestId('ds-tab').children[1]

    fireEvent.press(secondTab)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('Should have bottom border on the first active tab as default', () => {
    // corrigir
    const { queryByTestId } = renderTab(render, defaultProps)

    const firstTab = queryByTestId('ds-tab-item-0')

    expect(firstTab).toHaveStyle({
      borderBottomColor: '#F4F4'
    })
  })

  it('Should add bottom border on tab item when the given tab is pressed', () => {
    const { queryByTestId } = renderTab(render, defaultProps)

    const thirdTab = queryByTestId('ds-tab-item-2')

    fireEvent.press(thirdTab)

    expect(thirdTab).toHaveStyle({
      borderBottomColor: '#F4F4'
    })
  })
})

describe('Tab component render props', () => {
  it('Should render tab component with icon on top', () => {
    const { queryByTestId } = renderTab(render, { ...defaultProps, iconPosition: 'top' })

    expect(queryByTestId('natds-icon')).toBeTruthy()
  })

  it('Should render tab component with leading icon', () => {
    const { queryByTestId } = renderTab(render, { ...defaultProps, iconPosition: 'leading' })

    expect(queryByTestId('natds-icon')).toBeTruthy()
    expect(queryByTestId('ds-tab')).toHaveStyle({ height: 72 })
  })

  it('Should render tab component without label, only icon', () => {
    const { queryByTestId } = renderTab(render, { ...defaultProps, iconPosition: 'icon' })

    expect(queryByTestId('natds-icon')).toBeTruthy()
    expect(queryByTestId('ds-tab')).toHaveStyle({ height: 48 })
  })

  it('Should render tab component with scrollable postion', () => {
    const { toJSON } = renderTab(render, { ...defaultProps, position: 'scrollable' })

    expect(toJSON()).toMatchSnapshot()
  })

  it('Should render tab component disabled tab', () => {
    const { queryByTestId, getByText } = renderTab(render, defaultProps)

    expect(queryByTestId('ds-tab-item-3')).toBeDisabled()
    expect(getByText('ITEM FOUR')).toHaveStyle({ color: '#BBBBBB' })
    expect(getByText('ITEM FOUR')).toHaveStyle({ color: '#BBBBBB' })
  })

  it('Should render tab without container background', () => {
    const { queryByTestId } = renderTab(render, { ...defaultProps, backgroundColor: false })

    expect(queryByTestId('ds-tab')).toHaveStyle({ backgroundColor: 'transparent' })
  })

  it('Should render tab elevation', () => {
    const element = renderTab(render, { ...defaultProps, elevation: true }).toJSON()

    expect(element).toHaveStyle({ shadowColor: '#AEAEAE' })
  })

  it('Should render tab with selected as active tab', () => {
    const { queryByTestId } = renderTab(render, defaultProps)

    expect(queryByTestId('ds-tab-item-0')).toHaveStyle({
      borderBottomColor: '#F4F4'
    })
  })

  it('Should not render tab with selected if the same is disabled', () => {
    const defaultPropsWithDisabled = {
      onChange: () => ({}),
      tabOptions: [
        {
          disabled: true,
          key: 'itemOne',
          label: 'Item One',
          selected: true
        }
      ]
    }

    const { queryByTestId } = renderTab(render, defaultPropsWithDisabled)

    expect(queryByTestId('ds-tab-item-0')).not.toHaveStyle({
      borderBottomColor: '#F4F4'
    })
  })
})
