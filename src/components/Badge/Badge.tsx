/* eslint-disable complexity */
import React from 'react';
import { withTheme } from 'styled-components/native';
import { Color } from '@naturacosmeticos/natds-themes/react-native';

import {
  Theme,
} from '../../common/themeSelectors';

import { BadgeContainer, BadgeContent } from './Badge.style';

export type BadgeTypes = 'dot' | 'standard';
export type BadgeColors = keyof Pick<Color, 'alert' | 'primary' | 'secondary' | 'success'>;
export type BadgeLimit = 9 | 99 | 'unlimited';

export interface BadgeProps {
  /**
   * Badge color: alert, primary, secondary, success
   * @default: `alert`
  */
  color?: BadgeColors;
  /**
   * Used to report the count of something new
  */
  content?: number;
  /**
   * Maximum number that can be displayed in the badge
   * @default: `9999`
  */
  limit?: BadgeLimit;
  /**
   * ID used for testing
  */
  testID?: string;
  /**
   * App's theme
  */
  theme: Theme;
  /**
   * Define the style of the badge
  */
  type: BadgeTypes;
}

const BadgeComponent = ({
  color = 'alert',
  content,
  limit = 'unlimited',
  testID = 'badge',
  type,
}: BadgeProps) => {
  const useLimit = limit !== 'unlimited';

  return (
    <BadgeContainer color={color} type={type} testID={testID}>
      {content && type === 'standard' && (
        <BadgeContent color={color}>
          {useLimit && content > limit ? `${limit}+` : `${content}`}
        </BadgeContent>
      )}
    </BadgeContainer>
  );
};

export const Badge = withTheme(BadgeComponent);
