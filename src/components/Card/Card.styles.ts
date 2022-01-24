import styled from 'styled-components/native'
import { css } from 'styled-components'

import {
  Theme,
  getColorSurface
} from '../../common/themeSelectors'

type CardStyleProps = {
  theme: Theme;
}

export const CardBase = styled.View`
  ${({ theme }: CardStyleProps) => css`
    background-color: ${getColorSurface(theme)};
    border-radius: ${theme.card.borderRadius.enable}px;
  `}
`
