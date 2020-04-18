import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components/native";
import { StoryTokenTypography } from "./StoryTokenTypography";
describe("StoryTokenTypography component", () => {
  it("Should render StoryNatCard component ", () => {
    const button = renderer.create(<StoryTokenTypography />).toJSON();
    expect(button).toMatchSnapshot("StoryTokenTypography snapshot");
  });
});
