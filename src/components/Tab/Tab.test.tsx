import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { Tab } from '.';
import { TabProps } from './Tab';

jest.mock('react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity');

jest.mock('../../common/themeSelectors', () => (
  {
    getColorMediumEmphasis: () => '#777777',
    getColorOnBackground: () => '#333333',
    getColorPrimary: () => '#F4F4',
    getColorSurface: () => '#FFFFFF',
    getFont: () => 'doc robot',
    getShadowBySize: () => ({ shadowColor: '#AEAEAE' }),
    getSpacingSmall: () => 16,
  }));

const renderTab = (fn, props: Omit<TabProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <Tab {...props} />
  </ThemeProvider>,
));

const defaultProps = ({
  onChange: () => {},
  tabOptions: [
    {
      key: 'itemOne',
      label: 'Item One',
    },
    {
      key: 'itemTwo',
      label: 'Item Two',
    },
    {
      key: 'itemThree',
      label: 'Item Three',
    },
  ],
});

describe('Tab component', () => {
  it('Should call the given onChange function', () => {
    const onChangeMock = jest.fn();
    const { queryByTestId } = renderTab(render, {
      ...defaultProps,
      onChange: onChangeMock,
    });

    const secondTab = queryByTestId('tab').children[1];

    fireEvent.press(secondTab);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('Should have bottom border on the first tab as default', () => {
    const { queryByTestId } = renderTab(render, defaultProps);

    const firstTab = queryByTestId('tab').children[0];

    expect(firstTab).toHaveStyle({
      borderBottomColor: '#F4F4',
    });
  });

  it('Should add bottom border on tab item when the given tab is pressed', () => {
    const { queryByTestId } = renderTab(render, defaultProps);

    const thirdTab = queryByTestId('tab').children[2];

    fireEvent.press(thirdTab);

    expect(thirdTab).toHaveStyle({
      borderBottomColor: '#F4F4',
    });
  });

  it('Should render tab item with a uppercase text', () => {
    const { queryByTestId } = renderTab(render, defaultProps);

    const firstTab = queryByTestId('tab').children[0];

    expect(firstTab).toHaveTextContent('ITEM ONE');
  });

  it('Should render tab component without passing any type prop', () => {
    const tab = renderTab(renderer.create, defaultProps).toJSON();

    expect(tab).toMatchSnapshot();
  });
});
