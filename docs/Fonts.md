## Using Brand Fonts

We have the brand fonts package `@naturacosmeticos/natds-themes` as a dependency of this library, so you have the brand fonts files available in your `node_modules` folder after installation.
To use the fonts in your app, you will need to import the method that will copy the fonts according to the brand and add their path to the `react-native.config.js` file:

```javascript
const copy = require('@naturacosmeticos/natds-rn/tools/copyFontsByBrand');

module.exports = {
  assets: [
    './src/assets/fonts',
  ],
  commands: [
    {
      name: 'copy-fonts',
      func: () => copy('your_brand', `${__dirname}/src/assets/fonts`),
    },
  ],
};
```

> Available brands: `aesop`, `avon`, `natura`, `theBodyShop`.

and then run:

```shell
npx react-native copy-fonts && npx react-native link
```

After that you can use the fonts of the chosen brand within your components using the parameters received from the theme.

Example:
```javascript
import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const CustomText = styled.Text(({ theme }) => ({
  fontFamily: `"${theme.typography.display.fontFamily}"`,
  fontWeight: theme.typography.display.fontWeight,
}));

export default App = () => (
  <View>
    <CustomText>Your Text<CustomText>
  </View>
);
```

> Some brand fonts failed to parse declaration, so we recommend that when declaring fontFamily the content must have single and double quotation marks to escape the spaces in the font name, as shown in the example.
