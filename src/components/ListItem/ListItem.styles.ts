import styled from 'styled-components/native';
import {
  getColorPrimary,
  getOpacityMediumLow,
  buildColorWithOpacity,
  getSize,
  getTheme,
} from '../../common/themeSelectors';
import { ListItemProps } from './ListItem';

const backgroundStyles = ({ selected, theme }: Required<ListItemProps>) => (
  selected
    ? buildColorWithOpacity(getColorPrimary, getOpacityMediumLow, theme)
    : 'transparent'
);

const getSizeMedium = getTheme(theme => getSize(theme, 'medium'));

export const ListItem = styled.View<ListItemProps>`
  background: ${backgroundStyles};
  min-height: ${getSizeMedium}px;
`;
