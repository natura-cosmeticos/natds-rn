import React from 'react';
import PropTypes from 'prop-types';
import icoArrowLeft from '../../assets/icons/ic_arrow_left_white.png';

import { ButtonWrapper, ButtonText, ButtonIcon } from './NatButton.styles';

export const NatButton = ({
  onPress, type, label, secondary,
}) => (
  <ButtonWrapper
    accessible
    accessibilityRole="button"
    onPress={onPress}
    secondary={secondary}
    type={type}
  >
    <ButtonText
      type={type}
      accessibilityLabel={`${label}`}
    >
      {label.toUpperCase()}
    </ButtonText>
    { type === 'card' && <ButtonIcon source={icoArrowLeft} /> }
  </ButtonWrapper>
);

NatButton.propTypes = {
  secondary: PropTypes.bool,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

NatButton.defaultProps = { type: 'default', secondary: false };
