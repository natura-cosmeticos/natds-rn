/* eslint-disable max-statements */
import React from 'react';

import { Avatar, getTextValue } from './Avatar';
import { renderWithTheme } from '../../../test/testHelpers';

jest.mock('../Icon/Icon');
jest.mock('../../common/themeSelectors', () => (
  {
    getAvatarBySize: () => ({ fontSize: 24, size: 'largeXX' }),
    getColorOnPrimary: () => '#333333',
    getColorPrimary: () => '#FFAA33',
  }));

describe('Avatar component', () => {
  it('should render avatar with default size', () => {
    const { queryByTestId } = renderWithTheme(<Avatar testID='ds-avatar' type='image' imgSource={{ uri: '' }} />);

    expect(queryByTestId('ds-avatar')).toHaveStyle({ height: 24, width: 24 });
  });

  it('should render avatar with image type', () => {
    const { queryByTestId } = renderWithTheme(<Avatar testID='ds-avatar-image' type='image' imgSource={{ uri: '' }} />);

    expect(queryByTestId('ds-avatar-image')?.props).toHaveProperty('type', 'image');
  });

  it('should render avatar with letter type', () => {
    const { queryByTestId } = renderWithTheme(<Avatar testID='ds-avatar-letter' type='letter' text="Design System" />);

    expect(queryByTestId('ds-avatar-letter')?.props).toHaveProperty('type', 'letter');
  });

  it('should render avatar component icon', () => {
    const { toJSON } = renderWithTheme(<Avatar type='icon' iconName='filled-default-mockup' />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render avatar component image', () => {
    const { toJSON } = renderWithTheme(<Avatar type='image' imgSource={{ uri: '' }} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render avatar component letter', () => {
    const { toJSON } = renderWithTheme(<Avatar type='letter' text='Design System' />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render avatar component anonymoys', () => {
    const { toJSON } = renderWithTheme(<Avatar />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render avatar with a deprecated size', () => {
    const { toJSON, getByTestId } = renderWithTheme(<Avatar testID='avatar-letter' type='letter' size='huge' text='Deprecated'/>);

    expect(getByTestId('avatar-letter')).toHaveStyle({ fontSize: 24 });
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render avatar component with other size', () => {
    const { queryByTestId } = renderWithTheme(<Avatar type='image' imgSource={{ uri: '' }} size='semiX' />);

    expect(queryByTestId('avatar')).toHaveStyle({ height: 40, width: 40 });
  });

  it('should return the first character from first and last word', () => {
    const mockFn = jest.fn(getTextValue);

    mockFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should return the first character', () => {
    const mockFn = jest.fn(getTextValue);

    expect(mockFn('Design')).toBe('D');
  });
});
