import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components/native";
import icoArrowLeft from "../../assets/icons/ic_arrow_left_white.png";
import { NatTextInput } from "./NatTextInput";
describe("TextInput component default", () => {
  it("Should render textInput component ", () => {
    const button = renderer
      .create(<NatTextInput label="teste" onChangeText={jest.fn()} />)
      .toJSON();
    expect(button).toMatchSnapshot("TextInput snapshot default");
  });
  it("Should render textInput with icon and assistive text in component", () => {
    const button = renderer
      .create(
        <NatTextInput
          label="teste"
          onChangeText={jest.fn()}
          icon={icoArrowLeft}
          iconPress={jest.fn()}
          assistiveText="teste"
        />
      )
      .toJSON();
    expect(button).toMatchSnapshot("TextInput snapshot with icon");
  });
});
