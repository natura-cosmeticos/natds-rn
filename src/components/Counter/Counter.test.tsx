import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { renderWithTheme } from '../../../test/testHelpers';
import { Counter } from './Counter';
import mockTheme from '../../common/themeSelectors/theme/mock-theme.json';

const defaultProps = {
  onDecrement: () => {},
  onIncrement: () => {},
};

describe('Counter', () => {
  it('should render with default props', () => {
    const { toJSON } = renderWithTheme(<Counter {...defaultProps} />);

    expect(toJSON()).toMatchSnapshot();
  });
  describe('label attribute', () => {
    it('should render without label by default', () => {
      const { queryByTestId } = renderWithTheme(<Counter {...defaultProps}/>);

      expect(queryByTestId('counter-label')).toBeFalsy();
    });
    it('should render with given label', () => {
      const { getByTestId } = renderWithTheme(<Counter {...defaultProps} label="testing label" />);

      expect(getByTestId('counter-label')).toHaveTextContent('testing label');
    });
  });
  describe('size attribute', () => {
    it('should render with default size', () => {
      const { getByTestId } = renderWithTheme(<Counter {...defaultProps} />);

      expect(getByTestId('counter')).toHaveStyle({ height: mockTheme.size.medium });
    });
    it('should render with given size', () => {
      const { getByTestId } = renderWithTheme(<Counter {...defaultProps} size="semiX" />);

      expect(getByTestId('counter')).toHaveStyle({ height: mockTheme.size.semiX });
    });
  });
  describe('disabled attribute', () => {
    it('should render with decrement button disabled and increment button enabled by default', () => {
      const { getByText } = renderWithTheme(<Counter {...defaultProps} />);

      expect(getByText('−')).toBeDisabled();
      expect(getByText('+')).toBeEnabled();
    });
    it('should render with enabled buttons when value is between minimum and maximum values', () => {
      const { getByText } = renderWithTheme(
        <Counter {...defaultProps} minValue={1} value={2} maxValue={3} />,
      );

      expect(getByText('−')).toBeEnabled();
      expect(getByText('+')).toBeEnabled();
    });
    it('should disable decrement button when value is equal to minimum', () => {
      const { getByText } = renderWithTheme(
        <Counter {...defaultProps} minValue={1} value={1} maxValue={3} />,
      );

      expect(getByText('−')).toBeDisabled();
      expect(getByText('+')).toBeEnabled();
    });
    it('should disable increment button when value is equal to maximum', () => {
      const { getByText } = renderWithTheme(
        <Counter {...defaultProps} minValue={1} value={3} maxValue={3} />,
      );

      expect(getByText('−')).toBeEnabled();
      expect(getByText('+')).toBeDisabled();
    });
    it('should render with disabled buttons if disabled', () => {
      const { getByText } = renderWithTheme(<Counter {...defaultProps} disabled />);

      expect(getByText('−')).toBeDisabled();
      expect(getByText('+')).toBeDisabled();
    });
  });
  describe('value handling', () => {
    it('should render with value 0 as default', () => {
      const { getByTestId } = renderWithTheme(<Counter {...defaultProps} />);

      expect(getByTestId('counter-input').props.value).toBe('0');
    });
    it('should render with given value', () => {
      const { getByTestId } = renderWithTheme(<Counter {...defaultProps} value={10} />);

      expect(getByTestId('counter-input').props.value).toBe('10');
    });
  });
  describe('actions', () => {
    it('should call `onDecrement` when decrement button is pressed and value is greater than minimum value', () => {
      const onDecrement = jest.fn();
      const { getByText } = renderWithTheme(
        <Counter
          onIncrement={defaultProps.onIncrement}
          onDecrement={onDecrement}
          value={1}
        />,
      );

      fireEvent.press(getByText('−'));

      expect(onDecrement).toHaveBeenCalled();
    });
    it('should call `onIncrement` when increment button is pressed and value is less than maximum value', () => {
      const onIncrement = jest.fn();
      const { getByText } = renderWithTheme(
        <Counter
          onIncrement={onIncrement}
          onDecrement={defaultProps.onDecrement}
          value={1}
        />,
      );

      fireEvent.press(getByText('+'));

      expect(onIncrement).toHaveBeenCalled();
    });
  });
});
