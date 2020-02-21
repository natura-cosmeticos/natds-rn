import React, { useState, useEffect } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { load as loadSvg } from '../../assets/icons/svg';

import {
  NatAppBar,
  NatTextInput,
} from '../..';

import {
  HeaderWrapper,
  HeaderTitle,
  IconPress,
  InputIcon,
} from './NatAppBarSearch.styles';

export const NatAppBarSearch = ({
  title,
  onPressRight,
  iconRight,
  onPressLeft,
  showIconLeft,
  onSubmit,
}) => {
  const [iconLeft, setIconLeft] = useState('outlined-navigation-directionright');
  const [iconRightLocal, setIconRightLocal] = useState('');
  const [showIconRight, setShowIconRight] = useState(false);
  const [inputSearch, setInputSearch] = useState('');

  const submitCommand = (event) => {
    onSubmit(event.nativeEvent.text);
  };

  const clearSearch = () => {
    setInputSearch('');
    onSubmit('');
  };

  const getInput = () => (
    <NatTextInput
      label=""
      placeholder={title}
      onChangeText={setInputSearch}
      value={inputSearch}
      size="normal"
      type="none"
      icon={null}
      onSubmitEditing={submitCommand}
    />
  );

  useEffect(() => {
    if (inputSearch.length > 0) {
      setShowIconRight(true);
      setIconRightLocal('outlined-navigation-close');
    } else if (iconRight && iconRight.svg) {
      setShowIconRight(true);
      setIconRightLocal(iconRight.svg.name);
    } else {
      setShowIconRight(false);
    }
  });

  const localPressRight = () => {
    if (inputSearch.length === 0) {
      onPressRight();
    } else {
      clearSearch();
    }
  };

  return (
    <HeaderWrapper
      accessible
      accessibilityRole="header"
    >
      <NatAppBar
        title={title}
        showIconRight={showIconRight}
        showIconLeft={showIconLeft}
        iconLeft={{ svg: { name: iconLeft } }}
        iconRight={{ svg: { name: iconRightLocal } }}
        onPressLeft={() => onPressLeft()}
        onPressRight={localPressRight}
        node={getInput()}
      />
    </HeaderWrapper>
  );
};

NatAppBarSearch.propTypes = {
  title: PropTypes.string,
  node: PropTypes.node,
  iconLeft: PropTypes.shape(),
  iconRight: PropTypes.shape(),
  showIconLeft: PropTypes.bool,
  showIconRight: PropTypes.bool,
  onPressRight: PropTypes.func,
  onPressLeft: PropTypes.func,
  onSubmit: PropTypes.func,
};

NatAppBarSearch.defaultProps = {
  title: null,
  node: null,
  iconLeft: null,
  iconRight: null,
  showIconLeft: true,
  showIconRight: true,
  onPressRight: () => {},
  onPressLeft: () => {},
  onSubmit: () => {},
};
