import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import styled from 'styled-components/native';
import { CSSObject } from 'styled-components';

import { BadgeColors } from './Badge.types';

type BadgeStyleProps = {
  color: BadgeColors
  variant: BadgeVariant
}

export type BadgeVariant = 'standard' | 'pulse' | 'dot'
export const convertPulseToDot = (variant: BadgeVariant) => (variant === 'pulse' ? 'dot' : variant);

export const getHorizontalPadding = (variant: BadgeVariant, theme: Theme) => (
  variant === 'standard' && {
    paddingHorizontal: theme.spacing.micro,
  }
);

export const getWidthByVariant = (variant: BadgeVariant, theme: Theme) => (
  variant !== 'standard' && {
    width: theme.badge[convertPulseToDot(variant)].height,
  }
);

export const Container = styled.View(() => ({
  alignContent: 'center',
  alignItems: 'center',
}));

export const BadgeBase = styled.View<BadgeStyleProps>(({ theme, color, variant = 'standard' }): CSSObject => ({
  ...getWidthByVariant(variant, theme),
  backgroundColor: theme.badge.color[color].background,
  borderRadius: theme.badge[convertPulseToDot(variant)].borderRadius,
  height: theme.badge[convertPulseToDot(variant)].height,
}));

export const Circle = styled(BadgeBase)(({ theme, variant = 'standard' }): CSSObject => ({
  ...getHorizontalPadding(variant, theme),
  alignContent: 'center',
  justifyContent: 'center',
}));

export const Label = styled.Text<BadgeStyleProps>(({ theme, color, variant = 'standard' }): CSSObject => ({
  color: theme.badge.color[color].label,
  fontFamily: theme.badge.label.primary.fontFamily,
  fontSize: theme.badge.label.fontSize,
  fontWeight: theme.badge.label.primary.fontWeight,
  letterSpacing: theme.badge.label.letterSpacing,
  lineHeight: theme.badge[convertPulseToDot(variant)].height,
  textAlignVertical: 'center',
}));
