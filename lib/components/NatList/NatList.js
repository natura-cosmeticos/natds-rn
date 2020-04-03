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
  multiSelect,
  showHighlight,
}) => {
  const [currentSelected, setCurrentState] = useState(selected);

  const onPress = (callback, item) => {
    let result = currentSelected;

    if (multiSelect) {
      if (currentSelected.includes(item.id)) {
        result = currentSelected.filter(select => select !== item.id);
      } else {
        result = [...currentSelected, ...[item.id]];
      }
    } else if (currentSelected.includes(item.id)) {
      result = currentSelected.filter(select => select !== item.id);
    } else {
      result = [...[item.id]];
    }
    setCurrentState(result);
    if (callback) {
      callback(result);
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
  multiSelect: false,
  onChange: () => {},
  selected: [],
  showHighlight: true,
};
