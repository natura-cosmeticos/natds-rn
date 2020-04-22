import { themes } from '@naturacosmeticos/natds-styles';
import * as selectors from './palette';

const sampleTheme = themes.natura.light;
const scenarios = [
  {
    expectedResult: sampleTheme.palette?.success?.main,
    name: 'getSuccessMain',
    selector: selectors.getSuccessMain,
    title: 'success main',
  },
  {
    expectedResult: sampleTheme.palette?.success?.contrastText,
    name: 'getSuccessContrastText',
    selector: selectors.getSuccessContrastText,
    title: 'success contrast text',
  },
  {
    expectedResult: sampleTheme.palette?.action?.disabled,
    name: 'getActionDisabled',
    selector: selectors.getActionDisabled,
    title: 'action disabled',
  },
  {
    expectedResult: sampleTheme.palette?.background?.paper,
    name: 'getBackgroundPaper',
    selector: selectors.getBackgroundPaper,
    title: 'background paper',
  },
  {
    expectedResult: sampleTheme.palette?.background?.default,
    name: 'getBackgroundDefault',
    selector: selectors.getBackgroundDefault,
    title: 'background default',
  },
  {
    expectedResult: sampleTheme.palette?.primary?.main,
    name: 'getPrimaryMain',
    selector: selectors.getPrimaryMain,
    title: 'primary main',
  },
  {
    expectedResult: sampleTheme.palette?.text?.primary,
    name: 'getTextPrimary',
    selector: selectors.getTextPrimary,
    title: 'text primary color',
  },
];

describe('Palette selectors', () => {
  it('should call the given function destructuring the theme prop', () => {
    const fakeSelector = jest.fn(theme => theme.palette.background.paper);
    const result = selectors.getTheme(fakeSelector)({ theme: sampleTheme });

    expect(fakeSelector).toHaveBeenCalledWith(sampleTheme);
    expect(result).toBe(sampleTheme.palette?.background?.paper);
  });

  /*  eslint-disable mocha/no-setup-in-describe */
  scenarios.forEach(scenario => (
    describe(scenario.name, () => {
      (
        it(`should return the ${scenario.title} color`, () => {
          const result = scenario.selector(sampleTheme);

          expect(result).toBe(scenario.expectedResult);
        })
      );
    })
  ));
  /* eslint-enable mocha/no-setup-in-describe */
});
