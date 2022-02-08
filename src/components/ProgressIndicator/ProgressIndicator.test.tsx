import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import renderer from 'react-test-renderer'
import theme from '../../common/themeSelectors/theme/mock-theme.json'
import { ProgressIndicator } from './ProgressIndicator'
import { ProgressIndicatorProps } from './ProgressIndicator.types'

jest.useFakeTimers()

const renderProgressIndicator = (
  props?: ProgressIndicatorProps
) => renderer.create(
  <ThemeProvider theme={theme}>
    <ProgressIndicator {...props} />
  </ThemeProvider>
)

describe('ProgressIndicator component', () => {
  it('Should render progress indicator correctly', () => {
    const progressIndicator = renderProgressIndicator().toJSON()

    expect(progressIndicator).toMatchSnapshot()
  })

  it('Should render progress indicator - size standard', () => {
    const progressIndicator = renderProgressIndicator({
      size: 'standard'
    }).toJSON()

    expect(progressIndicator).toMatchSnapshot()
  })

  it('Should render progress indicator - size semi', () => {
    const progressIndicator = renderProgressIndicator({
      size: 'semi'
    }).toJSON()

    expect(progressIndicator).toMatchSnapshot()
  })

  it('Should render progress indicator - size large', () => {
    const progressIndicator = renderProgressIndicator({
      size: 'large'
    }).toJSON()

    expect(progressIndicator).toMatchSnapshot()
  })

  it('Should render progress indicator - show layer', () => {
    const progressIndicator = renderProgressIndicator({
      showLayer: true
    }).toJSON()

    expect(progressIndicator).toMatchSnapshot()
  })
})
