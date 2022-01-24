import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { Text } from 'react-native'
import theme from '../../common/themeSelectors/theme/mock-theme.json'
import { CardTypes } from './Card.types'
import { Card } from '.'

const renderCard = (fn, props?: CardTypes) => fn(
  <ThemeProvider theme={theme}>
    <Card>
      <Text>{props}</Text>
    </Card>
  </ThemeProvider>
)

describe('Card component', () => {
  it('should render Base type as default', () => {
    const { queryByTestId } = renderCard(render)

    expect(queryByTestId('card')?.props).toHaveProperty('type', 'base')
  })
  it('should render Card component', () => {
    const card = renderCard(renderer.create)

    expect(card).toMatchSnapshot()
  })
})
