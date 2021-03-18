import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';

export const RedCircle = ({ whereToRender, position }) => {
  const circleStyles = {
    backgroundColor: ThemeNaturaLight.palette.error.main,
    borderRadius: 50,
    height: 10,
    width: 10,
  };

  if (whereToRender === 'AppBar') {
    if (position === 'right') {
      circleStyles.position = 'absolute';
      circleStyles.right = 17;
      circleStyles.top = 17;
    } else {
      circleStyles.position = 'absolute';
      circleStyles.right = 0;
      circleStyles.top = 17;
    }
  }

  return <View style={circleStyles} />;
};

RedCircle.propTypes = {
  position: PropTypes.string,
  whereToRender: PropTypes.string,
};

RedCircle.defaultProps = {
  position: '',
  whereToRender: '',
};
