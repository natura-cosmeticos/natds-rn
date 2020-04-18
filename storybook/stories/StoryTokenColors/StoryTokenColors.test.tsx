import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components/native";
import { StoryTokenColors } from "./StoryTokenColors";
describe("StoryTokenColors component", () => {
  it("Should render StoryTokenColors component ", () => {
    const button = renderer.create(<StoryTokenColors />).toJSON();
    expect(button).toMatchSnapshot("StoryTokenColors snapshot");
  });
});
