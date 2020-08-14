import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import theme from '../../common/themeSelectors/theme/mock-theme.json';
import {
  Icon,
  IconProps,
  IconColors,
} from './Icon';

const renderIcon = (fn, props: Omit<IconProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <Icon {...props} />
  </ThemeProvider>,
));

const sampleNames = [
  'filled-action-add',
  'outlined-action-micrec',
  'outlined-content-wellness',
  'outlined-finance-bank',
];

describe('Icon component', () => {
  it('should render component with all possible icons', () => {
    const props = { color: 'default' as IconColors };

    sampleNames.forEach((name) => {
      const wrapper = renderIcon(renderer.create, { name, ...props });

      expect(wrapper.toJSON()).toMatchSnapshot(`Icon component - name: ${name}`);
    });
  });

  it('should render component with default icon', () => {
    const props = { color: 'default' as IconColors };

    const wrapper = renderIcon(renderer.create, props);

    expect(wrapper.toJSON()).toMatchSnapshot('Icon component - name: default');
  });
});
