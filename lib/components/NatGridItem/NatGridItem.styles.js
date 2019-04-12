import styled from 'styled-components/native';
import { robotoRegular } from '../../assets/theme/fonts.js';
import { colors } from '../../assets/theme/colors';

export const Thumb = styled.Image`
    width: ${props => (props.square ? 152 : 128)};
    height: ${props => (props.square ? 152 : 80)};
    border-radius: 6;
`;

export const Item = styled.View`
    align-items: center;
    justify-content: center;
    width: ${props => (props.square ? 152 : 128)};
    height: ${props => (props.square ? 200 : 128)};
    margin-right: 16;
`;

export const Description = styled.View`
    width: ${props => (props.square ? 152 : 128)};
    height: 40;
    margin-top: 8;
`;

export const Title = styled.Text`
    flex: 1;
    font-size: 14;
    font-weight: 500;
    font-style: normal;
    text-align: center;
    color: ${colors.bw.grayDark};
    ${robotoRegular}
`;
