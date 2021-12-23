import styled, { css } from 'styled-components/native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { TagColors, TagPositions, TagSizes } from './Tag.types';

type TagStyleBaseProps = {
  theme: Theme
}

type ContainerStyleProps = TagStyleBaseProps & {
  color?: TagColors
  size?: TagSizes
  borderPosition?: TagPositions
}

type LabelStyleProps = TagStyleBaseProps & {
  color?: TagColors
}

export const getBorderPosition = ({ theme, size = 'small', borderPosition = 'default' } : ContainerStyleProps) => {
  const styles = {
    default: {
      borderRadius: theme.tag[size].borderRadius.enable,
    },
    left: {
      borderBottomLeftRadius: theme.tag[size].borderRadius.enable,
      borderTopLeftRadius: theme.tag[size].borderRadius.enable,
    },
    right: {
      borderBottomRightRadius: theme.tag[size].borderRadius.enable,
      borderTopRightRadius: theme.tag[size].borderRadius.enable,
    },
  };

  return styles[borderPosition];
};

export const getTextColorByName = ({ theme, color = 'primary' } : LabelStyleProps) => {
  const capitalizeString = color.charAt(0).toUpperCase() + color.slice(1);
  const normalizedString = `on${capitalizeString}`;

  return theme.color[normalizedString];
};

export const getPaddingBySize = ({ theme, size = 'small' } : ContainerStyleProps) => {
  if (size === 'standard') {
    return {
      paddingHorizontal: theme.spacing.tiny,
      paddingVertical: theme.spacing.micro,
    };
  }

  return { paddingHorizontal: theme.spacing.tiny };
};

export const Container = styled.View<ContainerStyleProps>(({
  theme, color = 'primary', size, borderPosition,
}: ContainerStyleProps) => ({
  ...getBorderPosition({ borderPosition, size, theme }),
  ...getPaddingBySize({ size, theme }),
  backgroundColor: theme.color[color],
}));

export const Label = styled.Text<LabelStyleProps>`
  ${({ theme, color }: LabelStyleProps) => css`
    color: ${getTextColorByName({ color, theme })};
    font-family: ${theme.tag.label.primary.fontFamily};
    font-size: ${theme.tag.label.fontSize};
    font-weight: ${theme.tag.label.primary.fontWeight};
    letter-spacing: ${theme.tag.label.letterSpacing};
    line-height: ${theme.tag.label.fontSize * theme.tag.label.lineHeight}px;
  `}
`;
