import React, { useState } from 'react';
import { Platform, TouchableNativeFeedback } from 'react-native';

import { colors } from '../../assets/theme/colors/colors';
import {
    CounterView,
    ContentViewDefault,
    ContentViewLeft,
    ContentViewRight,
    CustomTouchableHighlight,
    CustomTextOperators,
} from './NatCounterToggler.styles';

export const NatCounterToggler = props => {
    const [decreaseDisabled, setDecreaseDisabled] = useState(true);
    const [increaseDisabled, setIncreaseDisabled] = useState(false);
    const [decreaseColor, setDecreaseColor] = useState(colors.bw.grayLight);
    const [increaseColor, setIncreaseColor] = useState(colors.primary.white);

    const actionHandler = action => {
        if (action === 'increase') {
            props.onIncrease();
            if (props.counter === props.min) {
                setDecreaseColor(colors.primary.white);
                setDecreaseDisabled(false);
            }
            if ((props.counter + 1) === props.max) {
                setIncreaseColor(colors.bw.grayLight);
                setIncreaseDisabled(true);
            }
         } else {
            props.onDecrease();
            if (props.counter === props.max) {
                setIncreaseColor(colors.primary.white);
                setIncreaseDisabled(false);
            }
            if ((props.counter - 1) === props.min) {
                setDecreaseColor(colors.bw.grayLight);
                setDecreaseDisabled(true);
            }
        }
    };

    return Platform.OS === 'android' ? (
        <CounterView color={props.color}>
            <TouchableNativeFeedback disabled={decreaseDisabled} onPress={() => actionHandler('decrease')}>
                <ContentViewLeft color={decreaseColor}>
                    <CustomTextOperators>-</CustomTextOperators>
                </ContentViewLeft>
            </TouchableNativeFeedback>

            <ContentViewDefault>
                <CustomTextOperators>{props.counter}</CustomTextOperators>
            </ContentViewDefault>

            <TouchableNativeFeedback disabled={increaseDisabled} onPress={() => actionHandler('increase')}>
                <ContentViewRight color={increaseColor}>
                    <CustomTextOperators>+</CustomTextOperators>
                </ContentViewRight>
            </TouchableNativeFeedback>
        </CounterView>
    ) : (
        <CounterView color={props.color}>
            <CustomTouchableHighlight disabled={decreaseDisabled} onPress={() => actionHandler('decrease')}>
                <ContentViewLeft color={decreaseColor}>
                    <CustomTextOperators>-</CustomTextOperators>
                </ContentViewLeft>
            </CustomTouchableHighlight>

            <ContentViewDefault>
                <CustomTextOperators>{props.counter}</CustomTextOperators>
            </ContentViewDefault>

            <CustomTouchableHighlight disabled={increaseDisabled} onPress={() => actionHandler('increase')}>
                <ContentViewRight color={increaseColor}>
                    <CustomTextOperators>+</CustomTextOperators>
                </ContentViewRight>
            </CustomTouchableHighlight>
        </CounterView>
    );
};
