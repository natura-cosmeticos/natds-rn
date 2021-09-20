import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import { Text } from 'react-native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, DialogHeader, DialogBody,
} from '.';
import { renderWithTheme } from '../../../test/testHelpers';
import DialogFooter from './DialogFooter';

const renderOldDialog = () => (renderer.create(
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
    const dialog = renderOldDialog().toJSON();

    expect(dialog).toMatchSnapshot();
  });

  it('Should render a new dialog with header, body and actions', () => {
    const { getByTestId, toJSON } = renderWithTheme(
      <Dialog visible={true} testID='dialog' >
        <DialogHeader title='Title' />
        <DialogBody>
          content
        </DialogBody>
        <DialogActions>
          actions
        </DialogActions>
      </Dialog>,
    );
    const dialog = getByTestId('dialog');

    expect(dialog).toHaveTextContent('content');
    expect(dialog).toHaveTextContent('actions');
    expect(toJSON).toMatchSnapshot();
  });

  it('Should render a dialog passing alignment action', () => {
    const { getByTestId, toJSON } = renderWithTheme(<DialogFooter testID='dialog-footer' actionsAlignment='stacked' >something...</DialogFooter>);

    expect(getByTestId('dialog-footer')).toHaveProp('actionsAlignment', 'stacked');
    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render a dialog body with divider', () => {
    const { toJSON } = renderWithTheme(<DialogBody testID='dialog-body' divider >something...</DialogBody>);

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render a dialog header with title and optional test id', () => {
    const { getByTestId, toJSON } = renderWithTheme(<DialogHeader testID='dialog-header' title='something...' />);

    expect(getByTestId('dialog-header')).toHaveTextContent('something...');
    expect(toJSON()).toMatchSnapshot();
  });
});
