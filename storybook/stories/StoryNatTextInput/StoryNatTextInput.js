import React, { useState } from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import propTypes from 'prop-types';
import { NatContainer, NatTextInput } from '../../../lib';

export const StoryNatTextInput = ({ type, icon }) => {
  const [inputSmall, setInputSmall] = useState('');
  const [inputNormal, setInputNormal] = useState('');

  return (
    <SafeAreaView>
      <NatContainer style={{ backgroundColor: '#FFF', width: 300, paddingTop: 20 }}>
        <ScrollView>
          <NatTextInput
            label="Size Small"
            placeholder="Size Small"
            assistiveText="Size Small"
            onChangeText={setInputSmall}
            value={inputSmall}
            size="small"
            type={type}
            icon={icon}
          />
          <NatTextInput
            label="Size Normal"
            placeholder="Size Normal"
            assistiveText="Size Normal"
            onChangeText={setInputNormal}
            value={inputNormal}
            size="normal"
            type={type}
            icon={icon}
          />
          <NatTextInput
            label="Multiple lines"
            placeholder="Multiple lines"
            assistiveText="Multiple lines"
            onChangeText={setInputNormal}
            value={inputNormal}
            size="normal"
            multiline
            numberOfLines={4}
            type={type}
            icon={icon}
          />
          <NatTextInput
            label=""
            placeholder="Search"
            onChangeText={setInputNormal}
            value={inputNormal}
            size="small"
            type={type}
            icon={icon}
          />
          <Text style={{ marginTop: 20 }}>
            You can apply margin-top by sending &apos;margin&apos; prop,
            with values: none, dense or normal.
          </Text>
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatTextInput.propTypes = {
  type: propTypes.string.isRequired,
  icon: propTypes.isRequired,
};
