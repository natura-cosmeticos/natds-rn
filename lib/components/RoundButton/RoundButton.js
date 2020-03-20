import React from 'react';
import PropTypes from 'prop-types';
import { ThemeNaturaLight } from '../..';

import { ButtonText, ButtonWrapper } from './RoundButton.styles';

export function RoundButton({
  onPress, text, theme, type, size,
}) {
  return (
    <ButtonWrapper theme={theme} type={type} onPress={onPress} size={size}>
      <ButtonText theme={theme} type={type} size={size}>
        {text}
      </ButtonText>
    </ButtonWrapper>
  );
}

RoundButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  size: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.shape(),
  type: PropTypes.string,
};

RoundButton.defaultProps = {
  size: 'standard',
  theme: ThemeNaturaLight,
  type: 'medium',
};
