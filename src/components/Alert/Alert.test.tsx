import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { Alert } from '.';
import { AlertProps } from './Alert';
import { Types, Variants } from './Alert.styles';

jest.mock('../../common/themeSelectors', () => (
  {
    getColorOnPrimary: () => '#333333',
    getRadiusBySize: () => 8,
    getSpacingSmall: () => 16,
    getSpacingTiny: () => 8,
  }));

const renderAlert = (fn, props: Omit<AlertProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <Alert {...props} />
  </ThemeProvider>,
));

describe('Alert component', () => {
  it('Should render alert with default props', () => {
    const defaultProps = ({
      message: 'Lorem ipsum dolor',
      testID: 'alert',
      title: 'title',
      type: 'info' as Types,
      variant: 'standard' as Variants,
    });

    const wrapper = renderAlert(renderer.create, defaultProps);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Should change icon when type changes', () => {
    const props = ({
      message: 'Lorem ipsum dolor',
      title: 'title',
      type: 'success' as Types,
      variant: 'standard' as Variants,
    });

    const { queryByTestId } = renderAlert(render, props);
    const alertIconProp = queryByTestId('alert-icon')?.props?.children?.props;

    expect(alertIconProp).toHaveProperty('name', 'outlined-alert-check');
  });

  it('Should change alert background color when type changes', () => {
    const props = ({
      message: 'Lorem ipsum dolor',
      title: 'title',
      type: 'warning' as Types,
      variant: 'standard' as Variants,
    });

    const { queryByTestId } = renderAlert(render, props);
    const alertBackgroundColor = queryByTestId('alert')?.props?.style[0];

    expect(alertBackgroundColor).toHaveProperty('backgroundColor', '#FBF2DA');
  });

  it('Should hide title component when not informed', () => {
    const props = ({
      message: 'Lorem ipsum dolor',
      type: 'info' as Types,
      variant: 'standard' as Variants,
    });

    const { queryByTestId } = renderAlert(render, props);
    const alertTitle = queryByTestId('alert-content')?.props?.children[0];

    expect(alertTitle).toBeUndefined();
  });
});
