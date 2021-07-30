import React from 'react';
import styled from 'styled-components/native';
import { Size, Theme } from '@naturacosmeticos/natds-themes/react-native';
import { CSSObject } from 'styled-components';
import { View } from 'react-native';
import {
  getBorderRadiusMedium,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorSurface,
  getSize,
  getSpacingMicro,
  getSpacingSmall,
  getTypographyStyles,
} from '../../common/themeSelectors';
import { IconButton } from '../IconButton';

type CounterSizes = keyof Pick<Size, 'medium' | 'semiX'>;

export interface CounterProps {
  /**
   * When `true` the value of the counter is not editable.
   * @default false
   */
  disabled?: boolean;
  /**
   * When provided this shows above the counter.
   */
  label?: string,
  /**
   * This defines the height of the component, according to
   * corresponding theme Size token.
   * @default 'medium'
   */
  size?: CounterSizes,
  /**
  * Optional ID for testing.
  */
  testID?: string,
  /**
   * Current value of the counter.
   */
  value?: number,
}

export const Label = styled.Text<{ theme: Theme }>(({ theme }): CSSObject => {
  const { subtitle2 } = getTypographyStyles(theme);

  return ({
    color: getColorMediumEmphasis(theme),
    fontSize: subtitle2.fontSize,
    fontWeight: subtitle2.fontWeight,
    letterSpacing: subtitle2.letterSpacing,
    marginBottom: getSpacingMicro(theme),
  });
});

const Container = styled.View<{
  size: CounterSizes, theme: Theme
}>(({ size, theme }): CSSObject => ({
  alignItems: 'center',
  backgroundColor: getColorSurface(theme),
  borderColor: getColorLowEmphasis(theme),
  borderRadius: getBorderRadiusMedium(theme),
  borderWidth: 1,
  flexDirection: 'row',
  height: getSize(theme, size),
}));

const Input = styled.TextInput<{ theme: Theme }>(({ theme }): CSSObject => {
  const { body1 } = getTypographyStyles(theme);

  return ({
    borderColor: getColorLowEmphasis(theme),
    borderLeftWidth: 1,
    borderRightWidth: 1,
    fontSize: body1.fontSize,
    fontWeight: body1.fontWeight,
    height: '100%',
    letterSpacing: body1.letterSpacing,
    paddingHorizontal: getSpacingSmall(theme),
    textAlign: 'center',
  });
});

export const Counter = ({
  disabled, label, size = 'medium', testID = 'counter', value = 0,
}: CounterProps) => (
  <View>
    { label
      && <Label testID="counter-label">
      { label }
      </Label>
    }
    <Container size={size} testID={testID}>
      <IconButton icon="outlined-action-subtract" onPress={() => {}}/>
      <Input testID="counter-input" value={value.toString()} />
      <IconButton icon="outlined-action-add" onPress={() => {}} />
    </Container>
  </View>
);
