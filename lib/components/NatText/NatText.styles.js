import styled from 'styled-components/native';
import { fontSize } from '../../tokens';

const getStyles = (type, color) => Object.assign(fontSize[type], { color });

export const View = styled.View`
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin-left:0;
  margin-right:0;
  margin-top:0;
  margin-bottom: ${({ margin }) => margin};
`;

export const Text = styled.Text`
  font-size: ${({ type, color }) => getStyles(type, color).fontSize};
  color: ${({ type, color }) => getStyles(type, color).color};
  line-height: ${({ type, color }) => getStyles(type, color).lineHeight};
  font-weight: ${({ type, color }) => getStyles(type, color).fontWeight};
  text-align: ${({ textAlign }) => textAlign || 'auto'};
`;
