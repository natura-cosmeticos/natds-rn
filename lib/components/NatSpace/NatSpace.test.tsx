import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import "jest-styled-components/native";
import { NatSpace } from "./NatSpace";
describe("NatSpace component", () => {
  it("Should render Space component correctly", () => {
    const space = renderer
      .create(
        <NatSpace>
          <Text>Hello</Text>
        </NatSpace>
      )
      .toJSON();
    expect(space).toMatchSnapshot("NatSpace snapshot");
  });
});
