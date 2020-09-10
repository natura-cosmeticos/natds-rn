import theme from '../theme/mock-theme.json';
import * as selectors from './opacity';

const scenarios = [
  {
    expectedResult: theme.opacity.mediumHigh,
    name: 'getOpacityMediumHigh',
    selector: selectors.getOpacityMediumHigh,
    title: 'opacity',
  },
  {
    expectedResult: theme.opacity.high,
    name: 'getOpacityHigh',
    selector: selectors.getOpacityHigh,
    title: 'opacity',
  },
];

describe('Opacity selectors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the opacity ${scenario.title}`, () => {
          const result = scenario.selector(theme);

          expect(result).toBe(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
