import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import propTypes from 'prop-types';
import {
  NatContainer,
  NatText,
  NatSelectInput,
} from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FFF',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatSelectInput = ({ type }) => {
  const [inputNormal, setInputNormal] = useState('');

  const onChange = (obj) => {
    setInputNormal(obj);
  };

  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
        <ScrollView>
          <NatText value="Value:" />
          <NatText value={inputNormal} />
          <NatSelectInput
            label="Size Normal"
            placeholder="Size Normal"
            assistiveText="Size Normal"
            onChange={onChange}
            value={inputNormal}
            size="normal"
            type={type}
          />
          <NatText value="body1. Lorem ipsum dolor sit amet, consectetur adipscing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam" type="body1" />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatSelectInput.propTypes = {
  type: propTypes.string.isRequired,
};
