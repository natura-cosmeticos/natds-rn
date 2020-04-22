import styled from 'styled-components/native';

export const View = styled.View`
  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
  margin-right: ${props => props.marginRight}px;
  margin-left: ${props => props.marginLeft}px;
  padding-top: ${props => props.paddingTop}px;
  padding-bottom: ${props => props.paddingBottom}px;
  padding-right: ${props => props.paddingRight}px;
  padding-left: ${props => props.paddingLeft}px;
  background-color: ${props => (props.backgroundColor !== ''
    ? props.backgroundColor
    : `${props.theme.palette.grayscale.colorBrdBlack}1F`)};
`;
