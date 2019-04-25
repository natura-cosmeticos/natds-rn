import { colors } from './colors';

describe('Colors', () => {
  it('Should return correct hex colors', () => {
    const bw = {
      black: '#000000',
      grayLight: '#EEEEEE',
      gray: '#BBBBBB',
      grayDark: '#777777',
      grayDarker: '#333333',
    };

    const secondary = {
      purple: '#7080A0',
      blue: '#71CACD',
      green: '#B3CA36',
      yellow: '#FFDA1B',
    };

    const primary = {
      orange: '#FF6B0B',
      yellow: '#F4AB34',
      brown: '#513528',
      white: '#FFFFFF',
    };

    expect(colors.bw).toEqual(bw);
    expect(colors.secondary).toEqual(secondary);
    expect(colors.primary).toEqual(primary);
  });
});
