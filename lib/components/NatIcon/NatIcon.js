import React from 'react';
import PropTypes from 'prop-types';
import { load as loadSvg } from '../../assets/icons/svg';
import { ThemeNaturaLight } from '../../../lib';

export const NatIcon = ({ name, size, fill }) => {
  const IconComponent = loadSvg(name);
  return (
    <IconComponent width={size} height={size} style={{ fill }} />
  );
};

NatIcon.propTypes = {
  name: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.number,
};

NatIcon.defaultProps = {
  name: 'filled-brand-naturarosacea',
  fill: ThemeNaturaLight.palette.text.primary,
  size: 24,
};
