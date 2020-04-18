import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components/native";
import { NatIcon } from "./NatIcon";
describe("NatIcon component default", () => {
  it("Should render NatIcon component ", () => {
    const button = renderer.create(<NatIcon />).toJSON();
    expect(button).toMatchSnapshot("NatIcon snapshot");
  });
});
