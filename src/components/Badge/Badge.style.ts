import styled from 'styled-components/native';

import {
  Theme,
  getSize,
  getRadiusBySize,
  getAvatarBySize,
  getColorByName,
} from '../../common/themeSelectors';

import { BadgeColors, BadgeTypes } from './Badge';


interface ContainerProps {
  color: BadgeColors;
  theme: Theme;
  type: BadgeTypes;
}

interface ContentProps {
  color: BadgeColors;
}

const getFontSize = (theme, size) => getAvatarBySize(size, theme).fontSize;

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

export const BadgeContainer = styled.View<ContainerProps>(({ type, color, theme }) => ({
  ...typeDimensions(type, theme),
  alignItems: 'center',
  backgroundColor: getColorByName(theme, color),
  borderRadius: getRadiusBySize(theme, 'large'),
  height: getSize(theme, 'tiny'),
  justifyContent: 'center',
}));

export const BadgeContent = styled.Text<ContentProps>`
  font-size: ${({ theme }) => getFontSize(theme, 'tiny')};
  color: ${({ theme }) => getColorByName(theme, 'background')};
`;
