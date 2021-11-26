/* eslint-disable max-len */
import styled from 'styled-components/native';
import { CSSObject } from 'styled-components';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { RatingCounterProps, RatingProps } from './Rating.types';

type VariantStyleProps = {
  theme: Theme
} & Pick<RatingProps, 'variant'>

type AlignStyleProps = {
  theme: Theme
} & Pick<RatingCounterProps, 'align'>


const getLabelMargin = ({ theme, variant }: VariantStyleProps) => (
  variant === 'input' && {
    marginTop: theme.spacing.micro,
  }
);

const getWrapperAlign = ({ variant }: Pick<RatingProps, 'variant'>) => (
  variant === 'counter' && {
    alignItems: 'center',
  }
);

const getWrapperDirection = ({ variant, align }: AlignStyleProps & VariantStyleProps) => {
  if (variant === 'input') {
    return 'column';
  }

  if (align === 'right') {
    return 'row-reverse';
  }

  return 'row';
};

const getContentMargin = ({ theme, align, variant }: VariantStyleProps & AlignStyleProps) => {
  if (align === 'right' && variant === 'counter') {
    return {
      marginLeft: theme.spacing.micro,
    };
  }
  if (align === 'left' && variant === 'counter') {
    return {
      marginRight: theme.spacing.micro,
    };
  }

  return { marginHorizontal: 0 };
};

export const Wrapper = styled.View(({ theme, variant, align = 'left' }: VariantStyleProps & AlignStyleProps): CSSObject => ({
  ...getWrapperAlign({ variant }),
  flexDirection: getWrapperDirection({ align, theme, variant }),
}));

export const Content = styled.View(({ theme, variant, align }: VariantStyleProps & AlignStyleProps): CSSObject => ({
  ...getContentMargin({ align, theme, variant }),
  flexDirection: 'row',
}));

export const Label = styled.Text(({ theme, variant }: VariantStyleProps): CSSObject => ({
  ...getLabelMargin({ theme, variant }),
  color: theme.color.mediumEmphasis,
  fontFamily: theme.rating[variant].label.primary.fontFamily,
  fontSize: theme.rating[variant].label.fontSize,
  fontWeight: theme.rating[variant].label.primary.fontWeight,
  letterSpacing: theme.rating[variant].label.letterSpacing,
  lineHeight: theme.rating[variant].label.fontSize * theme.rating[variant].label.lineHeight,
}));
