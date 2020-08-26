import React, { useRef, useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { withTheme } from 'styled-components/native';
import { Theme } from '../../common/themeSelectors';
import { SnackbarWrapper, SnackbarText, SnackbarButton } from './Snackbar.styles';

export type SnackbarType = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface SnackbarProps {
  theme: Theme;
  message: string;
  buttonText?: string;
  type?: SnackbarType;
  autoHideDuration?: number;
  open?: boolean;
  numberOfLines?: number;
  onClose?: () => void;
}

const SnackbarComponent = ({
  message,
  type = 'default',
  buttonText,
  autoHideDuration = 5000,
  open,
  numberOfLines = 2,
  onClose,
}: SnackbarProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  let timerAutoHide: ReturnType<typeof setTimeout>;

  const [isTwoLineText, setIsTwoLineText] = useState(false);

  const handleClose = () => {
    // fade out duration recommended by material-ui
    Animated.timing(fadeAnim, { duration: 195, toValue: 0, useNativeDriver: true }).start();

    if (onClose) {
      onClose();
    }
  };

  const setAutoHideTimer = (autoHideDurationParam: number | null) => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide);
    timerAutoHide = setTimeout(() => {
      handleClose();
    }, autoHideDurationParam);
  };

  useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);

      // fade in duration recommended by material-ui
      Animated.timing(fadeAnim, { duration: 225, toValue: 1, useNativeDriver: true }).start();
    }

    return () => {
      clearTimeout(timerAutoHide);
    };
  }, [open, autoHideDuration]);

  if (!open) {
    return null;
  }

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <SnackbarWrapper type={type}>
        <SnackbarText
          type={type}
          numberOfLines={numberOfLines}
          onTextLayout={({ nativeEvent: { lines } }) => {
            setIsTwoLineText(lines.length >= numberOfLines);
          }}
          ellipsizeMode="tail"
          isTwoLineAction={isTwoLineText && !!buttonText}>
            {message}
        </SnackbarText>
        {buttonText && <SnackbarButton type='text' text={buttonText} onPress={handleClose}/>}
      </SnackbarWrapper>
    </Animated.View>
  );
};

export const Snackbar = withTheme(SnackbarComponent);
