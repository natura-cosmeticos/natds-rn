import React from "react";
import renderer from "react-test-renderer";
import { NatModalSelect } from "./NatModalSelect";
describe("NatModalSelect and its variants", () => {
  describe("NatModalSelect", () => {
    it("Should match snapshot", () => {
      const props = {
        action: jest.fn(),
        alternative: false,
        buttonText: "Entendi",
        text: "Texto de boas vindas",
        title: "Boas vindas!",
        visible: true
      };
      const modal = renderer.create(<NatModalSelect {...props} />).toJSON();
      expect(modal).toMatchSnapshot("NatModalSelect snapshot");
    });
  });
});
