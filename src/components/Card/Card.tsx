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
}));

const CardComponent = ({
  children,
  testID = 'card',
  theme,
  type = 'base',
}: CardProps) => (
  <CardBase
    style={getShadowBySize(theme, '1')}
    testID={testID}
    theme={theme}
    type={type}>
    {children}
  </CardBase>
);

export const Card = withTheme(CardComponent);
