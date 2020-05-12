import { Theme } from '../src/common/themeSelectors/theme/theme';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
