import React from 'react';
import styled from 'styled-components/native';

export type DividerPropTypes = 'inset' | 'middle' | 'full'

export interface DividerProps {
  /**
   * Type can be used to specify layout options
   */
  type?: 'inset' | 'middle' | 'full'
}

const DividerBase = styled.View<DividerProps>`
  background: #eaeaea;
  width: 100%;
  height: 100px;
  `;

/**
 * You can use a `Divider` to in lists or to separate content.
 */
export const Divider = ({ type = 'full' }: DividerProps) => <DividerBase type={type} />;
