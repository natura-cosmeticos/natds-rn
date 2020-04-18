import styled from 'styled-components/native';

export const CustomView = styled.View`
  elevation: 1;
  height: ${props => props.height};
  width: ${props => props.width}%;
  background-color: ${props => props.bgColor};
`;
