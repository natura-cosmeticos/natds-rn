import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { NatHeader } from "./NatHeader";
import { HeaderTitle } from "./NatHeader.styles";
describe("NatHeader component", () => {
  it("Should render container component correctly", () => {
    const header = renderer
      .create(<NatHeader title="Title test" onPress={jest.fn()} />)
      .toJSON();
    expect(header).toMatchSnapshot("NatHeader snapshot");
  });
  it("Should render header component with title", () => {
    const wrapper = shallow(
      <NatHeader title="Title test" onPress={jest.fn()} />
    );
    expect(wrapper.find(HeaderTitle).text()).toBe("Title test");
  });
  it("Should throw exception when header component title is empty", () => {
    expect(() => shallow(<NatHeader title="" onPress={jest.fn()} />)).toThrow(
      "Title should not empty string"
    );
  });
});
