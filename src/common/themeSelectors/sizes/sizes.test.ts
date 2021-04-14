import { Size } from '@naturacosmeticos/natds-themes/react-native';
import theme from '../theme/mock-theme.json';
import * as selectors from './sizes';


const scenarios = [
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
        it(`should return ${scenario.title}`, () => {
          const result = scenario.selector(theme, scenario.params as keyof Size);

          expect(result).toEqual(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
