import styled from 'styled-components/native';
import { getColorHighEmphasis, getSpacingSmall } from '../../../common/themeSelectors';

export const DialogBodyContainer = styled.View(({ theme }) => ({
  flexShrink: 1,
}));

export const DialogBodyScroll = styled.ScrollView(({ theme }) => ({}));

export const DialogBodyText = styled.Text(({ theme }) => ({
  color: getColorHighEmphasis(theme),
  fontSize: 14,
  fontWeight: 400,
  paddingHorizontal: getSpacingSmall(theme),
  paddingVertical: getSpacingSmall(theme),
}));
