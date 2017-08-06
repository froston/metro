import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Header, Footer, UserList, Login  } from './'
import './App.css'

const PrivateRoute = ({ component: Component, path }) => (
  <Route path={path} render={props => (
    false ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

class App extends React.Component {
  render() {
    return <div>
        <Router>
          <div>
            <Header />
            <PrivateRoute path="/" component={UserList} exact />
            <PrivateRoute path="/users" component={UserList} exact />
            <Route path="/login" component={Login} exact />
            <Footer />
          </div>
        </Router>
      </div>
  }
}

export default App