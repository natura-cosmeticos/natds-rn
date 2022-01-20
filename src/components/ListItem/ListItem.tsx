import React, { ReactElement } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Theme } from '../../common/themeSelectors'
import { TouchableRipple, TouchableRippleProps } from '../TouchableRipple/TouchableRipple'
import { ListItem as ListItemComponent } from './ListItem.styles'

export type ListItemFeedback = 'ripple' | 'selection'

export interface ListItemProps {
  /**
   * The children list item elements
   */
  children: ReactElement;
  /**
   * Controls the element feedback type `ripple` | `selection`
   * @Default ripple
   */
  feedback?: ListItemFeedback;
  /**
   * Controls the element selected styles when feedback type is `selection`
   * @Default false
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

type ListWrapper = TouchableRippleProps & Pick<ListItemProps, 'feedback'>

const ListWrapper = ({
  onPress, children, feedback, ...props
}: ListWrapper) => {
  if (!onPress) {
    return (
      <View>
        {children}
      </View>
    )
  }

  if (feedback === 'ripple') {
    return (
      <TouchableRipple onPress={onPress} {...props}>
        {children}
      </TouchableRipple>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={onPress} {...props}>
      {children}
    </TouchableWithoutFeedback>
  )
}

export const ListItem = ({
  children,
  onPress,
  testID = 'list-item',
  feedback = 'ripple',
  ...rest
}: ListItemProps) => (
  <ListWrapper
    color="highlight"
    hideOverflow
    onPress={onPress}
    testID={`${testID}-wrapper`}
    feedback={feedback}
  >
    <ListItemComponent
      testID={testID}
      onPress={onPress}
      {...rest}
    >
      {children}
    </ListItemComponent>
  </ListWrapper>
)
