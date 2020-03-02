import React from 'react';
import { ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { NatContainer, NatText, ThemeNaturaLight } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryTokenTypography = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <NatContainer>
      <ScrollView>
        <NatText value="SIZES" type="h6" />
        <NatText value="h1. Heading" type="h1" />
        <NatText value="h2. Heading" type="h2" />
        <NatText value="h3. Heading" type="h3" />
        <NatText value="h4. Heading" type="h4" />
        <NatText value="h5. Heading" type="h5" />
        <NatText value="h6. Heading" type="h6" />
        <NatText value="subtitle1. Lorem ipsum dolor sit amet, consectetur adipscing elit. Quos blanditiis tenetur" type="subtitle1" />
        <NatText value="subtitle2. Lorem ipsum dolor sit amet, consectetur adipscing elit. Quos blanditiis tenetur" type="subtitle2" />
        <NatText value="body1. Lorem ipsum dolor sit amet, consectetur adipscing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam" type="body1" />
        <NatText value="body2. Lorem ipsum dolor sit amet, consectetur adipscing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos" type="body2" />
        <NatText value="BUTTON TEXT" type="button" />
        <NatText value="Caption text" type="caption" />
        <NatText value="OVERLINE TEXT" type="overline" />

        <NatText value="VARIATIONS" type="h6" />
        <NatText value="body1. Set diffente color" type="body1" color={ThemeNaturaLight.palette.primary.main} />
        <NatText value="body1. Withou marginBottom spacingNone" type="body1" margin={ThemeNaturaLight.spacing.spacingNone} />
        <NatText value="body1. Withou marginBottom spacingHuge" type="body1" margin={ThemeNaturaLight.spacing.spacingHuge} />
        <NatText value="body1. Withou marginBottom spacingMicro" type="body1" margin={ThemeNaturaLight.spacing.spacingMicro} />
      </ScrollView>
    </NatContainer>
  </SafeAreaView>

);
