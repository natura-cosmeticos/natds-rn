import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { Text } from 'react-native'
import theme from '../../common/themeSelectors/theme/mock-theme.json'
import { CardProps } from './Card.types'
import { Card } from '.'

const renderCard = (fn, props?: CardProps) => fn(
  <ThemeProvider theme={theme}>
    <Card {...props}>
      {props?.children}
    </Card>
  </ThemeProvider>
)

const children = <Text>Card</Text>

describe('Card component', () => {
  it('should render Base type as default', () => {
    const { queryByTestId } = renderCard(render, { children })

    expect(queryByTestId('card')?.props).toHaveProperty('type', 'base')
  })
  it('should render a Card without elevation', () => {
    const card = renderCard(renderer.create, { children, testID: 'elevationID', elevation: false })

    expect(card).toMatchSnapshot()
  })

  it('should render a Card without rounded corners', () => {
    const card = renderCard(renderer.create, { children, testID: 'radiusID', radius: false })

    expect(card).toMatchSnapshot()
  })
})
