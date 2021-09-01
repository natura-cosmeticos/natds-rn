import React from 'react';

export const SvgCss = props => (
  <div dangerouslySetInnerHTML={{ __html: props.xml }}></div>
);
