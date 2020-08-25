import theme from '../theme/mock-theme.json';
import * as selectors from './effects';

describe('Effects selectors', () => {
  describe('getShadowBySize', () => {
    it('should return the shadow effect', () => {
      const result = selectors.getShadowBySize(theme, '2');

      expect(result).toBe(theme.elevation['2']);
    });
  });
  describe('getOpacity10', () => {
    it('should return the opacity effect', () => {
      const result = selectors.getOpacity10(theme);

      expect(result).toBe(theme.opacity[80]);
    });
  });
});
