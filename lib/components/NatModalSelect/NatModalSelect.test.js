import React from 'react';
import renderer from 'react-test-renderer';

import { NatModalSelect } from './NatModalSelect';

describe('NatModalSelect', () => {
  it('Should match snapshot', () => {
    const props = {
      title: 'Boas vindas!',
      text: 'Texto de boas vindas',
      action: jest.fn(),
      buttonText: 'Entendi',
      visible: true,
      alternative: false,
    };

    const modal = renderer.create(<NatModalSelect {...props} />).toJSON();

    expect(modal).toMatchSnapshot();
  });
});

describe('NatModalSelect error', () => {
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
    const modalAlternative = renderer.create(<NatModalSelect {...props} alternative />).toJSON();
    expect(modalAlternative).toMatchSnapshot();
  });
});

describe('NatModalSelect save', () => {
  const props = {
    title: 'título',
    text: 'não deve aparecer o text',
    save: true,
    action: jest.fn(),
    buttonText: 'ok',
  };

  it('should render the save mode', () => {
    const modalAlternative = renderer.create(<NatModalSelect {...props} save />).toJSON();
    expect(modalAlternative).toMatchSnapshot();
  });
});
