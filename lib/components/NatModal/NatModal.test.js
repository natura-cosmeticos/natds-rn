import React from 'react';
import renderer from 'react-test-renderer';

import { NatModal } from './NatModal';

describe('NatModal', () => {
  it('Should match snapshot', () => {
    const props = {
      title: 'Boas vindas!',
      text: 'Texto de boas vindas',
      action: jest.fn(),
      buttonText: 'Entendi',
      visible: true,
      alternative: false,
    };

    const modal = renderer.create(<NatModal {...props} />).toJSON();

    expect(modal).toMatchSnapshot();
  });
});

describe('NatModal error', () => {
  const props = {
    title: 'título',
    text: 'texto de descrição do modal',
    alternative: true,
    action: jest.fn(),
    buttonTextAlternative: 'cancelar',
    buttonText: 'enviar link',
    alternativeAction: jest.fn(),
  };

  it('should render the error mode', () => {
    const modalAlternative = renderer.create(<NatModal {...props} alternative />).toJSON();
    expect(modalAlternative).toMatchSnapshot();
  });
});

describe('NatModal save', () => {
  const props = {
    title: 'título',
    text: 'não deve aparecer o text',
    save: true,
    action: jest.fn(),
    buttonText: 'ok',
  };

  it('should render the save mode', () => {
    const modalAlternative = renderer.create(<NatModal {...props} save />).toJSON();
    expect(modalAlternative).toMatchSnapshot();
  });
});
