import theme from '../theme/mock-theme.json';
import * as selectors from './colors';

const scenarios = [
  {
    expectedResult: theme.color.primary,
    name: 'getColorPrimary',
    selector: selectors.getColorPrimary,
    title: 'primary',
  },
  {
    expectedResult: theme.color.onPrimary,
    name: 'getColorOnPrimary',
    selector: selectors.getColorOnPrimary,
    title: 'on primary',
  },
  {
    expectedResult: theme.color.background,
    name: 'getColorBackground',
    selector: selectors.getColorBackground,
    title: 'background',
  },
  {
    expectedResult: theme.color.onBackground,
    name: 'getColorOnBackground',
    selector: selectors.getColorOnBackground,
    title: 'on background',
  },
  {
    expectedResult: theme.color.success,
    name: 'getColorSuccess',
    selector: selectors.getColorSuccess,
    title: 'success',
  },
  {
    expectedResult: theme.color.onSuccess,
    name: 'getColorOnSuccess',
    selector: selectors.getColorOnSuccess,
    title: 'on success',
  },
  {
    expectedResult: theme.color.lowEmphasis,
    name: 'getColorLowEmphasis',
    selector: selectors.getColorLowEmphasis,
    title: 'low emphasis',
  },
  {
    expectedResult: theme.color.onSecondary,
    name: 'getColorOnSecondary',
    selector: selectors.getColorOnSecondary,
    title: 'on secondary',
  },
  {
    expectedResult: theme.color.highEmphasis,
    name: 'getColorHighEmphasis',
    selector: selectors.getColorHighEmphasis,
    title: 'high emphasis',
  },
  {
    expectedResult: theme.color.primaryLight,
    name: 'getColorPrimaryLight',
    selector: selectors.getColorPrimaryLight,
    title: 'primary light',
  },
];

describe('Color selectors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the ${scenario.title} color`, () => {
          const result = scenario.selector(theme);

          expect(result).toBe(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
