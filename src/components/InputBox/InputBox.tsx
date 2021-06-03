import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { CSSObject, useTheme } from 'styled-components';
import { getBorderRadiusMedium, getColorSurface } from '../..';
import { InputStates } from '../InputFeedbackContainer/InputFeedbackHelper';
import { getColorLowEmphasis } from '../../common/themeSelectors';

interface InputBoxProps {
  boxColor?: string,
  boxState?: Extract<InputStates, 'active'>,
  children: ReactNode,
}

const BoxContainer = styled.View<{ borderWidth: number }>(({ borderWidth, theme }): CSSObject => ({
  borderColor: 'transparent',
  borderRadius: getBorderRadiusMedium(theme),
  borderWidth,
}));

const Box = styled.View<{
  borderColor: string, borderWidth: number,
}>(({ borderColor, borderWidth, theme }): CSSObject => ({
  alignItems: 'center',
  backgroundColor: getColorSurface(theme),
  borderColor,
  borderRadius: getBorderRadiusMedium(theme),
  borderWidth,
  flexDirection: 'row',
}));

export const InputBox = ({ boxColor, boxState, children }: InputBoxProps) => {
  const theme = useTheme();
  const isActive = boxState === 'active';

  return (
    <BoxContainer testID="box-container" borderWidth={isActive ? 0 : 1} theme={theme}>
      <Box testID="box" borderColor={boxColor || getColorLowEmphasis(theme)} borderWidth={isActive ? 2 : 1} theme={theme}>
        { children }
      </Box>
    </BoxContainer>
  );
};
