/* eslint-disable max-statements */
/* eslint-disable complexity */
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { NatListItem } from '../NatListItem';

export const NatList = ({
  items,
  selected,
  onChange,
  isRequired,
  multiSelect,
  showHighlight,
}) => {
  const [currentSelected, setCurrentState] = useState(selected);

  const updateCurrentSelectedMultiple = (item) => {
    let result = currentSelected;

    if (currentSelected.includes(item.id)) {
      // remove from selection
      result = currentSelected.filter(select => select !== item.id);
    } else {
      // add item to list
      result = [...currentSelected, ...[item.id]];
    }

    setCurrentState(result);

    return result;
  };

  const updateCurrentSelectedSingle = (item) => {
    let result = currentSelected;

    if (currentSelected.includes(item.id)) {
      // remove from selection only list is not required
      if (!isRequired) result = currentSelected.filter(select => select !== item.id);
    } else {
      // add item to list
      result = [...[item.id]];
    }

    setCurrentState(result);

    return result;
  };

  const onPress = (callback, item) => {
    let selectedItems = [];

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
    <NatListItem
      title={item.title}
      iconLeft={item.iconLeft}
      iconRight={item.iconRight}
      onPressLeft={item.onPressLeft}
      onPressRight={item.onPressRight}
      hideIconLeft={item.hideIconLeft}
      hideIconRight={item.hideIconRight}
      onPress={() => onPress(onChange, item)}
      dividerTop={item.dividerTop}
      dividerBottom={item.dividerBottom}
      active={currentSelected.includes(item.id) && showHighlight}
      key={item.id}
    />
  );

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      {items.map(item => renderItem(item))}
    </ScrollView>
  );
};

NatList.propTypes = {
  isRequired: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      dividerBottom: PropTypes.bool,
      dividerTop: PropTypes.bool,
      hideIconLeft: PropTypes.bool,
      hideIconRight: PropTypes.bool,
      iconLeft: PropTypes.shape(),
      iconRight: PropTypes.shape(),
      id: PropTypes.string.isRequired,
      node: PropTypes.node,
      onPress: PropTypes.func,
      onPressLeft: PropTypes.func,
      onPressRight: PropTypes.func,
      title: PropTypes.string,
    }),
  ).isRequired,
  multiSelect: PropTypes.bool,
  onChange: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string),
  showHighlight: PropTypes.bool,
};

NatList.defaultProps = {
  isRequired: false,
  multiSelect: false,
  onChange: () => {},
  selected: [],
  showHighlight: true,
};
