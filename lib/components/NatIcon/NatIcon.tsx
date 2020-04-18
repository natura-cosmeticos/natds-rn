import React from 'react';
import { load as loadSvg } from '../../assets/icons/svg';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';

type NatIconProps = {
  fill?: string,
  name?: string,
  size?: number
};
export const NatIcon: React.SFC<NatIconProps> = ({ name, size, fill }) => {
  const IconComponent = loadSvg(name);

  return <IconComponent width={size} height={size} style={{ fill }} />;
};
NatIcon.defaultProps = {
  fill: ThemeNaturaLight.palette.text.primary,
  name: 'filled-brand-naturarosacea',
  size: 24,
};
