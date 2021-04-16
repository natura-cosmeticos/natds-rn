import { IconName } from '@naturacosmeticos/natds-icons';
import React from 'react';
import { checkIconName, Icon } from './Icon';
import { renderWithTheme } from '../../../test/testHelpers';
import { IconProps } from './Icon.types';

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
    const { queryByTestId, toJSON } = renderIcon({
      accessibilityRole: 'imagebutton',
      name: 'outlined-finance-bank',
    });

    expect(toJSON()).toMatchSnapshot('Icon component - name: outlined-finance-bank');
    expect(queryByTestId('natds-icon')?.props).toHaveProperty('accessibilityRole', 'imagebutton');
  });

  it('should render deafult icon if the icon name is incorrect', () => {
    const defaultIconName = 'outlined-default-mockup';

    const anyIncorrectIconName = checkIconName('incorrect-icon-name' as IconName);
    const expectedIconName = checkIconName(defaultIconName);

    expect(anyIncorrectIconName).toBe(expectedIconName);
  });

  /* eslint-disable-next-line mocha/no-setup-in-describe */
  it.each(sampleNames)('should render correctly when icon is %p', (name) => {
    const { toJSON } = renderIcon({ name });

    expect(toJSON()).toMatchSnapshot(`Icon component - name: ${name}`);
  });
});
