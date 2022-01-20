import styled from 'styled-components/native'
import {
  getTheme,
  getColorOnBackground,
  getColorBackground,
  getColorLowEmphasis
} from '../themeSelectors'

export const TextWithTheme = styled.Text`
  color: ${getTheme(getColorOnBackground)};
`

export const ContainerWithTheme = styled.View`
  background-color: ${getTheme(getColorBackground)};
`

export const StoriesContainer = styled.ScrollView`
  background-color: ${getTheme(getColorBackground)};
  height: 100%;
`

export const ContainerRow = styled(ContainerWithTheme)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerWithBorder = styled(ContainerWithTheme)`
  border-color: ${getTheme(getColorLowEmphasis)};
  border-width: 1;
  color: ${getTheme(getColorLowEmphasis)};
`
