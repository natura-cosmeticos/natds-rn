import styled from "styled-components/native";
const imageStyles = {
  card: {
    height: 184,
    width: "100%"
  },
  circle: {
    borderRadius: 100,
    height: 48,
    width: 48
  },
  default: {}
};
const getStylesFrom = styles => type => styles[type] || styles.default;
const getImageStyles = getStylesFrom(imageStyles);
export const View = styled.View`
  width: ${({ type }) => getImageStyles(type).width};
`;
export const Image = styled.Image`
  width: ${({ type }) => getImageStyles(type).width};
  height: ${({ type }) => getImageStyles(type).height};
  border-radius: ${({ type }) => getImageStyles(type).borderRadius || "0"};
`;
