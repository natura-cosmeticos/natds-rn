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
  TouchableOpacity,
  HeaderTitleView,
} from './NatListItem.styles';

export const NatListItem = ({
  title,
  node,
  iconLeft,
  iconRight,
  hideIconLeft,
  hideIconRight,
  onPressRight,
  onPressLeft,
  onPress,
  dividerTop,
  dividerBottom,
  active,
}) => {
  if (!title) {
    throw new Error('Title should not empty string');
  }

  const renderIcon = (iconData, iconPress, position) => {
    let styleCustom = { };
    if (position === 'right') {
      styleCustom = { position: 'absolute', right: 0 };
    }
    if (iconData && iconData.svg) {
      const IconComponent = loadSvg(iconData.svg.name);
      const iconSize = (iconData.svg.size) ? iconData.svg.size : 24;
      return (
        <View style={styleCustom}>
          <IconPress onPress={iconPress} position={position}>
            <IconComponent width={iconSize} height={iconSize} />
          </IconPress>
        </View>
      );
    }
    if (iconData && iconData.content) {
      return (
        <View style={styleCustom}>
          <IconPress onPress={iconPress} position={position}>
            <InputIcon source={iconData.content} />
          </IconPress>
        </View>
      );
    }
    if (iconData && iconData.node) {
      return (
        <View style={{ ...styleCustom, ...{ alignSelf: 'center' } }}>
          <IconPress onPress={iconPress} position={position}>
            { iconData.node }
          </IconPress>
        </View>
      );
    }
    if (iconPress && iconData) {
      return (
        <View style={styleCustom}>
          <IconPress onPress={iconPress} position={position}>
            <InputIcon source={iconData} />
          </IconPress>
        </View>
      );
    }
    return (
      <View style={styleCustom}>
        <IconPress onPress={iconPress} position={position} />
      </View>
    );
  };

  const localPress = () => {
    if (onPress) {
      onPress();
    }
  };

  const renderTitle = localTitle => (
    <TouchableOpacity
      onPress={localPress}
    >
      <HeaderTitle
        accessibilityLabel={`${localTitle}`}
      >
        {localTitle}
      </HeaderTitle>
    </TouchableOpacity>
  );

  return (
    <HeaderWrapper
      accessible
      accessibilityRole="header"
      dividerBottom={dividerBottom}
      dividerTop={dividerTop}
      active={active}
    >
      { !hideIconLeft && renderIcon(iconLeft, onPressLeft, 'left') }
      <HeaderTitleView
        hideIconLeft={hideIconLeft}
        hideIconRight={hideIconRight}
      >
        { node && node}
        { !node && renderTitle(title)}
      </HeaderTitleView>
      { !hideIconRight && renderIcon(iconRight, onPressRight, 'right') }
    </HeaderWrapper>
  );
};

NatListItem.propTypes = {
  title: PropTypes.string,
  node: PropTypes.node,
  iconLeft: PropTypes.shape(),
  iconRight: PropTypes.shape(),
  hideIconLeft: PropTypes.bool,
  hideIconRight: PropTypes.bool,
  onPressRight: PropTypes.func,
  onPressLeft: PropTypes.func,
  onPress: PropTypes.func,
  dividerTop: PropTypes.bool,
  dividerBottom: PropTypes.bool,
  active: PropTypes.bool,
};

NatListItem.defaultProps = {
  title: null,
  node: null,
  iconLeft: null,
  iconRight: null,
  hideIconLeft: false,
  hideIconRight: false,
  onPressRight: () => {},
  onPressLeft: () => {},
  onPress: null,
  dividerTop: false,
  dividerBottom: false,
  active: false,
};
