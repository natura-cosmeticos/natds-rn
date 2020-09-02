import React, { Component } from 'react';
import { Animated } from 'react-native';
import { withTheme } from 'styled-components/native';
import { Theme } from '../../common/themeSelectors';
import { SnackbarWrapper, SnackbarText, SnackbarButton } from './Snackbar.styles';

export type SnackbarType = 'standard' | 'success' | 'error' | 'warning' | 'info';

export interface SnackbarProps {
  theme: Theme;
  message: string;
  buttonText?: string;
  type?: SnackbarType;
  autoHideDuration?: number;
  open: boolean;
  numberOfLines?: number;
  onClose?: () => void;
}

interface SnackbarState {
  isMultiLineText: boolean;
  isAnimating: boolean;
  // workaround to solve setTimout and clearTimeout typings
  timerAutoHide: number | NodeJS.Timeout;
  fadeAnim: Animated.Value;
  isOpen: boolean;
}

export class SnackbarComponent extends Component<SnackbarProps, SnackbarState> {
  state = {
    fadeAnim: new Animated.Value(0),
    isAnimating: false,
    isMultiLineText: false,
    isOpen: false,
    timerAutoHide: 0,
  };

  componentDidMount() {
    const { open, autoHideDuration = 5000 } = this.props;

    if (open) {
      this.setState({ isOpen: open });
      this.setAutoHideTimer(autoHideDuration);
    }
  }

  componentDidUpdate(prevProps: SnackbarProps) {
    const { open, autoHideDuration = 5000 } = this.props;

    if (prevProps.open !== open) {
      if (open) {
        this.setAutoHideTimer(autoHideDuration);

        this.setState({ isAnimating: true, isOpen: true }, () => {
          // fade in duration recommended by material-ui
          Animated.timing(this.state.fadeAnim, { duration: 225, toValue: 1, useNativeDriver: true })
            .start(({ finished }) => {
              if (finished) this.setState({ isAnimating: false });
            });
        });
      } else {
        this.setState({ isAnimating: true }, () => {
          // fade out duration recommended by material-ui
          Animated.timing(this.state.fadeAnim, { duration: 195, toValue: 0, useNativeDriver: true })
            .start(({ finished }) => {
              if (finished) this.setState({ isAnimating: false, isOpen: false });
            });
        });
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timerAutoHide);
  }

  handleClose = () => {
    this.setState({ isOpen: false }, () => {
      if (this.props.onClose) this.props.onClose();
    });
  };

  setAutoHideTimer = (autoHideDurationParam?: number) => {
    if (!this.props.onClose || autoHideDurationParam == null) return;

    if (this.state.timerAutoHide) clearTimeout(this.state.timerAutoHide);

    this.setState({ timerAutoHide: setTimeout(() => this.handleClose(), autoHideDurationParam) });
  };

  render() {
    const {
      type = 'standard',
      numberOfLines = 2,
      buttonText,
      message,
    } = this.props;

    if (!this.state.isOpen) return null;

    return (
      <Animated.View
        // https://github.com/facebook/react-native/issues/23090
        // setting needsOffscreenAlphaCompositing to true during animations
        needsOffscreenAlphaCompositing={this.state.isAnimating}
        style={{
          bottom: 0,
          opacity: this.state.fadeAnim,
          position: 'absolute',
          width: '100%',
        }}
      >
        <SnackbarWrapper type={type} testID="natds-snackbar-wrapper">
          <SnackbarText
            type={type}
            numberOfLines={numberOfLines}
            onTextLayout={({ nativeEvent: { lines } }) => {
              this.setState({ isMultiLineText: lines.length >= numberOfLines });
            }}
            ellipsizeMode="tail"
            isTwoLineAction={this.state.isMultiLineText && !!buttonText}
            testID="natds-snackbar-text">
              {message}
          </SnackbarText>
          {buttonText && <SnackbarButton type='text' text={buttonText} onPress={this.handleClose} testID="natds-snackbar-button"/>}
        </SnackbarWrapper>
      </Animated.View>
    );
  }
}

export const Snackbar = withTheme(SnackbarComponent);
