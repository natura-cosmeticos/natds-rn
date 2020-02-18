import * as tokens from '../lib/tokens';

describe('Tokens', () => {
  test('It should match tokens snapshot', () => {
    expect(tokens).toMatchSnapshot('Tokens Snapshot');
  });
});
