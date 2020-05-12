import theme from '../theme/mock-theme.json';
import * as selectors from './opacity';

const scenarios = [
  {
    expectedResult: theme.opacity[56],
    name: 'getOpacity56',
    selector: selectors.getOpacity56,
    title: 'opacity 56',
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
