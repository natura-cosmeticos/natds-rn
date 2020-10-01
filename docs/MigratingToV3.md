# Migrating to version 3

In version 3 the `natds-styles` theme library was replaced with `natds-themes`.
This change is important because now this library depends on a theme build specifically for react-native that share values with android and ios. Previously, this was done by transforming the theme that was build for web and material ui.

More information about natds-themes can be found [here](https://github.com/natura-cosmeticos/natds-commons).

## Changes

Tokens and theme values (mostly) did not change, they were either removed (in favor of other token with the same value) or renamed.
The only property that has changed values were some elevations **for android only** and this was done to better align android and react native values.

### Removed tokens

`avatarSizes`: use `size` instead

`buttonSizes`: use `size` instead

`iconSizes`: use `size` instead

`overlay`: use `opacity` instead

`radius.circle`: use `size` instead

### Renamed properties

### Colors

`colorTokens`:  use `color` instead

All the color tokens were also renamed, dropping the color prefix

`colorPrimary`: use `primary` instead

`colorOnPrimary`: use `onPrimary` instead

`colorPrimaryLight`: use `primaryLight` instead

`colorOnPrimaryLight`: use `onPrimaryLight` instead

`colorPrimaryDark`: use `primaryDark` instead

`colorOnPrimaryDark`: use `onPrimaryDark` instead

`colorSecondary`: use `secondary` instead

`colorOnSecondary`: use `onSecondary` instead

`colorSecondaryLight`: use `secondaryLight` instead

`colorOnSecondaryLight`: use `onSecondaryLight` instead

`colorSecondaryDark`: use `secondaryDark` instead

`colorOnSecondaryDark`: use `onSecondaryDark` instead

`colorBackground`: use `background` instead

`colorOnBackground`: use `onBackground` instead

`colorSurface`: use `surface` instead

`colorOnSurface`: use `onSurface` instead

`colorHighlight`: use `highlight` instead

`colorHighEmphasis`: use `highEmphasis` instead

`colorMediumEmphasis`: use `mediumEmphasis` instead

`colorLowEmphasis`: use `lowEmphasis` instead

`colorLink`: use `link` instead

`colorOnLink`: use `onLink` instead

`colorSuccess`: use `success` instead

`colorOnSuccess`: use `onSuccess` instead

`colorWarning`: use `warning` instead

`colorOnWarning`: use `onWarning` instead

`colorAlert`: use `alert` instead

`colorOnAlert`: use `onAlert` instead

Example:

```javascript

//before
const getColorPrimary = (theme) => theme.colorTokens.colorPrimary

//after
const getColorPrimary = (theme) => theme.color.primary

```

### Spacing

The spacing tokens were renamed, dropping the spacing prefix

`spacing`: use `tiny` instead

`spacingNone`: use `none` instead

`spacingMicro`: use `micro` instead

`spacingTiny`: use `tiny` instead

`spacingSmall`: use `small` instead

`spacingStandard`: use `standard` instead

`spacingSemi`: use `Semi` instead

`spacingLarge`: use `large` instead

`spacingHuge`: use `huge` instead

### Sizes

The property size

`sizes`: use `size` instead

Some properties were also camelCased

`semix`: use `semiX` instead

`mediumx`: use `mediumX` instead

`largex`: use `largeX` instead

`largexx`: use `largeXX` instead

`largexxx`: use `largeXXX` instead

`hugex`: use `hugeX` instead

`hugexx`: use `hugeXX` instead

`hugexxx`: use `hugeXXX` instead

`veryhuge`: use `veryHuge` instead

Example:

```javascript

//before
const getSizeSemiX = (theme) => theme.sizes.semix

//after
const getSizeSemiX = (theme) => theme.size.semiX

```

### Font Size

Text elements are composed of a group of properties, and groups of properties (components) are exposed in the root object.
We don't have a `fontSize` property anymore, but you can find the same values by the element name

`fontSize.h1`: use `heading1` instead

`fontSize.h2`: use `heading2` instead

`fontSize.h3`: use `heading3` instead

`fontSize.h4`: use `heading4` instead

`fontSize.h5`: use `heading5` instead

`fontSize.h6`: use `heading6` instead

`fontSize.subtitle1`: use `subtitle1` instead

`fontSize.subtitle2`: use `subtitle2` instead

`fontSize.body1`: use `body1` instead

`fontSize.body2`: use `body2` instead

`fontSize.button`: use `button` instead

`fontSize.caption`: use `caption` instead

`fontSize.overline`: use `overline` instead

### Opacity

The properties were renamed

`00`: use `transparent` instead

`04`: use `lower` instead

`08`: use `veryLow` instead

`12`: use `low` instead

`16`: use `mediumLow` instead

`24`: use `disabledLow` instead

`32`: use `disabled` instead

`48`: use `medium` instead

`56`: use `mediumHigh` instead

`64`: use `high` instead

`80`: use `veryHigh` instead

### Elevation

`1`: use `micro` instead

`2`: use `tiny` instead

`3`: use `small` instead

`4`: use `medium` instead

`5`: use `large` instead

`6`: use `largeX` instead

`7`: use `largeXX` instead

`8`: use `largeXX` instead

`9`: use `hugeX` instead

`10`: use `hugeXX` instead

### Radius

`radius`: use `borderRadius` instead
