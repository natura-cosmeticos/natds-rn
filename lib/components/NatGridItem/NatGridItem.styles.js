import styled from 'styled-components/native';
import { roboto } from '../../assets/theme/fonts/fonts';
import { colors } from '../../assets/theme/colors/colors';

export const Thumb = styled.Image`
  width: ${props => (props.square ? 152 : 128)};
  height: ${props => (props.square ? 152 : 80)};
  border-radius: 6;
  margin-bottom: 8px;
`;

export const Item = styled.View`
  margin-right: 16px;
  width: ${props => (props.square ? 152 : 128)};
  height: ${props => (props.square ? 200 : 128)}; 
`;

export const Description = styled.View`
  width: ${props => (props.square ? 152 : 128)};
  height: 40px;
  line-height: 22;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 14;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: ${colors.bw.grayDark};
  font-family: ${roboto.regular}
`;
