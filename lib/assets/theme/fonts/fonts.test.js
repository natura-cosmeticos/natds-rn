import fonts from './fonts';

describe('Fonts', () => {
  it('Should return correct fonts', () => {
    const natura = {
      regular: "font-family: 'NaturaSans-Regular';",
    };

    const roboto = {
      bold: "font-family: 'Roboto'; font-weight: bold;",
      regular: "font-family: 'Roboto';",
    };

    expect(fonts.naturaRegular).toEqual(natura.regular);
    expect(fonts.robotoBold).toEqual(roboto.bold);
    expect(fonts.robotoRegular).toEqual(roboto.regular);
  });
});
