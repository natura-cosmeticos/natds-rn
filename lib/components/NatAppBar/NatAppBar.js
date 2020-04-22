/* eslint-disable complexity, max-lines */
import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { loadIcon } from '../../utils';
import {
  ThemeNaturaLight,
} from '../../themes/ThemeNaturaLight';

import {
  HeaderContent,
  HeaderShadow,
  HeaderTitle,
  HeaderWrapper,
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
  alignTitle,
  title,
  node,
  iconLeft,
  iconRight,
  onPressRight,
  onPressLeft,
  showIconLeft,
  showIconRight,
}) => {
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

  const renderNode = () => (
    <View style={{
      bottom: 0,
      justifyContent: alignTitle,
      left: 0,
      paddingLeft: 16,
      paddingRight: 16,
      position: 'absolute',
      right: 0,
      top: 0,
    }}
    >
      { node }
    </View>
  );

  return (
    <HeaderWrapper>
      <HeaderContent
        accessible
        accessibilityRole="header"
      >
        { showIconLeft && renderIcon(iconLeft, onPressLeft, 'left') }
        <View style={{
          alignItems: alignTitle,
          bottom: 0,
          justifyContent: alignTitle,
          left: showIconLeft ? 40 : 0,
          position: 'absolute',
          right: showIconRight ? 40 : 0,
          top: 0,
        }}
        >
          { node && renderNode() }
          { !node && (
            <HeaderTitle
              accessibilityLabel={`${title}`}
            >
              {title}
            </HeaderTitle>
          )}
        </View>
        { showIconRight && renderIcon(iconRight, onPressRight, 'right') }
      </HeaderContent>
      <HeaderShadow style={styles} />
    </HeaderWrapper>
  );
};

NatAppBar.propTypes = {
  alignTitle: PropTypes.string,
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
  alignTitle: 'flex-start',
  iconLeft: null,
  iconRight: null,
  node: null,
  onPressLeft: () => {},
  onPressRight: () => {},
  showIconLeft: true,
  showIconRight: true,
  title: '',
};
