import React, { useState } from "react";
import { View, Text, Dimensions, SafeAreaView } from "react-native";
import icoArrowLeft from "../../../lib/assets/icons/ic_arrow_left_white.png";
import { NatContainer, NatTextInput } from "../../../lib";
const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get("window").width
  }
};
export const Form = () => {
  const [inputSmall, setInputSmall] = useState("");
  const [inputError, setInputError] = useState("");
  const [inputDisabled, setInputDisabled] = useState("");
  const [inputNormal, setInputNormal] = useState("");
  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer styles={styles}>
        <View>
          <NatTextInput
            label="Size Small"
            placeholder="Size Small"
            assistiveText="Size Small"
            onChangeText={setInputSmall}
            value={inputSmall}
            size="small"
            icon={icoArrowLeft}
          />
          <NatTextInput
            label="Size Normal and Margin Normal"
            placeholder="Size Normal"
            assistiveText="Size Normal"
            onChangeText={setInputNormal}
            value={inputNormal}
          />
          <NatTextInput
            label="Error"
            type="error"
            placeholder="Error"
            secureTextEntry
            assistiveText="Error"
            onChangeText={setInputError}
            value={inputError}
          />
          <NatTextInput
            label="Disabled"
            type="disabled"
            placeholder="Disabled"
            assistiveText="Disabled"
            onChangeText={setInputDisabled}
            value={inputDisabled}
          />
          <Text>
            You can apply margin using the prop with values: none, dense or
            normal.
          </Text>
        </View>
      </NatContainer>
    </SafeAreaView>
  );
};
