# Design Tokens

Design tokens are style properties that allow you to style elements and components in your project, keeping them multi-brand and multi-mode. You can check all available design tokens in our [search tool](https://ds.natura.design/28db352be/p/3880eb-search).

## Usage

To use them you must have **set the Design System Theme in your chosen theme provider**, following each Provider documentation.

### Styled Components

```javascript
import React from 'react';
import styled from 'styled-components/native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';

type ContainerStyleProps = {
  theme: Theme
}

const Square = styled.View`
  background-color: ${(props) => props.theme.color.primary};
  height: ${(props) => props.theme.size.medium}px;
  width: ${(props) => props.theme.size.medium}px;
`;

export default App = () => (
  <Square />
);
```
