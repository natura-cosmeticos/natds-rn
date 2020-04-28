/* eslint-disable max-lines */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { NatAppBar } from '../NatAppBar';
import { NatTextInput } from '../NatTextInput';
import { HeaderWrapper } from './NatAppBarSearch.styles';

export const NatAppBarSearch = ({
  title,
  searchValue,
  searchValueChange,
  iconRight,
  onPressRight,
  onPressLeft,
  showIconLeft,
  onSubmit,
  submitOnChange,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [iconLeft, setIconLeft] = useState('outlined-navigation-directionright');
  const [iconRightLocal, setIconRightLocal] = useState('');
  const [showIconRight, setShowIconRight] = useState(false);

  const submitCommand = event => onSubmit(event.nativeEvent.text);

  const clearSearch = () => {
    searchValueChange('');
    onSubmit('');
  };

  const changeInputSearch = (text) => {
    if (submitOnChange) {
      onSubmit(text);
    }
    searchValueChange(text);
  };

  const getInput = () => (
    <NatTextInput
      label=""
      placeholder={title}
      onChangeText={changeInputSearch}
      value={searchValue}
      size="normal"
      type="none"
      icon={null}
      onSubmitEditing={submitCommand}
    />
  );

  useEffect(() => {
    if (searchValue && searchValue.length > 0) {
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
    if (searchValue.length === 0) {
      onPressRight();
    } else {
      clearSearch();
    }
  };

  return (
    <HeaderWrapper accessible accessibilityRole="header">
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
  iconLeft: PropTypes.shape(),
  iconRight: PropTypes.shape(),
  node: PropTypes.node,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  onSubmit: PropTypes.func,
  searchValue: PropTypes.string.isRequired,
  searchValueChange: PropTypes.func.isRequired,
  showIconLeft: PropTypes.bool,
  showIconRight: PropTypes.bool,
  submitOnChange: PropTypes.bool,
  title: PropTypes.string,
};

NatAppBarSearch.defaultProps = {
  iconLeft: null,
  iconRight: null,
  node: null,
  onPressLeft: () => { },
  onPressRight: () => { },
  onSubmit: () => { },
  showIconLeft: true,
  showIconRight: true,
  submitOnChange: false,
  title: null,
};
