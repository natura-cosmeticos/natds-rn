import React from 'react';
import PropTypes from 'prop-types';
import icoArrowLeft from '../../assets/icons/ic_arrow_left_white.png';

import { ButtonWrapper, ButtonText, ButtonIcon } from './NatButton.styles';

export const NatButton = ({
  onPress, type, label, noUpperCase, iconLeft,
}) => (
    <ButtonWrapper
      accessible
      accessibilityRole="button"
      onPress={onPress}
      type={type}
      disabled={type === 'disabled'}
    >
      {iconLeft && <ButtonIcon source={iconLeft} />}
      <ButtonText
        type={type}
        accessibilityLabel={`${label}`}
      >
        {noUpperCase ? label : label.toUpperCase()}
      </ButtonText>
      {type === 'card' && <ButtonIcon source={icoArrowLeft} />}
    </ButtonWrapper>
);

NatButton.propTypes = {
  iconLeft: PropTypes.string,
  label: PropTypes.string.isRequired,
  noUpperCase: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.string,
};

NatButton.defaultProps = { type: 'default' };
