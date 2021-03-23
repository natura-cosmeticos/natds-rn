import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { Link, LinkProps } from './Link';

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity',
);

const link = (props: Omit<LinkProps, 'theme'>) => (
  <ThemeProvider theme={theme}>
    <Link {...props}>{props.children}</Link>
  </ThemeProvider>
);

const defaultProps = {
  children: 'something',
  onPress: jest.fn(),
  testID: 'link',
};

describe('Link component', () => {
  it('should render the correct color token', () => {
    const { queryByTestId } = render(link(defaultProps));

    expect(queryByTestId('link')).toHaveStyle({ color: '#227bbd' });
  });
  it('should render with underline style', () => {
    const { queryByTestId } = render(
      link({ ...defaultProps, type: 'underline' }),
    );

    expect(queryByTestId('link')).toHaveStyle({
      textDecorationLine: 'underline',
    });
  });
  it('should render without underline style as default', () => {
    const { queryByTestId } = render(link(defaultProps));

    expect(queryByTestId('link')).toHaveStyle({
      textDecorationLine: 'none',
    });
  });
  it('should call the given onPress function', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(link({ ...defaultProps, onPress }));

    fireEvent.press(getByTestId('link'));

    expect(onPress).toHaveBeenCalled();
  });
  it('should take a snapshot', () => {
    const component = render(link(defaultProps)).toJSON();

    expect(component).toMatchSnapshot();
  });
});
