import styled from 'styled-components/native'
import { css } from 'styled-components'
import {
  getContainerBackgroundColor,
  getContainerElevation
} from './IconButton.helpers'
import { getSize } from '../../common/themeSelectors'

import { IconContainerProps } from './IconButton.types'

export const IconContainer = styled.View<IconContainerProps>`
  ${({
    theme, backgroundStyle, disabled, size
  }) => css`
    ${getContainerElevation(backgroundStyle, theme)};
    height: ${getSize(theme, size)}px;
    width: ${getSize(theme, size)}px;
    background-color: ${getContainerBackgroundColor({ backgroundStyle, disabled, theme })};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
  `}
`
