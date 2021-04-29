/* eslint-disable default-case */
/* eslint-disable consistent-return */
import styled from 'styled-components/native';

import {
  Theme,
  getSize,
  getRadiusBySize,
  getColorByName,
  getCaptionFont,
} from '../../common/themeSelectors';

import { BadgeColors, BadgeTypes, BadgeProps } from './Badge';

type ContainerProps = Required<Pick<BadgeProps, 'color' | 'theme' | 'type'>>;
type ContentProps = Required<Pick<BadgeProps, 'color' | 'theme'>>;

const getFontSize = (theme: Theme) => getCaptionFont(theme).fontSize;

const typeDimensions = (type: BadgeTypes, theme: Theme) => {
  const dimensions = {
    dot: {
      width: getSize(theme, 'tiny'),
    },
    standard: {
      maxWidth: getSize(theme, 'medium'),
      paddingHorizontal: getSize(theme, 'micro'),
      paddingVertical: getSize(theme, 'tiny'),
    },
  };

  return dimensions[type];
};

const getFontColor = (theme: Theme, color: BadgeColors) => {
  switch (color) {
    case 'alert':
      return getColorByName(theme, 'onAlert');
    case 'primary':
      return getColorByName(theme, 'onPrimary');
    case 'secondary':
      return getColorByName(theme, 'onSecondary');
    case 'success':
      return getColorByName(theme, 'onSuccess');
  }
};

export const BadgeContainer = styled.View<ContainerProps>(({ type, color, theme }) => ({
  ...typeDimensions(type, theme),
  alignItems: 'center',
  backgroundColor: getColorByName(theme, color),
  borderRadius: getRadiusBySize(theme, 'large'),
  height: getSize(theme, 'tiny'),
  justifyContent: 'center',
}));

export const BadgeContent = styled.Text<ContentProps>`
  font-size: ${({ theme }) => getFontSize(theme)}px;
  color: ${({ theme, color }) => getFontColor(theme, color)};
`;
