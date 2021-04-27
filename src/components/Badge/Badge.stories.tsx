import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Badge } from './Badge';

const BadgesContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const badgeDefinition: string = 'Notify the user by calling their attention to an update or something important';

export default {
  component: Badge,
  parameters: {
    componentSubtitle: badgeDefinition,
  },
  title: 'Components|Badge',
};

export const type = () => (
  <StoryContainer title="Types">
    <BadgesContainer>
      <Badge type="standard" content={9} />
      <View style={{ marginRight: 16 }} />

      <Badge type="dot" />
      <View style={{ marginRight: 16 }} />
    </BadgesContainer>
  </StoryContainer>
);

export const color = () => (
  <StoryContainer title="Colors">
    <BadgesContainer>
      <Badge type="dot" />
      <View style={{ marginRight: 16 }} />

      <Badge type="dot" color="primary" />
      <View style={{ marginRight: 16 }} />

      <Badge type="dot" color="success" />
      <View style={{ marginRight: 16 }} />

      <Badge type="dot" color="secondary" />
    </BadgesContainer>
  </StoryContainer>
);

export const content = () => (
  <StoryContainer title="Content">
    <BadgesContainer>
      <Badge type="standard" content={9} />
      <View style={{ marginRight: 16 }} />

      <Badge type="standard" content={9} color="primary" />
      <View style={{ marginRight: 16 }} />

      <Badge type="standard" content={9} color="success" />
      <View style={{ marginRight: 16 }} />

      <Badge type="standard" content={9} color="secondary" />
    </BadgesContainer>
  </StoryContainer>
);

export const limit = () => (
  <StoryContainer title="Limit">
    <BadgesContainer>
      <Badge type="standard" content={10} limit="9" />
      <View style={{ marginRight: 16 }} />

      <Badge type="standard" content={100} limit="99" />
      <View style={{ marginRight: 16 }} />

      <Badge type="standard" content={10000} />
    </BadgesContainer>
  </StoryContainer>
);

export const all = () => (
  <>
    {type()}
    {color()}
    {content()}
    {limit()}
  </>
);

// export const interactive = () => (
//   <Alert
//     title={textKnob('Text', 'Title')}
//     variant={select('Variant', variants, 'standard') as Variants}
//     type={select('Type', types, 'success') as Types}
//     message={textKnob('Message', alertDefinition)}
//     />
// );
