import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { load as loadSvg } from '../../assets/icons/svg';

import {
  HeaderWrapper,
  HeaderTitle,
  IconPress,
  InputIcon,
} from './NatHeaderNew.styles';

export const NatHeaderNew = ({
  title,
  node,
  iconLeft,
  iconRight,
  onPressRight,
  onPressLeft,
}) => {
  if (!title) {
    throw new Error('Title should not empty string');
  }

  const renderIcon = (iconData, iconPress, position) => {
    let styleCustom = {};
    if (position === 'right') {
      styleCustom = { position: 'absolute', right: 0 };
    }
    if (iconData && iconData.svg) {
      const IconComponent = loadSvg(iconData.svg.name);
      const iconSize = (iconData.svg.size) ? iconData.svg.size : 24;
      return (
        <View style={styleCustom}>
          <IconPress onPress={iconPress}>
            <IconComponent width={iconSize} height={iconSize} />
          </IconPress>
        </View>
      );
    }
    if (iconData && iconData.content) {
      return (
        <View style={styleCustom}>
          <IconPress onPress={iconPress}>
            <InputIcon source={iconData.content} />
          </IconPress>
        </View>
      );
    }
    if (iconPress) {
      return (
        <View style={styleCustom}>
          <IconPress onPress={iconPress}>
            <InputIcon source={iconData} />
          </IconPress>
        </View>
      );
    }
    return (
      <View style={styleCustom}>
        <IconPress onPress={iconPress} />
      </View>
    );
  };

  return (
    <HeaderWrapper
      accessible
      accessibilityRole="header"
    >
      { iconLeft !== false && renderIcon(iconLeft, onPressLeft, 'left') }
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        { node && node}
        { !node && (
          <HeaderTitle
            accessibilityLabel={`${title}`}
          >
            {title}
          </HeaderTitle>
        )}
      </View>
      { iconRight !== false && renderIcon(iconRight, onPressRight, 'right') }
    </HeaderWrapper>
  );
};

NatHeaderNew.propTypes = {
  title: PropTypes.string,
  node: PropTypes.node,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  onPress: PropTypes.func,
  onPressRight: PropTypes.func,
  onPressLeft: PropTypes.func,
};

NatHeaderNew.defaultProps = {
  title: null,
  node: null,
  iconLeft: null,
  iconRight: null,
  onPress: () => {},
  onPressRight: () => {},
  onPressLeft: () => {},
};
