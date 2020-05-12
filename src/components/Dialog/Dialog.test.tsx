import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { Dialog, DialogProps } from './Dialog';

const renderDialog = (fn, props) => (fn(
  <ThemeProvider theme={theme}>
    <Dialog {...props} />
  </ThemeProvider>,
));

describe('Dialog component', () => {
  it('Should render a sample dialog with a title', () => {
    const props: Omit<DialogProps, 'theme'> = {
      title: 'title',
      type: 'simple',
    };
    const { queryByTestId } = renderDialog(render, props);

    expect(queryByTestId('dialog')).toHaveTextContent('title');
  });


  it('Should render a alert dialog with text content', () => {
    const props: Omit<DialogProps, 'theme'> = {
      contentText: 'text',
      type: 'alert',
    };
    const { queryByTestId } = renderDialog(render, props);

    expect(queryByTestId('dialog')).toHaveTextContent('text');
  });
});
