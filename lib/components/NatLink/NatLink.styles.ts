import styled from "styled-components/native";
import { sizes } from "../../tokens/sizes";
export const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: ${({ marginBottom }) => sizes[marginBottom]}px;
  align-items: ${({ alignDefault }) => alignDefault};
`;
