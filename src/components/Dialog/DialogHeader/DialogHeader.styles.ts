import styled from 'styled-components/native';
import {
  getColorHighEmphasis,
  getSpacingSmall,
  getSpacingTiny,
} from '../../../common/themeSelectors';

export const DialogHeaderContainer = styled.View(({ theme }) => ({
  alignItems: 'center',
  color: getColorHighEmphasis(theme),
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: getSpacingTiny(theme),
  paddingHorizontal: getSpacingSmall(theme),
}));

export const DialogHeaderTitle = styled.Text(({ theme }) => ({
  color: getColorHighEmphasis(theme),
  flex: 0.85,
  fontSize: 20,
  fontWeight: 'bold',
}));

export const DialogHeaderContent = styled.View(({ theme }) => ({
  flexDirection: 'row',
  height: '100%',
}));
