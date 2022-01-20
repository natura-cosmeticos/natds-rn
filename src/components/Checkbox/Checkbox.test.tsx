import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import { Checkbox } from './Checkbox'
import { renderWithTheme } from '../../../test/testHelpers'

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity'
)

describe('Checkbox component', () => {
  describe('render', () => {
    it('should render checkbox correctly', () => {
      const { toJSON } = renderWithTheme(<Checkbox />)

      expect(toJSON()).toMatchSnapshot()
    })

    it('should render checkbox selected correctly', () => {
      const { toJSON } = renderWithTheme(<Checkbox selected />)

      expect(toJSON()).toMatchSnapshot()
    })

    it('should render checkbox indeterminate selected correctly', () => {
      const { toJSON } = renderWithTheme(<Checkbox indeterminate selected />)

      expect(toJSON()).toMatchSnapshot()
    })

    it('should render checkbox with label correctly', () => {
      const { getByTestId } = renderWithTheme(<Checkbox label="testing-label" />)

      expect(getByTestId('checkbox-label')).toHaveTextContent('testing-label')
    })

    it('should render checkbox disabled correctly', () => {
      const { toJSON } = renderWithTheme(<Checkbox disabled />)

      expect(toJSON()).toMatchSnapshot()
    })

    it('should render checkbox selected but disabled correctly', () => {
      const { toJSON } = renderWithTheme(<Checkbox disabled selected />)

      expect(toJSON()).toMatchSnapshot()
    })

    it('should render checkbox indeterminate selected but disabled correctly', () => {
      const { toJSON } = renderWithTheme(<Checkbox disabled selected />)

      expect(toJSON()).toMatchSnapshot()
    })

    it('should render icon inside box when selected is true', () => {
      const { getByTestId } = renderWithTheme(<Checkbox selected />)

      expect(getByTestId('natds-icon')).toBeTruthy()
    })
  })

  describe('actions', () => {
    it('should call the onPress function when the user touches the checkbox', () => {
      const onPress = jest.fn()
      const { getByTestId } = renderWithTheme(<Checkbox onPress={onPress} value="testing-value" />)

      const checkbox = getByTestId('checkbox')

      fireEvent.press(checkbox)

      expect(onPress).toHaveBeenCalledWith('testing-value')
    })

    it('should call the onPress function when the user touches the checkbox label', () => {
      const onPress = jest.fn()
      const { getByTestId } = renderWithTheme(<Checkbox onPress={onPress} value="testing-value" label="testing-label" />)

      const checkboxLabel = getByTestId('checkbox-label')

      fireEvent.press(checkboxLabel)

      expect(onPress).toHaveBeenCalledWith('testing-value')
    })
  })
})
