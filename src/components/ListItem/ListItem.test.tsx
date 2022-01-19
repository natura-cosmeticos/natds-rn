import React from 'react'
import { Text } from 'react-native'
import { fireEvent } from '@testing-library/react-native'
import { renderWithTheme } from '../../../test/testHelpers'
import { ListItem, ListItemProps } from './ListItem'

const renderList = (props?: Omit<ListItemProps, 'children'>) => (
  renderWithTheme(
    <ListItem {...props}>
      <Text>Text</Text>
    </ListItem>
  )
)

describe('ListItem component', () => {
  it('Should render ListItem component correctly', () => {
    const { toJSON } = renderList()

    expect(toJSON()).toMatchSnapshot()
  })

  it('Should render ListItem with state selected', () => {
    const { toJSON } = renderList({ selected: true })

    expect(toJSON()).toMatchSnapshot()
  })

  it('Should render ListItem with ripple if is clickable', () => {
    const { toJSON } = renderList({ onPress: jest.fn() })

    expect(toJSON()).toMatchSnapshot()
  })

  it('Should not render ListItem with ripple if is selected', () => {
    const { toJSON } = renderList({ onPress: jest.fn(), selected: true })

    expect(toJSON()).toMatchSnapshot()
  })

  it('Should call the given onPress function', () => {
    const onPress = jest.fn()
    const { queryByTestId } = renderList({ onPress })

    const listItem = queryByTestId('list-item-wrapper')

    if (listItem) {
      fireEvent.press(listItem)
    }

    expect(onPress).toHaveBeenCalled()
  })
})
