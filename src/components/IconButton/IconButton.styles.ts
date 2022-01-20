import styled from 'styled-components/native'
import {
  getContainerBackgroundColor
} from './IconButton.helpers'
import { getSize } from '../../common/themeSelectors'

import { IconContainerProps } from './IconButton.types'

export const IconContainer = styled.View<IconContainerProps>`
  height: ${({ size, theme }) => getSize(theme, size)}px;
  width: ${({ size, theme }) => getSize(theme, size)}px;
  background-color: ${({ backgroundStyle, disabled, theme }) => getContainerBackgroundColor({ backgroundStyle, disabled, theme })};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`
