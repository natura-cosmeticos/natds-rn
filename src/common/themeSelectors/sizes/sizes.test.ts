import theme from '../theme/mock-theme.json';
import * as selectors from './sizes';

const scenarios = [
  {
    expectedResult: theme.sizes.none,
    name: 'getNoneSize',
    selector: selectors.getNoneSize,
    title: 'none',
  },
  {
    expectedResult: theme.sizes.micro,
    name: 'getMicroSize',
    selector: selectors.getMicroSize,
    title: 'micro',
  },
  {
    expectedResult: theme.sizes.tiny,
    name: 'getTinySize',
    selector: selectors.getTinySize,
    title: 'tiny',
  },
  {
    expectedResult: theme.sizes.small,
    name: 'getSmallSize',
    selector: selectors.getSmallSize,
    title: 'small',
  },
  {
    expectedResult: theme.sizes.standard,
    name: 'getStandardSize',
    selector: selectors.getStandardSize,
    title: 'standard',
  },
  {
    expectedResult: theme.sizes.semi,
    name: 'getSemiSize',
    selector: selectors.getSemiSize,
    title: 'semi',
  },
  {
    expectedResult: theme.sizes.semix,
    name: 'getSemixSize',
    selector: selectors.getSemixSize,
    title: 'semix',
  },
  {
    expectedResult: theme.sizes.medium,
    name: 'getMediumSize',
    selector: selectors.getMediumSize,
    title: 'medium',
  },
  {
    expectedResult: theme.sizes.mediumx,
    name: 'getMediumxSize',
    selector: selectors.getMediumxSize,
    title: 'mediumx',
  },
  {
    expectedResult: theme.sizes.large,
    name: 'getLargeSize',
    selector: selectors.getLargeSize,
    title: 'large',
  },
  {
    expectedResult: theme.sizes.largex,
    name: 'getLargexSize',
    selector: selectors.getLargexSize,
    title: 'largex',
  },
  {
    expectedResult: theme.sizes.largexx,
    name: 'getLargexxSize',
    selector: selectors.getLargexxSize,
    title: 'largexx',
  },
  {
    expectedResult: theme.sizes.largexxx,
    name: 'getLargexxxSize',
    selector: selectors.getLargexxxSize,
    title: 'largexxx',
  },
  {
    expectedResult: theme.sizes.huge,
    name: 'getHugeSize',
    selector: selectors.getHugeSize,
    title: 'huge',
  },
  {
    expectedResult: theme.sizes.hugex,
    name: 'getHugexSize',
    selector: selectors.getHugexSize,
    title: 'hugex',
  },
  {
    expectedResult: theme.sizes.hugexx,
    name: 'getHugexxSize',
    selector: selectors.getHugexxSize,
    title: 'hugexx',
  },
  {
    expectedResult: theme.sizes.hugexxx,
    name: 'getHugexxxSize',
    selector: selectors.getHugexxxSize,
    title: 'hugexxx',
  },
  {
    expectedResult: theme.sizes.veryhuge,
    name: 'getVeryhugeSize',
    selector: selectors.getVeryhugeSize,
    title: 'veryhuge',
  },
];

describe('Color selectors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the value for the ${scenario.title} size`, () => {
          const result = scenario.selector(theme);

          expect(result).toBe(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
