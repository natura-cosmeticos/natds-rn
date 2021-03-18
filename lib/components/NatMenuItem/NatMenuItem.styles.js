import styled from 'styled-components/native';
import { colors } from '../../assets/theme/colors/colors';

const menuItemStyles = {
  default: {
    color: colors.bw.grayDarker,
    height: 48,
  },
};

const getStylesFrom = styles => type => styles[type] || styles.default;

const getMenuItemStyles = getStylesFrom(menuItemStyles);

export const View = styled.TouchableOpacity`
  height: 48;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 16;
`;

export const MenuTitle = styled.Text`
  color: ${({ type, state }) => getMenuItemStyles(type, state).color};
  flex: 1;
  /* margin-left: 32; */
  align-self: center;
`;
