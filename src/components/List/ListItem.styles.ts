import styled from 'styled-components/native';
import {
  getTheme,
  getSpacingSmall,
  getColorPrimary,
  getOpacityMediumLow,
} from '../../common/themeSelectors';
import { ListItemProps } from './ListItem';

const inlineStyles = ({ inline }: ListItemProps) => (
  inline
    ? 'flex-direction: row; justify-content: space-between;'
    : ''
);

const selectedBackground = ({ selected, theme }: Required<ListItemProps>) => (
  selected
    ? getColorPrimary(theme) + getOpacityMediumLow(theme) * 100
    : 'transparent'
);


export const ListItem = styled.View<ListItemProps>`
  background: ${selectedBackground};
  ${inlineStyles}
`;
