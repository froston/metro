import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { users as userApi } from '../../api'

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }

  componentDidMount = () => {
    this.load()
  }

  load = () => {
    userApi.getUserById(1).then((user) => {
      this.setState({user: user || {}})
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <h1>Hello {user.name}</h1>
      </div>
    )
  }
}

export default Detail
