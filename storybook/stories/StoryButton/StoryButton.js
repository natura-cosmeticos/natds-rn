/* eslint-disable max-lines */
import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import {
  NatContainer,
  NatText,
  Button,
  NatSpace,
  NatLogo,
  NatLoading,
} from '../../../lib';

import { ThemeNaturaLight } from '../../../lib/themes/ThemeNaturaLight';
import { ThemeNaturacoLight } from '../../../lib/themes/ThemeNaturacoLight';
import { ThemeAesopLight } from '../../../lib/themes/ThemeAesopLight';
import { ThemeAvonLight } from '../../../lib/themes/ThemeAvonLight';
import { ThemeTheBodyShopLight } from '../../../lib/themes/ThemeTheBodyShopLight';

const styles = {
  defaultScreen: {
    flex: 1,
    marginBottom: 100,
    width: Dimensions.get('window').width,
  },
};

export const StoryButton = () => (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView style={{ position: 'relative' }}>
          <NatText value={'Variations'} type="h6" />
          <NatSpace />
          <Button
            type="primary"
            label="Primary"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="secondary"
            label="Secondary"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="tertiary"
            label="Tertiary"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <NatText value={'Theme'} type="h6" />
          <NatSpace />
          <Button
            type="primary"
            label="Natura"
            theme={ThemeNaturaLight}
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="primary"
            label="Avon"
            theme={ThemeAvonLight}
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="primary"
            label="THe Body Shop"
            theme={ThemeTheBodyShopLight}
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="primary"
            label="AESOP"
            theme={ThemeAesopLight}
            onPress={() => Alert.alert('press')}
          />
          <NatText value={'Color'} type="h6" />
          <NatSpace />
          <Button
            type="primary"
            label="Default"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="secondary"
            label="Default"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="tertiary"
            label="Default"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="primary"
            label="Primary"
            color="primary"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="secondary"
            label="primary"
            color="primary"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="tertiary"
            label="Primary"
            color="primary"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="primary"
            label="secondary"
            color="secondary"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="secondary"
            label="secondary"
            color="secondary"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="tertiary"
            label="secondary"
            color="secondary"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="primary"
            label="disabled"
            color="disabled"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="secondary"
            label="disabled"
            color="disabled"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            type="tertiary"
            label="disabled"
            color="disabled"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <NatText value={'Icon'} type="h6" />
          <NatSpace />
          <Button
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => Alert.alert('click left')}
            onPressRight={() => Alert.alert('click right')}
            type="primary"
            label="Default"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => Alert.alert('click left')}
            onPressRight={() => Alert.alert('click right')}
            type="secondary"
            label="Default"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => Alert.alert('click left')}
            onPressRight={() => Alert.alert('click right')}
            type="tertiary"
            label="Default"
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <NatText value={'Title custom'} type="h6" />
          <NatSpace />
          <Button
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => Alert.alert('click left')}
            onPressRight={() => Alert.alert('click right')}
            type="secondary"
            node={(
              <NatLogo name={'logo-natura-horizontal'} size={100} />
            )}
            onPress={() => Alert.alert('press')}
          />
          <NatSpace />
          <Button
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => Alert.alert('click left')}
            onPressRight={() => Alert.alert('click right')}
            type="primary"
            node={(
              <NatLoading />
            )}
            onPress={() => Alert.alert('press')}
          />
        </ScrollView>
      </NatContainer>
      <Button
        type="primary"
        label="bottom fixed"
        fixedBottom
        onPress={() => Alert.alert('press')}
      />
    </SafeAreaView>
);
