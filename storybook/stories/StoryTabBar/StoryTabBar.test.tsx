import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components/native";
import { StoryTabBar } from "./StoryTabBar";
describe("StoryTabBar component", () => {
  it("should render correctly", () => {
    const button = renderer.create(<StoryTabBar />).toJSON();
    expect(button).toMatchSnapshot("StoryTabBar snapshot");
  });
});
