import mockTheme from './mock-theme.json';
import { getTheme, buildTheme } from './theme';

describe('Theme selectors', () => {
  describe('getTheme', () => {
    it('should call the given function destructuring the theme prop', () => {
      const fakeSelector = jest.fn(theme => theme.colorTokens.colorAlert);
      const result = getTheme(fakeSelector)({ theme: mockTheme });

      expect(fakeSelector).toHaveBeenCalledWith(mockTheme);
      expect(result).toBe(mockTheme.colorTokens.colorAlert);
    });
  });

  describe('buildTheme', () => {
    it('should build theme using tokens', () => {
      const result = buildTheme('natura', 'light');

      expect(result).toStrictEqual(mockTheme);
    });
  });
});
