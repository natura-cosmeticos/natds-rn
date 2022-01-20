import React from 'react'

export const SvgCss = (props) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}
