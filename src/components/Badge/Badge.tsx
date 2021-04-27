/* eslint-disable complexity */
import React from 'react';
import { withTheme } from 'styled-components/native';

import { Theme } from '../../common/themeSelectors';

import { BadgeContainer, BadgeContent } from './Badge.style';

export type BadgeTypes = 'dot' | 'standard';
export type BadgeColors = 'alert' | 'primary' | 'secondary' | 'success';
export type BadgeLimit = '9' | '99' | 'unlimited';

export interface BadgeProps {
  /**
   * Badge color: alert, primary, secondary, success
  */
  color?: BadgeColors;
  /**
   * Used to report the count of something new
  */
  content?: number;
  /**
   * Maximum number that can be displayed in the badge
  */
  limit?: BadgeLimit;
  /**
   * ID used for testing
  */
  testID?: string;
  /**
   * App theme
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
  theme,
  type,
}: BadgeProps) => {
  const maximumLimit = 9999;

  const renderContent = () => {
    if (!content || type === 'dot') {
      return null;
    }

    if (limit !== 'unlimited' && Number(content) > Number(limit)) {
      return (
        <BadgeContent color={color}>
          {limit}+
        </BadgeContent>
      );
    }

    if (limit === 'unlimited' && Number(content) > maximumLimit) {
      return (
        <BadgeContent color={color}>
          {maximumLimit}+
        </BadgeContent>
      );
    }

    return (
      <BadgeContent color={color}>
        {content}
      </BadgeContent>
    );
  };

  return (
    <BadgeContainer color={color} type={type} testID={testID}>
      {renderContent()}
    </BadgeContainer>
  );
};

export const Badge = withTheme(BadgeComponent);
