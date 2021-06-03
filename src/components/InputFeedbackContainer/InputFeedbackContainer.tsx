import React from 'react';
import { View } from 'react-native';
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
  getColorSurface,
} from '../../common/themeSelectors';
import { InputHelperText } from '../InputHelperText';
import { InputLabel } from '../InputLabel';
import { InputFeedbackContainerProps } from './InputFeedbackContainer.types';

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
          && <InputLabel color={textElementsColor} content={label} required={required} />
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
        && <InputHelperText
          color={textElementsColor}
          content={helperText}
          feedback={feedback} />
      }
    </View>
  );
};
