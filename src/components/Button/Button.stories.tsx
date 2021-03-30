import React from 'react';
import { View } from 'react-native';
import { boolean, select, text as textKnob } from '@storybook/addon-knobs';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Button } from './Button';
import { ButtonTypes, ButtonSizes } from './ButtonBase';

export default {
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons allow users to take actions, and make choices, with a single tap.',
  },
  title: 'Components|Button',
};

const onPress = () => {};

const buttonTypes = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
};
const buttonSizes = {
  large: 'large',
  medium: 'medium',
  small: 'small',
};

const ContainerRow = styled.View`
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${getTheme(theme => getSpacingStandard(theme))};
  width: 100%;
`;

const ContainerColumn = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const All = () => (
  <View>
    <Default />
    <Variants />
    <Size />
    <Icon />
    <Disabled />
  </View>
);

export const Default = () => (
  <StoryContainer title="Default">
    <Button onPress={onPress} text="default" />
  </StoryContainer>
);

export const Variants = () => (
  <StoryContainer title="Variants">
    <Button type="contained" onPress={onPress} text="contained" />
    <Button type="outlined" onPress={onPress} text="outlined" />
    <Button type="text" onPress={onPress} text="text" />
  </StoryContainer>
);

export const Size = () => (
  <StoryContainer title="Sizes">
    <ContainerColumn>
      <ContainerRow>
        <Button onPress={onPress} text="large" size="large" type="contained" />
        <Button onPress={onPress} text="medium" size="medium" type="contained" />
        <Button onPress={onPress} text="small" size="small" type="contained" />
      </ContainerRow>
      <ContainerRow>
        <Button onPress={onPress} text="large" size="large" type="outlined" />
        <Button onPress={onPress} text="medium" size="medium" type="outlined" />
        <Button onPress={onPress} text="small" size="small" type="outlined" />
      </ContainerRow>
      <ContainerRow style={{ marginBottom: 0 }}>
        <Button onPress={onPress} text="large" size="large" type="text" />
        <Button onPress={onPress} text="medium" size="medium" type="text" />
        <Button onPress={onPress} text="small" size="small" type="text" />
      </ContainerRow>
    </ContainerColumn>
  </StoryContainer>
);

export const Icon = () => (
  <StoryContainer title="Icon">
    <ContainerColumn>
      <ContainerRow>
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="left" text="left icon" type="contained" />
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="right" text="right icon" type="contained" />
      </ContainerRow>
      <ContainerRow>
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="left" text="left icon" type="outlined" />
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="right" text="right icon" type="outlined" />
      </ContainerRow>
      <ContainerRow style={{ marginBottom: 0 }}>
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="left" text="left icon" type="text" />
        <Button onPress={onPress} iconName="outlined-default-mockup" iconPosition="right" text="right icon" type="text" />
      </ContainerRow>
    </ContainerColumn>
  </StoryContainer>
);

export const Disabled = () => (
  <StoryContainer title="Disabled">
    <Button disabled type="contained" onPress={onPress} text="default" />
    <Button disabled type="outlined" onPress={onPress} text="default" />
    <Button disabled type="text" onPress={onPress} text="default" />
  </StoryContainer>
);

export const All = () => (
  <View>
    <Default />
    <Variants />
    <Size />
    <Disabled />
  </View>
);

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Button
      onPress={onPress}
      text={textKnob('Text', 'default')}
      type={select('Types', buttonTypes, 'contained') as ButtonTypes}
      size={select('Size', buttonSizes, 'medium') as ButtonSizes}
      disabled={boolean('Disabled', false)}
    />
  </StoryContainer>
);
