import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { renderWithTheme } from '../../../test/testHelpers';
import { Counter } from './Counter';

describe('Counter', () => {
  it('should render with default props', () => {
    const { toJSON } = renderWithTheme(<Counter />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should render with given label', () => {
    const { getByTestId } = renderWithTheme(<Counter label="testing label" />);

    expect(getByTestId('counter-label')).toHaveTextContent('testing label');
  });
  describe('size attribute', () => {
    it('should render with default size', () => {
      const { getByTestId } = renderWithTheme(<Counter />);

      expect(getByTestId('counter')).toHaveStyle({ height: 48 });
    });
    it('should render with given size', () => {
      const { getByTestId } = renderWithTheme(<Counter size="semiX" />);

      expect(getByTestId('counter')).toHaveStyle({ height: 40 });
    });
  });
  describe('disabled attribute', () => {
    it('should be editable by default', () => {
      const { getByTestId } = renderWithTheme(<Counter />);

      expect(getByTestId('counter-input').props.editable).toBe(true);
    });
    it('should not be editable if disabled', () => {
      const { getByTestId } = renderWithTheme(<Counter disabled />);

      expect(getByTestId('counter-input').props.editable).toBe(false);
    });
    it('should render with enabled buttons when value is between 0 and 99', () => {
      const { getByText } = renderWithTheme(<Counter value={10} />);

      expect(getByText('−')).not.toBeDisabled();
      expect(getByText('+')).not.toBeDisabled();
    });
    it('should disable subtract button when value is 0', () => {
      const { getByText } = renderWithTheme(<Counter value={0} />);

      expect(getByText('−')).toBeDisabled();
      expect(getByText('+')).not.toBeDisabled();
    });
    it('should disable add button when value is 99', () => {
      const { getByText } = renderWithTheme(<Counter value={99} />);

      expect(getByText('−')).not.toBeDisabled();
      expect(getByText('+')).toBeDisabled();
    });
    it('should render with disabled buttons if disabled', () => {
      const { getByText } = renderWithTheme(<Counter disabled />);

      expect(getByText('−')).toBeDisabled();
      expect(getByText('+')).toBeDisabled();
    });
  });
  describe('value handling', () => {
    it('should render with value 0 as default', () => {
      const { getByTestId } = renderWithTheme(<Counter />);

      expect(getByTestId('counter-input').props.value).toBe('0');
    });
    it('should render with given value', () => {
      const { getByTestId } = renderWithTheme(<Counter value={10} />);

      expect(getByTestId('counter-input').props.value).toBe('10');
    });
    it('should accept only numeric values ', () => {
      const { getByTestId } = renderWithTheme(<Counter />);

      fireEvent.changeText(getByTestId('counter-input'), '5abc0def');

      expect(getByTestId('counter-input').props.value).toBe('50');
    });
    it('should replace values greater than 99 with 99', () => {
      const { getByTestId } = renderWithTheme(<Counter />);

      fireEvent.changeText(getByTestId('counter-input'), '500');

      expect(getByTestId('counter-input').props.value).toBe('99');
    });
    it('should add an item when add button is pressed and value is less than 99', () => {
      const { getByTestId, getByText } = renderWithTheme(<Counter value={10} />);

      fireEvent.press(getByText('+'));

      expect(getByTestId('counter-input').props.value).toBe('11');
    });
    it('should not add an item when add button is pressed and value is 99', () => {
      const { getByTestId, getByText } = renderWithTheme(<Counter value={99} />);

      fireEvent.press(getByText('+'));

      expect(getByTestId('counter-input').props.value).toBe('99');
    });
    it('should subtract an item when subtract button is pressed and value is more than 0', () => {
      const { getByTestId, getByText } = renderWithTheme(<Counter value={10} />);

      fireEvent.press(getByText('−'));

      expect(getByTestId('counter-input').props.value).toBe('9');
    });
    it('should not subtract an item when subtract button is pressed and value is 0', () => {
      const { getByTestId, getByText } = renderWithTheme(<Counter value={0} />);

      fireEvent.press(getByText('−'));

      expect(getByTestId('counter-input').props.value).toBe('0');
    });
  });
});
