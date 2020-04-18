import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components/native";
import { NatMenuItem } from "./NatMenuItem";
describe("NatMenuItem component default", () => {
  it("Should render NatMenuItem NatMenuItem ", () => {
    const button = renderer.create(<NatMenuItem title="Teste" />).toJSON();
    expect(button).toMatchSnapshot("NatMenuItem snapshot");
  });
});
