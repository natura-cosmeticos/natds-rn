import React from 'react';
import PropTypes from 'prop-types';
import { load as loadSvg } from '../../assets/logo/svg';

export const NatLogo = ({
  name,
  size,
  width,
  height,
}) => {
  const IconComponent = loadSvg(name);

  if (name === 'logo-avon') {
    return IconComponent;
  }

  return (
    <IconComponent width={(width > 0) ? width : size} height={(height > 0) ? height : size} />
  );
};

NatLogo.propTypes = {
  height: PropTypes.number,
  name: PropTypes.string,
  size: PropTypes.number,
  width: PropTypes.number,
};

NatLogo.defaultProps = {
  height: 0,
  name: 'logo-natura-vertical',
  size: 0,
  width: 0,
};
