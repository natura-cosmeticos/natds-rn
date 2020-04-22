import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { roboto, sanfrancisco } from '../../assets/theme/fonts/fonts';
import { colors } from '../../assets/theme/colors/colors';

export const Item = styled.View`
  margin-bottom: ${props => (props.sizeMedium ? 24 : 0)};
  margin-right: ${props => (props.sizeMedium ? 12 : 16)};
  margin-left: ${props => (props.sizeMedium ? 12 : 0)};
  width: ${props => (props.sizeMedium ? 156 : 128)};
  height: ${props => (props.sizeMedium ? 200 : 176)};
`;
export const Thumb = styled.Image`
  width: ${props => (props.sizeMedium ? 156 : 128)};
  height: ${props => (props.sizeMedium ? 156 : 128)};
  border-radius: 6;
  margin-bottom: 8px;
`;
export const Description = styled.View`
  width: ${props => (props.sizeMedium ? 156 : 128)};
  height: 40px;
  line-height: 20;
`;
export const Title = styled.Text`
  flex: 1;
  font-size: 14;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: ${colors.bw.grayDark};
  font-family: ${Platform.OS === 'ios' ? sanfrancisco.regular : roboto.regular};
`;
