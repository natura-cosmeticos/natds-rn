import React from 'react';
import renderer from 'react-test-renderer';

import { NatModalSelect } from './NatModalSelect';

describe('NatModalSelect and its variants', () => {
  describe('NatModalSelect', () => {
    it('Should match snapshot', () => {
      const props = {
        action: jest.fn(),
        alternative: false,
        buttonText: 'Entendi',
        text: 'Texto de boas vindas',
        title: 'Boas vindas!',
        visible: true,
      };

      const modal = renderer.create(<NatModalSelect {...props} />).toJSON();

      expect(modal).toMatchSnapshot();
    });
  });

  describe('NatModalSelect error', () => {
    let props = {};

    beforeEach(() => {
      props = {
        action: jest.fn(),
        alternative: true,
        alternativeAction: jest.fn(),
        buttonText: 'enviar link',
        buttonTextAlternative: 'cancelar',
        text: 'texto de descrição do modal',
        title: 'título',
      };
    });

    it('should render the error mode', () => {
      const modalAlternative = renderer.create(<NatModalSelect {...props} alternative />).toJSON();

      expect(modalAlternative).toMatchSnapshot();
    });
  });

  describe('NatModalSelect save', () => {
    let props = {};

    beforeEach(() => {
      props = {
        action: jest.fn(),
        buttonText: 'ok',
        save: true,
        text: 'não deve aparecer o text',
        title: 'título',
      };
    });

    it('should render the save mode', () => {
      const modalAlternative = renderer.create(<NatModalSelect {...props} save />).toJSON();

      expect(modalAlternative).toMatchSnapshot();
    });
  });
});
