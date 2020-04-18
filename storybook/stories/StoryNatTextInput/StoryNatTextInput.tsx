import React, { useState } from 'react';
import { ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { NatContainer, NatTextInput, NatText } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

type StoryNatTextInputProps = {
  icon?: string,
  type: string
};
export const StoryNatTextInput: React.SFC<StoryNatTextInputProps> = ({
  type,
  icon,
}) => {
  const [inputSmall, setInputSmall] = useState('');
  const [inputNormal, setInputNormal] = useState('');
  const [inputMultiline, setInputMultiline] = useState('');
  const [inputSearch, setInputSearch] = useState('');

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
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
          <NatText
            value="body1. Lorem ipsum dolor sit amet, consectetur adipscing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
            type="body1"
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};
StoryNatTextInput.defaultProps = {
  icon: null,
};
