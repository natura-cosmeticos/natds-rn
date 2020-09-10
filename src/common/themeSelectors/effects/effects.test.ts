import { Elevation } from '@naturacosmeticos/natds-themes/react-native';
import theme from '../theme/mock-theme.json';
import * as selectors from './effects';

const scenarios = [
  {
    expectedResult: theme.elevation.tiny,
    name: 'getShadowBySize',
    params: 'tiny' as keyof Elevation,
    selector: selectors.getShadowBySize,
    title: 'shadow',
  },
];

describe('Effects selectors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the ${scenario.title} effect`, () => {
          const result = scenario.selector(theme, scenario.params);

          expect(result).toBe(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
