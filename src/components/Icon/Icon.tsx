import React from 'react';
import styled from 'styled-components/native';
import { IconName, icons } from '@naturacosmeticos/natds-icons';
import {
  getColorByName, getSize, getColorHighEmphasis, Theme,
} from '../../common/themeSelectors';
import { IconColors, IconProps } from './Icon.types';

type IconStyleProps = {
  theme: Theme
} & IconProps;

export const getIconColor = (theme: Theme, color: IconColors) => {
  switch (color) {
    case '#333333':
      return color;
    case 'default':
      return getColorHighEmphasis(theme);
    default:
      return getColorByName(theme, color);
  }
};

export const IconComponent = styled.Text<IconProps>(({
  color = 'highlight',
  size = 'standard',
  theme,
}: IconStyleProps) => ({
  color: getIconColor(theme, color),
  fontFamily: 'natds-icons',
  fontSize: getSize(theme, size),
}));

const defaultIconName = 'outlined-default-mockup';

export const checkIconName = (iconName: IconName) => (icons[iconName]
  ? icons[iconName].replace('%', '\\')
  : icons[defaultIconName]).replace('%', '\\');

export const Icon = ({
  accessibilityHint,
  accessibilityLabel,
  accessibilityRole = 'image',
  color = 'highlight',
  name = defaultIconName,
  testID = 'natds-icon',
  theme,
  size = 'standard',
  style,
}: IconProps) => {
  const unicodeName = checkIconName(name);
  const code = JSON.parse(`["${unicodeName}"]`)[0];

  return (
    <IconComponent
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      color={color}
      size={size}
      style={style}
      testID={testID}
      theme={theme}
    >
      {code}
    </IconComponent>
  );
};
