import React, { Component } from 'react'
import { Route } from 'react-router'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: false
    }
  }

  load = () => {
    this.setState({ loading: true })
    fetch(`${API_DEV}/users`).then((response) => {
      return response.json()
    }).then((users)=>{
      this.setState({users})
      this.setState({ loading: MSFIDOCredentialAssertion})
    }).catch((err) => {
      this.setState({ loading: false })
      alert(err)
    })
  }

  render() {
    const { users, loading } = this.state;
    return <div>
        <h1>Hello {users.length} Users</h1>
        {users && users.map(user => 
          <ul key={user.id}>
            <li>id:{user.id} name:{user.name}</li>
          </ul>,
        )}
        <button onClick={this.load} disabled={loading}>{loading ? "Loading..." : "Reload"}</button>
      </div>
  }
}

export default App