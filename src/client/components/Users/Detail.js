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
    const { id } = this.props.match.params
    userApi.getUserById(id).then((user) => {
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

Detail.propTypes = {
  match: PropTypes.object.isRequired
}

export default Detail
