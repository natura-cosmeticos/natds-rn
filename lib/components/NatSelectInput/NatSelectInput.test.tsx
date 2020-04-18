import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import icoArrowLeft from '../../assets/icons/ic_arrow_left_white.png';
import { NatSelectInput } from './NatSelectInput';

describe('NatSelectInput component default', () => {
  it('Should render textInput component ', () => {
    const button = renderer
      .create(<NatSelectInput label="teste" onChange={jest.fn()} />)
      .toJSON();

    expect(button).toMatchSnapshot('NatSelectInput snapshot');
  });
  it('Should render textInput with icon and assistive text in component', () => {
    const button = renderer
      .create(
        <NatSelectInput
          label="teste"
          onChange={jest.fn()}
          icon={icoArrowLeft}
          assistiveText="teste"
        />,
      )
      .toJSON();

    expect(button).toMatchSnapshot('NatSelectInput snapshot');
  });
});
