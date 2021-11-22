import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme } from '../../../test/testHelpers';
import { Rating } from './Rating';

jest.mock('../Icon/Icon');
jest.mock('../../common/themeSelectors');

describe('Rating Variants', () => {
  describe('Counter Variant', () => {
    it('should render with counter variant', () => {
      const { getByTestId } = renderWithTheme(<Rating variant='counter' label='placeholder' />);

      expect(getByTestId('ds-rating')).toHaveStyle({ alignItems: 'center', flexDirection: 'row' });
    });

    it('should render with label aligned on right', () => {
      const { getByTestId } = renderWithTheme(<Rating variant='counter' align='right' label='placeholder' />);

      expect(getByTestId('ds-rating')).toHaveStyle({ alignItems: 'center', flexDirection: 'row-reverse' });
    });

    it('should render with label aligned on left', () => {
      const { getByTestId } = renderWithTheme(<Rating variant='counter' align='left' label='placeholder' />);

      expect(getByTestId('ds-rating-content')).toHaveStyle({ marginRight: 4 });
    });

    it('should render with another size', () => {
      const { getByTestId } = renderWithTheme(<Rating variant='counter' size="standard" label='placeholder' />);

      expect(getByTestId('ds-rating-1-icon')?.props).toHaveProperty('size', 'standard');
    });
  });


  describe('Input Variant', () => {
    it('should render with input variant', () => {
      const { getByTestId } = renderWithTheme(<Rating variant='input' label='placeholder' onPress={() => {}} />);

      expect(getByTestId('ds-rating')).toHaveStyle({ flexDirection: 'column' });
      expect(getByTestId('ds-rating-label')).toHaveStyle({ marginTop: 4 });
    });

    it('should call onPress when item is pressed', () => {
      const onPressMock = jest.fn();

      const { getByTestId } = renderWithTheme(<Rating variant='input' label='placeholder' onPress={onPressMock} />);

      fireEvent.press(getByTestId('ds-rating-1-button'));

      expect(onPressMock).toHaveBeenCalled();
    });

    it('should call onPress when item is', () => {
      const { getByTestId } = renderWithTheme(<Rating testID='rating' variant='input' rate={1} label='placeholder' onPress={() => {}} />);

      expect(getByTestId('rating-1-icon')).toHaveStyle({ color: '#F8B546' });
    });

    it('should call onPress when item ', () => {
      const { getByTestId } = renderWithTheme(<Rating variant='input' rate={1} label='placeholder' onPress={() => {}} />);

      expect(getByTestId('ds-rating-label')).toHaveStyle({ letterSpacing: 0.38 });
    });
  });


  describe('ReadOnly Variant', () => {
    it('should render with read-only variant', () => {
      const { toJSON } = renderWithTheme(<Rating variant='read-only' />);

      expect(toJSON()).toMatchSnapshot();
    });

    it('should call onPress when item is', () => {
      const { getByTestId } = renderWithTheme(<Rating rate={3} variant='read-only' />);

      expect(getByTestId('ds-rating-3-icon')).toHaveStyle({ color: '#F8B546' });
      expect(getByTestId('ds-rating-4-icon')).toHaveStyle({ color: '#777777' });
    });
  });
});
