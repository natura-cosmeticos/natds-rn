import theme from '../theme/mock-theme.json';
import * as selectors from './effects';

const scenarios = [
  {
    expectedResult: theme.elevation['2'],
    name: 'getShadowBySize',
    params: '2',
    selector: selectors.getShadowBySize,
    title: 'shadow',
  },
  {
    expectedResult: theme.opacity['80'],
    name: 'getOpacity80',
    selector: selectors.getOpacity80,
    title: 'oa',
  },
];

describe('Effects selectors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the ${scenario.title} effect`, () => {
          const result = scenario.selector(theme, scenario.params || '');

          expect(result).toBe(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
