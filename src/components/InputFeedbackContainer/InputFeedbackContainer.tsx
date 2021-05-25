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
  disabled, feedback,
}: InputFeedbackContainerProps, theme: Theme) => {
  if (disabled) return getColorLowEmphasis(theme);
  if (feedback === 'success') return getColorSuccess(theme);
  if (feedback === 'error') return getColorAlert(theme);

  return getColorMediumEmphasis(theme);
};

/* eslint-disable complexity */
const getBoxColor = ({
  active, disabled, filled, feedback,
}: InputFeedbackContainerProps, theme: Theme) => {
  if (disabled) return getColorLowEmphasis(theme);
  if (active) return getColorPrimary(theme);
  if (feedback === 'success') return getColorSuccess(theme);
  if (feedback === 'error') return getColorAlert(theme);
  if (filled) return getColorHighEmphasis(theme);

  return getColorLowEmphasis(theme);
};
/* eslint-enable complexity */

const HelperText = ({ children, color, feedback }) => {
  const theme = useTheme();
  const iconName = (feedback === 'success' ? 'outlined-action-check' : 'outlined-action-cancel');
  const iconColor = (feedback === 'success' ? 'success' : 'alert');
  const { caption } = getTypographyStyles(theme);

  return (
    <View style={{ width: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: getSpacingMicro(theme),
        }}
      >
        { feedback
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
    active, children, helperText, label, required, feedback,
  } = props;
  const textElementsColor = getTextElementsColor(props, theme);
  const boxColor = getBoxColor(props, theme);

  return (
    <View style={{ width: '100%' }}>
      { label
        && <Label color={textElementsColor} required={required}>{label}</Label>
      }
      <View style={{
        borderColor: 'transparent',
        borderRadius: getBorderRadiusMedium(theme),
        borderWidth: active ? 0 : 1,
      }}>
        <View testID="box" style={{
          alignItems: 'center',
          backgroundColor: getColorSurface(theme),
          borderColor: boxColor,
          borderRadius: getBorderRadiusMedium(theme),
          borderWidth: active ? 2 : 1,
          flexDirection: 'row',
        }}>
          { children }
        </View>
      </View>
      { helperText
        && <HelperText color={textElementsColor} feedback={feedback}>
          { helperText }
        </HelperText>
      }
    </View>
  );
};
