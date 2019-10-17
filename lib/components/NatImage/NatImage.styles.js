import styled from 'styled-components/native';

const imageStyles = {
  default: {
    borderRadius: 0,
  },
  circle: {
    borderRadius: 100,
  },
};

const getStylesFrom = styles => type => styles[type] || styles.default;

const getImageStyles = getStylesFrom(imageStyles);

export const View = styled.TouchableOpacity`
  flex: 1;
`;

export const Image = styled.Image`
  width: 48;
  height: 48;
  border-radius: ${({ type }) => getImageStyles(type).borderRadius};
`;
