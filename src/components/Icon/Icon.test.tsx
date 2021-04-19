import { IconName } from '@naturacosmeticos/natds-icons';
import React from 'react';
import { checkIconName, getIconColor, Icon } from './Icon';
import { renderWithTheme } from '../../../test/testHelpers';
import { IconProps } from './Icon.types';
import { getColorByName, getColorHighEmphasis } from '../../common/themeSelectors';
import theme from '../../common/themeSelectors/theme/mock-theme.json';

jest.mock('../../common/themeSelectors', () => (
  {
    getColorByName: jest.fn().mockReturnValue('#BBBBBB'),
    getColorHighEmphasis: jest.fn().mockReturnValue('#000000'),
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
  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  /* eslint-disable-next-line mocha/no-setup-in-describe */
  it.each(sampleNames)('should render correctly when icon is %p', (name) => {
    const { toJSON } = renderIcon({ name });

    expect(toJSON()).toMatchSnapshot(`Icon component - name: ${name}`);
  });

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
});

describe('checkIconName', () => {
  it('should render deafult icon if the icon name is incorrect', () => {
    const defaultIconName = 'outlined-default-mockup';

    const anyIncorrectIconName = checkIconName('incorrect-icon-name' as IconName);
    const expectedIconName = checkIconName(defaultIconName);

    expect(anyIncorrectIconName).toBe(expectedIconName);
  });
});

describe('getIconColor', () => {
  it('should return #333333 as icon color when it is given as param', () => {
    const getHexColor = getIconColor(theme, '#333333');

    expect(getHexColor).toEqual('#333333');
  });
  it('should return highEmphasis color token as icon color when "default" is given as param', () => {
    const getDefaultColor = getIconColor(theme, 'default');

    expect(getDefaultColor).toEqual('#000000');
    expect(getColorHighEmphasis).toHaveBeenCalled();
  });

  it('should return correct given color', () => {
    const getThemeColor = getIconColor(theme, 'primary');

    expect(getThemeColor).toEqual('#BBBBBB');
    expect(getColorByName).toHaveBeenCalled();
  });
});
