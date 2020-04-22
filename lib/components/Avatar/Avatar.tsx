/* eslint-disable no-nested-ternary */
import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { Platform } from 'react-native';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';
import { AvatarWrapper, AvatarText, AvatarImage } from './Avatar.styles';

import { Anonymous } from '../../assets/images/avatar';

export const TypeElement = ({
  uri, type, name, size, theme,
}) => {
  const iconSize = theme.sizes.standard * size;

  switch (type) {
    case 'letter':
      return (
        <AvatarText size={size} theme={theme}>
          {name}
        </AvatarText>
      );
    case 'anonymous':
      return Platform.OS === 'web' ? () => <img width={iconSize} height={iconSize} src={Anonymous} /> : <Anonymous width={iconSize} height={iconSize} />;
    case 'image':
      return <AvatarImage source={{ uri }} size={size} theme={theme} />;
    default:
      return null;
  }
};

export enum Type {
  LETTER = 'letter',
  ANONYMOUS = 'anonymous',
  IMAGE = 'image',
}

export interface AvatarProps {
  /**
   * The name od the avatar
   */
  name: string
  /**
   * The avatar sizes
   */
  size: number
  /**
   * The theme to be applied
   */
  theme: typeof ThemeNaturaLight
  /**
   * The avatar typesss
   *
   * @default 'letter;
   */
  type: Type
  /**
   * The avatar image uri
   */
  uri: string
}

/**
 * An avatar component
 *
 * Can be used to display user pictures in applications
 */

export const Avatar: FunctionComponent<AvatarProps> = ({
  name, size = 3, theme = ThemeNaturaLight, type = Type.LETTER, uri,
}) => (
  <AvatarWrapper size={size} theme={theme} type={type}>
    <TypeElement uri={uri} size={size} theme={theme} name={name} type={type} />
  </AvatarWrapper>
);

// Avatar.defaultProps = {
//   name: '',
//   size: 3,
//   theme: ThemeNaturaLight,
//   type: 'letter',
// };
