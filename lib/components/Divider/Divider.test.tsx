import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import "jest-styled-components/native";
import { Divider } from "./Divider";
describe("Divider component", () => {
  it("Should render Divider component correctly", () => {
    const space = renderer
      .create(
        <Divider>
          <Text>Hello</Text>
        </Divider>
      )
      .toJSON();
    expect(space).toMatchSnapshot("Divider snapshot");
  });
});
