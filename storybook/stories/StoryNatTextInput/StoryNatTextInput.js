import React, { useState } from 'react';
<<<<<<< HEAD
import {
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
=======
import { Text, ScrollView, SafeAreaView } from 'react-native';
>>>>>>> origin/update/react
import propTypes from 'prop-types';
import { NatContainer, NatTextInput, NatText } from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FFF',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatTextInput = ({ type, icon }) => {
  const [inputSmall, setInputSmall] = useState('');
  const [inputNormal, setInputNormal] = useState('');
  const [inputMultiline, setInputMultiline] = useState('');
  const [inputSearch, setInputSearch] = useState('');

  return (
    <SafeAreaView>
<<<<<<< HEAD
      <NatContainer style={styles.defaultScreen}>
=======
      <NatContainer style={{ backgroundColor: '#FFF', width: 300, paddingTop: 20 }}>
>>>>>>> origin/update/react
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
<<<<<<< HEAD
            onChangeText={setInputMultiline}
            value={inputMultiline}
=======
            onChangeText={setInputNormal}
            value={inputNormal}
>>>>>>> origin/update/react
            size="normal"
            multiline
            numberOfLines={4}
            type={type}
            icon={icon}
          />
          <NatTextInput
            label=""
            placeholder="Search"
<<<<<<< HEAD
            onChangeText={setInputSearch}
            value={inputSearch}
=======
            onChangeText={setInputNormal}
            value={inputNormal}
>>>>>>> origin/update/react
            size="small"
            type={type}
            icon={icon}
          />
<<<<<<< HEAD
          <NatText value="body1. Lorem ipsum dolor sit amet, consectetur adipscing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam" type="body1" />
=======
          <Text style={{ marginTop: 20 }}>
            You can apply margin-top by sending &apos;margin&apos; prop,
            with values: none, dense or normal.
          </Text>
>>>>>>> origin/update/react
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatTextInput.propTypes = {
  type: propTypes.string.isRequired,
  icon: propTypes.isRequired,
};
