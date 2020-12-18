import styled from 'styled-components/native';
import {
  getColorPrimary,
  getColorBackground,
  getColorHighEmphasis,
  getColorLowEmphasis,
} from '../../common/themeSelectors';

interface HeaderProps {
  active: boolean;
}

interface HeaderTitleProps {
  hideIconLeft: boolean;
  hideIconRight: boolean;
}

interface TitleProps {
  disabled?: boolean;
}

interface IconProps {
  position: string;
}

export const HeaderWrapper = styled.View<HeaderProps>`
  flex: 1;
  width: 100%;
  padding: 0px;

  background-color: ${({ active, theme }) => (active ? `${getColorPrimary(theme)}29` : `${getColorBackground(theme)}29`)};
`;

export const HeaderTitleView = styled.View<HeaderTitleProps>`
  justify-content: center;
  align-items: center;
  right: ${({ hideIconRight }) => (hideIconRight ? '0' : '48px')};
  left: ${({ hideIconLeft }) => (hideIconLeft ? '0' : '48px')};
  top: 0;
  bottom: 0;
`;

export const HeaderTitle = styled.Text<TitleProps>`
  flex: 1;
  justify-content: center;
  font-size: 16px;
  margin-left: 0px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  color: ${({ disabled, theme }) => (disabled ? getColorLowEmphasis(theme) : getColorHighEmphasis(theme))};
`;

export const IconPress = styled.TouchableOpacity<IconProps>`
  align-self: center;
  flex: 1;
  height: 40;
  width: 40;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: ${({ position }) => (position === 'right' ? '16px' : '0px')};
  padding-left: ${({ position }) => (position === 'right' ? '0px' : '16px')};
`;

export const TouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  flex: 1;
  align-self: stretch;
`;
