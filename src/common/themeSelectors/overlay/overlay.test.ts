import theme from '../theme/mock-theme.json';
import * as selectors from './overlay';

describe('Overlay', () => {
  /*  eslint-disable mocha/no-setup-in-describe */
  describe.each`
  title            | selector                          | expected
  ${'solid black'} | ${selectors.getOverlaySolidBlack} | ${theme.overlay.solidBlack}
  `('', ({
  title, selector, expected,
}) => {
  it(`should return the overlay for ${title}`, () => {
    const result = selector(theme);

    expect(result).toBe(expected);
  });
});
  /* eslint-enable mocha/no-setup-in-describe */
});
