import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { NatListItem } from "./NatListItem";
import { HeaderTitle } from "./NatListItem.styles";
describe("NatListItem component", () => {
  it("Should render container component correctly", () => {
    const header = renderer
      .create(<NatListItem title="Title test" onPress={jest.fn()} />)
      .toJSON();
    expect(header).toMatchSnapshot("NatListItem snapshot");
  });
  it("Should render header component with title", () => {
    const wrapper = shallow(
      <NatListItem title="Title test" onPress={jest.fn()} />
    );
    expect(wrapper.find(HeaderTitle).text()).toBe("Title test");
  });
  it("Should throw exception when header component title is empty", () => {
    expect(() => shallow(<NatListItem title="" onPress={jest.fn()} />)).toThrow(
      "Title should not empty string"
    );
  });
});
