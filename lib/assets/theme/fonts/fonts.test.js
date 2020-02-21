import { natura, roboto, sanfrancisco } from './fonts';

describe('Fonts', () => {
  it('Should return correct fonts', () => {
    const naturaMock = {
      bold: 'NaturaSans-Bold',
      regular: 'NaturaSans-Regular',
    };

    const robotoMock = {
      bold: 'Roboto-Bold',
      regular: 'Roboto-Regular',
    };

    const sanfranciscoMock = {
      bold: 'System',
      regular: 'System',
    };

    expect(natura.regular).toEqual(naturaMock.regular);
    expect(natura.bold).toEqual(naturaMock.bold);
    expect(roboto.bold).toEqual(robotoMock.bold);
    expect(roboto.regular).toEqual(robotoMock.regular);
    expect(sanfrancisco.bold).toEqual(sanfranciscoMock.bold);
    expect(sanfrancisco.regular).toEqual(sanfranciscoMock.regular);
  });
});
