import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Layout, Login  } from './'
import { auth } from '../helpers'
import './App.css'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends React.Component {
  render() {
    return <div>
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <PrivateRoute path='/' component={Layout} />
          </Switch>
        </Router>
      </div>
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
}

PrivateRoute.defaultProps = {
  location: {}
}

export default App
