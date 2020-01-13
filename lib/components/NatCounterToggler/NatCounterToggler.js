import React, { useState } from 'react';
import { Platform, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../assets/theme/colors/colors';
import {
  CounterView,
  ContentViewDefault,
  ContentViewLeft,
  ContentViewRight,
  CustomTouchableHighlight,
  CustomTextOperators,
} from './NatCounterToggler.styles';

export const NatCounterToggler = ({
  onIncrease, onDecrease, counter, color, width, height, min, max,
}) => {
  const [decreaseDisabled, setDecreaseDisabled] = useState(true);
  const [increaseDisabled, setIncreaseDisabled] = useState(false);
  const [decreaseColor, setDecreaseColor] = useState(colors.bw.grayLight);
  const [increaseColor, setIncreaseColor] = useState(colors.primary.white);

  const actionHandler = (action) => {
    if (action === 'increase') {
      onIncrease();
      if (counter === min) {
        setDecreaseColor(colors.primary.white);
        setDecreaseDisabled(false);
      }
      if ((counter + 1) === max) {
        setIncreaseColor(colors.bw.grayLight);
        setIncreaseDisabled(true);
      }
    } else {
      onDecrease();
      if (counter === max) {
        setIncreaseColor(colors.primary.white);
        setIncreaseDisabled(false);
      }
      if ((counter - 1) === min) {
        setDecreaseColor(colors.bw.grayLight);
        setDecreaseDisabled(true);
      }
    }
  };

  return Platform.OS === 'android' ? (
    <CounterView color={color} width={width} height={height}>
      <TouchableNativeFeedback disabled={decreaseDisabled} onPress={() => actionHandler('decrease')}>
        <ContentViewLeft color={decreaseColor}>
          <CustomTextOperators>-</CustomTextOperators>
        </ContentViewLeft>
      </TouchableNativeFeedback>

      <ContentViewDefault>
        <CustomTextOperators>{counter}</CustomTextOperators>
      </ContentViewDefault>

      <TouchableNativeFeedback disabled={increaseDisabled} onPress={() => actionHandler('increase')}>
        <ContentViewRight color={increaseColor}>
          <CustomTextOperators>+</CustomTextOperators>
        </ContentViewRight>
      </TouchableNativeFeedback>
    </CounterView>
  ) : (
    <CounterView color={color}>
      <CustomTouchableHighlight disabled={decreaseDisabled} onPress={() => actionHandler('decrease')}>
        <ContentViewLeft color={decreaseColor}>
          <CustomTextOperators>-</CustomTextOperators>
        </ContentViewLeft>
      </CustomTouchableHighlight>

      <ContentViewDefault>
        <CustomTextOperators>{counter}</CustomTextOperators>
      </ContentViewDefault>

      <CustomTouchableHighlight disabled={increaseDisabled} onPress={() => actionHandler('increase')}>
        <ContentViewRight color={increaseColor}>
          <CustomTextOperators>+</CustomTextOperators>
        </ContentViewRight>
      </CustomTouchableHighlight>
    </CounterView>
  );
};

NatCounterToggler.propTypes = {
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  counter: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
NatCounterToggler.defaultProps = {
  width: null,
  height: null,
};
