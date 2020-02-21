import React, { useState } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  NatListItem,
} from '../NatListItem';

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
      active={(currentSelected.includes(item.id) && showHighlight)}
    />
  );

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

NatList.propTypes = {
  selected: PropTypes.arrayOf(
    PropTypes.string,
  ),
  onChange: PropTypes.func,
  multiSelect: PropTypes.bool,
  showHighlight: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      node: PropTypes.node,
      iconLeft: PropTypes.shape(),
      hideIconLeft: PropTypes.bool,
      iconRight: PropTypes.shape(),
      hideIconRight: PropTypes.bool,
      onPressRight: PropTypes.func,
      onPressLeft: PropTypes.func,
      onPress: PropTypes.func,
      dividerTop: PropTypes.bool,
      dividerBottom: PropTypes.bool,
    }),
  ).isRequired,
};

NatList.defaultProps = {
  selected: [],
  onChange: () => {},
  multiSelect: false,
  showHighlight: true,
};
