import styled from 'styled-components/native';

import { BadgeColors, BadgeTypes } from './Badge';

interface ContainerProps {
  type: BadgeTypes;
  color: BadgeColors;
}

interface ContentProps {
  color: BadgeColors;
}

const getBackgroundColor = (color: BadgeColors) => {
  switch (color) {
    case 'alert':
      return '#e74627';
    case 'primary':
      return '#f4ab34';
    case 'secondary':
      return '#ff6b0b';
    case 'success':
      return '#569a32';
    default:
      return '#e74627';
  }
};

const getFontColor = (color: BadgeColors) => {
  if (color === 'primary' || color === 'secondary') {
    return '#333';
  }

  return '#fff';
};

export const BadgeContainer = styled.View<ContainerProps>`
  border-radius: 50px;
  min-width: 10px;
  height: 10px;

  padding-vertical: ${({ type }) => (type === 'standard' ? 8 : 0)}px;
  padding-horizontal: ${({ type }) => (type === 'standard' ? 5 : 0)}px;

  background-color: ${({ color }) => getBackgroundColor(color)};

  justify-content: center;
  align-items: center;
`;

export const BadgeContent = styled.Text<ContentProps>`
  font-size: 12px;
  color: ${({ color }) => getFontColor(color)};
`;
