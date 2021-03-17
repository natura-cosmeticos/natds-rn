import React, { useState, ReactElement } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { Theme } from '../../common/themeSelectors';
import { TouchableRipple, TouchableRippleProps } from '../TouchableRipple/TouchableRipple';
import { ListItem as ListItemComponent } from './ListItem.styles';

export interface ListItemProps {
  /**
   * The children list item elements
   */
  children: ReactElement;
  /**
   * Controls the element selected styles
   */
  selected?: boolean;
  /**
   * onPress event handler
   */
  onPress?(): void;
  /**
   * Id for testing
   */
  testID?: string;
  /**
   * App's theme
   */
  theme?: Theme;
}

export const getRippleSize = (
  event: LayoutChangeEvent,
  setSize: React.Dispatch<React.SetStateAction<number>>,
) => {
  const { layout: { width, height } } = event.nativeEvent;
  const biggerSide = width >= height ? width : height;

  setSize((biggerSide / 2));
};

const ListWrapper = ({ onPress, children, ...props }: TouchableRippleProps) => {
  if (onPress) {
    return (
      <TouchableRipple onPress={onPress} {...props}>
        {children}
      </TouchableRipple>
    );
  }

  return (
    <View>
      {children}
    </View>
  );
};

export const ListItem = ({
  children,
  onPress,
  testID = 'list-item',
  ...rest
}: ListItemProps) => {
  const [size, setSize] = useState(0);

  return (
    <ListWrapper
      color="highlight"
      hideOverflow
      size={size}
      onPress={onPress}
      testID={`${testID}-wrapper`}
    >
      <ListItemComponent
        testID={testID}
        onLayout={event => onPress && getRippleSize(event, setSize)}
        onPress={onPress}
        {...rest}
      >
        {children}
      </ListItemComponent >
    </ListWrapper >
  );
};
