import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatText,
  Button,
  NatSpace,
  NatLogo,
  NatLoading,
} from '../../../lib';

const styles = {
  defaultScreen: {
    width: Dimensions.get('window').width,
    marginBottom: 100,
  },
};

export const StoryButton = () => {

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView style={{ position: 'relative' }}>
          <NatText value={`Variations`} type="h6" />
          <NatSpace />
          <Button
            type="primary"
            label="Primary"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="secondary"
            label="Secondary"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="tertiary"
            label="Tertiary"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <NatText value={`Color`} type="h6" />
          <NatSpace />
          <Button
            type="primary"
            label="Default"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="secondary"
            label="Default"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="tertiary"
            label="Default"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="primary"
            label="Primary"
            color="primary"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="secondary"
            label="primary"
            color="primary"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="tertiary"
            label="Primary"
            color="primary"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="primary"
            label="secondary"
            color="secondary"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="secondary"
            label="secondary"
            color="secondary"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="tertiary"
            label="secondary"
            color="secondary"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="primary"
            label="disabled"
            color="disabled"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="secondary"
            label="disabled"
            color="disabled"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            type="tertiary"
            label="disabled"
            color="disabled"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <NatText value={`Icon`} type="h6" />
          <NatSpace />
          <Button
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('click left')}
            onPressRight={() => alert('click right')}
            type="primary"
            label="Default"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('click left')}
            onPressRight={() => alert('click right')}
            type="secondary"
            label="Default"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('click left')}
            onPressRight={() => alert('click right')}
            type="tertiary"
            label="Default"
            onPress={() => alert('press')}
          />
          <NatSpace />
          <NatText value={`Title custom`} type="h6" />
          <NatSpace />
          <Button
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('click left')}
            onPressRight={() => alert('click right')}
            type="secondary"
            node={(
              <NatLogo name={'logo-natura-horizontal'} size={100} />
            )}
            onPress={() => alert('press')}
          />
          <NatSpace />
          <Button
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('click left')}
            onPressRight={() => alert('click right')}
            type="primary"
            node={(
              <NatLoading />
            )}
            onPress={() => alert('press')}
          />
        </ScrollView>
        <Button
          type="primary"
          label="bottom fixed"
          fixedBottom
          onPress={() => alert('press')}
        />
      </NatContainer>
    </SafeAreaView>
  );
};

StoryButton.propTypes = {
};
