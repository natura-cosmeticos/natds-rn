import theme from '../theme/mock-theme.json';
import * as selectors from './avatarSizes';

const scenarios = [
  {
    expectedResult: theme.avatarSizes.tiny,
    name: 'tiny',
    selector: selectors.getAvatarBySize,
    title: 'size tiny',
  },
  {
    expectedResult: theme.avatarSizes.small,
    name: 'small',
    selector: selectors.getAvatarBySize,
    title: 'size small',
  },
  {
    expectedResult: theme.avatarSizes.standard,
    name: 'standard',
    selector: selectors.getAvatarBySize,
    title: 'site standard',
  },
  {
    expectedResult: theme.avatarSizes.large,
    name: 'large',
    selector: selectors.getAvatarBySize,
    title: 'size large',
  },
  {
    expectedResult: theme.avatarSizes.huge,
    name: 'huge',
    selector: selectors.getAvatarBySize,
    title: 'size huge',
  },
];

describe('AvatarSizes selectors', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the size ${scenario.title}`, () => {
          const result = scenario.selector(scenario.name, theme);

          expect(result).toBe(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
