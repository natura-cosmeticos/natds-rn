/* eslint-disable complexity */
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { ButtonWrapper, ButtonText, IconPress } from './Button.styles';
import { loadIcon } from '../../utils';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';
import { NatSpace } from '../NatSpace';

const styles = {
  elevation: 1,
  shadowColor: '#000',
  shadowOffset: {
    height: 2,
    width: 0,
  },
  shadowOpacity: 0.24,
};

export const Button = ({
  color,
  iconLeft,
  iconRight,
  fixedBottom,
  label,
  node,
  noUpperCase,
  onPress,
  onPressLeft,
  onPressRight,
  showIconLeft,
  showIconRight,
  theme,
  type,
}) => {
  const renderIcon = (iconData, iconPress, position) => {
    const iconAttributes = {
      color: ThemeNaturaLight.palette.text.primary,
      size: 24,
    };

    let styleCustom = {};

    if (position === 'right') {
      styleCustom = { position: 'absolute', right: 0 };
    } else {
      styleCustom = { left: 0, position: 'absolute' };
    }

    return (
      <View style={styleCustom}>
        <IconPress onPress={iconPress} position={position}>
          { loadIcon(iconData, iconAttributes) }
        </IconPress>
      </View>
    );
  };

  const renderTitle = () => {
    if (label !== '') {
      return (
        <ButtonText
            type={type}
            theme={theme}
            color={color}
            accessibilityLabel={`${label}`}
          >
            {noUpperCase ? label : label.toUpperCase()}
          </ButtonText>
      );
    }

    return node;
  };

  return (
    <NatSpace
      backgroundColor={fixedBottom ? theme.palette.background.paper : 'transparent'}
      marginBottom="none"
      marginLeft="none"
      marginRight="none"
      marginTop="none"
      paddingBottom={fixedBottom ? 'tiny' : 'none'}
      paddingLeft={fixedBottom ? 'small' : 'none'}
      paddingRight={fixedBottom ? 'small' : 'none'}
      paddingTop={fixedBottom ? 'small' : 'none'}
    >
      <ButtonWrapper
        accessibilityRole="button"
        accessible
        color={color}
        disabled={color === 'disabled'}
        onPress={onPress}
        style={(type === 'primary' && color !== 'disabled') && styles}
        theme={theme}
        type={type}
      >
        { (showIconLeft && iconLeft !== null) && renderIcon(iconLeft, onPressLeft, 'left') }
        { renderTitle() }
        { showIconRight && renderIcon(iconRight, onPressRight, 'right') }
      </ButtonWrapper>
    </NatSpace>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  fixedBottom: PropTypes.bool,
  iconLeft: PropTypes.shape(),
  iconRight: PropTypes.shape(),
  label: PropTypes.string,
  node: PropTypes.node,
  noUpperCase: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  showIconLeft: PropTypes.bool,
  showIconRight: PropTypes.bool,
  state: PropTypes.string,
  theme: PropTypes.shape(),
  type: PropTypes.string,

};

Button.defaultProps = {
  color: 'default',
  fixedBottom: false,
  iconLeft: null,
  iconRight: null,
  label: '',
  node: null,
  noUpperCase: false,
  onPressLeft: () => {},
  onPressRight: () => {},
  showIconLeft: true,
  showIconRight: true,
  theme: ThemeNaturaLight,
  type: 'primary',
};
