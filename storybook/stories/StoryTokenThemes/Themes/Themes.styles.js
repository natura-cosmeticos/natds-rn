import styled from 'styled-components/native';
import { getTextPrimary, getTheme, getBackgroundDefault } from '../../../../lib/themes/themeSelectors'
import { TextWithTheme } from '../../HelperComponents/ThemeHelper.styles'

export const ItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-Content: stretch;
`;

export const ListItemLabel = styled(TextWithTheme)`
  padding: 10px;
  width: 200px;
  color: ${getTheme(getTextPrimary)};
`;

export const ColorContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ColorIndicator = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border-color: #eaeaea;
  border-width: 2;
`;

export const ColorName = styled(TextWithTheme)`
  margin-left: 5px;
`;

export const SectionHeader = styled(TextWithTheme)`
  padding-top: 2px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${getTheme(getBackgroundDefault)};
`;

export const Title = styled(TextWithTheme)`
  font-size: 30px;
  font-weight: 100;
  margin-bottom: 20px;
`;
