import styled from 'styled-components/native';
import { TextWithTheme } from './ThemeHelper.styles';

export const TokenContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-left: -5px;
  margin-right: -5px;
`;

export const TokenColorContainer = styled.View`
  flex-basis: 50%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ActualColor = styled.View`
  height: 50px;
  margin-bottom: 5px;
  border: solid 1px #eaeaea;
`;

export const ColorName = styled(TextWithTheme)`
  font-size: 11px;
`;

export const CategoryTitle = styled(TextWithTheme)`
  font-size: 20px;
  font-weight: 100;
`;

export const CategoryWrapper = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Container = styled.View`
  padding: 20px;
`;
