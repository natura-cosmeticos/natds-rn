import React, { ReactNode } from 'react';
import styled, { withTheme } from 'styled-components/native';
import {
  Theme,
  getRadiusBySize,
  getShadowBySize,
  getColorSurface,
  getSpacingSmall,
} from '../../common/themeSelectors';

export type CardTypes = 'base';

export interface CardProps {
  /**
   * Card variants `base`
   */
  type?: CardTypes;
  /**
   * The Card content
   */
  children: ReactNode;
  /**
   * The Card theme
   */
  theme: Theme;
  /**
   * Optional ID for testing
   */
  testID?: string;
}

interface CardBase {
  type: CardTypes;
  theme: Theme;
}

const CardBase = styled.View<CardBase>(({ theme }) => ({
  backgroundColor: getColorSurface(theme),
  borderRadius: getRadiusBySize(theme, 'medium'),
  elevation: getShadowBySize(theme, '1'),
  margin: getSpacingSmall(theme),
}));

const CardComponent = ({
  theme,
  type = 'base',
  testID = 'card',
  children,
}: CardProps) => (
  <CardBase
    type={type}
    testID={testID}
    theme={theme}
    style={getShadowBySize(theme, '1')}>
    {children}
  </CardBase>
);

export const Card = withTheme(CardComponent);
