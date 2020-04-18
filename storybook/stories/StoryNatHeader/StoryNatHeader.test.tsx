import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components/native";
import { StoryNatHeader } from "./StoryNatHeader";
describe("StoryNatHeader component", () => {
  it("Should render StoryNatHeader component ", () => {
    const button = renderer.create(<StoryNatHeader />).toJSON();
    expect(button).toMatchSnapshot("StoryNatHeader snapshot");
  });
});
