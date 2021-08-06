import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { renderWithTheme } from '../../../test/testHelpers';
import { Counter } from './Counter';

const defaultProps = {
  onChangeText: () => {},
  onDecrement: () => {},
  onIncrement: () => {},
};

describe('Counter', () => {
  it('should render with default props', () => {
    const { toJSON } = renderWithTheme(<Counter {...defaultProps} />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should render with given label', () => {
    const { getByTestId } = renderWithTheme(<Counter {...defaultProps} label="testing label" />);

    expect(getByTestId('counter-label')).toHaveTextContent('testing label');
  });
  describe('size attribute', () => {
    it('should render with default size', () => {
      const { getByTestId } = renderWithTheme(<Counter {...defaultProps} />);

      expect(getByTestId('counter')).toHaveStyle({ height: 48 });
    });
    it('should render with given size', () => {
      const { getByTestId } = renderWithTheme(<Counter {...defaultProps} size="semiX" />);

      expect(getByTestId('counter')).toHaveStyle({ height: 40 });
    });
  });
  describe('disabled attribute', () => {
    it('should be editable by default', () => {
      const { getByTestId } = renderWithTheme(<Counter {...defaultProps} />);

      expect(getByTestId('counter-input').props.editable).toBe(true);
    });
    it('should not be editable if disabled', () => {
      const { getByTestId } = renderWithTheme(<Counter {...defaultProps} disabled />);

      expect(getByTestId('counter-input').props.editable).toBe(false);
    });
    it('should render with enabled buttons when value is between 0 and 99', () => {
      const { getByText } = renderWithTheme(<Counter {...defaultProps} value={10} />);

      expect(getByText('−')).not.toBeDisabled();
      expect(getByText('+')).not.toBeDisabled();
    });
    it('should disable decrement button when value is 0', () => {
      const { getByText } = renderWithTheme(<Counter {...defaultProps} value={0} />);

      expect(getByText('−')).toBeDisabled();
      expect(getByText('+')).not.toBeDisabled();
    });
    it('should disable increment button when value is 99', () => {
      const { getByText } = renderWithTheme(<Counter {...defaultProps} value={99} />);

      expect(getByText('−')).not.toBeDisabled();
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
    it('should accept only numeric values ', () => {
      const onChangeTextMock = jest.fn();
      const CHANGE_TEXT = '5abc0def';
      const { getByTestId } = renderWithTheme(
        <Counter
          onChangeText={onChangeTextMock}
          onIncrement={defaultProps.onIncrement}
          onDecrement={defaultProps.onDecrement}
        />,
      );

      fireEvent.changeText(getByTestId('counter-input'), CHANGE_TEXT);

      expect(onChangeTextMock).toHaveBeenCalledWith('50');
    });
    it('should replace values greater than 99 with 99', () => {
      const { getByTestId } = renderWithTheme(<Counter {...defaultProps} value={500} />);

      expect(getByTestId('counter-input').props.value).toBe('99');
    });
  });
  describe('actions', () => {
    it('should call `onDecrement` when decrement button is pressed and value is greater than 0', () => {
      const onDecrement = jest.fn();
      const { getByText } = renderWithTheme(
        <Counter
          onChangeText={defaultProps.onChangeText}
          onIncrement={defaultProps.onIncrement}
          onDecrement={onDecrement}
          value={10}
        />,
      );

      fireEvent.press(getByText('−'));

      expect(onDecrement).toHaveBeenCalled();
    });
    it('should call `onIncrement` when decrement button is pressed and value is less than 99', () => {
      const onIncrement = jest.fn();
      const { getByText } = renderWithTheme(
        <Counter
          onChangeText={defaultProps.onChangeText}
          onIncrement={onIncrement}
          onDecrement={defaultProps.onDecrement}
        />,
      );

      fireEvent.press(getByText('+'));

      expect(onIncrement).toHaveBeenCalled();
    });
    it('should call `onChangeText` when value changes', () => {
      const onChangeTextMock = jest.fn();
      const CHANGE_TEXT = '50';
      const { getByTestId } = renderWithTheme(
        <Counter
          onChangeText={onChangeTextMock}
          onIncrement={defaultProps.onIncrement}
          onDecrement={defaultProps.onDecrement}
        />,
      );

      fireEvent.changeText(getByTestId('counter-input'), CHANGE_TEXT);

      expect(onChangeTextMock).toHaveBeenCalledWith('50');
    });
  });
});
