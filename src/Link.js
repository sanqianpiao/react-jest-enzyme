import React from 'React'
import { string } from 'prop-types'

const Link = ({url, title}) => {
  return (
    <a href={url}>{title}</a>
  )
}

Link.propTypes = {
  title: string.isRequired,
  url: string.isRequired
}

export default Link
