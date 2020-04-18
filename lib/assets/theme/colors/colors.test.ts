import { colors } from "./colors";
describe("Colors", () => {
  it("Should return correct hex colors", () => {
    const bw = {
      black: "#000000",
      gray: "#BBBBBB",
      grayDark: "#777777",
      grayDarker: "#333333",
      grayLight: "#EEEEEE"
    };
    const secondary = {
      blue: "#71CACD",
      green: "#B3CA36",
      purple: "#7080A0",
      yellow: "#FFDA1B"
    };
    const primary = {
      brown: "#513528",
      orange: "#FF6B0B",
      white: "#FFFFFF",
      yellow: "#F4AB34"
    };
    expect(colors.bw).toEqual(bw);
    expect(colors.secondary).toEqual(secondary);
    expect(colors.primary).toEqual(primary);
  });
});
