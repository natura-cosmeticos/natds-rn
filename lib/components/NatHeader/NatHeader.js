import React from 'react';
import {
  Image, Platform, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  HeaderWrapper,
  HeaderTitle,
  HeaderIcon,
  HeaderRight,
  AndroidStyle,
} from './NatHeader.styles';
import { icons } from '../../assets/theme/icons';

export const NatHeader = ({
  title, icon, onPress, textRight, iconRight, onPressRight,
}) => {
  if (!title) {
    throw new Error('Title should not empty string');
  }

  return (
    <HeaderWrapper
      style={Platform.OS === 'android' && AndroidStyle.android}
      accessible
      accessibilityRole="header"
    >
      {icon && (
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
      )}

      <HeaderTitle
        icon={icon}
        accessibilityLabel={`${title}`}
      >
        {title}
      </HeaderTitle>
      <HeaderRight accessibilityRole="button">
        <TouchableOpacity onPress={onPressRight}>
          <Text style={{ color: 'orange', fontSize: 14 }}>
            {' '}
            {textRight}
            {' '}
          </Text>
          <Image
            accessible
            source={icons[iconRight]}
            accessibilityLabel="realizar ação do item da barra superior direita"
          />
        </TouchableOpacity>
      </HeaderRight>
    </HeaderWrapper>
  );
};

NatHeader.propTypes = {
  icon: PropTypes.string,
  iconRight: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  onPressRight: PropTypes.func,
  textRight: PropTypes.string,
  title: PropTypes.string.isRequired,
};

NatHeader.defaultProps = {
  icon: '',
};
