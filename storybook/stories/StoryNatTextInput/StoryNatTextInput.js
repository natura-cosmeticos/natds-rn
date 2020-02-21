import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import propTypes from 'prop-types';
import {
  NatContainer,
  NatTextInput,
  NatText,
} from '../../../lib';

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
      <NatContainer style={styles.defaultScreen}>
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
            onChangeText={setInputMultiline}
            value={inputMultiline}
            size="normal"
            multiline
            numberOfLines={4}
            type={type}
            icon={icon}
          />
          <NatTextInput
            label=""
            placeholder="Search"
            onChangeText={setInputSearch}
            value={inputSearch}
            size="small"
            type={type}
            icon={icon}
          />
          <NatText value="body1. Lorem ipsum dolor sit amet, consectetur adipscing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam" type="body1" />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatTextInput.propTypes = {
  type: propTypes.string.isRequired,
  icon: propTypes.string,
};

StoryNatTextInput.defaultProps = {
  icon: null,
};
