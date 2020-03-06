import styled from 'styled-components/native';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';
import { sizes } from '../../tokens/sizes';

export const View = styled.View`
  margin-top: ${props => sizes[props.marginTop]}px;
  margin-bottom: ${props => sizes[props.marginBottom]}px;
  margin-right: ${props => sizes[props.marginRight]}px;
  margin-left: ${props => sizes[props.marginLeft]}px;
  padding-top: ${props => sizes[props.paddingTop]}px;
  padding-bottom: ${props => sizes[props.paddingBottom]}px;
  padding-right: ${props => sizes[props.paddingRight]}px;
  padding-left: ${props => sizes[props.paddingLeft]}px;
  ${props => props.center && 'justify-content: center; align-items: center;'}
  background-color: ${props => (props.color ? props.color : ThemeNaturaLight.palette.background.paper)}
`;
