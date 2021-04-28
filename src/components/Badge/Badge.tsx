/* eslint-disable complexity */
import React from 'react';
import { withTheme } from 'styled-components/native';

import {
  Theme,
} from '../../common/themeSelectors';

import { BadgeContainer, BadgeContent } from './Badge.style';

export type BadgeTypes = 'dot' | 'standard';
export type BadgeColors = 'alert' | 'primary' | 'secondary' | 'success';
export type BadgeLimit = 9 | 99 | 9999;

export interface BadgeProps {
  /**
   * Badge color: alert, primary, secondary, success
   * Default: alert
  */
  color?: BadgeColors;
  /**
   * Used to report the count of something new
  */
  content?: number;
  /**
   * Maximum number that can be displayed in the badge
   * Default: 9999
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
  limit = 9999,
  testID = 'badge',
  type,
  theme,
}: BadgeProps) => {
  const formatContent = Number(content) > limit ? `${limit}+` : content;

  return (
    <BadgeContainer color={color} type={type} testID={testID}>
      {content && type === 'standard' && (
        <BadgeContent color={color}>
          {formatContent}
        </BadgeContent>
      )}
    </BadgeContainer>
  );
};

export const Badge = withTheme(BadgeComponent);
