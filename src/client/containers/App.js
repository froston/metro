import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect, 
} from 'react-router-dom'
import { Header, Footer, UserList, Login  } from './'
import { auth } from '../helpers'
import './App.css'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated ? (
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
          <div>
            <Header />
            <Switch>
              <Route path='/login' component={Login} />
              <PrivateRoute path='/' component={UserList} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
  }
}

export default App