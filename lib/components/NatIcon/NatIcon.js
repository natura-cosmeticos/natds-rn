import React from 'react';
import PropTypes from 'prop-types';
import { load as loadSvg } from '../../assets/icons/svg';
import { ThemeNaturaLight } from '../..';

export const NatIcon = ({ name, size, fill }) => {
  const IconComponent = loadSvg(name);

  return (
    <IconComponent width={size} height={size} style={{ fill }} />
  );
};

NatIcon.propTypes = {
  fill: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
};

NatIcon.defaultProps = {
  fill: ThemeNaturaLight.palette.text.primary,
  name: 'filled-brand-naturarosacea',
  size: 24,
};
