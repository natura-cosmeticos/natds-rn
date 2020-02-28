import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { loadIcon } from '../../utils';
import {
  ThemeNaturaLight,
} from '../..';

import {
  HeaderWrapper,
  HeaderTitle,
  IconPress,
} from './NatAppBar.styles';

const styles = {
  elevation: 1,
  shadowColor: '#000',
  shadowOffset: {
    height: 2,
    width: 0,
  },
  shadowOpacity: 0.24,
};

export const NatAppBar = ({
  title,
  node,
  iconLeft,
  iconRight,
  onPressRight,
  onPressLeft,
  showIconLeft,
  showIconRight,
}) => {
  if (!title) {
    throw new Error('Title should not empty string');
  }

  const renderIcon = (iconData, iconPress, position) => {
    const iconAttributes = {
      color: ThemeNaturaLight.palette.text.primary,
      size: 24,
    };

    let styleCustom = {};

    if (position === 'right') {
      styleCustom = { position: 'absolute', right: 0 };
    }

    return (
      <View style={styleCustom}>
        <IconPress onPress={iconPress} position={position}>
          { loadIcon(iconData, iconAttributes) }
        </IconPress>
      </View>
    );
  };

  const titleLeft = (showIconLeft) ? 40 : 0;

  return (
    <HeaderWrapper
      accessible
      accessibilityRole="header"
      style={styles}
    >
      { showIconLeft && renderIcon(iconLeft, onPressLeft, 'left') }
      <View style={{
        alignItems: 'flex-start',
        bottom: 0,
        justifyContent: 'flex-start',
        left: titleLeft,
        position: 'absolute',
        right: 0,
        top: 0,
      }}
      >
        { node && node}
        { !node && (
          <HeaderTitle
            accessibilityLabel={`${title}`}
          >
            {title}
          </HeaderTitle>
        )}
      </View>
      { showIconRight && renderIcon(iconRight, onPressRight, 'right') }
    </HeaderWrapper>
  );
};

NatAppBar.propTypes = {
  iconLeft: PropTypes.shape(),
  iconRight: PropTypes.shape(),
  node: PropTypes.node,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  showIconLeft: PropTypes.bool,
  showIconRight: PropTypes.bool,
  title: PropTypes.string,
};

NatAppBar.defaultProps = {
  iconLeft: null,
  iconRight: null,
  node: null,
  onPressLeft: () => {},
  onPressRight: () => {},
  showIconLeft: true,
  showIconRight: true,
  title: null,
};
