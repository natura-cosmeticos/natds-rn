
import React from 'react';
import { ContainerRow } from '../../common/HelperComponents/ThemeHelper.styles';
import { Button } from './Button';

export default {
  component: Button,
  parameters: {
    componentSubtitle: 'A usefull button component.',
  },
  title: 'Components|Button',
};

const defaultProps = ({
  onPress: () => {},
  text: 'DEFAULT',
});

export const contained = () => (
  <ContainerRow style={{ padding: 30 }} >
    <Button { ...defaultProps }/>
  </ContainerRow>
);

export const outlined = () => (
  <ContainerRow >
    <Button type="outlined" { ...defaultProps } />
  </ContainerRow>
);

export const text = () => (
  <ContainerRow >
    <Button type="text" { ...defaultProps } />
  </ContainerRow>
);
