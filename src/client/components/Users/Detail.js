import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const Detail = (props) =>
  <div>
    {props.match.url}
  </div>


Detail.propTypes = {
  match: PropTypes.object.isRequired
}

export default Detail
