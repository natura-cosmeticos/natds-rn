/* eslint-disable max-lines */
import React from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  buildColorWithOpacity,
  getBorderRadiusMedium,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorSurface,
  getOpacityDisabledLow,
  getSizeLarge,
  getSizeMedium,
  getSizeMediumX,
  getSizeSemi,
  getSpacingSmall,
  getSpacingTiny,
} from '../../common/themeSelectors';
import { InputFeedbackContainer } from '../InputFeedbackContainer';
import { IconButton } from '../IconButton';
// @ts-ignore
import placeholderImage from '../../assets/images/anonymous.jpg';
import { TextFieldProps } from './TextField.types';

/* eslint-disable complexity */
export const TextField = (props: TextFieldProps) => {
  const theme = useTheme();
  const {
    action,
    disabled = false,
    feedback,
    helperText,
    label,
    placeholder,
    readonly,
    required = false,
    size = 'mediumX',
    value = '',

    onBlur,
    onChange,
    onChangeText,
    onFocus,
    secureTextEntry,
    defaultValue,
    keyboardType,
  }: TextFieldProps = props;
  const [active, setActive] = React.useState(false);
  const filled = !readonly && value !== '';
  const iconWidthWithPadding = getSpacingTiny(theme) + getSizeSemi(theme);
  const imageWidth = getSizeLarge(theme);
  const focusHandler = (nativeEvent) => {
    setActive(true);
    if (onFocus) onFocus(nativeEvent);
  };
  const blurHandler = (nativeEvent) => {
    setActive(false);
    if (onBlur) onBlur(nativeEvent);
  };
  const getContainerProps = () => {
    if (disabled) {
      return {
        disabled,
      };
    }

    return {
      active, feedback,
    };
  };

  return (
  <InputFeedbackContainer
    filled={filled}
    helperText={helperText}
    label={label}
    required={required}
    {...getContainerProps()}
  >
    <TextInput testID="input"
      style={{
        backgroundColor: readonly
          ? buildColorWithOpacity(getColorLowEmphasis, getOpacityDisabledLow, theme)
          : getColorSurface(theme),
        borderRadius: getBorderRadiusMedium(theme),
        color: disabled ? getColorLowEmphasis(theme) : getColorHighEmphasis(theme),
        flexGrow: 1,
        height: size === 'mediumX' ? getSizeMediumX(theme) : getSizeMedium(theme),
        paddingLeft: getSpacingSmall(theme),
        paddingRight: action
          ? getSpacingTiny(theme) + iconWidthWithPadding
          : getSpacingSmall(theme),
        width: '100%',
      }}
      defaultValue={defaultValue}
      editable={!disabled && !readonly}
      keyboardType={keyboardType}
      onBlur={nativeEvent => blurHandler(nativeEvent)}
      onChange={onChange}
      onChangeText={onChangeText}
      onFocus={nativeEvent => focusHandler(nativeEvent)}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
    />
    { action
      && <View style={{
        right: action === 'icon' ? iconWidthWithPadding : imageWidth,
      }}>
        { action === 'icon'
          ? <IconButton testID='action-icon' onPress={() => {}} />
          : <Image
              testID='action-image'
              style={{
                borderBottomRightRadius: getBorderRadiusMedium(theme),
                borderTopRightRadius: getBorderRadiusMedium(theme),
                height: size === 'mediumX' ? getSizeMediumX(theme) : getSizeMedium(theme),
                width: imageWidth,
              }}
              source={placeholderImage}
            />
        }
      </View>
    }
  </InputFeedbackContainer>
  );
};
/* eslint-enabled complexity */
