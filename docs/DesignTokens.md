# Using Design Tokens

Design tokens are style properties that allow you to style elements and components in your project, keeping them multi-brand and multi-mode.
Design tokens are style properties that allow you to style elements and components in your project, keeping them multi-brand and multi-mode. You can check all available design tokens in our [search tool](https://ds.natura.design/28db352be/p/3880eb-search).

## Styled Components
After installing and configuring [styled components library](https://styled-components.com/), you can replace the `Provider` from `natds-rn` to `ThemeProvider` from `styled-components`:

```jsx
import { buildTheme } from "@naturacosmeticos/natds-rn";
import { ThemeProvider } from "styled-components";

const theme = buildTheme('natura', 'light')

export const App = () => (
  <ThemeProvider theme={theme}>
    // your app
  </ThemeProvider>
)
```

So you can access the theme following the example:

```javascript
import styled from 'styled-components'

const Square = styled.div`
  height: ${({ theme }) => `${theme.sizes.large}px`};
  width: ${({ theme }) => `${theme.sizes.large}px`};
  background-color: ${({ theme }) => theme.color.primary};
`

export const Example = () => <Square />
```
