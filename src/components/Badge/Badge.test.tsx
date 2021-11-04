import React from 'react';

import { renderWithTheme } from '../../../test/testHelpers';
import {
  Badge, buildValue, isBadgeStandard,
} from '.';
import { BadgeProps } from './Badge.types';
import {
  convertPulseToDot, getWidthByVariant, getHorizontalPadding,
} from './Badge.styles';
import theme from '../../common/themeSelectors/theme/mock-theme.json';

jest.useFakeTimers();

describe('Badge component', () => {
  it('Should render badge with standard variant', () => {
    const { toJSON } = renderWithTheme(<Badge variant="standard" value={1} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render badge with pulse variant', () => {
    const { getByTestId } = renderWithTheme(<Badge variant="pulse" />);

    expect(getByTestId('ds-badge-pulse')).toBeTruthy();
  });
});

describe('getWidthByVariant', () => {
  it('should only return the value when variant is different than stardard', () => {
    expect(getWidthByVariant('standard', theme)).toBe(false);
    expect(getWidthByVariant('dot', theme)).toStrictEqual({ width: 8 });
  });
});

describe('getHorizontalPadding', () => {
  it('should only return the value when variant is equal standard', () => {
    expect(getHorizontalPadding('standard', theme)).toStrictEqual({ paddingHorizontal: 4 });
    expect(getHorizontalPadding('dot', theme)).toBe(false);
  });
});

describe('convertBadgeType', () => {
  it('should return dot when pulse', () => {
    expect(convertPulseToDot('pulse')).toBe('dot');
  });

  it('should return the own variant when different than pulse', () => {
    expect(convertPulseToDot('dot')).toBe('dot');
    expect(convertPulseToDot('standard')).toBe('standard');
  });
});

describe('buildValue', () => {
  it('should only return the value when it is less than the limit', () => {
    expect(buildValue({ limit: 100, value: 99, variant: 'standard' })).toBe(99);
  });
  it('should return the limit with a plus sign when the value is greater or equal than it', () => {
    expect(buildValue({ limit: 99, value: 99, variant: 'standard' })).toBe('99+');
  });
});

describe('isBadgeStandard', () => {
  it('should return true when the variant is standard', () => {
    const props = { variant: 'standard' } as BadgeProps;

    expect(isBadgeStandard(props)).toBe(true);
  });

  it('should return false when the variant is different than standard', () => {
    const props = { variant: 'dot' } as BadgeProps;

    expect(isBadgeStandard(props)).toBe(false);
  });
});
