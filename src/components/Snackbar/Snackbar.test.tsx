import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {
  act,
  cleanup,
  fireEvent,
  render,
  wait,
} from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';

import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { Snackbar, SnackbarProps } from './Snackbar';

jest.mock('react-native/Libraries/Components/Touchable/TouchableHighlight',
  () => 'TouchableHighlight');

const defaultProps = {
  message: 'lorem ipsum',
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

  const result = render(<Snackbar {...props}/>, { wrapper: ProviderWrapper });

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
    // given
    const expectedMessage = 'A snackbar message';

    // when
    const { result } = setup({ message: expectedMessage });
    const element = result.queryByTestId('natds-snackbar-text');

    // then
    expect(element).toHaveTextContent(expectedMessage);
  });

  describe('when setting a type', () => {
    it('displays a warning type correctly', () => {
      // given
      const type = 'warning';

      // when
      const { result } = setup({ type });
      const wrapperElement = result.queryByTestId('natds-snackbar-wrapper');
      const textElement = result.queryByTestId('natds-snackbar-text');

      // then
      expect(wrapperElement).toHaveStyle({ backgroundColor: theme.colorTokens.colorWarning });
      expect(textElement).toHaveStyle({ color: theme.colorTokens.colorOnWarning });
    });

    it('displays a error type correctly', () => {
      // given
      const type = 'error';

      // when
      const { result } = setup({ type });
      const wrapperElement = result.queryByTestId('natds-snackbar-wrapper');
      const textElement = result.queryByTestId('natds-snackbar-text');

      // then
      expect(wrapperElement).toHaveStyle({ backgroundColor: theme.colorTokens.colorAlert });
      expect(textElement).toHaveStyle({ color: theme.colorTokens.colorOnAlert });
    });

    it('displays a success type correctly', () => {
      // given
      const type = 'success';

      // when
      const { result } = setup({ type });
      const wrapperElement = result.queryByTestId('natds-snackbar-wrapper');
      const textElement = result.queryByTestId('natds-snackbar-text');

      // then
      expect(wrapperElement).toHaveStyle({ backgroundColor: theme.colorTokens.colorSuccess });
      expect(textElement).toHaveStyle({ color: theme.colorTokens.colorOnSuccess });
    });

    it('displays a info type correctly', () => {
      // given
      const type = 'info';

      // when
      const { result } = setup({ type });
      const wrapperElement = result.queryByTestId('natds-snackbar-wrapper');
      const textElement = result.queryByTestId('natds-snackbar-text');

      // then
      expect(wrapperElement).toHaveStyle({ backgroundColor: theme.colorTokens.colorLink });
      expect(textElement).toHaveStyle({ color: theme.colorTokens.colorOnLink });
    });

    it('displays a standard type correctly', () => {
      // given
      const type = 'standard';

      // when
      const { result } = setup({ type });
      const wrapperElement = result.queryByTestId('natds-snackbar-wrapper');
      const textElement = result.queryByTestId('natds-snackbar-text');

      // then
      expect(wrapperElement).toHaveStyle({ backgroundColor: theme.colorTokens.colorOnSurface });
      expect(textElement).toHaveStyle({ color: theme.colorTokens.colorSurface });
    });
  });

  describe('when past a certain period of time', () => {
    it('hides snackbar automatically', () => {
      // given
      const autoHideDuration = 5000;

      // when
      const { props } = setup({ autoHideDuration });

      act(() => {
        jest.advanceTimersByTime(autoHideDuration);
      });

      // then
      expect(props.onClose).toHaveBeenCalled();
    });
  });

  describe('when setting a button text', () => {
    it('displays correctly', () => {
      // given
      const expectedButtonText = 'OK';

      // when
      const { result } = setup({ buttonText: expectedButtonText });
      const element = result.queryByTestId('natds-snackbar-button');

      // then
      expect(element).not.toBeNull();
      expect(element).toHaveTextContent(expectedButtonText);
    });

    describe('when pressing it', () => {
      it('dismisses the snackbar', async () => {
        // given
        const expectedButtonText = 'OK';

        // when
        const { props, result } = setup({ buttonText: expectedButtonText });
        const element = result.getByTestId('natds-snackbar-button');

        fireEvent.press(element);

        // eslint-disable-next-line max-nested-callbacks
        await wait(() => {
          // then
          expect(props.onClose).toHaveBeenCalled();
        });
      });
    });
  });

  describe('when not setting a button text', () => {
    it('displays correctly', () => {
      // given
      // when
      const { result } = setup();
      const element = result.queryByTestId('natds-snackbar-button');

      // then
      expect(element).toBeNull();
    });
  });

  describe('when setting to be open', () => {
    it('displays correctly', () => {
      // given
      // when
      const { result } = setup({ open: true });
      const element = result.queryByTestId('natds-snackbar-wrapper');

      // then
      expect(element).not.toBeNull();
    });

    describe('when setting it back to be closed', () => {
      it('displays correctly', () => {
        // given
        const { props, result } = setup({ open: true });

        // when
        result.rerender(<Snackbar {...props} open={false} />);
        // eslint-disable-next-line max-nested-callbacks
        act(() => {
          // taking into account animation duration
          jest.advanceTimersByTime(195);
        });
        const element = result.queryByTestId('natds-snackbar-wrapper');

        // then
        expect(element).toBeNull();
      });
    });
  });

  describe('when setting to be closed', () => {
    it('displays correctly', () => {
      // given
      // when
      const { result } = setup({ open: false });
      const element = result.queryByTestId('natds-snackbar-wrapper');

      // then
      expect(element).toBeNull();
    });
  });
});
