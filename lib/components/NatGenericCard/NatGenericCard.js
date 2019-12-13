import React from 'react';
import PropTypes from 'prop-types';
import { CustomView } from './NatGenericCard.styles';

export const NatGenericCard = ({
  children,
  height,
  width,
  bgColor,
}) => (
  <CustomView
    height={height}
    width={width}
    bgColor={bgColor}
    style={{
      shadowColor: '#000000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.14, shadowRadius: 1,
    }}
  >
    {children}
  </CustomView>
);


NatGenericCard.propTypes = {
  children: PropTypes.element.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  bgColor: PropTypes.string,
};

NatGenericCard.defaultProps = {
  bgColor: '#FFFFFFFF',
  height: 216,
  width: 363,
};
