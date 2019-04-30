import styled from 'styled-components/native';
import { colors } from '../../assets/theme/colors/colors';
import { natura } from '../../assets/theme/fonts/fonts';

export const HeaderWrapper = styled.View`
  flex-wrap: wrap;
  width: 100%;
  height: 56;
  background-color: ${colors.primary.white};
`;

export const HeaderIcon = styled.View`
  margin-top: 16;
  margin-right: 0;
  margin-bottom: 16;
  margin-left: 16;
  width: 18;
`;

export const HeaderTitle = styled.Text`
  margin-left: 16;
  margin-top: 16;
  font-size: 18;
  color: ${colors.bw.grayDarker};
  font-family: ${natura.regular}
`;
