import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {
  getColorHighEmphasis,
  getColorSurface,
  getColorHighlight,
  getOpacity56,
  getRadiusBySize,
  getSpacingSmall,
  getSpacingTiny,
} from '../../common/themeSelectors';

const { height } = Dimensions.get('window');

export const DialogOverlay = styled.View(({ theme }) => ({
  background: getColorHighlight(theme),
  bottom: 0,
  flex: 1,
  left: 0,
  opacity: getOpacity56(theme),
  position: 'absolute',
  right: 0,
  top: 0,
}));

export const DialogWrapper = styled.View(({ theme }) => ({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  paddingLeft: getSpacingSmall(theme),
  paddingRight: getSpacingSmall(theme),
}));

export const DialogContainer = styled.View(({ theme }) => ({
  backgroundColor: getColorSurface(theme),
  borderRadius: getRadiusBySize(theme, 'medium'),
  maxHeight: height * 0.7,
  paddingVertical: getSpacingSmall(theme),
  width: '100%',
}));

const DialogTitleComponent = styled.Text(({ theme }) => ({
  color: getColorHighEmphasis(theme),
  fontSize: 20,
  marginBottom: getSpacingTiny(theme),
  marginHorizontal: getSpacingSmall(theme),
}));


/**
 * @deprecated `DialogTitle` since 7.4.0
 * use DialogHeader instead
 */
export const DialogTitle = props => (
  <DialogTitleComponent {...props} style={{ fontWeight: 'bold' }} />
);

/**
 * @deprecated `DialogContentText` since 7.4.0
 * use DialogBody instead
 */
export const DialogContentText = styled.Text(({ theme }) => ({
  color: getColorHighEmphasis(theme),
  fontSize: 14,
  fontWeight: 400,
}));

/**
 * @deprecated `DialogContent` since 7.4.0
 * use DialogBody instead
 */
export const DialogContent = styled.View(({ theme }) => ({
  paddingHorizontal: getSpacingSmall(theme),
}));
