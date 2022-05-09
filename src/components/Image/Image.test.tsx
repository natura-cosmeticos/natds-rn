import React from 'react'

import { Text } from 'react-native'
import { renderWithTheme } from '../../../test/testHelpers'
import { Image } from './Image'
import NatAvatar from '../../assets/images/nat_avatar.jpg'
import { getFadePosition, Highlight } from './Hightlight'
import { getBorderRadius } from './Image.styles'
import theme from '../../common/themeSelectors/theme/mock-theme.json'

describe('Image Component', () => {
  it('should render with default variant', () => {
    const { toJSON } = renderWithTheme(<Image source={NatAvatar} testID="default" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with highlight variant', () => {
    const { toJSON } = renderWithTheme(<Image source={NatAvatar} variant="highlight" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with bottom fade', () => {
    const { toJSON } = renderWithTheme(<Image source={NatAvatar} variant="highlight" fade="bottom" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with a text children', () => {
    const { toJSON } = renderWithTheme(
      <Image source={NatAvatar}>
        <Text>Hello</Text>
      </Image>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the image component with radius different to default', () => {
    const { getByTestId } = renderWithTheme(<Image source={NatAvatar} radius="medium" testID="medium-radius" />)

    const result = getByTestId('medium-radius')

    expect(result?.props).toHaveProperty('radius', 'medium')
    expect(result).toHaveStyle({ borderRadius: 4 })
  })

  it('should render a highlight effect class', () => {
    const { toJSON } = renderWithTheme(<Highlight variant="highlight" fade="bottom" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should return 0 value when not receive a radius props', () => {
    const result = getBorderRadius({ theme })

    expect(result).toEqual(0)
  })

  it('should return bottom value when not receive a fade props', () => {
    const result = getFadePosition()

    expect(result).toEqual({
      x1: '0', y1: '0', x2: '0', y2: '1'
    })
  })
})
