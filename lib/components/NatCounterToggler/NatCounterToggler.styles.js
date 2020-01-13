import styled from 'styled-components/native';
import { colors } from '../../assets/theme/colors/colors';

const CommonContentView = `
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const CounterView = styled.View`
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    border: 1px ${colors.bw.gray};
    border-radius: 6px;
    width: ${props => (props.width ? props.width : '130px')}
    height: ${props => (props.height ? props.height : '60px')}
    background-color: ${props => (props.color ? props.color : colors.primary.white)};
`;

export const ContentViewLeft = styled.View`
    ${CommonContentView};
    background-color: ${props => (props.color ? props.color : colors.primary.white)};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-width: 0.4;
    border-bottom-color: ${colors.bw.gray};
`;

export const ContentViewRight = styled.View`
    ${CommonContentView};
    background-color: ${props => (props.color ? props.color : colors.primary.white)};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-width: 0.4;
    border-bottom-color: ${colors.bw.gray};
`;

export const ContentViewDefault = styled.View`
    ${CommonContentView};
    border-bottom-width: 0.4;
    border-bottom-color: ${colors.bw.gray};
`;

export const CustomTextOperators = styled.Text`
    font-size: 20px;
    color: #777777;
`;

export const CustomTouchableHighlight = styled.TouchableHighlight`
    flex-grow: 1;
    border-radius: 6px;
    background-color: ${props => (props.color ? props.color : colors.primary.white)};
`;
