import React from 'react'
import { fireEvent } from '@testing-library/react-native'

import { renderWithTheme } from '../../../test/testHelpers'
import { Rating } from './Rating'
import { RatingBase } from './RatingBase'
import {
  isActive, isDisabled, isFilled, renderTimes
} from '.'
import {
  RatingCounterProps, RatingInputProps, RatingReadOnlyProps
} from './Rating.types'

jest.mock('../Icon/Icon')
jest.mock('../../common/themeSelectors')

describe('Rating Variants', () => {
  describe('Counter Variant', () => {
    it('should render with counter variant', () => {
      const { getByTestId, toJSON, getAllByTestId } = renderWithTheme(<Rating variant="counter" label="placeholder" />)

      expect(getAllByTestId(/-icon/).length).toBe(1)
      expect(getByTestId('ds-rating')?.props).toHaveProperty('variant', 'counter')
      expect(getByTestId('ds-rating')).toHaveStyle({ alignItems: 'center', flexDirection: 'row' })
      expect(toJSON()).toMatchSnapshot()
    })

    it('should render with label aligned on right', () => {
      const { getByTestId } = renderWithTheme(<Rating variant="counter" align="right" label="placeholder" />)

      expect(getByTestId('ds-rating')).toHaveStyle({ alignItems: 'center', flexDirection: 'row-reverse' })
    })

    it('should render with label aligned on left', () => {
      const { getByTestId } = renderWithTheme(<Rating variant="counter" align="left" label="placeholder" />)

      expect(getByTestId('ds-rating-content')).toHaveStyle({ marginRight: 4 })
    })

    it('should render with another size', () => {
      const { getByTestId } = renderWithTheme(<Rating variant="counter" size="standard" label="placeholder" />)

      expect(getByTestId('ds-rating-1-icon')?.props).toHaveProperty('size', 'standard')
    })
  })

  describe('Input Variant', () => {
    it('should render with input variant', () => {
      const { getByTestId, toJSON, getAllByTestId } = renderWithTheme(<Rating variant="input" label="placeholder" onPress={() => ({})} />)

      expect(getAllByTestId(/-icon/).length).toBe(5)
      expect(getByTestId('ds-rating')?.props).toHaveProperty('variant', 'input')
      expect(getByTestId('ds-rating')).toHaveStyle({ flexDirection: 'column' })
      expect(getByTestId('ds-rating-label')).toBeTruthy()
      expect(toJSON()).toMatchSnapshot()
    })

    it('should call onPress when item is pressed', () => {
      const onPressMock = jest.fn()

      const { getByTestId } = renderWithTheme(<Rating variant="input" label="placeholder" onPress={onPressMock} />)

      fireEvent.press(getByTestId('ds-rating-1-button'))

      expect(onPressMock).toHaveBeenCalled()
    })

    it('should render one yellow start when rate is equal one', () => {
      const { getByTestId } = renderWithTheme(<Rating testID="rating" variant="input" rate={1} label="placeholder" onPress={() => ({})} />)

      expect(getByTestId('rating-1-icon')).toHaveStyle({ color: '#F8B546' })
    })

    it('should render label when variant is input', () => {
      const { getByTestId } = renderWithTheme(<Rating variant="input" label="placeholder" onPress={() => ({})} />)

      expect(getByTestId('ds-rating-label')).toBeTruthy()
    })

    it('should not call onPress when disabled', () => {
      const onPressMock = jest.fn()

      const { getByTestId } = renderWithTheme(<Rating variant="input" disabled label="placeholder" onPress={onPressMock} />)

      fireEvent.press(getByTestId('ds-rating-1-button'))

      expect(onPressMock).not.toHaveBeenCalled()
    })
  })

  describe('ReadOnly Variant', () => {
    it('should render with read-only variant', () => {
      const { toJSON, getByTestId } = renderWithTheme(<Rating variant="read-only" />)

      expect(getByTestId('ds-rating')?.props).toHaveProperty('variant', 'read-only')
      expect(toJSON()).toMatchSnapshot()
    })

    it('should render three yellow stars and two gray starts', () => {
      const { getByTestId } = renderWithTheme(<Rating rate={3} variant="read-only" />)

      expect(getByTestId('ds-rating-3-icon')).toHaveStyle({ color: '#F8B546' })
      expect(getByTestId('ds-rating-4-icon')).toHaveStyle({ color: '#737373' })
    })
  })

  describe('RatingBase component', () => {
    it('should render a base component with medium size', () => {
      const { toJSON } = renderWithTheme(<RatingBase size="medium" />)

      expect(toJSON()).toMatchSnapshot()
    })

    it('should not call onPress when isclickable props is false', () => {
      const onPressMock = jest.fn()

      const { getByTestId } = renderWithTheme(<RatingBase testID="base" size="medium" isClickable={false} onPress={onPressMock} />)

      fireEvent.press(getByTestId('base-button'))

      expect(onPressMock).not.toHaveBeenCalled()
    })

    it('should not call onPress when disabled', () => {
      const onPressMock = jest.fn()

      const { getByTestId } = renderWithTheme(<RatingBase testID="base" size="medium" disabled onPress={onPressMock} />)

      fireEvent.press(getByTestId('base-button'))

      expect(onPressMock).not.toHaveBeenCalled()
    })

    it('should not render a filled item in component row', () => {
      const { getByTestId } = renderWithTheme(<RatingBase testID="base" size="medium" iconFilled={false} />)

      expect(getByTestId('base-icon')?.props).toHaveProperty('name', 'outlined-action-rating')
    })

    it('should not render a active item in component row', () => {
      const { getByTestId } = renderWithTheme(<RatingBase testID="base" size="medium" iconActive={false} />)

      expect(getByTestId('base-icon')?.props).toHaveProperty('name', 'filled-action-rating')
      expect(getByTestId('base-icon')).toHaveStyle({ color: '#737373' })
    })
  })

  describe('Rating external methods', () => {
    it('should return only one item in row when variant is counter', () => {
      const defaultProps: RatingCounterProps = {
        label: 'placeholder',
        variant: 'counter'
      }

      const result = renderTimes(defaultProps)

      expect(result).toBe(1)
    })

    it('should return five itens in row when variant is different than counter', () => {
      const props: RatingInputProps = {
        onPress: () => ({}),
        variant: 'input'
      }

      const result = renderTimes(props)

      expect(result).toBe(5)
    })

    it('should return true when variant is different than input', () => {
      const props: RatingCounterProps = {
        label: 'placeholder',
        variant: 'counter'
      }

      const result = isFilled(0, props)

      expect(result).toBe(true)
    })

    it('should return true when variant is input with rate equal or higher than item index', () => {
      const props: RatingInputProps = {
        onPress: () => ({}),
        rate: 2,
        variant: 'input'
      }

      const result = isFilled(0, props)

      expect(result).toBe(true)
    })

    it('should return disabled prop value when variant is input', () => {
      const props: RatingInputProps = {
        disabled: false,
        onPress: () => ({}),
        rate: 2,
        variant: 'input'
      }

      const result = isDisabled(props)

      expect(result).toBe(false)
    })

    it('should return active equal true when variant is counter', () => {
      const props: RatingCounterProps = {
        label: 'placeholder',
        variant: 'counter'
      }

      const result = isActive(0, props)

      expect(result).toBe(true)
    })

    it('should return active true when variant is different than counter with rate equal or higher than item index', () => {
      const props: RatingReadOnlyProps = {
        rate: 1,
        variant: 'read-only'
      }

      const result = isActive(0, props)

      expect(result).toBe(true)
    })
  })
})
