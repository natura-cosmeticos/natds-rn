import React from 'react';
import renderer from 'react-test-renderer';
import iconNames from '@naturacosmeticos/natds-icons/dist/natds-icons.json';
import { Icon } from './Icon';
import { sizes } from '../../tokens/sizes';


describe('Icon component', () => {
  it('should render Icon component with all possible icons', () => {
    // Filters undefined keys
    const keys = Object.keys(iconNames).filter(key => key);

    keys.forEach((key) => {
      const wrapper = renderer.create(<Icon name={key}/>);

      expect(wrapper.toJSON()).toMatchSnapshot(`Icon component - name: ${key}`);
    });
  });

  it('should render filled-brand-naturarosacea icon when wrong name is given', () => {
    const wrapper = renderer.create(<Icon name="MOCK-NAME"/>);

    expect(wrapper.toJSON()).toMatchSnapshot('Icon component - filled-brand-naturarosacea');
  });

  it('should render Icon component with all possible sizes', () => {
    Object.entries(sizes).forEach(([key, value]) => {
      const wrapper = renderer.create(<Icon name={value}/>);

      expect(wrapper.toJSON()).toMatchSnapshot(`Icon component - key: ${key} | size: ${value}`);
    });
  });
});
