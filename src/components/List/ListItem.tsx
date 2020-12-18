import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'styled-components';

import { Theme } from '../../common/themeSelectors';
import { Icon } from '../Icon';
import { Divider } from '../Divider';

import {
  HeaderWrapper,
  HeaderTitle,
  IconPress,
  TouchableOpacity,
  HeaderTitleView,
} from './ListItem.styles';

export interface ListItemProps {
  /**
   * An active item is usable
   */
  active: boolean;
  /**
   * A disabled item is unusable
   */
  disabled?: boolean;
  /**
   * Show a separator between the items
   */
  divider: boolean;
  /**
   * Divider's type options
   */
  dividerType?: 'fullBleed' | 'inset' | 'middle';
  /**
   * Wether show or not the left icon
   */
  hideIconLeft: boolean;
  /**
   * Wether show or not the right icon
   */
  hideIconRight: boolean;
  /**
   * Left icon name
   */
  iconLeft?: string;
  /**
   * Right icon name
   */
  iconRight?: string;
  /**
   * onPress event handler
   */
  onPress?(): void;
  /**
   * Handle click on the left icon
   */
  onPressLeft?(): void;
  /**
   * Handle click on the right icon
   */
  onPressRight?(): void;
  /**
   * Id for testing
   */
  testID?: string;
  /**
   * App's theme
   */
  theme: Theme;
  /**
   * Item's title
   */
  title: string;
}

const ListItemComponent = ({
  title,
  disabled,
  iconLeft,
  iconRight,
  hideIconLeft,
  hideIconRight,
  onPressRight,
  onPressLeft,
  onPress,
  divider,
  dividerType,
  active,
  theme,
  testID = 'listId',
}: ListItemProps) => {
  if (!title) {
    throw new Error('Title should not be an empty string');
  }

  const renderIcon = (iconData, iconPress, position) => {
    let styleCustom = {};

    if (position === 'right') {
      styleCustom = { position: 'absolute', right: 0 };
    } else {
      styleCustom = { left: 0, position: 'absolute' };
    }

    return (
      <View style={styleCustom}>
        <IconPress
          testID={`${testID}-icon-${position}`}
          onPress={iconPress}
          position={position}>
          <Icon color={disabled ? 'lowEmphasis' : 'default'} size="standard" name={iconData} />
        </IconPress>
      </View>
    );
  };

  const localPress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <>
      <HeaderWrapper
        accessible
        accessibilityRole="header"
        testID={testID}
        active={active}>
        {!hideIconLeft && renderIcon(iconLeft, onPressLeft, 'left')}

        <HeaderTitleView
          hideIconLeft={hideIconLeft}
          hideIconRight={hideIconRight}>
          <TouchableOpacity disabled={disabled} onPress={localPress} testID={`${testID}-title`}>
            <HeaderTitle disabled={disabled} accessibilityLabel={`${title}`}>{title}</HeaderTitle>
          </TouchableOpacity>
        </HeaderTitleView>

        {!hideIconRight && renderIcon(iconRight, onPressRight, 'right')}
      </HeaderWrapper>

      {divider && <Divider type={dividerType} />}
    </>
  );
};

export const ListItem = withTheme(ListItemComponent);
