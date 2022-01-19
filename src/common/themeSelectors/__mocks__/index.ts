const themeSelectors = jest.requireActual('..')

const mockSelectors = Object
  .keys(themeSelectors)
  .reduce((acc, selector) => ({
    ...acc,
    [selector]: jest.fn()
  }), {})

module.exports = mockSelectors
