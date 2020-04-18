import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components/native";
import { StoryNatLink } from "./StoryNatLink";
describe("StoryNatLink component", () => {
  it("Should render StoryNatLink component ", () => {
    const button = renderer.create(<StoryNatLink />).toJSON();
    expect(button).toMatchSnapshot("StoryNatLink snapshot");
  });
});
