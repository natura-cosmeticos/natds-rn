import theme from '../theme/mock-theme.json';
import * as selectors from './typography';

const scenarios = [
  {
    expectedResult: theme.caption,
    name: 'getCaptionFont',
    selector: selectors.getCaptionFont,
    title: 'caption',
  },
];

describe('Typography selectors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the ${scenario.title} font family`, () => {
          const result = scenario.selector(theme);

          expect(result).toBe(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
