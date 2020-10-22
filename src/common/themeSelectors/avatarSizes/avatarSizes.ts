/* eslint-disable sort-keys */
import { Size } from '@naturacosmeticos/natds-themes/react-native';
import { Theme } from '../theme/theme';
import { getSize } from '../sizes/sizes';


export type AvatarSize = 'tiny' | 'small' | 'standard' | 'large' | 'huge'

export const getAvatarBySize = (size: AvatarSize, theme: Theme) => {
  const sizes = {
    tiny: 'standard',
    small: 'semi',
    standard: 'semiX',
    large: 'medium',
    huge: 'largeXX',
  };

  const fontSize = {
    tiny: '12px',
    small: '14px',
    standard: '16px',
    large: '16px',
    huge: '24px',
  };

  return {
    size: getSize(theme, sizes[size] as keyof Size),
    fontSize: fontSize[size],
  };
};
