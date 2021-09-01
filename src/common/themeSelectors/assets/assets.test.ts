import theme from '../theme/mock-theme.json';
import * as selectors from './assets';

/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
type          | selector                         | expected
${'display'}  | ${selectors.getDisplayFontFile}  | ${theme.asset.font.file.display}
${'headline'} | ${selectors.getHeadlineFontFile} | ${theme.asset.font.file.headline}
${'body'}     | ${selectors.getBodyFontFile}     | ${theme.asset.font.file.body}
`('Font assets selectors', ({
  type, selector, expected,
}) => {
  it(`should return font file for type ${type}`, () => {
    const result = selector(theme);

    expect(result).toStrictEqual(expected);
  });
});
/* eslint-enable mocha/no-setup-in-describe */
