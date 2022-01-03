import styled from 'styled-components/native';

import { Theme, getColorLink } from '../../common/themeSelectors';
import { LinkProps } from './Link.types';

type LinkStyleProps = { theme: Theme } & Pick<LinkProps, 'type'>;

export const Label = styled.Text<LinkStyleProps>(({ theme, type }: LinkStyleProps) => ({
  color: getColorLink(theme),
  textDecorationLine: type === 'underline' ? 'underline' : 'none',
}));
