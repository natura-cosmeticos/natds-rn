import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { NatList } from "./NatList";
describe("Header component", () => {
  const listItems = [
    {
      iconLeft: { svg: { name: "outlined-navigation-menu" } },
      iconRight: { svg: { name: "outlined-action-autofilter" } },
      id: "1",
      onPress: () => {},
      onPressLeft: () => {},
      onPressRight: () => {},
      title: "Title Text"
    },
    {
      dividerBottom: true,
      iconLeft: false,
      iconRight: { svg: { name: "outlined-action-autofilter" } },
      id: "2",
      onPressLeft: () => {},
      onPressRight: () => {},
      title: "Title Text"
    },
    {
      iconLeft: { svg: { name: "outlined-navigation-menu" } },
      iconRight: false,
      id: "3",
      onPressLeft: () => {},
      onPressRight: () => {},
      title: "Title Text"
    },
    {
      dividerTop: true,
      iconLeft: { svg: { name: "outlined-navigation-menu" } },
      iconRight: false,
      id: "4",
      onPressLeft: () => {},
      onPressRight: () => {},
      title: "Title Text"
    }
  ];
  it("Should render container component correctly", () => {
    const header = renderer.create(<NatList items={listItems} />).toJSON();
    expect(header).toMatchSnapshot("NatList snapshot");
  });
  it("Should render header component with title", () => {
    shallow(<NatList items={listItems} select="1" />);
  });
});
