import styled from 'styled-components/native';

export const stylesType = ({ size, theme }) => ({
  fontSize: theme.sizes.tiny * size,
  height: theme.sizes.standard * size,
  width: theme.sizes.standard * size,
});

export const AvatarWrapper = styled.View`
  background-color: ${({ theme, type }) => (type === 'letter' ? theme.palette.primary.main : 'transparent')};
  border-radius: ${({ theme }) => theme.sizes.mediumx};
  height: ${({ size, theme }) => stylesType({ size, theme }).height};
  width: ${({ size, theme }) => stylesType({ size, theme }).width};
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

export const AvatarText = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ size, theme }) => stylesType({ size, theme }).fontSize};
`;

export const AvatarImage = styled.Image`
  border-radius: ${({ theme }) => theme.sizes.mediumx};
  height: ${({ size, theme }) => stylesType({ size, theme }).height};
  width: ${({ size, theme }) => stylesType({ size, theme }).width};
`;
