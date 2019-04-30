import React from 'react';
import renderer from 'react-test-renderer';

import { NatModal } from './NatModal';

describe('NatModal', () => {
  it('Should match snapshot', () => {
    const props = {
      title: 'Boas vindas!',
      text: 'Texto de boas vindas',
      closeAction: jest.fn(),
      buttonText: 'Entendi',
      visible: true,
    };

    const modal = renderer.create(<NatModal {...props} />).toJSON();

    expect(modal).toMatchSnapshot();
  });
});
