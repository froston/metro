import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return <div>
        <header>
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