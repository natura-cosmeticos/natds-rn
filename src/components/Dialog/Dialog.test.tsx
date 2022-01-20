import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'

import { Text } from 'react-native'
import theme from '../../common/themeSelectors/theme/mock-theme.json'
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, DialogHeader
} from '.'
import { renderWithTheme } from '../../../test/testHelpers'

const renderOldDialog = () => (renderer.create(
  <ThemeProvider theme={theme}>
    <Dialog visible>
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
  </ThemeProvider>
))

describe('Dialog component', () => {
  it('Should render a dialog with title, content and actions', () => {
    const dialog = renderOldDialog().toJSON()

    expect(dialog).toMatchSnapshot()
  })

  it('Should render a new dialog with header, content and actions', () => {
    const { getByTestId, toJSON } = renderWithTheme(
      <Dialog visible testID="dialog">
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <DialogContentText>
            content
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          actions
        </DialogActions>
      </Dialog>
    )
    const dialog = getByTestId('dialog')

    expect(dialog).toHaveTextContent('content')
    expect(dialog).toHaveTextContent('actions')
    expect(toJSON).toMatchSnapshot()
  })

  it('Should render a dialog content with divider', () => {
    const content = (
      <DialogContent divider>
        <DialogContentText>
          something...
        </DialogContentText>
      </DialogContent>
    )

    const { toJSON } = renderWithTheme(content)

    expect(toJSON()).toMatchSnapshot()
  })

  it('Should render a dialog passing alignment action', () => {
    const { getByTestId, toJSON } = renderWithTheme(<DialogActions testID="dialog-actions" actionsAlignment="stacked">something...</DialogActions>)

    expect(getByTestId('dialog-actions')).toHaveProp('actionsAlignment', 'stacked')
    expect(toJSON()).toMatchSnapshot()
  })

  it('Should render a dialog header with title and optional test id', () => {
    const header = (
      <DialogHeader testID="dialog-header">
        <DialogTitle>something...</DialogTitle>
      </DialogHeader>
    )

    const { getByTestId, toJSON } = renderWithTheme(header)

    expect(getByTestId('dialog-header')).toHaveTextContent('something...')
    expect(toJSON()).toMatchSnapshot()
  })
})
