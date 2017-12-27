import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { users as userApi } from '../api'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: false
    }
  }

  componentDidMount = () => {
    this.load()
  }

  load = () => {
    this.setState({ loading: true })
    userApi.getUsers().then((users) => {
      this.setState({users: users || [], loading: false})
    })
  }

  render() {
    const { users, loading } = this.state;
    return <div>
        <h1>Hello {users.length} Users</h1>
        {users && users.map(user =>
          <ul key={user.id}>
            <li><Link to={`${this.props.match.url}/${user.id}`}>{user.name}</Link></li>
          </ul>,
        )}
        <button onClick={this.load} disabled={loading}>{loading ? 'Loading...' : 'Reload'}</button>
      </div>
  }
}

UserList.propTypes = {
  match: PropTypes.object.isRequired
}

export default UserList
