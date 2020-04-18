import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-styled-components/native";
import { Text } from "react-native";
import { NatButton } from "./NatButton";
import { ButtonIcon } from "./NatButton.styles";
describe("Button component default", () => {
  it("Should render button component ", () => {
    const button = renderer
      .create(
        <NatButton label="string" onPress={jest.fn()}>
          <Text>Oi</Text>
        </NatButton>
      )
      .toJSON();
    expect(button).toMatchSnapshot();
  });
  describe("when is card type", () => {
    let props = {};
    beforeEach(() => {
      props = {
        label: "test",
        onPress: jest.fn(),
        type: "card"
      };
    });
    it("Should render button component ", () => {
      const button = renderer.create(<NatButton {...props} />).toJSON();
      expect(button).toMatchSnapshot();
    });
    it("should have an icon", () => {
      const wrapper = shallow(<NatButton {...props} />);
      expect(wrapper.find(ButtonIcon).length).toBe(1);
    });
  });
  describe("when is short type", () => {
    let props = {};
    beforeEach(() => {
      props = {
        label: "test",
        onPress: jest.fn(),
        type: "short"
      };
    });
    it("Should render short button component", () => {
      const button = renderer.create(<NatButton {...props} />).toJSON();
      expect(button).toMatchSnapshot();
    });
    it("should not have an icon", () => {
      const wrapper = shallow(<NatButton {...props} />);
      expect(wrapper.find(ButtonIcon).length).toBe(0);
    });
  });
  describe("when is outline type", () => {
    let props = {};
    beforeEach(() => {
      props = {
        label: "test",
        onPress: jest.fn(),
        type: "outline"
      };
    });
    it("Should render outline button component", () => {
      const button = renderer.create(<NatButton {...props} />).toJSON();
      expect(button).toMatchSnapshot();
    });
    it("should not have an icon", () => {
      const wrapper = shallow(<NatButton {...props} />);
      expect(wrapper.find(ButtonIcon).length).toBe(0);
    });
  });
});
