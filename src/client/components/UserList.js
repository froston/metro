import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Detail, Schedule } from './Users'
import { users as userApi } from '../api'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: false
    }
  }

  load = () => {
    userApi.getUsers().then((response) => {
      this.setState({users: response.data || []})
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

export default UserList
