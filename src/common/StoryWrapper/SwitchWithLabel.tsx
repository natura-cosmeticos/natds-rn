import React from 'react'
import { Switch } from 'react-native'
import { withTheme } from 'styled-components/native'
import { SwitchContainer } from './StoryWrapper.styles'
import { getColorSuccess, getColorLowEmphasis, getColorOnSuccess } from '../themeSelectors'
import { TextWithTheme } from '../HelperComponents/ThemeHelper.styles'

const SwitchWithLabelComponent = ({
  onChange, isLast, label, isActive, theme
}) => {
  const colorProps = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    ios_backgroundColor: '#3e3e3e',
    thumbColor: getColorOnSuccess(theme),
    trackColor: {
      false: getColorLowEmphasis(theme) || '#eaeaea',
      true: getColorSuccess(theme) || '#BEC950'
    }
  }

  return (
    <SwitchContainer isLast={isLast}>
      <TextWithTheme style={{ paddingRight: 5 }}>{label}</TextWithTheme>
      <Switch {...colorProps} onValueChange={onChange} value={isActive} />
    </SwitchContainer>
  )
}

export const SwitchWithLabel = withTheme(SwitchWithLabelComponent)
