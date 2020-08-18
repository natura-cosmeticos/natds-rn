import theme from '../theme/mock-theme.json';
import * as selectors from './buttonSizes';

const scenarios = [
  {
    expectedResult: theme.buttonSizes.medium,
    name: 'getButtonPropsBySize',
    params: 'medium',
    selector: selectors.getButtonPropsBySize,
    title: 'button',
  },
  {
    expectedResult: theme.radius.medium,
    name: 'getRadiusBySize',
    params: 'medium',
    selector: selectors.getRadiusBySize,
    title: 'radius',
  },
];

describe('Button Sizes selectors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the ${scenario.title} sizes`, () => {
          const result = scenario.selector(theme, scenario.params as selectors.Size);

          expect(result).toBe(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
