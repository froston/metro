import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Header, Footer, UserList, Login  } from './'
import './App.css'

class App extends React.Component {
  render() {
    return <div>
        <Router>
          <div>
            <Header />
            <Route path="/" component={UserList} exact />
            <Route path="/users" component={UserList} exact />
            <Route path="/login" component={Login} exact />
            <Footer />
          </div>
        </Router>
      </div>
  }
}

export default App