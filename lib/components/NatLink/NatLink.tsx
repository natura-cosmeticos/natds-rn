import React from 'react';
import { TouchableOpacity } from './NatLink.styles';
import { ThemeNaturaLight as Theme } from '../../themes/ThemeNaturaLight';
import { NatText } from '../NatText';

type NatLinkProps = {
  align?: string,
  color?: string,
  margin?: string,
  onPress?: (...args: any[]) => any,
  type?: string,
  value?: string
};
export const NatLink: React.SFC<NatLinkProps> = ({
  value,
  onPress,
  type,
  margin,
  color,
  align,
}) => (
  <TouchableOpacity
    onPress={onPress}
    marginBottom={margin}
    alignDefault={align}
  >
    <NatText type={type} value={value} color={color} />
  </TouchableOpacity>
);
NatLink.defaultProps = {
  align: 'flex-start',
  color: Theme.palette.complementary.link,
  margin: 'none',
  type: 'body2',
};
