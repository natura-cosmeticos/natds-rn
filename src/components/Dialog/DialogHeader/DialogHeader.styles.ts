import styled from 'styled-components/native'
import {
  getColorHighEmphasis,
  getSpacingSmall,
  getSpacingTiny
} from '../../../common/themeSelectors'

export const DialogHeaderContainer = styled.View(({ theme }) => ({
  alignItems: 'center',
  color: getColorHighEmphasis(theme),
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: getSpacingTiny(theme),
  paddingHorizontal: getSpacingSmall(theme)
}))

export const DialogHeaderContent = styled.View(() => ({
  flexDirection: 'row',
  height: '100%'
}))
