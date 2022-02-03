import React, { ReactNode } from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import {
  getColorHighEmphasis,
  getColorSurface,
  getColorHighlight,
  getOpacity56,
  getSpacingSmall,
  getSpacingTiny,
  Theme
} from '../../common/themeSelectors'
import { Divider } from '..'

type DialogStyleProps = {
  theme: Theme;
}

const { height } = Dimensions.get('window')

export const DialogOverlay = styled.View(({ theme }: DialogStyleProps) => ({
  background: getColorHighlight(theme),
  bottom: 0,
  flex: 1,
  left: 0,
  opacity: getOpacity56(theme),
  position: 'absolute',
  right: 0,
  top: 0
}))

export const DialogWrapper = styled.View(({ theme }: DialogStyleProps) => ({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  paddingLeft: getSpacingSmall(theme),
  paddingRight: getSpacingSmall(theme)
}))

export const DialogContainer = styled.View(({ theme }: DialogStyleProps) => ({
  backgroundColor: getColorSurface(theme),
  borderRadius: theme.dialog.borderRadius,
  maxHeight: height * 0.7,
  paddingVertical: getSpacingSmall(theme),
  width: '100%'
}))

const DialogTitleComponent = styled.Text(({ theme }: DialogStyleProps) => ({
  color: getColorHighEmphasis(theme),
  flex: 0.85,
  fontFamily: theme.dialog.title.primary.fontFamily,
  fontSize: theme.dialog.title.fontSize,
  fontWeight: theme.dialog.title.primary.fontWeight,
  letterSpacing: theme.dialog.title.letterSpacing,
  lineHeight: theme.dialog.title.fontSize * theme.dialog.title.lineHeight
}))

export const DialogTitle = (props) => (
  <DialogTitleComponent {...props} style={{ fontWeight: 'bold' }} />
)

export const DialogContentText = styled.Text(({ theme }: DialogStyleProps) => ({
  color: getColorHighEmphasis(theme),
  fontFamily: theme.dialog.body.primary.fontFamily,
  fontSize: theme.dialog.body.fontSize,
  fontWeight: theme.dialog.body.primary.fontWeight,
  letterSpacing: theme.dialog.body.letterSpacing,
  lineHeight: theme.dialog.body.fontSize * theme.dialog.body.lineHeight,
  padding: getSpacingSmall(theme)
}))

export interface DialogContentProps {
  /**
   * The optional children
   * Can receive any component as a child to be used as content
   */
  children?: ReactNode;
  /**
   * The optional divider
   * When true, a top and bottom line of content will appear
   */
  divider?: boolean;
}

const DialogContentComponent = styled.ScrollView<DialogContentProps>(() => ({
  flexShrink: 1
}))

export const DialogContent = ({ children, divider = false }: DialogContentProps) => (
  <DialogContentComponent bounces={false}>
    {divider && <Divider />}
    {children}
    {divider && <Divider />}
  </DialogContentComponent>
)

export type AlignmentOptions = 'side-by-side' | 'stacked';
export interface DialogActionsProps {
  /**
   * @deprecated `actionsAlignment` prop since 7.4.0
   */
  actionsAlignment?: AlignmentOptions;
}

type DialogActionsStyleProps = DialogStyleProps & DialogActionsProps;

const buildDialogAlignment = (actionsAlignment: AlignmentOptions) => (actionsAlignment === 'side-by-side' ? 'row' : 'column')

export const DialogActions = styled.View(({ theme, actionsAlignment = 'side-by-side' }: DialogActionsStyleProps) => ({
  flexDirection: buildDialogAlignment(actionsAlignment),
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  paddingHorizontal: getSpacingSmall(theme),
  paddingTop: getSpacingTiny(theme)
}))
