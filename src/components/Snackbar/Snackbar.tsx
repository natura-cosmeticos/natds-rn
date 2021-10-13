import React, { useEffect, useRef, useState } from 'react';
import { Animated, Platform } from 'react-native';
import { withTheme } from 'styled-components/native';
import { Theme, getShadowBySize } from '../../common/themeSelectors';
import {
  SnackbarWrapper, SnackbarText, SnackbarButtonWrapper, getColorByType,
} from './Snackbar.styles';
import { ButtonBase } from '../Button/ButtonBase';

export type SnackbarType = 'standard' | 'success' | 'error' | 'warning' | 'info';

export interface SnackbarProps {
  /**
   * Theme
   */
  theme: Theme;
  /**
   * Snackbar's message content
   */
  message: string;
  /**
   * Snackbar's button text content when available
   */
  buttonText?: string;
  /**
   * Snackbar's type
   */
  type?: SnackbarType;
  /**
   * Snackbar's shown duration.
   */
  autoHideDuration?: number;
  /**
   * Whether the Snackbar is open
   */
  open: boolean;
  /**
   * How many message lines to be shown before clipping
   */
  numberOfLines?: number;
  /**
   * Callback when Snackbar is closed. The 'open' prop needs to be updated when this is called
   */
  onClose?: () => void;
}

// eslint-disable-next-line max-statements
export const SnackbarComponent = ({
  theme,
  message,
  buttonText,
  type = 'standard',
  autoHideDuration = 5000,
  open,
  numberOfLines = 2,
  onClose,
}: SnackbarProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);
  const [isMultiLineText, setIsMultiLineText] = useState(false);
  const autoHideTimer = React.useRef<NodeJS.Timeout>();

  const handleClose = () => {
    if (onClose) onClose();
  };

  const show = () => {
    setIsOpen(true);
    // fade in duration recommended by material-ui
    Animated.timing(fadeAnim, { duration: 225, toValue: 1, useNativeDriver: Platform.OS !== 'web' })
      .start(({ finished }) => {
        if (finished) autoHideTimer.current = global.setTimeout(handleClose, autoHideDuration);
      });
  };

  const hide = () => {
    // fade out duration recommended by material-ui
    Animated.timing(fadeAnim, { duration: 195, toValue: 0, useNativeDriver: Platform.OS !== 'web' })
      .start(({ finished }) => {
        if (finished) setIsOpen(false);
      });
  };

  const toggle = () => {
    if (open) return show();

    return hide();
  };

  useEffect(() => {
    toggle();

    return () => {
      if (autoHideTimer.current) global.clearTimeout(autoHideTimer.current);
    };
  }, [open, autoHideDuration]);

  if (!isOpen) return null;

  return (
    <SnackbarWrapper
      type={type}
      as={Animated.View}
      style={{ opacity: fadeAnim, ...getShadowBySize(theme, 'large') }}
      testID="natds-snackbar-wrapper"
    >
      <SnackbarText
        type={type}
        testID="natds-snackbar-text"
        numberOfLines={numberOfLines}
        onTextLayout={({ nativeEvent: { lines } }) => {
          setIsMultiLineText(lines.length >= numberOfLines);
        }}
        ellipsizeMode="tail"
        isTwoLineAction={isMultiLineText && !!buttonText}
      >
        {message}
      </SnackbarText>
      {buttonText && (
        <SnackbarButtonWrapper isTwoLineAction={isMultiLineText && !!buttonText}>
          <ButtonBase
            text={buttonText}
            type="text"
            onPress={handleClose}
            testID="natds-snackbar-button"
            size="medium"
            textLabelStyle={{ color: getColorByType(theme, type) }}
          />
        </SnackbarButtonWrapper>
      )}
    </SnackbarWrapper>
  );
};

export const Snackbar = withTheme(SnackbarComponent);
