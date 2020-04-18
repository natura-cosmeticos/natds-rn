import styled from "styled-components/native";
import { colors } from "../../assets/theme/colors/colors";
const contentDefault = `
    align-items: center;
    justify-content: center;
    border: 2px ${colors.primary.yellow};
    border-radius: 6px;
    width: 30%;
    height: 64px;
    padding: 5px;
    margin-horizontal: 5px;
`;
export const CustomView = styled.View`
    ${contentDefault}
    background-color: ${props =>
      props.selected
        ? colors.content.selectedBackground
        : colors.primary.white};
`;
export const Title = styled.Text`
  font-weight: bold;
  color: ${props => (props.selected ? colors.bw.black : colors.bw.grayDarker)};
`;
export const SubTitle = styled.Text`
  color: ${props => (props.selected ? colors.bw.black : colors.bw.grayDark)};
`;
export const CheckedIcon = styled.Image`
  width: 18;
  height: 18;
  position: absolute;
  top: 1;
  right: 1;
  align-self: flex-end;
`;
export const CustomTouchableOpacity = styled.TouchableOpacity`
  border-radius: 6px;
`;
