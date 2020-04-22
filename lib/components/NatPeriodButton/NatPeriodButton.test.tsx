import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { TouchableNativeFeedback, Platform } from 'react-native';
import { NatPeriodButton } from './NatPeriodButton';
import {
  Title,
  CheckedIcon,
  CustomTouchableOpacity,
} from './NatPeriodButton.styles';

const setPlatform = (platform) => {
  Object.defineProperty(Platform, 'OS', {
    get: jest.fn(() => platform),
  });
};

describe('NatPeriodButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should render the component correctly', () => {
    const PeriodButton = renderer
      .create(<NatPeriodButton onSelect={jest.fn()} />)
      .toJSON();

    expect(PeriodButton).toMatchSnapshot();
  });
  it('Should simulate the select click on the component on the Android platform', () => {
    setPlatform('android');
    const onSelectEvent = jest.fn();
    const wrapper = shallow(<NatPeriodButton onSelect={onSelectEvent} />);

    wrapper
      .find(TouchableNativeFeedback)
      .getElement()
      .props.onPress();
    expect(onSelectEvent.mock.calls.length).toBe(1);
  });
  it('Should simulate the select click on the component on the iOS platform', () => {
    setPlatform('ios');
    const onSelectEvent = jest.fn();
    const wrapper = shallow(<NatPeriodButton onSelect={onSelectEvent} />);

    wrapper
      .find(CustomTouchableOpacity)
      .getElement()
      .props.onPress();
    expect(onSelectEvent.mock.calls.length).toBe(1);
  });
  it('Should the correct styling properties when selected', () => {
    const wrapper = shallow(<NatPeriodButton selected onSelect={jest.fn()} />);

    expect(wrapper.find(CheckedIcon).exists()).toBeTruthy();
  });
  it('Should render header component with title', () => {
    const wrapper = shallow(
      <NatPeriodButton title="Title test" onSelect={jest.fn()} />,
    );

    expect(wrapper.find(Title).text()).toBe('Title test');
  });
  it('Should throw exception when the onSelect property is not passed to the component', () => {
    // @ts-ignore
    expect(() => shallow(<NatPeriodButton />)).toThrow(
      'Period Button needs an onSelect property to be passed to the component.',
    );
  });
});
