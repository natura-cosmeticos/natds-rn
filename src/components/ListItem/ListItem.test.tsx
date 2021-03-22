/* eslint-disable id-length */
import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { Text, LayoutChangeEvent } from 'react-native';
import { fireEvent } from '@testing-library/react-native';
import { renderWithTheme } from '../../../test/testHelpers';
import { ListItem, ListItemProps, getRippleSize } from './ListItem';

jest.mock('../TouchableRipple/TouchableRipple');

const renderList = (props?: Omit<ListItemProps, 'children'>) => (
  renderWithTheme(
    <ListItem {...props}>
      <Text>Text</Text>
    </ListItem>,
  )
);

describe('ListItem component', () => {
  it('Should render ListItem component correctly', () => {
    const { toJSON } = renderList();

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render ListItem with state selected', () => {
    const { toJSON } = renderList({ selected: true });

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render ListItem with ripple if is clickable', () => {
    const { toJSON } = renderList({ onPress: jest.fn() });

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should not render ListItem with ripple if is selected', () => {
    const { toJSON } = renderList({ onPress: jest.fn(), selected: true });

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should call the given onPress function', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderList({ onPress });

    const listItem = queryByTestId('list-item-wrapper');

    if (listItem) {
      fireEvent.press(listItem);
    }

    expect(onPress).toHaveBeenCalled();
  });
});

describe('getRippleSize', () => {
  it('Should calculate the ripple size based on the list item layout', () => {
    const setSizeMock = jest.fn();
    const event: LayoutChangeEvent = {
      nativeEvent: {
        layout: {
          height: 80,
          width: 20,
          x: 0,
          y: 0,
        },
      },
    };

    getRippleSize(event, setSizeMock);

    expect(setSizeMock).toHaveBeenCalledWith(40);
  });
});
