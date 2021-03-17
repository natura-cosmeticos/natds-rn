import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {
  act,
  cleanup,
  fireEvent,
  render,
} from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';

import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { Snackbar, SnackbarProps } from './Snackbar';

jest.mock('react-native/Libraries/Components/Touchable/TouchableHighlight',
  () => 'TouchableHighlight');

const defaultProps = {
  message: 'A short snackbar message',
  onClose: jest.fn(),
  open: true,
  type: 'standard',
} as Omit<SnackbarProps, 'theme'>;

const ProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

const setup = (propOverrides?: Partial<SnackbarProps>) => {
  const props = { ...defaultProps, ...propOverrides };

  const result = render(<Snackbar {...props} />, { wrapper: ProviderWrapper });

  return {
    props,
    result,
  };
};

// eslint-disable-next-line max-statements
describe('Snackbar', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    jest.useRealTimers();
  });

  it('message is presented correctly', () => {
    const expectedMessage = 'A snackbar message';

    const { result } = setup({ message: expectedMessage });
    const element = result.queryByTestId('natds-snackbar-text');

    expect(element).toHaveTextContent(expectedMessage);
  });

  describe('when setting a type', () => {
    it('displays a warning type correctly', () => {
      const type = 'warning';

      const { result } = setup({ type });
      const wrapperElement = result.queryByTestId('natds-snackbar-wrapper');
      const textElement = result.queryByTestId('natds-snackbar-text');

      expect(wrapperElement).toHaveStyle({ backgroundColor: theme.color.warning });
      expect(textElement).toHaveStyle({ color: theme.color.onWarning });
    });

    it('displays a error type correctly', () => {
      const type = 'error';

      const { result } = setup({ type });
      const wrapperElement = result.queryByTestId('natds-snackbar-wrapper');
      const textElement = result.queryByTestId('natds-snackbar-text');

      expect(wrapperElement).toHaveStyle({ backgroundColor: theme.color.alert });
      expect(textElement).toHaveStyle({ color: theme.color.onAlert });
    });

    it('displays a success type correctly', () => {
      const type = 'success';

      const { result } = setup({ type });
      const wrapperElement = result.queryByTestId('natds-snackbar-wrapper');
      const textElement = result.queryByTestId('natds-snackbar-text');

      expect(wrapperElement).toHaveStyle({ backgroundColor: theme.color.success });
      expect(textElement).toHaveStyle({ color: theme.color.onSuccess });
    });

    it('displays a info type correctly', () => {
      const type = 'info';

      const { result } = setup({ type });
      const wrapperElement = result.queryByTestId('natds-snackbar-wrapper');
      const textElement = result.queryByTestId('natds-snackbar-text');

      expect(wrapperElement).toHaveStyle({ backgroundColor: theme.color.link });
      expect(textElement).toHaveStyle({ color: theme.color.onLink });
    });

    it('displays a standard type correctly', () => {
      const type = 'standard';

      const { result } = setup({ type });
      const wrapperElement = result.queryByTestId('natds-snackbar-wrapper');
      const textElement = result.queryByTestId('natds-snackbar-text');

      expect(wrapperElement).toHaveStyle({ backgroundColor: theme.color.onSurface });
      expect(textElement).toHaveStyle({ color: theme.color.surface });
    });
  });

  describe('when past a certain period of time', () => {
    it('hides snackbar automatically', () => {
      const autoHideDuration = 5000;

      const { props } = setup({ autoHideDuration });

      act(() => {
        jest.advanceTimersByTime(autoHideDuration);
      });

      expect(props.onClose).toHaveBeenCalled();
    });
  });

  describe('when setting a button text', () => {
    it('displays correctly', () => {
      const expectedButtonText = 'OK';

      const { result } = setup({ buttonText: expectedButtonText });
      const element = result.queryByTestId('natds-snackbar-button');

      expect(element).not.toBeNull();
      expect(element).toHaveTextContent(expectedButtonText);
    });

    describe('when pressing it', () => {
      it('dismisses the snackbar', () => {
        const expectedButtonText = 'OK';

        const { props, result } = setup({ buttonText: expectedButtonText });
        const element = result.getByTestId('natds-snackbar-button');

        fireEvent.press(element);
        expect(props.onClose).toHaveBeenCalled();
      });
    });
  });

  describe('when not setting a button text', () => {
    it('displays correctly', () => {
      const { result } = setup();
      const element = result.queryByTestId('natds-snackbar-button');

      expect(element).toBeNull();
    });
  });

  describe('when setting to be open', () => {
    it('displays correctly', () => {
      const { result } = setup({ open: true });
      const element = result.queryByTestId('natds-snackbar-wrapper');

      expect(element).not.toBeNull();
    });

    describe('when setting it back to be closed', () => {
      it('displays correctly', () => {
        const { props, result } = setup({ open: true });

        result.rerender(<Snackbar {...props} open={false} />);
        // eslint-disable-next-line max-nested-callbacks
        act(() => {
          jest.advanceTimersByTime(195);
        });
        const element = result.queryByTestId('natds-snackbar-wrapper');

        expect(element).toBeNull();
      });
    });
  });

  describe('when setting to be closed', () => {
    it('displays correctly', () => {
      const { result } = setup({ open: false });
      const element = result.queryByTestId('natds-snackbar-wrapper');

      expect(element).toBeNull();
    });
  });
});
