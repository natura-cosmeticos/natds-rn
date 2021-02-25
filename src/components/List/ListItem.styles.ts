import styled from 'styled-components/native';
import {
  getColorPrimary,
  getColorBackground,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getSpacingTiny,
  Theme,
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

interface DividerContainerProps {
  dividerType?: 'full-bleed' | 'inset' | 'middle';
  theme: Theme;
}

export const dividerContainerStyles = ({
  dividerType = 'full-bleed',
  theme,
}: DividerContainerProps) => {
  const styles = {
    inset: {
      marginLeft: getSpacingTiny(theme),
    },
    middle: {
      marginLeft: getSpacingTiny(theme),
      marginRight: getSpacingTiny(theme),
    },
  };

  return styles[dividerType];
};

export const HeaderWrapper = styled.View<HeaderProps>`
  flex: 1;
  flex-basis: auto;
  padding: 0;
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
  flex-basis: auto;
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

export const Divider = styled.View`
  background-color: ${({ theme }) => getColorLowEmphasis(theme)};
  height: 1;
  width: 100%;
`;
