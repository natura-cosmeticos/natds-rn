import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components/native";
import { shallow } from "enzyme";
import { View } from "react-native";
import { Avatar, TypeElement } from "./Avatar";
describe("Avatar component", () => {
  it("should render correctly", () => {
    const button = renderer
      .create(
        <View>
          <Avatar name="MP" size={1} type="letter" />
          <Avatar name="MP" size={2} type="letter" />
          <Avatar name="MP" size={3} type="letter" />
          <Avatar name="MP" size={4} type="letter" />
          <Avatar name="MP" size={5} type="letter" />
          <Avatar size={1} type="anonymous" />
          <Avatar size={2} type="anonymous" />
          <Avatar size={3} type="anonymous" />
          <Avatar size={4} type="anonymous" />
          <Avatar size={5} type="anonymous" />
          <Avatar
            size={1}
            type="image"
            uri="https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d"
          />
          <Avatar
            size={2}
            type="image"
            uri="https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d"
          />
          <Avatar
            size={3}
            type="image"
            uri="https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d"
          />
          <Avatar
            size={4}
            type="image"
            uri="https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d"
          />
          <Avatar
            size={5}
            type="image"
            uri="https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d"
          />
        </View>
      )
      .toJSON();
    expect(button).toMatchSnapshot("Avatar snapshot");
  });
  it("should render TypeElement and pass the correct name", () => {
    const wrapper = shallow(<Avatar name="MP" type="letter" size={2} />);
    expect(wrapper.containsMatchingElement(<TypeElement />)).toEqual(true);
    expect(wrapper.find(TypeElement).prop("name")).toEqual("MP");
  });
  it("should pass the correct uri to TypeElement", () => {
    const wrapper = shallow(
      <Avatar
        name="MP"
        type="image"
        size={2}
        uri="https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d"
      />
    );
    expect(wrapper.containsMatchingElement(<TypeElement />)).toEqual(true);
    expect(wrapper.find(TypeElement).prop("uri")).toEqual(
      "https://c.pxhere.com/photos/52/58/photo-1412284.jpg!d"
    );
  });
});
