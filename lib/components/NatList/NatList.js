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
}) => {
  const [currentSelected, setCurrentState] = useState(selected);
  const onPress = (callback, item) => {
    setCurrentState(item.id);
    if (callback) {
      callback(item);
    }
  };
  const renderItem = item => (
    <NatListItem
      title={item.title}
      iconLeft={item.iconLeft}
      iconRight={item.iconRight}
      onPressLeft={item.onPressLeft}
      onPressRight={item.onPressRight}
      onPress={() => onPress(item.onPress, item)}
      dividerTop={item.dividerTop}
      dividerBottom={item.dividerBottom}
      active={(currentSelected === item.id)}
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
  selected: PropTypes.string.isRequired,
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
