/* eslint-disable max-lines */
import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  Theme,
  getBorderRadiusMedium,
  getColorAlert,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorPrimary,
  getColorSuccess,
  getSpacingMicro,
  getTypographyStyles,
  getColorSurface,
} from '../../common/themeSelectors';
import { Icon } from '../Icon';

type ContentProps = {
  children: ReactNode;
  filled?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
}

type FeedbackProps =
  | {
    active?: boolean;
    disabled?: never;
    feedback?: 'error' | 'success';
  }
  | {
    active?: never;
    disabled?: boolean;
    feedback?: never;
  }

export type InputFeedbackContainerProps = ContentProps & FeedbackProps

const getTextElementsColor = ({
  disabled, feedback: validation,
}: InputFeedbackContainerProps, theme: Theme) => {
  if (disabled) return getColorLowEmphasis(theme);
  if (validation === 'success') return getColorSuccess(theme);
  if (validation === 'error') return getColorAlert(theme);

  return getColorMediumEmphasis(theme);
};

/* eslint-disable complexity */
const getBoxColor = ({
  active, disabled, filled, feedback: validation,
}: InputFeedbackContainerProps, theme: Theme) => {
  if (disabled) return getColorLowEmphasis(theme);
  if (active) return getColorPrimary(theme);
  if (validation === 'success') return getColorSuccess(theme);
  if (validation === 'error') return getColorAlert(theme);
  if (filled) return getColorHighEmphasis(theme);

  return getColorLowEmphasis(theme);
};
/* eslint-enable complexity */

const HelperText = ({ children, color, validation }) => {
  const theme = useTheme();
  const iconName = (validation === 'success' ? 'outlined-action-check' : 'outlined-action-cancel');
  const iconColor = (validation === 'success' ? 'success' : 'alert');
  const { caption } = getTypographyStyles(theme);

  return (
    <View style={{ width: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: getSpacingMicro(theme),
        }}
      >
        { validation
          && <View style={{
            marginRight: getSpacingMicro(theme),
          }}>
            <Icon testID="icon" name={iconName} color={iconColor} size="small" />
          </View>
        }
        <Text testID="helper-text" style={{
          color,
          ...caption,
        }}>{ children }</Text>
      </View>
    </View>
  );
};

const Label = ({ children, color, required }) => {
  const theme = useTheme();
  const { subtitle2 } = getTypographyStyles(theme);

  return (
    <Text
      testID="label"
      style={{
        color,
        marginBottom: getSpacingMicro(theme),
        ...subtitle2,
      }}
    >
      { children }
      { required && '*' }
    </Text>
  );
};

export const InputFeedbackContainer = (props: InputFeedbackContainerProps) => {
  const theme = useTheme();
  const {
    active, children, helperText, label, required, feedback: validation,
  } = props;
  const textElementsColor = getTextElementsColor(props, theme);
  const boxColor = getBoxColor(props, theme);

  return (
    <View style={{ width: '100%' }}>
      { label
        && <Label color={textElementsColor} required={required}>{label}</Label>
      }
      <View testID="box" style={{
        backgroundColor: getColorSurface(theme),
        borderColor: boxColor,
        borderRadius: getBorderRadiusMedium(theme),
        borderWidth: active ? 2 : 1,
      }}>
        { children }
      </View>
      { helperText
        && <HelperText color={textElementsColor} validation={validation}>
          { helperText }
        </HelperText>
      }
    </View>
  );
};
