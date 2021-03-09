/* eslint-disable max-lines */
import React, { Fragment, ReactNode, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Theme } from '../../common/themeSelectors';
import { TouchableRipple } from '../TouchableRipple';
import { ListItem as ListItemComponent } from './ListItem.styles';

export interface ListItemProps {
  /**
   * The children list item elements
   */
  children: ReactNode;
  /**
   * Controls the element selected styles
   */
  selected?: boolean;
  /**
   * Controls the element disabled state
   */
  disabled?: boolean;
  /**
   * Helper to evenly distribute child elements in one line
   */
  inline?: boolean;
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

export const ListItem = ({
  children,
  onPress,
  disabled,
  ...rest
}: ListItemProps) => {
  const ListElement = onPress && !disabled ? TouchableRipple : Fragment;
  const [size, setSize] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { layout: { width, height } } = event.nativeEvent;
    const biggerSide = width >= height ? width : height;

    setSize((biggerSide / 2));
  };

  return (
    <ListElement size={size} hideOverflow onPress={onPress}>
      <ListItemComponent
        onLayout={onLayout}
        onPress={onPress}
        {...rest}
      >
        {children}
      </ListItemComponent >
    </ListElement >
  );
};
