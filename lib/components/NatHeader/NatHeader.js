import React from 'react';
import { Image, Platform } from 'react-native';
import PropTypes from 'prop-types';

import {
  HeaderWrapper,
  HeaderTitle,
  HeaderIcon,
  HeaderRight,
  AndroidStyle,
} from './NatHeader.styles';
import { icons } from '../../assets/theme/icons';

export const NatHeader = ({ title, icon, onPress }) => {
  if (!title) {
    throw new Error('Title should not empty string');
  }

  return (
    <HeaderWrapper
      style={Platform.OS === 'android' && AndroidStyle.android}
      accessible
      accessibilityRole="header"
    >
      {icon
        ? (
          <HeaderIcon
            onPress={onPress}
            accessibilityRole="button"
          >
            <Image
              source={icons[icon]}
              accessible
              accessibilityLabel="navegação para retornar a página anterior"
            />
          </HeaderIcon>
        )
        : null
      }
      <HeaderTitle
        icon={icon}
        accessibilityLabel={`${title}`}
      >
        {title}
      </HeaderTitle>
      <HeaderRight />
    </HeaderWrapper>
  );
};

NatHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string,
};

NatHeader.defaultProps = {
  icon: '',
};
