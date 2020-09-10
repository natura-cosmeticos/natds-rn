import theme from '../theme/mock-theme.json';
import * as selectors from './spacing';

const scenarios = [
  {
    expectedResult: theme.spacing.small,
    name: 'getSpacingSmall',
    selector: selectors.getSpacingSmall,
    title: 'spacing small',
  },
  {
    expectedResult: theme.spacing.tiny,
    name: 'getSpacingTiny',
    selector: selectors.getSpacingTiny,
    title: 'spacing tiny',
  },
];

describe('Spacing selectors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the spacing ${scenario.title}`, () => {
          const result = scenario.selector(theme);

          expect(result).toBe(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
