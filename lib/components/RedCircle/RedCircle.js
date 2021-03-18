import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';

export const RedCircle = ({ whereToRender }) => (
    <View
      style={{
        backgroundColor: ThemeNaturaLight.palette.error.main,
        borderRadius: 50,
        height: 10,
        position: 'absolute',
        right: whereToRender === 'AppBar' ? 17 : 0,
        top: whereToRender === 'AppBar' ? 17 : 13,
        width: 10,
      }}
    />
);

RedCircle.propTypes = {
  whereToRender: PropTypes.string,
};

RedCircle.defaultProps = {
  whereToRender: '',
};
