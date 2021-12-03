import styled from 'styled-components/native';
import { CSSObject } from 'styled-components';
import {
  Theme,
} from '../../common/themeSelectors';

import { BadgeColors } from './Badge.types';

type BadgeStyleProps = {
  color: BadgeColors
  variant: BadgeVariant
  theme: Theme
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

export const BadgeBase = styled.View(({ theme, color, variant = 'standard' }: BadgeStyleProps): CSSObject => ({
  ...getWidthByVariant(variant, theme),
  backgroundColor: theme.badge.color[color].background,
  borderRadius: theme.badge[convertPulseToDot(variant)].borderRadius,
  height: theme.badge[convertPulseToDot(variant)].height,
}));

export const Circle = styled(BadgeBase)(({ theme, variant = 'standard' }: BadgeStyleProps): CSSObject => ({
  ...getHorizontalPadding(variant, theme),
  alignContent: 'center',
  justifyContent: 'center',
}));

export const Label = styled.Text(({ theme, color, variant = 'standard' }: BadgeStyleProps): CSSObject => ({
  color: theme.badge.color[color].label,
  fontFamily: theme.badge.label.primary.fontFamily,
  fontSize: theme.badge.label.fontSize,
  fontWeight: theme.badge.label.primary.fontWeight,
  letterSpacing: theme.badge.label.letterSpacing,
  lineHeight: theme.badge[convertPulseToDot(variant)].height,
  textAlignVertical: 'center',
}));
