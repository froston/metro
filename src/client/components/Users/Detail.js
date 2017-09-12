import React, { Component } from 'react'
import { Route } from 'react-router-dom'

const Detail = (props) =>
  <div>
    {props.match.url}
  </div>

export default Detail
