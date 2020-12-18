/* eslint-disable max-lines */
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { withTheme } from 'styled-components';
import { Theme } from '../../common/themeSelectors';

import { ListItem } from './ListItem';

export interface ItemProps {
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
   * Item's id
   */
  id: string;
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
   * Item's title
   */
  title: string;
}

export interface ListProps {
  /**
   * A disabled item is unusable
   */
  disabled?: boolean;
  /**
   * Wether the list is required to have a selecte item
   */
  isRequired?: boolean;
  /**
   * List's items
   */
  items: Array<ItemProps>;
  /**
   * Wether you can select more than one item from the list
   */
  multiSelect?: boolean;
  /**
   * A function to handle when the selected item is changed
   */
  onChange(): void;
  /**
   * Selected item's name
   */
  selected: Array<string>;
  /**
   * Id for testing
   */
  testID?: string;
  /**
   * App's theme
   */
  theme: Theme;
}

const ListComponent = ({
  disabled,
  isRequired,
  items,
  multiSelect,
  onChange,
  selected,
  testID = 'listId',
  theme,
}: ListProps) => {
  const [currentSelected, setCurrentSelected] = useState(selected);

  const updateCurrentSelectedMultiple = (item) => {
    let result = currentSelected;

    if (currentSelected.includes(item.id)) {
      // remove from selection
      result = currentSelected.filter(select => select !== item.id);
    } else {
      // add item to list
      result = [...currentSelected, ...[item.id]];
    }

    setCurrentSelected(result);

    return result;
  };

  const updateCurrentSelectedSingle = (item) => {
    let result = currentSelected;

    if (currentSelected.includes(item.id)) {
      // remove from selection only list is not required
      if (!isRequired) {
        result = currentSelected.filter(select => select !== item.id);
      }
    } else {
      // add item to list
      result = [...[item.id]];
    }

    setCurrentSelected(result);

    return result;
  };

  const onPress = (callback, item) => {
    let selectedItems: Array<string> = [];

    if (multiSelect) {
      selectedItems = updateCurrentSelectedMultiple(item);
    } else {
      selectedItems = updateCurrentSelectedSingle(item);
    }

    if (callback) {
      callback(selectedItems);
    }

    if (item.onPress) {
      item.onPress(item);
    }
  };

  const renderItem = item => (
    <ListItem
      disabled={disabled}
      title={item.title}
      iconLeft={item.iconLeft}
      iconRight={item.iconRight}
      hideIconLeft={item.hideIconLeft}
      hideIconRight={item.hideIconRight}
      onPress={() => onPress(onChange, item)}
      onPressLeft={item.onPressLeft}
      onPressRight={item.onPressRight}
      divider={item.divider}
      dividerType={item.dividerType}
      active={currentSelected.includes(item.id)}
      key={item.id}
      theme={theme}
      testID={testID}
    />
  );

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      {items.map(item => renderItem(item))}
    </ScrollView>
  );
};

export const List = withTheme(ListComponent);
