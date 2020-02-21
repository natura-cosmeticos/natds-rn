import React from 'react';
import PropTypes from 'prop-types';
import { load as loadSvg } from '../../assets/logo/svg';

export const NatLogo = ({ name, size }) => {
  const IconComponent = loadSvg(name);

  return (
    <IconComponent width={size} />
  );
};

NatLogo.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
};

NatLogo.defaultProps = {
  name: 'logo-natura-vertical',
  size: 24,
};
