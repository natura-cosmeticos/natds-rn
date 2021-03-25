/* eslint-disable complexity */
/* eslint-disable max-statements */
import React from 'react';
import iconNames from '@naturacosmeticos/natds-icons/dist/natds-icons.json';
import { Image, Text } from 'react-native';

import { load as loadSvg } from '../assets/icons/svg';

export const loadIcon = (icon, attributes) => {
  if (icon && icon.svg) {
    const IconComponent = loadSvg(icon.svg.name);
    const iconSize = icon.svg.size ? icon.svg.size : attributes.size;
    const iconColor = icon.svg.color ? icon.svg.color : attributes.color;

    return (
      <IconComponent
        width={iconSize}
        height={iconSize}
        style={{ fill: iconColor }}
      />
    );
  }
  if (icon && icon.content) {
    return (
      <Image
        style={{
          height: attributes.size,
          tintColor: attributes.color,
          width: attributes.size,
        }}
        source={icon.content}
      />
    );
  }
  if (icon && icon.uri) {
    return (
      <Image
        style={{ height: attributes.size, width: attributes.size }}
        source={icon}
      />
    );
  }

  if (icon && icon.name) {
    const unicodeName = iconNames[icon.name].replace('%', '\\');
    const code = JSON.parse(`["${unicodeName}"]`)[0];

    return (
      <Text
        style={{
          color: attributes.color,
          fontFamily: 'natds-icons',
          fontSize: attributes.size,
        }}>
        {code}
      </Text>
    );
  }

  return null;
};
