/* eslint-disable max-lines */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { View, Text } from 'react-native';
import { Button } from './Button';

describe('Button component default', () => {
  it('Should render button component ', () => {
    const button = renderer.create(
      <View>
        <Button
          type="primary"
          label="Primary"
          onPress={() => {}}
        />
        <Button
          type="secondary"
          label="Secondary"
          onPress={() => {}}
        />
        <Button
          type="tertiary"
          label="Tertiary"
          onPress={() => {}}
        />
        <Button
          type="primary"
          label="Default"
          onPress={() => {}}
        />
        <Button
          type="secondary"
          label="Default"
          onPress={() => {}}
        />
        <Button
          type="tertiary"
          label="Default"
          onPress={() => {}}
        />
        <Button
          type="primary"
          label="Primary"
          color="primary"
          onPress={() => {}}
        />
        <Button
          type="secondary"
          label="primary"
          color="primary"
          onPress={() => {}}
        />
        <Button
          type="tertiary"
          label="Primary"
          color="primary"
          onPress={() => {}}
        />
        <Button
          type="primary"
          label="secondary"
          color="secondary"
          onPress={() => {}}
        />
        <Button
          type="secondary"
          label="secondary"
          color="secondary"
          onPress={() => {}}
        />
        <Button
          type="tertiary"
          label="secondary"
          color="secondary"
          onPress={() => {}}
        />
        <Button
          type="primary"
          label="disabled"
          color="disabled"
          onPress={() => {}}
        />
        <Button
          type="secondary"
          label="disabled"
          color="disabled"
          onPress={() => {}}
        />
        <Button
          type="tertiary"
          label="disabled"
          color="disabled"
          onPress={() => {}}
        />
        <Button
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
          onPressLeft={() => {}}
          onPressRight={() => {}}
          type="primary"
          label="Default"
          onPress={() => {}}
        />
        <Button
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
          onPressLeft={() => {}}
          onPressRight={() => {}}
          type="secondary"
          label="Default"
          onPress={() => {}}
        />
        <Button
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
          onPressLeft={() => {}}
          onPressRight={() => {}}
          type="tertiary"
          label="Default"
          onPress={() => {}}
        />
        <Button
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
          onPressLeft={() => {}}
          onPressRight={() => {}}
          type="secondary"
          node={(
            <Text>Test</Text>
          )}
          onPress={() => {}}
        />
        <Button
          type="primary"
          label="bottom fixed"
          fixedBottom
          onPress={() => {}}
        />
      </View>,
    ).toJSON();

    expect(button).toMatchSnapshot('Button snapshot');
  });
});
