import React from 'react'

export const Svg = (props) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}

export const Rect = (props) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}

export const Defs = (props) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}

export const LinearGradient = (props) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}

export const Stop = (props) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}
