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
  const [input1, setInput1] = useState([]);
  const [input2, setInput2] = useState(['2']);
  const [input3, setInput3] = useState([]);
  const [input4, setInput4] = useState(['2', '10']);

  const options = [
    {
      id: '1',
      title: 'Option 1'
    },
    {
      id: '2',
      title: 'Option 2'
    },
    {
      id: '3',
      title: 'Option 3'
    },
    {
      id: '4',
      title: 'Option 4'
    },
    {
      id: '5',
      title: 'Option 5'
    },
    {
      id: '6',
      title: 'Option 6'
    },
    {
      id: '7',
      title: 'Option 7'
    },
    {
      id: '8',
      title: 'Option 8'
    },
    {
      id: '9',
      title: 'Option 9'
    },
    {
      id: '10',
      title: 'Option 10'
    },
    {
      id: '11',
      title: 'Option 11'
    },
  ];

  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
        <ScrollView>
          <NatText value="Select - empty" type="h6" />
          <NatSelectInput
            label="label"
            placeholder="placeholder"
            assistiveText="assistiveText"
            searchText="search"
            selectButtonText="Select"
            onChange={setInput1}
            value={input1}
            size="normal"
            type={type}
            options={options}
          />
          <NatText value={`Value: ${JSON.stringify(input1)}`} />
          <NatText value="Select - initial value" type="h6" />
          <NatSelectInput
            label="label"
            placeholder="placeholder"
            assistiveText="assistiveText"
            searchText="search"
            selectButtonText="Select"
            onChange={setInput2}
            value={input2}
            size="normal"
            type={type}
            options={options}
          />
          <NatText value={`Value: ${JSON.stringify(input2)}`} />
          <NatText value="Select multiple - empty" type="h6" />
          <NatSelectInput
            label="label"
            placeholder="placeholder"
            assistiveText="assistiveText"
            searchText="search"
            selectButtonText="Select"
            onChange={setInput3}
            value={input3}
            size="normal"
            type={type}
            options={options}
          />
          <NatText value={`Value: ${JSON.stringify(input3)}`} />
          <NatText value="Select multiple - initial value" type="h6" />
          <NatSelectInput
            label="label"
            placeholder="placeholder"
            assistiveText="assistiveText"
            searchText="search"
            selectButtonText="Select"
            onChange={setInput4}
            value={input4}
            size="normal"
            type={type}
            options={options}
          />
          <NatText value={`Value: ${JSON.stringify(input4)}`} />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatSelectInput.propTypes = {
  type: propTypes.string.isRequired,
};
