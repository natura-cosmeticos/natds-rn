import styled from 'styled-components/native'
import { css } from 'styled-components'
import {
  getContainerBackgroundColor,
  getContainerElevation
} from './IconButton.helpers'
import { getSize, Theme } from '../../common/themeSelectors'

import { IconContainerProps } from './IconButton.types'

type IconStyleProps = {theme: Theme} & IconContainerProps;
const currentSizes = ['semi', 'semiX', 'medium']

export const IconContainer = styled.View<IconContainerProps>`
  ${({
    theme, backgroundStyle = 'none', disabled = false, size = 'semi'
  }: IconStyleProps) => css`
    ${getContainerElevation(backgroundStyle, theme)};
    height: ${getSize(theme, size)}px;
    width: ${getSize(theme, size)}px;
    background-color: ${getContainerBackgroundColor({ backgroundStyle, disabled, theme })};
    border-radius: ${currentSizes.includes(size) ? theme.iconButton[size].borderRadius : 50}px;
    justify-content: center;
    align-items: center;
  `}
`
