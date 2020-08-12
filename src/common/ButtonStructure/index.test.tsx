import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { ThemeProvider } from 'styled-components/native';
import { Text } from 'react-native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import ButtonStructure, { IButtonStructure, AccessibilityRole } from '.';

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableHighlight',
  () => 'TouchableHighlight',
);

jest.mock('../../common/themeSelectors', () => (
  {
    getButtonPropsBySize: () => ({ background: '#AEAEAE' }),
    getColorHighEmphasis: () => '#FAF3E3',
    getColorLowEmphasis: () => '#FEEEEF',
    getColorMediumEmphasis: () => '#FAFAEA',
    getColorOnPrimary: () => '#F4F4',
    getColorPrimary: () => '#FFFFFF',
    getColorPrimaryLight: () => '#BABABA',
    getOpacity10: () => 0.8,
    getRadiusBySize: () => 42,
    getShadowBySize: () => ({ shadowColor: '#AEAEAE' }),
}));

const renderButton = (fn, props: Omit<IButtonStructure, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <ButtonStructure {...props} />
  </ThemeProvider>,
));

const defaultProps = {
  accessibilityHint: 'button',
  accessibilityLabel: 'button-strucuture',
  accessibilityRole: 'button' as AccessibilityRole,
  borderRadius: 10,
  disabled: false,
  onPress: () => {},
  testID: 'button-structure',
  underlayColor: '#fff',
  type: 'random-type',
  styles: {},
  children: <Text>LABEL BUTTON</Text>,
};

describe('ButtonStructure component', () => {
  it('should render button with default props', () => {
    const { queryByTestId } = renderButton(render, defaultProps);

    expect(queryByTestId('button-structure')?.props).toHaveProperty('type', 'random-type');
    expect(queryByTestId('button-structure')?.props).toHaveProperty('disabled', false);
    expect(queryByTestId('button-structure')).toHaveTextContent('LABEL BUTTON');
  });
});
