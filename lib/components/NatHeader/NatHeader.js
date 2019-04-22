import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { HeaderWrapper, HeaderTitle, HeaderIcon } from './NatHeader.styles';
import { icons } from '../../assets/theme/icons';

export const NatHeader = ({ title, icon }) => {
  if (!title) {
    throw new Error('Title should not empty string');
  }

  return (
    <HeaderWrapper
      accessible
      accessibilityRole="header"
    >
      {icon
        ? (
          <HeaderIcon
            accessibilityRole="ícone"
            accessibilityLabel="navegação para retornar a página anterior"
          >
            <Image source={icons[icon]} />
          </HeaderIcon>
        )
        : null
      }
      <HeaderTitle
        icon={icon}
        accessibilityRole="título"
        accessibilityLabel={`${title}`}
      >
        {title}
      </HeaderTitle>
    </HeaderWrapper>
  );
};

NatHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

NatHeader.defaultProps = {
  icon: '',
};
