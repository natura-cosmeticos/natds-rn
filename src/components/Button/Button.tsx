import React from 'react';
import styled from 'styled-components/native';
import { ITheme } from '@naturacosmeticos/natds-styles';
import {
  getTheme, getPrimaryMain, getColorOnPrimary, getColorOnSecondery,
} from '../../common/themeSelectors';

export type ButtonPropTypes = 'contained' | 'outlined'

export interface ButtonProps {
  /**
   * The button content
   */
  text: string,
  type?: 'contained' | 'outlined',
  theme?: ITheme,
}

const ButtonBase = styled.TouchableOpacity<Omit<ButtonProps, 'text'>>`
  background: ${props => (
    props.type === 'contained'
      ? getTheme(getPrimaryMain)
      : getTheme(getPrimaryMain))};
  `;

const Text = styled.Text<Omit<ButtonProps, 'text'>>`
  color: ${props => (
    props.type === 'contained'
      ? getTheme(getColorOnPrimary)
      : getTheme(getColorOnSecondery))};
  `;

export const Button = ({ text, type = 'contained' }: ButtonProps) => <ButtonBase type={type}>
    <Text type={type}>{text}</Text>
  </ButtonBase>;
