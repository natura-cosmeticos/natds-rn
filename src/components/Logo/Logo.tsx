import React from 'react';
import { SvgCss } from 'react-native-svg';
import styled, { useTheme } from 'styled-components/native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { CSSObject } from 'styled-components';
import {
  getColorByName, getCustomLogoA, getCustomLogoB, getNeutralLogoA, getNeutralLogoB, getSize,
} from '../../common/themeSelectors';
import {
  CustomLogoModel, LogoColors, LogoProps, NeutralLogoModel,
} from './Logo.types';

const setStyle = ({ hexColor, width, height }: {
  hexColor?: string, width: number, height: number,
}, svg: string): string => {
  const fillPattern = /path\s+?\{\s+?fill:\s+?(#[a-zA-Z\d]{6,8})\s+?\}/gm;
  const widthPattern = /width="(\d+)"/;
  const heightPattern = /height="(\d+)"/;

  return svg
    .replace(fillPattern, `path { fill: ${hexColor || '$1'} }`)
    .replace(widthPattern, `width="${width || '$1'}"`)
    .replace(heightPattern, `height="${height || '$1'}"`);
};

const getLogoType = (color: LogoColors) => (
  color === 'neutral' ? 'neutral' : 'custom'
);

const getCustomColor = (color: LogoColors, theme: Theme) => (
  color === 'neutral' ? undefined : getColorByName(theme, color)
);

const getLogoByProps = (
  color: LogoColors, model: CustomLogoModel | NeutralLogoModel, theme: Theme,
) => {
  const type = getLogoType(color);
  /* eslint-disable id-length */
  const logo = {
    custom: {
      a: getCustomLogoA(theme),
      b: getCustomLogoB(theme),
    },
    neutral: {
      a: getNeutralLogoA(theme),
      b: getNeutralLogoB(theme),

    },
  };
  /* eslint-enable id-length */

  return logo[type][model];
};

const Container = styled.View((): CSSObject => (
  {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
));

export const Logo = ({
  accessibilityLabel, color = 'neutral', model = 'a', size = 'veryHuge',
}: LogoProps) => {
  const theme = useTheme();
  const { file, height, width } = getLogoByProps(color, model, theme);

  const logo = setStyle({
    height: getSize(theme, size) * height / width,
    hexColor: getCustomColor(color, theme),
    width: getSize(theme, size),
  }, file);

  return (
    <Container>
      <SvgCss
        accessible={!!accessibilityLabel}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="image"
        testID="logo"
        xml={logo}
      />
    </Container>
  );
};
