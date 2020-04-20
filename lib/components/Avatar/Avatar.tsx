/* eslint-disable no-nested-ternary */
import React from 'react';
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

TypeElement.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.shape({}),
  type: PropTypes.string.isRequired,
  uri: PropTypes.string,
};

export const Avatar = ({
  name, size, theme, type, uri,
}) => (
    <AvatarWrapper size={size} theme={theme} type={type}>
      <TypeElement uri={uri} size={size} theme={theme} name={name} type={type} />
    </AvatarWrapper>
  );

Avatar.defaultProps = {
  name: '',
  size: 3,
  theme: ThemeNaturaLight,
  type: 'letter',
};

Avatar.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.shape({}),
  type: PropTypes.string.isRequired,
  uri: PropTypes.string,
};
