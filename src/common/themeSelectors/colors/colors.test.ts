import theme from '../theme/mock-theme.json';
import * as selectors from './colors';

const scenarios = [
  {
    expectedResult: theme.colorTokens.colorPrimary,
    name: 'getColorPrimary',
    selector: selectors.getColorPrimary,
    title: 'primary',
  },
  {
    expectedResult: theme.colorTokens.colorOnPrimary,
    name: 'getColorOnPrimary',
    selector: selectors.getColorOnPrimary,
    title: 'on primary',
  },
  {
    expectedResult: theme.colorTokens.colorBackground,
    name: 'getColorBackground',
    selector: selectors.getColorBackground,
    title: 'background',
  },
  {
    expectedResult: theme.colorTokens.colorOnBackground,
    name: 'getColorOnBackground',
    selector: selectors.getColorOnBackground,
    title: 'on background',
  },
  {
    expectedResult: theme.colorTokens.colorSuccess,
    name: 'getColorSuccess',
    selector: selectors.getColorSuccess,
    title: 'success',
  },
  {
    expectedResult: theme.colorTokens.colorOnSuccess,
    name: 'getColorOnSuccess',
    selector: selectors.getColorOnSuccess,
    title: 'on success',
  },
  {
    expectedResult: theme.colorTokens.colorLowEmphasis,
    name: 'getColorLowEmphasis',
    selector: selectors.getColorLowEmphasis,
    title: 'low emphasis',
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
