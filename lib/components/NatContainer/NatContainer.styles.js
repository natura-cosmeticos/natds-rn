import styled from 'styled-components/native';

export const NatView = styled.View`
  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${props => props.center && 'justify-content: center; align-items: center;'}
  background-color: ${props => (props.color ? props.color : 'white')}
`;
