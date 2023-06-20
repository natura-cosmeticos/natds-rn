import { Theme } from '@naturacosmeticos/natds-themes/react-native'
import React, { ReactNode } from 'react'
import { CSSObject } from 'styled-components'
import styled, { useTheme } from 'styled-components/native'
import { BrandTypes } from '../../common/brandTypes/brandTypes'
import {
  buildTheme,
  getColorAlert,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorPrimary,
  getColorSuccess
} from '../../common/themeSelectors'
import { InputBox } from '../InputBox'
import { InputHelperText } from '../InputHelperText'
import { InputLabel } from '../InputLabel'
import { buildInputState, InputStates } from './InputFeedbackHelper'

type ContentProps = {
  children: ReactNode;
  filled?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
  brand?: BrandTypes;
}

type FeedbackProps =
  | { active?: boolean; disabled?: never; feedback?: 'error' | 'success' }
  | { active?: never; disabled?: boolean; feedback?: never }

export type InputFeedbackContainerProps = ContentProps & FeedbackProps

type ColorsObject = {
  [state in InputStates]: { box: string; text: string };
}

export const getElementsColorsByState = (element: 'box' | 'text', theme: Theme, brand?: BrandTypes) => (state: InputStates) => {
  if (brand) {
    const themeSelect = buildTheme(brand, 'dark')
    const colorsTheme: ColorsObject = {
      active: { box: getColorPrimary(themeSelect), text: getColorMediumEmphasis(theme) },
      default: { box: getColorLowEmphasis(theme), text: getColorMediumEmphasis(theme) },
      disabled: { box: getColorLowEmphasis(theme), text: getColorLowEmphasis(theme) },
      error: { box: getColorAlert(theme), text: getColorAlert(theme) },
      filled: { box: getColorHighEmphasis(theme), text: getColorMediumEmphasis(theme) },
      success: { box: getColorSuccess(theme), text: getColorSuccess(theme) }
    }
    return colorsTheme[state][element]
  }
  const colors: ColorsObject = {
    active: { box: getColorPrimary(theme), text: getColorMediumEmphasis(theme) },
    default: { box: getColorLowEmphasis(theme), text: getColorMediumEmphasis(theme) },
    disabled: { box: getColorLowEmphasis(theme), text: getColorLowEmphasis(theme) },
    error: { box: getColorAlert(theme), text: getColorAlert(theme) },
    filled: { box: getColorHighEmphasis(theme), text: getColorMediumEmphasis(theme) },
    success: { box: getColorSuccess(theme), text: getColorSuccess(theme) }
  }

  return colors[state][element]
}

const Container = styled.View((): CSSObject => ({ width: '100%' }))

export const InputFeedbackContainer = (props: InputFeedbackContainerProps) => {
  const {
    active, children, disabled, helperText, label, required, feedback, filled, brand
  } = props
  const theme = useTheme()
  const boxState = buildInputState({
    active, disabled, feedback, filled
  })
  const boxColor = getElementsColorsByState('box', theme, brand)(boxState)

  const textState = buildInputState({ disabled, feedback, filled })
  const textColor = getElementsColorsByState('text', theme, brand)(textState)

  return (
    <Container>
      { label
        ? <InputLabel color={textColor} content={label} required={required} />
        : null}
      <InputBox boxColor={boxColor} boxState={boxState === 'active' ? boxState : undefined}>
        { children }
      </InputBox>
      { helperText
        ? <InputHelperText color={textColor} content={helperText} feedback={feedback} />
        : null}
    </Container>
  )
}
