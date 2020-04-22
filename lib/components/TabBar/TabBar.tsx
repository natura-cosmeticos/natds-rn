import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TabText, TabWrapper, TabButton } from './TabBar.styles';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';

export const TabBar = ({
  navigationState,
  setIndex,
  theme,
  noUppercase,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const getCurrentType = ({ index, status }) => {
    if (status === 'disabled') {
      return 'disabled';
    }
    if (activeTab === index) {
      return 'primary';
    }

    return 'secondary';
  };

  return (
    <TabWrapper>
      {
        navigationState.routes.map(({ status, title }, index) => (
          <TabButton
            key={index}
            onPress={() => {
              setIndex(index);
              setActiveTab(index);
            }}
            theme={theme}
            type={getCurrentType({ index, status })}
            status={status || ''}
            disabled={status === 'disabled'}
          >
            <TabText type={getCurrentType({ index, status })} theme={theme}>
              {noUppercase ? title : title.toUpperCase()}
            </TabText>
          </TabButton>
        ))
      }
    </TabWrapper >
  );
};

TabBar.propTypes = {
  navigationState: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
  noUppercase: PropTypes.bool,
  setIndex: PropTypes.func.isRequired,
  theme: PropTypes.shape({}),
};

TabBar.defaultProps = {
  noUppercase: false,
  theme: ThemeNaturaLight,
};
