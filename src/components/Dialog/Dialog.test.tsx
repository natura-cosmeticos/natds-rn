import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';
import { ThemeProvider } from 'styled-components/native';

import { Text } from 'react-native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from './Dialog';

const renderDialog = () => (renderer.create(
  <ThemeProvider theme={theme}>
     <Dialog visible={true}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            content
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Text>
            actions
          </Text>
        </DialogActions>
      </Dialog>
  </ThemeProvider>,
));

describe('Dialog component', () => {
  it('Should render a dialog with title, content and actions', () => {
    const dialog = renderDialog().toJSON();

    expect(dialog).toMatchSnapshot();
  });
});
