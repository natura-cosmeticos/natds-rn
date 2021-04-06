import theme from '../theme/mock-theme.json';
import * as selectors from './sizes';

const scenarios = [
  {
    expectedResult: {
      minHeight: 40,
      paddingHorizontal: 8,
    },
    name: 'getButtonPropsBySize',
    params: 'medium',
    selector: selectors.getButtonPropsBySize,
    title: 'button',
  },
  {
    expectedResult: theme.borderRadius.medium,
    name: 'getRadiusBySize',
    params: 'medium',
    selector: selectors.getRadiusBySize,
    title: 'radius',
  },
];

describe('Sizes selectors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the ${scenario.title} sizes`, () => {
          const result = scenario.selector(theme, scenario.params as selectors.ButtonSize);

          expect(result).toEqual(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
