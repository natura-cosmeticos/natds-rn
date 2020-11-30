# Using NatDS Icons

We use the icons package `@naturacosmeticos/natds-icons` as a dependency of this library, so you'll have the icon font files available in your `node_modules` folder after installation.

To use the icon font in your app, you need to add its path to your `react-native.config.js` file:

```javascript
module.exports = {
  assets: [
    'node_modules/@naturacosmeticos/natds-icons/dist/fonts',
  ],
};
```

and then run:

```shell
npx react-native link
```

After this, you can use our `Icon` component to display this icons. It receives `color`, `name` and `size` as props, using our tokens and the icon names provided.

To find out more about those you can check:
- [Color tokens](https://xd.adobe.com/view/f66ea4ed-358a-4d49-9276-2b813655253f-a33d/screen/2a6fb13c-32e0-4f4c-8fe5-dc2ef0d0fe72/)
- [Size tokens](https://xd.adobe.com/view/f66ea4ed-358a-4d49-9276-2b813655253f-a33d/screen/564b2a42-e8e1-4c70-825c-1b8cd3b99dfc/)
- [Icons](https://zeroheight.com/28db352be/p/94367e-icon-library/b/6154b9) and [Icon Names](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.json)


Example:
```javascript
import React from 'react';
import { View } from 'react-native';

export default App = () => (
  <View>
    <Icon
    color="default"
    name="filled-action-add"
    size="standard" />
  </View>
);
```

> For component detailed API and usage examples, check out the [docs](https://natds-rn.netlify.app/) of the component you are using.

