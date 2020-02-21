import React from 'react';
import renderer from 'react-test-renderer';

import { NatModal } from './NatModal';

describe('NatModal component and its variants', () => {
  describe('NatModal', () => {
    it('Should match snapshot', () => {
      const props = {
        action: jest.fn(),
        alternative: false,
        buttonText: 'Entendi',
        text: 'Texto de boas vindas',
        title: 'Boas vindas!',
        visible: true,
      };

      const modal = renderer.create(<NatModal {...props} />).toJSON();

      expect(modal).toMatchSnapshot();
    });
  });

  describe('NatModal error', () => {
    const props = {
      action: jest.fn(),
      alternative: true,
      alternativeAction: jest.fn(),
      buttonText: 'enviar link',
      buttonTextAlternative: 'cancelar',
      text: 'texto de descrição do modal',
      title: 'título',
    };

    it('should render the error mode', () => {
      const modalAlternative = renderer.create(<NatModal {...props} alternative />).toJSON();

      expect(modalAlternative).toMatchSnapshot();
    });
  });

  describe('NatModal save', () => {
    const props = {
      action: jest.fn(),
      buttonText: 'ok',
      save: true,
      text: 'não deve aparecer o text',
      title: 'título',
    };

    it('should render the save mode', () => {
      const modalAlternative = renderer.create(<NatModal {...props} save />).toJSON();

      expect(modalAlternative).toMatchSnapshot();
    });
  });
});
