import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { fireEvent, render } from '@testing-library/react-native'
import renderer from 'react-test-renderer'
import theme from '../../common/themeSelectors/theme/mock-theme.json'
import { RadioButton, RadioButtonProps } from './RadioButton'

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity'
)

const renderRadioButton = (fn, props?: Omit<RadioButtonProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <RadioButton {...props} />
  </ThemeProvider>
))

describe('RadioButton component', () => {
  it('should render radio button correctly', () => {
    const radioButton = renderRadioButton(renderer.create).toJSON()

    expect(radioButton).toMatchSnapshot()
  })

  it('should render radio button selected correctly', () => {
    const radioButton = renderRadioButton(renderer.create, { selected: true }).toJSON()

    expect(radioButton).toMatchSnapshot()
  })

  it('should render radio button with label correctly', () => {
    const radioButton = renderRadioButton(renderer.create, { label: 'My Label' }).toJSON()

    expect(radioButton).toMatchSnapshot()
  })

  it('should render radio button selected but disabled correctly', () => {
    const radioButton = renderRadioButton(renderer.create, { disabled: true }).toJSON()

    expect(radioButton).toMatchSnapshot()
  })

  it('should render radio button selected but disabled with label correctly', () => {
    const radioButton = renderRadioButton(renderer.create, { disabled: true, label: 'My Label' }).toJSON()

    expect(radioButton).toMatchSnapshot()
  })

  it('should call the onPress function when the user touches the radio button', () => {
    const onPress = jest.fn()
    const { queryByTestId } = renderRadioButton(render, {
      onPress,
      value: 'radio-button'
    })

    const radioButton = queryByTestId('radio-button')

    fireEvent.press(radioButton)

    expect(onPress).toHaveBeenCalledWith('radio-button')
  })

  it('should call the onPress function when the user touches the radio button label', () => {
    const onPress = jest.fn()
    const { queryByTestId } = renderRadioButton(render, {
      label: 'My label',
      onPress,
      value: 'radio-button-label'
    })

    const label = queryByTestId('radio-button-label')

    fireEvent.press(label)

    expect(onPress).toHaveBeenCalledWith('radio-button-label')
  })

  it('should render circle inside radio when selected is true', () => {
    const onPress = jest.fn()
    const { queryByTestId } = renderRadioButton(render, {
      onPress,
      selected: true,
      value: 'radio-button'
    })

    const radioButtonCircle = queryByTestId('radio-button-circle-selected')

    expect(radioButtonCircle).not.toBeNull()
  })

  it('should render radio inside label container when label is different from null/undefined', () => {
    const onPress = jest.fn()
    const { queryByTestId } = renderRadioButton(render, {
      label: 'My Label',
      onPress,
      value: 'radio-button'
    })

    const radioButtonLabel = queryByTestId('radio-button-label')

    expect(radioButtonLabel).not.toBeNull()
  })
})
