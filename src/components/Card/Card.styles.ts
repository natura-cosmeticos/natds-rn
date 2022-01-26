import styled from 'styled-components/native'
import { css } from 'styled-components'

import {
  Theme,
  getColorSurface,
  getShadowBySize
} from '../../common/themeSelectors'
import { CardProps } from './Card.types'

type CardStyleProps = {
  theme: Theme;
} & Pick<CardProps, 'radius' | 'elevation'>

export const CardBase = styled.View`
  ${({ theme, radius, elevation = true }: CardStyleProps) => css`
    ${elevation ? getShadowBySize(theme, 'micro') : { elevation: 0 }})}
    background-color: ${getColorSurface(theme)};
    border-radius: ${radius ? `${theme.card.borderRadius.enable}px` : `${theme.card.borderRadius.disable}px`};
  `}
`
