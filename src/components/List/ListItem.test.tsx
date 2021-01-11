import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';

import { ListItem, ListItemProps } from './ListItem';

jest.mock('../../common/themeSelectors', () => ({
  getColorBackground: () => '#FFFFFF',
  getColorByName: () => '#FFFFFF',
  getColorHighEmphasis: () => '#FAF3E3',
  getColorLowEmphasis: () => '#FEEEEF',
  getColorPrimary: () => '#FFFFFF',
  getSize: () => 50,
  getSpacingTiny: () => 10,
}));

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => 'TouchableOpacity',
);

const renderList = (fn, props: ListItemProps) => (
  fn(
    <ThemeProvider theme={theme}>
      <ListItem {...props} />
    </ThemeProvider>,
  )
);

const props: ListItemProps = {
  active: false,
  divider: true,
  hideIconLeft: true,
  hideIconRight: true,
  onPress: jest.fn(),
  theme,
  title: 'Test',
};

describe('ListItem component', () => {
  it('Should render ListItem component correctly', () => {
    const listItem = renderList(render, props).asJSON();

    expect(listItem).toMatchSnapshot('ListItem snapshot');
  });

  it('Should throw exception when title prop is not provided', () => {
    expect(() => renderList(render, {
      ...props,
      title: '',
    })).toThrow(
      'Title should not be an empty string',
    );
  });

  it('Should render ListItem component with icon', () => {
    const { getByTestId } = renderList(render, {
      ...props,
      hideIconLeft: false,
      iconLeft: 'filled-action-add',
    });
    const iconListItem = getByTestId('listId-icon-left');

    expect(iconListItem).toBeTruthy();
  });

  it('Should call the given onPress function', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = renderList(render, {
      ...props,
      onPress: onPressMock,
    });
    const listItem = getByTestId('listId-title');

    fireEvent.press(listItem);

    expect(onPressMock).toHaveBeenCalled();
  });

  it('Should not call the given onPress function when list is disabled', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = renderList(render, {
      ...props,
      disabled: true,
      onPress: onPressMock,
    });
    const listItem = getByTestId('listId-title');

    fireEvent.press(listItem);

    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('Should call the given icon onPress function', () => {
    const onPressLeftMock = jest.fn();

    const { getByTestId } = renderList(render, {
      ...props,
      hideIconLeft: false,
      iconLeft: 'filled-action-add',
      onPressLeft: onPressLeftMock,
    });
    const listItem = getByTestId('listId-icon-left');

    fireEvent.press(listItem);

    expect(onPressLeftMock).toHaveBeenCalled();
  });
});
