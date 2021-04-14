import { IconName } from '@naturacosmeticos/natds-icons';
import React from 'react';
import {
  Icon,
  IconProps,
} from './Icon';
import { renderWithTheme } from '../../../test/testHelpers';

jest.mock('../../common/themeSelectors', () => (
  {
    getColorByName: () => '#BBBBBB',
    getSize: () => 24,
  }));

const renderIcon = (props?: Partial<IconProps>) => (
  renderWithTheme(<Icon {...props} />)
);

const sampleNames: Array<IconName> = [
  'filled-action-add',
  'outlined-action-micrec',
  'outlined-content-wellness',
  'outlined-finance-bank',
];

describe('Icon component', () => {
  it('should render component with default props', () => {
    const { toJSON } = renderIcon();

    expect(toJSON()).toMatchSnapshot('Icon component - name: outlined-default-mockup');
  });

  it('should render component with given props', () => {
    const { toJSON } = renderIcon();

    expect(toJSON()).toMatchSnapshot('Icon component - name: outlined-default-mockup');
  });

  /* eslint-disable-next-line mocha/no-setup-in-describe */
  it.each(sampleNames)('should render correctly when icon is %p', (name) => {
    const { toJSON } = renderIcon({ name });

    expect(toJSON()).toMatchSnapshot(`Icon component - name: ${name}`);
  });
});
