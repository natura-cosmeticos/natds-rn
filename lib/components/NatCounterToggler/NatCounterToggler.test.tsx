import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { NatCounterToggler } from './NatCounterToggler';

describe('NatCounterToggler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should render the component correctly', () => {
    const CounterToggler = renderer.create(<NatCounterToggler />).toJSON();

    expect(CounterToggler).toMatchSnapshot();
  });
  it('Should simulate the decrease click on the component', () => {
    const onDecreaseEvent = jest.fn();
    const wrapper = shallow(<NatCounterToggler onDecrease={onDecreaseEvent} />);

    wrapper.getElement().props.children[0].props.onPress();
    expect(onDecreaseEvent.mock.calls.length).toBe(1);
  });
  it('Should simulate the increase click on the component', () => {
    const onIncreaseEvent = jest.fn();
    const wrapper = shallow(<NatCounterToggler onIncrease={onIncreaseEvent} />);

    wrapper.getElement().props.children[2].props.onPress();
    expect(onIncreaseEvent.mock.calls.length).toBe(1);
  });
  it('Should limit the counter on the component and deny further increment upon htting the maximum limit', () => {
    let counter = 1;
    const onIncrease = () => {
      counter += 1;
    };
    const wrapper = shallow(
      <NatCounterToggler
        counter={counter}
        min={1}
        max={2}
        onIncrease={onIncrease}
      />,
    );

    for (let index = 0; index < 3; index += 1) {
      // add button
      wrapper.getElement().props.children[2].props.onPress();
    }
    // add button
    expect(wrapper.getElement().props.children[2].props.disabled).toBe(true);
  });
  it('Should limit the counter on the component and deny further decrement upon htting the minimum limit', () => {
    let counter = 2;
    const onDecrease = () => {
      counter -= 1;
      // eslint-disable-next-line no-use-before-define
      wrapper.update();
    };
    const onIncrease = () => {
      counter += 1;
      // eslint-disable-next-line no-use-before-define
      wrapper.update();
    };
    const wrapper = shallow(
      <NatCounterToggler
        counter={counter}
        min={1}
        max={4}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      />,
    );

    for (let index = 0; index < 3; index += 1) {
      // add button
      wrapper.getElement().props.children[2].props.onPress();
    }
    for (let index = 0; index < 11; index += 1) {
      // decrease button
      wrapper.getElement().props.children[0].props.onPress();
    }
    // decrease button
    expect(wrapper.getElement().props.children[0].props.disabled).toBe(true);
  });
});
