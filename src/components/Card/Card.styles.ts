import styled from 'styled-components/native'
import { css } from 'styled-components'

import {
  Theme,
  getColorSurface
} from '../../common/themeSelectors'
import { CardProps } from './Card.types'

type CardStyleProps = {
  theme: Theme;
} & Pick<CardProps, 'radius'>

export const CardBase = styled.View`
  ${({ theme, radius }: CardStyleProps) => css`
    background-color: ${getColorSurface(theme)};
    border-radius: ${radius ? `${theme.card.borderRadius.enable}px` : `${theme.card.borderRadius.disable}px`};
  `}
`
