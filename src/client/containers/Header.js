import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../helpers'

const AuthButton = withRouter(({ history }) => (
  auth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        auth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

class Header extends React.Component {
  render() {
    return <div>
        <header>
          <AuthButton />
          <div style={{ background: 'silver', width: '100%', height: 50 }}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </div>
        </header>
      </div>
  }
}

export default Header