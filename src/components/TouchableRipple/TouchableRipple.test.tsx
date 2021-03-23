/* eslint-disable id-length */
import React from 'react';
import {
  View, Text, Animated, LayoutChangeEvent,
} from 'react-native';
import { fireEvent } from '@testing-library/react-native';
import {
  TouchableRipple, TouchableRippleProps, getChildrenPosition, getRippleSizeForHorizontalComponents,
} from './TouchableRipple';
import { renderWithTheme } from '../../../test/testHelpers';

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.UIManager.measure = (node, cb) => cb(1, 2, 10, 10);

  Object.defineProperty(RN, 'findNodeHandle', {
    get: jest.fn(() => () => 1),
    set: jest.fn(),
  });

  RN.Animated.parallel = jest.fn();
  RN.Animated.timing = jest.fn();

  return RN;
});

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableWithoutFeedback',
  () => 'TouchableWithoutFeedback',
);

const defaultProps = {
  children: <View />,
  onPress: () => null,
  size: 24,
};

const renderTouchableRipple = (
  props?: Partial<TouchableRippleProps>,
) => renderWithTheme(
  <TouchableRipple {...defaultProps} {...props} >
    <Text>I have a ripple!</Text>
  </TouchableRipple>,
);

describe('TouchableRipple component', () => {
  it('Should render touchable ripple correctly', () => {
    const { toJSON } = renderTouchableRipple();

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render touchable ripple with color', () => {
    const { toJSON } = renderTouchableRipple({ color: 'secondary' });

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render touchable ripple with disabled', () => {
    const { toJSON } = renderTouchableRipple({ disabled: true });

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render touchable ripple with hideOverflow', () => {
    const { toJSON } = renderTouchableRipple({ hideOverflow: true });

    expect(toJSON()).toMatchSnapshot();
  });

  it('it should call onPress on touchable press', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderTouchableRipple({ onPress });

    const touchable = queryByTestId('touchable-ripple');

    if (touchable) {
      fireEvent.press(touchable);
    }

    expect(onPress).toHaveBeenCalled();
  });

  it('it should run the grow animation on press in', () => {
    const timing = jest.fn();
    const start = jest.fn();

    Animated
      .parallel
      // @ts-ignore
      .mockImplementation(jest.fn())
      .mockReturnValue({ start });

    Animated
      .timing
      // @ts-ignore
      .mockImplementation(timing);

    const { queryByTestId } = renderTouchableRipple();
    const touchable = queryByTestId('touchable-ripple');

    if (touchable) {
      fireEvent(touchable, 'onPressIn');
    }

    expect(start).toHaveBeenCalled();
    expect(timing).toHaveBeenCalledTimes(2);
  });

  it('it should run the shrink animation on press out', () => {
    const timing = jest.fn();
    const start = jest.fn();

    Animated
      .timing
      // @ts-ignore
      .mockImplementation(timing)
      // @ts-ignore
      .mockReturnValue({ start });

    const { queryByTestId } = renderTouchableRipple();

    const touchable = queryByTestId('touchable-ripple');

    if (touchable) {
      fireEvent(touchable, 'onPressOut');
    }

    expect(start).toHaveBeenCalled();
  });
});

describe('getChildrenPosition', () => {
  it('should set ripple position based on ref', () => {
    const ref = {
      _children: [{}],
    };

    const setPositionMock = jest.fn();

    getChildrenPosition(ref, setPositionMock);

    expect(setPositionMock).toHaveBeenCalledWith({
      left: 6,
      top: 7,
    });
  });
});

describe('getRippleSizeForHorizontalComponents', () => {
  it('Should calculate the ripple size based on the list item layout', () => {
    const setSizeMock = jest.fn();
    const event: LayoutChangeEvent = {
      nativeEvent: {
        layout: {
          height: 80,
          width: 20,
          x: 0,
          y: 0,
        },
      },
    };

    getRippleSizeForHorizontalComponents(event, setSizeMock);

    expect(setSizeMock).toHaveBeenCalledWith(40);
  });
});
