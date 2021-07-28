import React from 'react';
import styled from 'styled-components/native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { CSSObject } from 'styled-components';
import {
  getBorderRadiusMedium,
  getColorLowEmphasis,
  getColorSurface,
  getSizeMedium,
  getSpacingSmall,
  getTypographyStyles,
} from '../../common/themeSelectors';
import { IconButton } from '../IconButton';

export interface CounterProps {
  /**
  * Optional ID for testing
  */
  testID?: string,
  /**
   * Current value of the counter
   */
  value?: number,
}

const Container = styled.View<{ theme: Theme }>(({ theme }): CSSObject => ({
  alignItems: 'center',
  backgroundColor: getColorSurface(theme),
  borderColor: getColorLowEmphasis(theme),
  borderRadius: getBorderRadiusMedium(theme),
  borderWidth: 1,
  flexDirection: 'row',
  height: getSizeMedium(theme),
}));

const Input = styled.TextInput<{ theme: Theme }>(({ theme }): CSSObject => {
  const { body1 } = getTypographyStyles(theme);

  return ({
    borderColor: getColorLowEmphasis(theme),
    borderLeftWidth: 1,
    borderRightWidth: 1,
    fontSize: body1.fontSize,
    fontWeight: body1.fontWeight,
    letterSpacing: body1.letterSpacing,
    padding: getSpacingSmall(theme),
    textAlign: 'center',
  });
});

export const Counter = ({ testID = 'counter', value = 0 }: CounterProps) => (
  <Container testID={testID}>
    <IconButton icon="outlined-action-subtract" onPress={() => {}}/>
    <Input value={value.toString()} />
    <IconButton icon="outlined-action-add" onPress={() => {}} />
  </Container>
);
