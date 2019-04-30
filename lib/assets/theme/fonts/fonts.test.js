import { natura, roboto } from './fonts';

describe('Fonts', () => {
  it('Should return correct fonts', () => {
    const naturaMock = {
      regular: 'NaturaSans-Regular',
      bold: 'NaturaSans-Bold',
    };

    const robotoMock = {
      bold: 'Roboto-Bold',
      regular: 'Roboto-Regular',
    };

    expect(natura.regular).toEqual(naturaMock.regular);
    expect(natura.bold).toEqual(naturaMock.bold);
    expect(roboto.bold).toEqual(robotoMock.bold);
    expect(roboto.regular).toEqual(robotoMock.regular);
  });
});
